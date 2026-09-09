"use client";

import React from "react";
import { ScanEye, Gauge, ShieldCheck } from "lucide-react";
import Reveal from "@/components/reveal";

const CAPS = [
  {
    Icon: ScanEye,
    n: "01",
    title: "Map AI Systems",
    description:
      "Maintain visibility into AI systems, models, vendor AI services, and AI-powered workflows across your organisation.",
  },
  {
    Icon: Gauge,
    n: "02",
    title: "Assess AI Risk",
    description:
      "Identify and evaluate risks related to privacy, security, fairness, safety, robustness, and responsible AI use.",
  },
  {
    Icon: ShieldCheck,
    n: "03",
    title: "Govern with Confidence",
    description:
      "Bring policies, responsibilities, controls, and governance activities into one structured approach.",
  },
];

export default function WhatItDoes() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              AI governance, made operational
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              From AI adoption <span className="text-[#ff7d1c]">to accountable AI.</span>
            </h2>
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
