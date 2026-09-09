"use client";

import React from "react";
import Reveal from "@/components/reveal";

const STEPS = [
  {
    title: "Map your AI systems",
    description:
      "We identify where AI is being developed, purchased, deployed, or used across the organisation — including systems, models, vendors, owners, and business use cases.",
  },
  {
    title: "Classify AI-related risk",
    description:
      "Risknox helps organisations assess AI use cases against relevant risk categories and identify where additional governance, controls, transparency, or oversight may be required.",
  },
  {
    title: "Run the AI governance gap assessment",
    description:
      "We assess your existing AI policies, governance structures, documentation, risk processes, human oversight, vendor controls, and evidence against your AI governance requirements.",
  },
  {
    title: "Build the AI governance roadmap",
    description:
      "We turn identified requirements and gaps into clear actions covering accountability, risk management, documentation, transparency, human oversight, and responsible deployment.",
  },
  {
    title: "Organise AI evidence",
    description:
      "Accord helps track AI inventories, risk assessments, policies, approvals, model documentation, owner responsibilities, vendor information, and supporting evidence.",
  },
  {
    title: "Stay AI-ready",
    description:
      "AI systems, regulations, and business use cases keep evolving. Risknox helps organisations review changes, monitor governance activities, track remediation, and maintain AI readiness over time.",
  },
];

export default function Journey() {
  return (
    <section className="relative w-full py-16 md:py-20 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              The programme
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              The EU AI Act journey, <span className="text-[#ff7d1c]">minus the governance chaos.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Risknox does not leave AI governance to scattered policies and
              spreadsheets. Accord helps map the AI landscape, identify risks,
              organise governance activities, track evidence, and keep responsible
              AI work moving.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                <p className="text-xs font-mono font-bold tracking-[0.2em] text-[#ff7d1c] mb-4 tabular-nums">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2.5">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
