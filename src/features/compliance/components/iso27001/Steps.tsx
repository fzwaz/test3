"use client";

import React from "react";
import Reveal from "@/components/reveal";

const STEPS = [
  {
    title: "Scope the ISMS",
    description:
      "We define what sits inside your ISO 27001 scope: teams, systems, locations, data flows, vendors, and business processes. No vague boundaries. No 'we'll decide later.'",
  },
  {
    title: "Run the AI gap scan",
    description:
      "Compass checks your current controls, policies, risks, and evidence against ISO 27001:2022 requirements. You get a clear gap list, not a mystery spreadsheet.",
  },
  {
    title: "Build the control plan",
    description:
      "We map required controls, assign owners, create the Statement of Applicability, and turn ISO work into tasks your team can actually complete.",
  },
  {
    title: "Implement policies and controls",
    description:
      "Policies, procedures, access reviews, vendor checks, risk treatment, incident response, and security awareness are built into one working programme.",
  },
  {
    title: "Automate audit evidence",
    description:
      "Compass collects evidence from connected tools, tracks missing artefacts, reminds control owners, and keeps proof organised for the certification audit.",
  },
  {
    title: "Get audit-ready and stay there",
    description:
      "We prepare your auditor workspace, support audit responses, close last-mile gaps, and keep monitoring after certification so ISO does not go cold.",
  },
];

export default function Steps() {
  return (
    <section className="relative w-full py-16 md:py-20 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              The programme
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              How Risknox gets your <span className="text-[#ff7d1c]">ISMS ready</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Risknox does not leave ISO 27001 to email reminders and shared drives.
              Compass helps collect evidence, assign owners, track gaps, and keep
              your ISMS moving.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                <p className="text-xs font-mono font-bold tracking-[0.2em] text-[#ff7d1c] mb-4 tabular-nums">
                  {String(i + 1).padStart(2, "0")} / 06
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
