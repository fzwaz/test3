"use client";

import React from "react";
import Reveal from "@/components/reveal";
import LeadForm from "../iso27001/LeadForm";

const STEPS = [
  { n: "01", title: "Drop your details. Takes under a minute." },
  { n: "02", title: "We map your risk story. Not just your tool stack." },
  { n: "03", title: "You get a board-ready risk view." },
];

export default function RiskAssessment() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* Left */}
        <Reveal>
          <div>
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Risk quantification
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Your cyber risk has a <span className="text-[#ff7d1c]">rupee number.</span>
              <br />
              Let&apos;s find it before the incident does.
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed max-w-xl">
              Risknox helps translate cyber risk into financial language using
              scenario-based assessment, probable loss estimation, compliance
              exposure mapping, and investment ROI modelling.
            </p>
            <div className="mt-8 space-y-5">
              {STEPS.map((s) => (
                <div key={s.n} className="flex gap-4 items-start">
                  <span className="text-xs font-mono font-bold text-[#ff7d1c] tabular-nums pt-1">{s.n}</span>
                  <p className="text-[15px] text-slate-200 leading-relaxed">{s.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right: form card */}
        <Reveal delay={0.12} className="h-full">
          <div className="rounded-2xl border border-orange-500/25 bg-black/60 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(249,115,22,0.08)]">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Get your cyber risk assessment
            </h3>
            <p className="mt-1 mb-5 text-[13px] text-slate-400">
              Secure · No spam · Reply &lt; 24h
            </p>
            <LeadForm source="compliance-overview-risk" submitLabel="Request risk assessment" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
