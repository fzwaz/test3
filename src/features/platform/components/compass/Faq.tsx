"use client";

import React from "react";
import PlatformFaq from "@/components/platform-faq";

const FAQS = [
  {
    question: "What is Compass?",
    answer:
      "Compass is Risknox's cyber underwriting intelligence platform, designed to help insurance professionals assess cyber risk and make more informed underwriting decisions.",
  },
  {
    question: "Who is Compass built for?",
    answer:
      "Compass is designed for cyber insurance carriers, underwriters, MGAs, brokers, and other professionals involved in evaluating cyber insurance risk.",
  },
  {
    question: "How does Compass improve cyber underwriting?",
    answer:
      "Compass adds technical risk and exposure intelligence to the underwriting process, helping teams develop a clearer understanding of the applicant beyond static, self-reported information.",
  },
  {
    question: "Can Compass support policy decisions?",
    answer:
      "Compass provides structured risk intelligence that can support underwriting decisions involving coverage, limits, deductibles, pricing, and risk requirements.",
  },
  {
    question: "Does Compass only work before a policy is issued?",
    answer:
      "No. Cyber risk continues to evolve after binding. Compass is designed to support ongoing visibility into meaningful policyholder risk changes throughout the policy lifecycle. You can explore Compass directly at compass.risknox.ai.",
  },
];

export default function CompassFaq() {
  return <PlatformFaq eyebrow="Questions about Compass" title="Understanding Compass." faqs={FAQS} />;
}
