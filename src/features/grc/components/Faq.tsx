"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const FAQS = [
  {
    question: "Is this the same as getting ISO 27001 / SOC 2 ready separately?",
    answer:
      "Yes — same engine, different landing pages. Whether you start from /compliance, /compliance/iso-27001, /compliance/soc-2 or here, you land in the same builder and the same dashboard; only the pre-selected frameworks differ. Control reuse means adding SOC 2 after ISO 27001 is incremental.",
  },
  {
    question: "What happens right after I pay?",
    answer:
      "Your account is created automatically and the onboarding wizard pre-loads your selected frameworks' controls. You get control mapping, task assignments, evidence collection, and an audit-ready export — plus an upgrade path to add frameworks later without starting over.",
  },
  {
    question: "How does pricing work — monthly vs. annual, base vs. add-ons?",
    answer:
      "Base platform fee covers the dashboard plus one framework. Each additional framework, extra seats beyond the included baseline, Pulse continuous monitoring, and DMARC monitoring are add-ons. You can toggle monthly or annual billing — illustrative annual is 20% off in the demo, but actual pricing is TBD and will be set by Risknox.",
  },
  {
    question: "Which payment gateway will I see at checkout?",
    answer:
      "Recommendation from Section 7 is Razorpay for India-billed customers and Stripe for international (Saudi Arabia, Bahrain, other). The gateway is selected automatically by billing country — to be confirmed along with supported currencies.",
  },
  {
    question: "Can I add frameworks after provisioning?",
    answer:
      "Yes. The dashboard is scoped to your purchased frameworks today and you can upgrade from billing/invoice history — no new workspace needed. Evidence you already collected is reused across newly added frameworks where controls overlap.",
  },
  {
    question: "What about the seven frameworks listed vs. 25+?",
    answer:
      "The builder surfaces the core seven you specified — ISO 27001, SOC 2, DPDPA, NIST CSF, GDPR, PCI DSS, and EU AI Act / NIST AI RMF (via Accord). The wider 25+ catalogue is an upgrade path once you're provisioned.",
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

export default function GrcFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="mb-8 text-center">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">FAQs</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">GRC Builder — what teams ask before they check out.</h2>
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
