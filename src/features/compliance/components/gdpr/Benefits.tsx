"use client";

import React from "react";
import { HeartHandshake, Scale, Network } from "lucide-react";
import Reveal from "@/components/reveal";

const BENEFITS = [
  {
    Icon: HeartHandshake,
    title: "Build customer trust",
    description:
      "GDPR readiness shows customers that your business respects privacy, handles personal data responsibly, and can explain how data is collected, processed, shared, and protected.",
  },
  {
    Icon: Scale,
    title: "Reduce regulatory risk",
    description:
      "A structured GDPR programme helps you manage lawful basis, consent, data subject rights, breach response, vendor processing, data retention, and cross-border transfer risks.",
  },
  {
    Icon: Network,
    title: "Strengthen data governance",
    description:
      "GDPR forces cleaner visibility into personal data flows, business processes, systems, vendors, and owners, so privacy work stops living inside scattered spreadsheets.",
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
              How can GDPR compliance <span className="text-[#ff7d1c]">support your business?</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              GDPR helps businesses show that personal data is collected, processed,
              stored, shared, and deleted with proper controls.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center mb-6">
                  <b.Icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
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
