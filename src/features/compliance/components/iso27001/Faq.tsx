"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const FAQS = [
  {
    question: "What is ISO 27001:2022?",
    answer:
      "ISO 27001:2022 is the international standard for building and maintaining an Information Security Management System (ISMS). Certification proves to customers, auditors, and regulators that your security programme is structured, reviewed, and independently auditable.",
  },
  {
    question: "How long does ISO 27001 certification take?",
    answer:
      "Most teams take 6–12 months going the manual route. With a guided programme — scoped ISMS, mapped controls, assigned owners, and automated evidence — many organisations reach audit readiness in a matter of weeks.",
  },
  {
    question: "Does Risknox help with SOC 2 or DPDPA?",
    answer:
      "Yes. A strong ISO 27001 foundation shares controls with SOC 2, DPDPA, GDPR, and HIPAA. Risknox helps you reuse controls and evidence across frameworks instead of starting from zero each time.",
  },
  {
    question: "What is the Statement of Applicability?",
    answer:
      "The Statement of Applicability (SoA) is the document that lists which Annex A controls apply to your organisation, which don't (and why), and how each is implemented. Auditors review it closely — we draft it with you.",
  },
  {
    question: "How does Compass help with ISO 27001?",
    answer:
      "Compass collects evidence from your connected tools, tracks missing artefacts, reminds control owners, and keeps your readiness score live — so gaps surface early instead of on audit day.",
  },
  {
    question: "Does Risknox handle the audit too?",
    answer:
      "Risknox prepares everything the auditor needs — scoped ISMS, SoA, risk treatment plan, organised evidence, and owner accountability. The certification audit itself is conducted by an accredited external body.",
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

export default function IsoFaq() {
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
              Questions people ask before committing to ISO 27001.
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
