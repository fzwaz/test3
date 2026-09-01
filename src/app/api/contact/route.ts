import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName = "",
      workEmail = "",
      companyName = "",
      jobTitle = "",
      phoneNumber = "",
      companySize = "",
      reachOutFor = "Product Demo",
      selectedProduct = "Pulse",
      selectedService = "Penetration Testing & VAPT",
      customService = "",
      requirements = "",
      honeypot = "",
    } = body;

    // 1. Client Honeypot Check (Trap automated spam bots)
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Request processed" });
    }

    // 2. Input Validation
    if (!fullName || !workEmail || !companyName) {
      return NextResponse.json(
        { error: "Full Name, Work Email, and Company Name are required fields." },
        { status: 400 }
      );
    }

    // Split Full Name into First Name & Last Name for Zoho CRM
    const nameParts = fullName.trim().split(" ");
    const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(" ") : fullName.trim();
    const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : ".";

    const itemRequested =
      reachOutFor === "Product Demo"
        ? `Selected Product: ${selectedProduct}`
        : `Selected Service: ${selectedService}${customService ? ` (Custom: ${customService})` : ""}`;

    // Format detailed description for Zoho Lead notes
    const descriptionText = [
      `Inquiry Type: ${reachOutFor}`,
      itemRequested,
      jobTitle ? `Job Title / Designation: ${jobTitle}` : null,
      companySize ? `Company Size: ${companySize}` : null,
      phoneNumber ? `Phone Number: ${phoneNumber}` : null,
      requirements ? `Message / Requirements:\n${requirements}` : null,
    ]
      .filter(Boolean)
      .join("\n\n");

    // 3. Construct URLSearchParams payload matching Zoho CRM WebToLead requirements
    const zohoParams = new URLSearchParams({
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
      Description: descriptionText,
    });

    const zohoEndpoint = process.env.ZOHO_ENDPOINT || "https://crm.zoho.in/crm/WebToLeadForm";

    // 4. Send request to Zoho CRM
    const response = await fetch(zohoEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: zohoParams.toString(),
      cache: "no-cache",
    });

    if (!response.ok) {
      console.error("Zoho HTTP error:", response.status, response.statusText);
      return NextResponse.json(
        { error: "Failed to submit lead to CRM. Please try again later." },
        { status: 502 }
      );
    }

    const responseData = await response.json().catch(() => null);
    console.log("Zoho API response:", responseData);

    return NextResponse.json({ success: true, message: "Lead submitted successfully" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
