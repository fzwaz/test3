/**
 * Zoho CRM integration helpers — Section 6 spec
 * Every form hits Zoho via WebToLeadForm; on failure we fall back to email + queue retry.
 * Never surface CRM failure to the visitor.
 */

export type LeadModule = "Leads" | "Deals" | "Contacts";
export type ResolvedSource = { leadSource: string; module: LeadModule; productInterest?: string };

/**
 * Resolve Lead Source + Zoho module from request body.
 * Client may pass explicit `leadSource` or `source`; otherwise we infer from reachOutFor / fields.
 */
export function resolveLeadSource(body: Record<string, unknown>): ResolvedSource {
  const src = String((body.source as string) || (body.leadSource as string) || "").toLowerCase();
  const reachOutFor = String((body.reachOutFor as string) || "");
  const selectedProduct = String((body.selectedProduct as string) || "");
  const selectedService = String((body.selectedService as string) || "");

  // Explicit overrides
  if (src.includes("risk-bite") || src.includes("riskbite") || body.Risk_Bite_Score !== undefined) {
    return { leadSource: "Website – Risk Bite", module: "Leads", productInterest: "Compliance/GRC" };
  }
  if (src.includes("dmarc") || body.Domain !== undefined || body.spf !== undefined) {
    return { leadSource: "Website – DMARC Check", module: "Leads", productInterest: "DMARC" };
  }
  if (src.includes("applypartner") || src.includes("partner") || selectedService.toLowerCase().includes("partner")) {
    return { leadSource: "Website – Partner Application", module: "Deals", productInterest: "Compass" };
  }
  if (src.includes("compass-trial") || src.includes("try-compass") || src.includes("try_compass")) {
    return { leadSource: "Website – Compass Trial", module: "Leads", productInterest: "Compass" };
  }
  if (src.includes("grc") || src.includes("self-serve") || body.frameworksSelected !== undefined || body.Frameworks_Selected !== undefined) {
    // Build Your Own GRC checkout → Contacts + Deal (Closed Won)
    return { leadSource: "Website – Self-serve Signup", module: "Contacts", productInterest: "Compliance/GRC" };
  }
  if (src.includes("newsletter") || selectedService.toLowerCase().includes("newsletter")) {
    return { leadSource: "Website – Newsletter", module: "Contacts" };
  }
  if (reachOutFor === "Product Demo") {
    // Distinguish Compass trial already handled above; remaining demos are Demo Request
    const pi = selectedProduct || (body.Product_Interest as string) || "Pulse";
    return { leadSource: "Website – Demo Request", module: "Leads", productInterest: pi };
  }
  // Default Contact
  if (reachOutFor === "Service Inquiry" || src.includes("contact") || body.requirements !== undefined) {
    return { leadSource: "Website – Contact", module: "Leads", productInterest: selectedService || selectedProduct || "Compliance/GRC" };
  }
  // Fallback
  return { leadSource: "Website – Contact", module: "Leads" };
}

export function formatDescription(body: Record<string, unknown>, leadSource: string): string {
  const lines: string[] = [`Lead Source: ${leadSource}`];
  const push = (label: string, val: unknown) => {
    if (val !== undefined && val !== null && String(val).trim() !== "") lines.push(`${label}: ${String(val)}`);
  };

  push("Inquiry Type", body.reachOutFor);
  push("Selected Product", body.selectedProduct);
  push("Selected Service", body.selectedService);
  push("Custom Service", body.customService);
  push("Product Interest", body.Product_Interest || body.productInterest);
  push("Job Title", body.jobTitle);
  push("Company Size", body.Company_Size || body.companySize);
  push("Industry", body.Industry || body.industry);
  push("Region", body.Region || body.region);
  push("Phone", body.phoneNumber || body.Mobile);
  push("Company", body.companyName || body.Company);
  push("Website", body.website);
  push("Company Type", body.companyType);
  push("Partnership Intent", body.partnershipIntent);
  push("Frameworks Selected", (() => {
    const v = body.frameworksSelected || body.Frameworks_Selected;
    return Array.isArray(v) ? (v as string[]).join(", ") : v;
  })());
  push("Risk Bite Score", body.Risk_Bite_Score ?? body.riskBiteScore);
  push("Risk Bite Exposure Range", body.Risk_Bite_Exposure_Range || body.riskBiteExposure);
  push("Domain", body.Domain || body.domain || body.checkedDomain);
  push("SPF", body.SPF || body.spf);
  push("DKIM", body.DKIM || body.dkim);
  push("DMARC", body.DMARC || body.dmarc);
  push("Policy", body.policy);
  push("Is Partner Application", body.Is_Partner_Application ?? body.isPartnerApplication);
  push("Source Detail", body.source);
  push("Message / Requirements", body.requirements || body.message || body.Description);

  // Append raw JSON for debugging
  lines.push("", "---- Raw Payload ----", JSON.stringify(body, null, 2));
  return lines.join("\n");
}

/**
 * Build URLSearchParams for Zoho WebToLeadForm.
 * Includes standard fields + Lead Source + suggested custom fields.
 */
export function buildZohoParams(body: Record<string, unknown>, leadSource: string): URLSearchParams {
  const fullName = String(body.fullName || body["First Name"] || "").trim() || "Unknown";
  const workEmail = String(body.workEmail || body.Email || "").trim();
  const companyName = String(body.companyName || body.Company || "Unknown Company").trim();
  const phoneNumber = String(body.phoneNumber || body.Mobile || "").trim();

  const nameParts = fullName.split(" ");
  const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(" ") : fullName;
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : ".";

  const description = formatDescription(body, leadSource);

  const params = new URLSearchParams({
    xnQsjsdp: process.env.ZOHO_XNQSJSDP || "d6d6b7fae70fc8baa9a5c7d5c8a6766269bcacec13a7b3c04b2158b5e62a4b18",
    xmIwtLD: process.env.ZOHO_XMIWTLD || "0310993fc13611028fff606002ae40523f380dd0fac2177b6a6dc9361e45c3e37d53ef6d3d03d69045d417dac8edc386",
    actionType: process.env.ZOHO_ACTION_TYPE || "TGVhZHM=",
    returnURL: "null",
    aG9uZXlwb3Q: "",
    zc_gad: "",
    "First Name": firstName,
    "Last Name": lastName,
    Email: workEmail,
    Company: companyName,
    Mobile: phoneNumber || "N/A",
    Description: description,
    "Lead Source": leadSource,
  });

  // Suggested custom fields — sent as-is; Zoho will map if field API name matches
  const maybeAdd = (zohoKey: string, val: unknown) => {
    if (val !== undefined && val !== null && String(val).trim() !== "") params.set(zohoKey, String(val));
  };

  const productInterest = (body.Product_Interest || body.productInterest || body.selectedProduct || body.selectedService || "") as string;
  if (productInterest) maybeAdd("Product_Interest", productInterest);

  const score = body.Risk_Bite_Score ?? body.riskBiteScore;
  if (score !== undefined) maybeAdd("Risk_Bite_Score", score);

  const range = body.Risk_Bite_Exposure_Range || body.riskBiteExposure;
  if (range) maybeAdd("Risk_Bite_Exposure_Range", range);

  const frameworks = body.Frameworks_Selected || body.frameworksSelected;
  if (frameworks) maybeAdd("Frameworks_Selected", Array.isArray(frameworks) ? (frameworks as string[]).join(";") : String(frameworks));

  const companySize = body.Company_Size || body.companySize;
  if (companySize) maybeAdd("Company_Size", companySize);

  const industry = body.Industry || body.industry;
  if (industry) maybeAdd("Industry", industry);

  const region = body.Region || body.region;
  if (region) maybeAdd("Region", region);

  const isPartner = body.Is_Partner_Application ?? body.isPartnerApplication;
  if (isPartner !== undefined) maybeAdd("Is_Partner_Application", isPartner ? "true" : "false");

  // DMARC / RiskBite specifics
  const domain = body.Domain || body.domain || body.checkedDomain;
  if (domain) maybeAdd("Domain", domain);

  return params;
}

export async function sendToZoho(params: URLSearchParams, timeoutMs = 8000): Promise<{ ok: boolean; status: number; body: string }> {
  const endpoint = process.env.ZOHO_ENDPOINT || "https://crm.zoho.in/crm/WebToLeadForm";
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      cache: "no-cache",
      signal: controller.signal,
    });
    const text = await res.text().catch(() => "");
    return { ok: res.ok, status: res.status, body: text.slice(0, 2000) };
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return { ok: false, status: 0, body: `Zoho fetch failed: ${msg}` };
  } finally {
    clearTimeout(t);
  }
}

export function formatFallbackEmailBody(body: Record<string, unknown>, leadSource: string, zohoError: string): string {
  const header = [
    `Subject: [FALLBACK LEAD] ${leadSource} — Zoho delivery failed`,
    `Lead Source: ${leadSource}`,
    `Zoho Error: ${zohoError}`,
    `Timestamp: ${new Date().toISOString()}`,
    `Sales Inbox: ${process.env.SALES_INBOX || "growth@risknox.ai"}`,
    "",
    "---- Lead Payload (JSON) ----",
    JSON.stringify(body, null, 2),
    "",
    "---- Human-readable Description ----",
    formatDescription(body, leadSource),
  ].join("\n");
  return header;
}

// Simple in-memory retry queue (best-effort; serverless will not persist across cold starts, but logs remain)
type RetryItem = { body: Record<string, unknown>; leadSource: string; attempts: number };
const retryQueue: RetryItem[] = [];

export function queueRetry(body: Record<string, unknown>, leadSource: string) {
  retryQueue.push({ body, leadSource, attempts: 0 });
  console.warn(`[Zoho] Queued retry for ${leadSource}. Queue size: ${retryQueue.length}`);
  // Fire-and-forget retry after 30s, up to 3 attempts
  setTimeout(async () => {
    const item = retryQueue.shift();
    if (!item) return;
    const params = buildZohoParams(item.body, item.leadSource);
    const res = await sendToZoho(params);
    if (!res.ok && item.attempts < 2) {
      retryQueue.push({ ...item, attempts: item.attempts + 1 });
      console.warn(`[Zoho] Retry ${item.attempts + 1} failed for ${item.leadSource} (${res.status}). Re-queued.`);
    } else if (res.ok) {
      console.log(`[Zoho] Retry succeeded for ${item.leadSource}`);
    }
  }, 30_000);
}

export async function sendFallbackEmail(body: Record<string, unknown>, leadSource: string, zohoError: string): Promise<void> {
  const inbox = process.env.SALES_INBOX || "growth@risknox.ai";
  const subject = `[FALLBACK LEAD] ${leadSource} — ${String(body.workEmail || body.Email || body.companyName || "Unknown")}`;
  const text = formatFallbackEmailBody(body, leadSource, zohoError);

  // If SMTP is configured and `nodemailer` is installed, try to send via SMTP.
  // Install with: npm install nodemailer @types/nodemailer
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  if (smtpHost && smtpUser && smtpPass) {
    try {
      // @ts-ignore — optional dependency
      const nodemailer = await import("nodemailer");
      const transporter = (nodemailer as unknown as { createTransport: (opts: unknown) => { sendMail: (o: unknown) => Promise<unknown> } }).createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: { user: smtpUser, pass: smtpPass },
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM || `Risknox Site <${smtpUser}>`,
        to: inbox,
        subject,
        text,
      });
      console.log(`[Zoho] Fallback email sent to ${inbox} for ${leadSource}`);
      return;
    } catch (e) {
      console.error("[Zoho] Fallback email via SMTP failed (is nodemailer installed?):", e);
    }
  }

  // Fallback to transactional email endpoint if configured (e.g., Resend, SendGrid)
  const emailEndpoint = process.env.FALLBACK_EMAIL_ENDPOINT;
  if (emailEndpoint) {
    try {
      await fetch(emailEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: inbox, subject, text, leadSource, body }),
      });
      console.log(`[Zoho] Fallback email POSTed to endpoint for ${leadSource}`);
      return;
    } catch (e) {
      console.error("[Zoho] Fallback email endpoint failed:", e);
    }
  }

  // Last resort: log so no lead is silently lost (visible in server logs / dev)
  console.error(`[Zoho] FALLBACK LEAD — would email ${inbox}:\n${text.slice(0, 4000)}`);
  queueRetry(body, leadSource);
}
