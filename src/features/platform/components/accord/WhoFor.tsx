"use client";

import React from "react";
import Reveal from "@/components/reveal";

const ROLES = [
  {
    title: "AI & Technology Teams",
    description: "Maintain visibility into AI systems, models, and AI-powered workflows.",
  },
  {
    title: "Risk & Compliance Teams",
    description: "Manage governance requirements, assessments, policies, and accountability.",
  },
  {
    title: "Security Teams",
    description: "Understand AI-related security, data, and technology risks.",
  },
  {
    title: "Leadership",
    description: "Gain a clearer view of organisational AI adoption and governance readiness.",
  },
];

export default function WhoFor() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Shared AI. Shared accountability.
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Different teams. <span className="text-[#ff7d1c]">One governance framework.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                <span className="text-xs font-mono font-bold text-[#ff7d1c] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white tracking-tight leading-snug">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{r.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
