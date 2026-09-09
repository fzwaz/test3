"use client";

import React from "react";
import PlatformFaq from "@/components/platform-faq";

const FAQS = [
  {
    question: "What is Accord?",
    answer:
      "Accord is Risknox's AI governance platform designed to help organisations understand their AI landscape, manage AI-related risks, and establish structured governance processes.",
  },
  {
    question: "Why does AI governance matter?",
    answer:
      "As organisations adopt more AI systems, governance helps establish visibility, accountability, risk management, and responsible oversight.",
  },
  {
    question: "What frameworks can Accord support?",
    answer:
      "Accord can support organisations working with AI governance frameworks and requirements such as the EU AI Act, NIST AI RMF, and ISO/IEC 42001.",
  },
  {
    question: "Who is Accord designed for?",
    answer:
      "Accord is designed for AI teams, security leaders, risk and compliance teams, technology leaders, and organisations deploying AI across their operations.",
  },
  {
    question: "How does Accord help organisations manage AI risk?",
    answer:
      "Accord helps organisations identify AI systems, assess relevant risks, assign ownership, manage governance activities, and maintain supporting documentation. You can explore Accord directly at accord.risknox.ai.",
  },
];

export default function AccordFaq() {
  return <PlatformFaq eyebrow="FAQ" title="Understanding Accord." faqs={FAQS} />;
}
