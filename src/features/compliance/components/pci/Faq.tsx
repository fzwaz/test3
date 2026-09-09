"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const FAQS = [
  {
    question: "What is PCI DSS?",
    answer:
      "PCI DSS is the Payment Card Industry Data Security Standard. It helps protect cardholder data and sensitive authentication data.",
  },
  {
    question: "Who needs PCI DSS compliance?",
    answer:
      "Any organisation that stores, processes, or transmits cardholder data — including merchants, payment gateways, fintech platforms, SaaS billing flows, and their service providers.",
  },
  {
    question: "What is a cardholder data environment?",
    answer:
      "The cardholder data environment (CDE) is the set of people, processes, and technology that store, process, or transmit cardholder data — plus any connected systems. Scoping it correctly is the first step of every PCI programme.",
  },
  {
    question: "How does Compass help with PCI DSS?",
    answer:
      "Compass maps your cardholder data environment, tracks scan records, access reviews, and remediation proof, reminds control owners, and keeps PCI evidence organised and audit-ready in one place.",
  },
  {
    question: "What are SAQ, ROC, and AOC?",
    answer:
      "SAQ (Self-Assessment Questionnaire) is for smaller merchants to self-validate. ROC (Report on Compliance) is the full external audit for larger environments. AOC (Attestation of Compliance) is the signed declaration of the validation result.",
  },
  {
    question: "Can PCI DSS work with ISO 27001 or SOC 2?",
    answer:
      "Yes. PCI controls overlap heavily with ISO 27001 security controls and SOC 2 trust criteria. Risknox helps you reuse scan evidence, access reviews, and policies across all three instead of running parallel programmes.",
  },
];

function FaqItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/[0.14]">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer"
      >
        <span
          className={cn(
            "text-base sm:text-lg font-normal tracking-tight transition-colors",
            isOpen ? "text-white" : "text-slate-100 group-hover:text-white",
          )}
        >
          {question}
        </span>
        <span
          className={cn(
            "shrink-0 transition-all duration-300",
            isOpen ? "rotate-180 text-[#f36734]" : "text-slate-300 group-hover:text-white",
          )}
        >
          <ChevronDown className="h-5 w-5" strokeWidth={2.5} />
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl pb-6 text-sm sm:text-base leading-relaxed text-slate-400">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PciFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative w-full py-16 md:py-20 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="mb-8 text-center">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              FAQs
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Questions people ask before starting PCI DSS.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            {FAQS.map((f, i) => (
              <FaqItem
                key={f.question}
                question={f.question}
                answer={f.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
