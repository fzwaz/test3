"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const FAQS = [
  {
    question: "How long does a typical compliance engagement take?",
    answer:
      "Most frameworks take between 8–16 weeks depending on scope, existing controls, and audit readiness. Teams using Compass typically move faster because evidence collection, remediation tracking, and workflow coordination are already automated inside the platform.",
  },
  {
    question: "Do you support ongoing compliance after certification?",
    answer:
      "Yes. Certification is a point in time — staying compliant is continuous. Fortress keeps monitoring your controls, Compass tracks evidence and drift, and remediation workflows keep you audit-ready for surveillance audits and renewals.",
  },
  {
    question: "Can Compass work with our existing security stack?",
    answer:
      "Yes. Compass connects directly with your cloud providers, identity systems, HR tools, endpoints, SIEM, and ticketing systems — 200+ integrations — so evidence flows in automatically without ripping out what you already use.",
  },
  {
    question: "Do you provide both implementation and audit coordination?",
    answer:
      "Yes. Risknox implements controls, organises evidence, and tracks remediation with you — then coordinates with your auditor or certification body through evidence sharing, walkthroughs, and query resolution until the audit closes.",
  },
  {
    question: "Which compliance frameworks do you support?",
    answer:
      "25+ frameworks including ISO 27001, SOC 2 Type 1 & 2, ISO 42001, ISO 9001, DPDPA, SEBI CSCRF, GDPR, HIPAA, NIST CSF 2.0, PCI DSS v4.0, and the EU AI Act — managed through one continuous compliance program with cross-framework control reuse.",
  },
];

function FaqItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/[0.14]">
      <button onClick={onToggle} className="group flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer">
        <span className={cn("text-base sm:text-lg font-normal tracking-tight transition-colors", isOpen ? "text-white" : "text-slate-100 group-hover:text-white")}>
          {question}
        </span>
        <span className={cn("shrink-0 transition-all duration-300", isOpen ? "rotate-180 text-[#f36734]" : "text-slate-300 group-hover:text-white")}>
          <ChevronDown className="h-5 w-5" strokeWidth={2.5} />
        </span>
      </button>
      <div className="grid transition-all duration-300 ease-in-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
        <div className="overflow-hidden">
          <p className="max-w-3xl pb-6 text-sm sm:text-base leading-relaxed text-slate-400">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function OverviewFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="mb-8 text-center">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              FAQs
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Questions teams ask before handing over their compliance stack.
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
