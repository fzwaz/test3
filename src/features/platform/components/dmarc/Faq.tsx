"use client";

import React from "react";
import PlatformFaq from "@/components/platform-faq";

const FAQS = [
  {
    question: "What is DMARC Monitoring?",
    answer:
      "DMARC Monitoring helps organisations analyse email authentication activity, understand legitimate sending sources, and identify unauthorised attempts to send email using their domain.",
  },
  {
    question: "What is the difference between SPF, DKIM and DMARC?",
    answer:
      "SPF identifies authorised sending servers, DKIM helps verify message authenticity through cryptographic signatures, and DMARC applies policy and reporting around authentication alignment.",
  },
  {
    question: "Can DMARC Monitoring identify unauthorised senders?",
    answer:
      "Yes. DMARC Monitoring analyses sending sources to isolate rogue or unauthorised mail servers attempting domain impersonation.",
  },
  {
    question: "Should we immediately set DMARC to p=reject?",
    answer:
      "Not necessarily. Organisations should first understand their legitimate email sources before enforcing strict policies — a guided transition from p=none toward p=reject avoids disrupting legitimate business mail.",
  },
  {
    question: "Does DMARC help protect against phishing and impersonation?",
    answer:
      "DMARC enforcement can help reduce unauthorised use of a domain in email by applying policy to messages that fail authentication checks, making it an important layer in domain anti-spoofing protection.",
  },
];

export default function DmarcFaq() {
  return <PlatformFaq eyebrow="FAQ" title="Questions about DMARC Monitoring." faqs={FAQS} />;
}
