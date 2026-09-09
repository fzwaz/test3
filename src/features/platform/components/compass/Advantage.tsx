"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/reveal";

const POINTS = [
  {
    title: "More than self-reported information",
    description: "Add technical risk intelligence to the underwriting picture.",
  },
  {
    title: "A clearer view of exposure",
    description: "Understand relevant cyber risk factors before deciding on coverage.",
  },
  {
    title: "Faster risk evaluation",
    description:
      "Bring relevant information into a structured view that supports more efficient underwriting workflows.",
  },
  {
    title: "More informed decisions",
    description:
      "Use stronger risk context when evaluating pricing, limits, deductibles, and policy requirements.",
  },
];

export default function Advantage() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Move beyond the questionnaire
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Better intelligence <span className="text-[#ff7d1c]">before the policy is bound.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1} className="h-full">
              <div className="h-full flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                <CheckCircle2 className="h-6 w-6 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{p.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
