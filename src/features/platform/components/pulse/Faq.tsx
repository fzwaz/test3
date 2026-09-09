"use client";

import React from "react";
import PlatformFaq from "@/components/platform-faq";

const FAQS = [
  {
    question: "What is Pulse?",
    answer:
      "Pulse is Risknox's continuous monitoring and detection platform, providing ongoing visibility, anomaly detection, intelligent alerting, and prioritised security signals.",
  },
  {
    question: "What does Pulse monitor?",
    answer:
      "Pulse is designed to provide visibility across connected infrastructure, including internet-facing assets, cloud workloads, APIs, domains, and other relevant security telemetry.",
  },
  {
    question: "How does Pulse reduce alert fatigue?",
    answer:
      "Pulse helps filter and prioritise security signals, bringing greater attention to high-risk activity and attack paths that require action.",
  },
  {
    question: "Can Pulse detect unknown or emerging threats?",
    answer:
      "Pulse uses AI-driven analysis and threat intelligence correlation to identify anomalies, unusual behaviour, credential exposures, and emerging threat signals.",
  },
  {
    question: "How do I access Pulse?",
    answer:
      "You can explore Pulse directly at pulse.risknox.ai, or speak with the Risknox team to schedule a product demonstration.",
  },
];

export default function PulseFaq() {
  return <PlatformFaq eyebrow="FAQ" title="Understanding Pulse." faqs={FAQS} />;
}
