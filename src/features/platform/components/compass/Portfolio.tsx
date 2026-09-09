"use client";

import React from "react";
import Reveal from "@/components/reveal";

const POINTS = [
  {
    title: "Portfolio visibility",
    description: "Understand how risk is distributed across insured organisations.",
  },
  {
    title: "Changing risk",
    description: "Identify meaningful changes that could affect portfolio exposure.",
  },
  {
    title: "Better risk conversations",
    description:
      "Use clearer intelligence to support underwriting and risk-management discussions.",
  },
];

export default function Portfolio() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Look beyond a single policy
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Understand risk <span className="text-[#ff7d1c]">across the portfolio.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Individual underwriting decisions contribute to overall portfolio
              exposure. Compass helps insurers develop stronger visibility into
              the cyber risk landscape across insured organisations.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                <span className="text-xs font-mono font-bold text-[#ff7d1c] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
