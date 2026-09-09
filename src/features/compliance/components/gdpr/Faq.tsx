"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const FAQS = [
  {
    question: "What is GDPR?",
    answer:
      "GDPR is the General Data Protection Regulation. It sets rules for protecting personal data of people in the European Union and European Economic Area.",
  },
  {
    question: "Who needs GDPR compliance?",
    answer:
      "Any organisation that collects or processes the personal data of EU/EEA individuals — including SaaS, ecommerce, fintech, and any business with European customers, users, or employees.",
  },
  {
    question: "What is personal data under GDPR?",
    answer:
      "Personal data is any information that identifies, or can identify, a living person — names, emails, device identifiers, location data, IP addresses, and more. It covers data you hold directly and data your vendors process for you.",
  },
  {
    question: "How does Compass help with GDPR?",
    answer:
      "Compass maps personal data flows, organises consent records and DSAR workflows, tracks vendor processing, monitors breach readiness, and keeps privacy evidence audit-ready in one programme.",
  },
  {
    question: "What is a DSAR?",
    answer:
      "A Data Subject Access Request is a request from an individual to see, correct, delete, or restrict their personal data. GDPR sets strict response deadlines — Compass tracks each request, owner, deadline, and response evidence.",
  },
  {
    question: "Can GDPR work with ISO 27001 or DPDPA?",
    answer:
      "Yes. GDPR controls overlap heavily with ISO 27001 security controls and India's DPDPA privacy obligations. Risknox helps you reuse data maps, controls, and evidence across all three instead of running parallel programmes.",
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

export default function GdprFaq() {
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
              Questions people ask before taking GDPR seriously.
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
