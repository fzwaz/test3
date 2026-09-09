"use client";

import React from "react";
import { Radar, BrainCircuit, SlidersHorizontal } from "lucide-react";
import Reveal from "@/components/reveal";

const CAPS = [
  {
    Icon: Radar,
    n: "01",
    title: "Continuous Discovery",
    description:
      "Automatically discover internet-facing domains, cloud workloads, APIs, and unmanaged assets.",
  },
  {
    Icon: BrainCircuit,
    n: "02",
    title: "AI-Driven Detection",
    description:
      "Identify behavioural anomalies, credential exposures, and emerging threats before they can be exploited.",
  },
  {
    Icon: SlidersHorizontal,
    n: "03",
    title: "Signal Prioritisation",
    description:
      "Reduce alert fatigue by filtering noise and highlighting the risks that require immediate attention.",
  },
];

export default function WhatItDoes() {
  return (
    <section id="overview" className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Continuous security visibility
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Everything changing. <span className="text-[#ff7d1c]">Nothing missed.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Pulse helps security teams maintain continuous visibility across
              their digital environment.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CAPS.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center">
                    <c.Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-600 tabular-nums">
                    {c.n}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
