"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const FAQS = [
  {
    question: "What is the NIST Cybersecurity Framework?",
    answer:
      "The NIST Cybersecurity Framework (CSF) is a widely used framework that helps organisations understand, manage, and reduce cybersecurity risk through structured cybersecurity outcomes and practices.",
  },
  {
    question: "Who should use NIST CSF?",
    answer:
      "NIST CSF can be used by organisations of all sizes and industries. It is particularly valuable for businesses that want a structured approach to managing cybersecurity risk without treating security as only a technical function.",
  },
  {
    question: "What are the six functions of NIST CSF 2.0?",
    answer:
      "NIST CSF 2.0 is organised around six core functions: Govern, Identify, Protect, Detect, Respond, and Recover. Together, these functions help organisations manage cybersecurity risk across leadership, operations, security controls, incident response, and resilience.",
  },
  {
    question: "Is NIST CSF mandatory?",
    answer:
      "NIST CSF is generally a voluntary framework, but organisations may adopt it to meet customer expectations, strengthen cybersecurity governance, support regulatory requirements, or establish a recognised approach to cyber risk management.",
  },
  {
    question: "How does Risknox help with NIST CSF?",
    answer:
      "Risknox helps organisations assess their cybersecurity posture, identify framework gaps, prioritise remediation, assign ownership, organise evidence, and continuously monitor progress toward stronger cybersecurity resilience.",
  },
  {
    question: "Can NIST CSF work with ISO 27001 or SOC 2?",
    answer:
      "Yes. NIST CSF can complement frameworks and standards such as ISO 27001, SOC 2, PCI DSS, and CIS Controls. Organisations can often align overlapping controls and reduce duplicated compliance effort.",
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

export default function NistFaq() {
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
              Questions organisations ask before taking NIST CSF seriously.
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
