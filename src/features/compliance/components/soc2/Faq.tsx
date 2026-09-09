"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const FAQS = [
  {
    question: "What is SOC 2 Type 2?",
    answer:
      "SOC 2 Type 2 is an audit report that shows your security controls were not only designed well, but operated consistently over a review period — typically 3 to 12 months.",
  },
  {
    question: "What is SOC 2 Type 1?",
    answer:
      "SOC 2 Type 1 is an audit report that checks whether your controls are suitably designed at a specific point in time.",
  },
  {
    question: "How is SOC 2 Type 2 different from Type 1?",
    answer:
      "Type 1 proves control design at a point in time; Type 2 proves controls operated effectively over time. Type 1 is faster and unblocks enterprise deals; Type 2 carries more weight in procurement and is often the end goal.",
  },
  {
    question: "Who needs SOC 2 Type 2?",
    answer:
      "SaaS, fintech, AI, and cloud companies selling to enterprise buyers — especially US customers — where procurement, vendor reviews, and security due diligence demand proof of operating controls.",
  },
  {
    question: "How long does SOC 2 Type 2 take?",
    answer:
      "Beyond the 3–12 month review period itself, preparation depends on control maturity. With mapped controls, assigned owners, and automated evidence, most teams compress prep from months to weeks.",
  },
  {
    question: "How does Compass help with SOC 2?",
    answer:
      "Compass tracks tickets, logs, approvals, reviews, and policies across the review period, organises time-stamped evidence, reminds owners, and keeps control health visible — for both Type 1 readiness and Type 2 monitoring.",
  },
  {
    question: "Can SOC 2 help with customer security reviews?",
    answer:
      "Yes. Many enterprise customers accept SOC 2 Type 2 reports during procurement, vendor reviews, onboarding, and security due diligence.",
  },
  {
    question: "Does Type 1 prepare us for Type 2?",
    answer:
      "Yes. Type 1 builds the foundation — designed controls, mapped owners, organised evidence — so your team moves into Type 2 monitoring instead of starting over.",
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

export default function SocFaq() {
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
              Questions people ask before starting SOC 2.
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
