"use client";

import React from "react";
import PlatformFaq from "@/components/platform-faq";

const FAQS = [
  {
    question: "What is Fortress?",
    answer:
      "Fortress is Risknox's cyber risk intelligence platform that helps organisations understand technical cyber exposure in measurable business terms.",
  },
  {
    question: "How does Fortress help prioritise cyber risks?",
    answer:
      "Fortress adds context to cyber exposure, helping teams focus on the risks with the greatest potential impact.",
  },
  {
    question: "Who is Fortress built for?",
    answer:
      "Fortress is designed for security leaders, risk teams, executives, boards, and organisations that need a clearer understanding of cyber risk.",
  },
  {
    question: "Can Fortress work with existing security tools?",
    answer:
      "Fortress is designed to complement your existing security environment by bringing relevant risk intelligence into a clearer decision-making view.",
  },
  {
    question: "How can I access Fortress?",
    answer: "Explore the Fortress platform directly at fortress.risknox.ai.",
  },
];

export default function FortressFaq() {
  return <PlatformFaq eyebrow="Questions, answered" title="Understanding Fortress." faqs={FAQS} />;
}
