"use client";

import React from "react";
import { Zap, FileCheck, TrendingUp, ShieldCheck, ClipboardList, Building2 } from "lucide-react";
import Reveal from "@/components/reveal";

const BENEFITS = [
  {
    tag: "Type 1",
    Icon: Zap,
    title: "Speed up enterprise sales",
    description:
      "SOC 2 Type 1 helps reduce security friction during procurement, vendor onboarding, and customer due diligence. It gives buyers a recognised trust report they can review.",
  },
  {
    tag: "Type 1",
    Icon: FileCheck,
    title: "Prove control design",
    description:
      "The report shows that your policies, processes, and security controls are designed around trust service criteria like security, availability, confidentiality, and privacy where applicable.",
  },
  {
    tag: "Type 1 → Type 2",
    Icon: TrendingUp,
    title: "Prepare for SOC 2 Type 2",
    description:
      "SOC 2 Type 1 builds the foundation. Once controls are designed and evidenced, your team is better prepared for ongoing monitoring and SOC 2 Type 2 readiness.",
  },
  {
    tag: "Type 2",
    Icon: ShieldCheck,
    title: "Win enterprise trust",
    description:
      "SOC 2 Type 2 gives customers stronger assurance that your controls are working over a defined period, not just looking good on audit day.",
  },
  {
    tag: "Type 2",
    Icon: ClipboardList,
    title: "Reduce security review fatigue",
    description:
      "A Type 2 report helps answer customer questionnaires, vendor reviews, procurement checks, and security due diligence with one recognised audit report.",
  },
  {
    tag: "Type 2",
    Icon: Building2,
    title: "Prove operational maturity",
    description:
      "The report shows that access reviews, change management, incident response, vendor checks, monitoring, and other controls are being followed consistently.",
  },
];

export default function Benefits() {
  return (
    <section className="relative w-full py-16 md:py-20 px-6 sm:px-10 lg:px-16 bg-[#000000]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Why it matters
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              How SOC 2 compliance <span className="text-[#ff7d1c]">supports your business</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              For SaaS, fintech, AI, and cloud companies, SOC 2 proof — at a point
              in time and over time — can make enterprise security reviews much easier.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center">
                    <b.Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-orange-400/80 border border-orange-500/25 rounded-full px-2.5 py-1">
                    {b.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2.5">
                  {b.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{b.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
