"use client";

import React from "react";
import { Eye, UserCheck, AlertTriangle, FileCheck2 } from "lucide-react";
import Reveal from "@/components/reveal";

const POINTS = [
  {
    Icon: Eye,
    title: "Clear Visibility",
    description: "Know where AI is being used across your organisation.",
  },
  {
    Icon: UserCheck,
    title: "Clear Accountability",
    description: "Ensure AI systems have defined ownership and governance responsibilities.",
  },
  {
    Icon: AlertTriangle,
    title: "Clear Risk Management",
    description: "Identify and manage AI-related risks before they escalate.",
  },
  {
    Icon: FileCheck2,
    title: "Clear Evidence",
    description: "Maintain structured records of governance decisions and activities.",
  },
];

export default function WhyMatters() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              AI risk is now business risk
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              You can&apos;t govern <span className="text-[#ff7d1c]">what you can&apos;t see.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              AI adoption is accelerating across organisations. Without clear
              visibility and accountability, it becomes difficult to understand
              where AI is being used and what risks it introduces. Accord helps
              organisations bring structure to AI adoption before governance
              gaps become business problems.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center mb-5">
                  <p.Icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
