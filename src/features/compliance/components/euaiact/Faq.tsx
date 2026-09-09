"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const FAQS = [
  {
    question: "What is the EU AI Act?",
    answer:
      "The EU AI Act is the European Union's regulatory framework for artificial intelligence. It establishes rules for AI systems and uses, with obligations that vary according to the type of AI and the risks involved.",
  },
  {
    question: "Does the EU AI Act apply to companies outside the European Union?",
    answer:
      "It can apply to organisations outside the EU when their AI systems, services, or outputs fall within the Act's scope and affect people or markets in the European Union. Organisations should assess their specific role and use cases carefully.",
  },
  {
    question: "How do we know whether our AI systems are high-risk?",
    answer:
      "The first step is to create visibility into your AI systems and use cases. From there, organisations can assess how those systems are used and determine which EU AI Act obligations may apply.",
  },
  {
    question: "What AI systems are prohibited under the EU AI Act?",
    answer:
      "The Act prohibits certain AI practices considered to present unacceptable risks. These include specific uses involving manipulation, exploitation of vulnerabilities, certain forms of social scoring, and other prohibited practices defined in the regulation.",
  },
  {
    question: "What is AI governance?",
    answer:
      "AI governance is the structure organisations use to manage how AI is developed, acquired, deployed, monitored, and controlled. It typically includes ownership, policies, risk assessments, approvals, documentation, oversight, and accountability.",
  },
  {
    question: "How does Risknox Accord help with EU AI Act readiness?",
    answer:
      "Risknox Accord helps organisations create visibility into their AI landscape, assess AI-related risks, organise governance activities, assign ownership, track evidence, and manage remediation in one structured environment.",
  },
  {
    question: "Does EU AI Act compliance also require GDPR and cybersecurity controls?",
    answer:
      "Often, yes. AI systems can involve personal data, sensitive business information, third-party models, cloud infrastructure, and security risks. A connected governance approach can help organisations align AI governance with privacy and information security requirements.",
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

export default function EuAiFaq() {
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
              Questions organisations ask before taking AI governance seriously.
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
