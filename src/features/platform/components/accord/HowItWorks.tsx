"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import Reveal from "@/components/reveal";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    description:
      "Identify AI systems, use cases, models, vendors, and AI-powered workflows across your organisation.",
  },
  {
    n: "02",
    title: "Assess",
    description:
      "Evaluate AI systems and use cases to understand relevant risks, governance gaps, and required controls.",
  },
  {
    n: "03",
    title: "Govern",
    description:
      "Assign ownership, implement governance processes, and manage responsibilities across teams.",
  },
  {
    n: "04",
    title: "Demonstrate",
    description:
      "Maintain the documentation, assessments, policies, and evidence needed to demonstrate responsible AI governance.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 text-center">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              From AI visibility to governance
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Understand. Assess. <span className="text-[#ff7d1c]">Govern.</span>
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col items-stretch">
          {STEPS.map((s, i) => (
            <React.Fragment key={s.n}>
              <Reveal delay={i * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <span className="shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-sm font-mono font-bold text-orange-400 tabular-nums">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
              {i < STEPS.length - 1 && (
                <div className="flex justify-center py-3" aria-hidden>
                  <ArrowDown className="w-5 h-5 text-orange-500/60" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
