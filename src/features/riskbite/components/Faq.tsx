"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const FAQS = [
  {
    question: "How accurate is the dollar exposure range?",
    answer:
      "It's directional, not a quote. We combine your industry's published breach-cost benchmark with your size and posture. The range avoids false precision — use it to frame board discussion, then let Fortress model it continuously against live telemetry.",
  },
  {
    question: "Do I need to enter my email to see anything?",
    answer:
      "No. Your posture score and risk category are shown instantly with no email. Full exposure range, top drivers, and the downloadable PDF are gated behind work email + company name — the standard freemium pattern that maximizes both completion and lead quality.",
  },
  {
    question: "Is this the same as Fortress's real scoring?",
    answer:
      "Same logic, simplified. Fortress runs the full engine continuously across telemetry. RiskBite is an 8-question teaser reviewed by the Fortress scoring team so numbers stay directionally consistent with what paying customers see.",
  },
  {
    question: "What happens with my answers after I unlock?",
    answer:
      "Your session becomes a Lead in Zoho CRM with score, range, industry, size, and all 8 answers as custom fields. You get the PDF by email automatically. Highest-risk or large-org sessions notify sales same-day; others enter the normal nurture sequence.",
  },
  {
    question: "Will my data be shared?",
    answer:
      "No. Answers are used only to compute your RiskBite and to route you to relevant next steps (Compliance if you need certification, Compass if you need cyber insurance). See our privacy policy for retention and deletion.",
  },
  {
    question: "Can I retake RiskBite or share the PDF internally?",
    answer:
      "Yes — retake anytime with different assumptions to scenario-plan, and share the PDF with leadership, your security team, or board. Teams often rerun it after remediating one of the top drivers to see the range move.",
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

export default function RiskBiteFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="mb-8 text-center">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">FAQs</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              RiskBite — what teams ask before they start.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            {FAQS.map((f, i) => (
              <FaqItem key={f.question} question={f.question} answer={f.answer} isOpen={openIndex === i} onToggle={() => setOpenIndex(i)} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
