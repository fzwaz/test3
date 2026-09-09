"use client";

import React from "react";
import { ClipboardCheck, Radar, FileSearch, Activity } from "lucide-react";
import Reveal from "@/components/reveal";

const CAPS = [
  {
    Icon: ClipboardCheck,
    n: "01",
    title: "Risk Assessment",
    description:
      "Evaluate the applicant's cyber exposure and relevant security signals to develop a clearer risk profile.",
  },
  {
    Icon: Radar,
    n: "02",
    title: "Exposure Intelligence",
    description:
      "Understand the factors that could influence an organisation's cyber risk and potential loss exposure.",
  },
  {
    Icon: FileSearch,
    n: "03",
    title: "Underwriting Context",
    description:
      "Transform complex technical information into intelligence that supports underwriting decisions.",
  },
  {
    Icon: Activity,
    n: "04",
    title: "Continuous Monitoring",
    description:
      "Maintain visibility into meaningful changes in risk throughout the policy lifecycle.",
  },
];

export default function Capabilities() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Built around the underwriting decision
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Everything you need to understand{" "}
              <span className="text-[#ff7d1c]">the risk behind the submission.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CAPS.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center">
                    <c.Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-600 tabular-nums">
                    {c.n}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2.5">
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
