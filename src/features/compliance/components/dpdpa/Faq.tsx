"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const FAQS = [
  {
    question: "What is DPDPA?",
    answer:
      "DPDPA refers to India's Digital Personal Data Protection Act, 2023, which regulates how digital personal data should be processed and protected.",
  },
  {
    question: "Who needs DPDPA compliance?",
    answer:
      "Any organisation that collects, stores, or processes the personal data of individuals in India — including SaaS, fintech, ecommerce, healthtech, and any business with Indian customers or employees.",
  },
  {
    question: "What is a Data Fiduciary?",
    answer:
      "A Data Fiduciary is the entity that decides why and how personal data is processed. Under DPDPA, fiduciaries must obtain valid consent, protect data with reasonable safeguards, report breaches, and honour data principal rights.",
  },
  {
    question: "What rights do Data Principals have?",
    answer:
      "Individuals get the right to access their data, correct or erase it, withdraw consent, nominate another person in case of incapacity, and seek grievance redressal from the fiduciary and the Data Protection Board.",
  },
  {
    question: "How does Compass help with DPDPA?",
    answer:
      "Compass maps personal data flows, organises consent records and data principal requests, tracks vendor processing, monitors breach readiness, and keeps privacy evidence audit-ready in one programme.",
  },
  {
    question: "Can DPDPA work with ISO 27001 or GDPR?",
    answer:
      "Yes. DPDPA controls overlap heavily with ISO 27001 security controls and GDPR privacy practices. Risknox helps you reuse data maps, controls, and evidence across all three instead of running parallel programmes.",
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

export default function DpdpaFaq() {
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
              Questions people ask before taking DPDPA seriously.
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
