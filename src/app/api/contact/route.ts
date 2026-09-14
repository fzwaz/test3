import { NextResponse } from "next/server";
import { resolveLeadSource, buildZohoParams, sendToZoho, sendFallbackEmail } from "@/lib/zoho";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  // 1. Honeypot — silently succeed
  const honeypot = String((body.honeypot as string) || (body.aG9uZXlwb3Q as string) || (body.website_hp as string) || "").trim();
  if (honeypot) {
    return NextResponse.json({ success: true, message: "Request processed" });
  }

  // 2. Minimal validation — allow each form's required fields to pass individually
  // Risk Bite / DMARC / Try Compass only need workEmail (+ company/name where gated)
  // GRC checkout needs company + email; Contact needs fullName + workEmail + companyName
  const workEmail = String((body.workEmail as string) || (body.Email as string) || "").trim();
  const companyName = String((body.companyName as string) || (body.Company as string) || "").trim();
  const fullName = String((body.fullName as string) || (body["First Name"] as string) || "").trim();
  const sourceTag = String((body.source as string) || "").toLowerCase();

  // For generic forms, require at least workEmail OR fullName — let specific forms validate further client-side
  const isRiskBite = sourceTag.includes("risk") || body.Risk_Bite_Score !== undefined;
  const isDmarc = sourceTag.includes("dmarc") || body.Domain !== undefined || body.domain !== undefined;
  const isTryCompass = sourceTag.includes("compass") || sourceTag.includes("try-compass");
  const isPartner = sourceTag.includes("partner");
  const isGrc = sourceTag.includes("grc") || sourceTag.includes("self-serve");
  const isGenericContact = !isRiskBite && !isDmarc && !isTryCompass && !isPartner && !isGrc;

  if (isGenericContact && (!fullName || !workEmail || !companyName)) {
    return NextResponse.json({ error: "Full Name, Work Email, and Company Name are required." }, { status: 400 });
  }
  if ((isRiskBite || isDmarc) && !workEmail) {
    return NextResponse.json({ error: "Work email is required." }, { status: 400 });
  }
  if (isTryCompass && (!fullName && !(body as { name?: string }).name) && !workEmail) {
    return NextResponse.json({ error: "Name and work email are required." }, { status: 400 });
  }

  // Normalize aliases so resolveLeadSource sees consistent keys
  // RiskBite may send `score` / `exposureRange` — map to canonical custom fields
  if (body.riskBiteScore !== undefined && body.Risk_Bite_Score === undefined) body.Risk_Bite_Score = body.riskBiteScore;
  if (body.riskBiteExposure !== undefined && body.Risk_Bite_Exposure_Range === undefined) body.Risk_Bite_Exposure_Range = body.riskBiteExposure;
  if (body.frameworksSelected !== undefined && body.Frameworks_Selected === undefined) body.Frameworks_Selected = body.frameworksSelected;

  const { leadSource, module } = resolveLeadSource(body);

  // Tag body with resolved source for downstream logging / fallback email
  (body as Record<string, unknown>)._resolvedLeadSource = leadSource;
  (body as Record<string, unknown>)._resolvedModule = module;

  // Enrich custom fields for CRM
  if (isPartner) (body as Record<string, unknown>).Is_Partner_Application = true;

  const params = buildZohoParams(body, leadSource);

  // 3. Send to Zoho with timeout; on failure, fallback to email + queue retry
  const zohoRes = await sendToZoho(params);

  if (!zohoRes.ok) {
    console.error(`[Zoho] ${leadSource} delivery failed (${zohoRes.status}): ${zohoRes.body.slice(0, 500)}`);
    // Spec: fallback to email to sales alias so no lead is ever silently lost, and queue retry
    await sendFallbackEmail(body, leadSource, `HTTP ${zohoRes.status}: ${zohoRes.body}`);
    // IMPORTANT: never surface CRM failure to the visitor — confirm success on-screen regardless
    return NextResponse.json({
      success: true,
      message: "Request received. Our team will be in touch within 24 hours.",
      fallback: true,
      module,
      leadSource,
    });
  }

  // Optional: handle Deals/Contacts via CRM REST API if credentials are present
  // WebToLeadForm only creates Leads; for Deals/Contacts we log and rely on workflow in Zoho to convert.
  // If ZOHO_REFRESH_TOKEN etc. are set, you could create Deal/Contact via v2 API here.
  // We keep the WebToLead success as authoritative for now to avoid double-creation.

  console.log(`[Zoho] ${leadSource} → ${module} delivered:`, zohoRes.body.slice(0, 300));

  return NextResponse.json({ success: true, message: "Lead submitted successfully", module, leadSource });
}
