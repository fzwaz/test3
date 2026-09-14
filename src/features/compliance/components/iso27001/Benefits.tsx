"use client";

import React from "react";
import { Handshake, HeartHandshake, Layers } from "lucide-react";
import Reveal from "@/components/reveal";

const BENEFITS = [
  {
    Icon: Handshake,
    title: "Win enterprise deals",
    description:
      "ISO 27001 is often requested before large customers, BFSI clients, global buyers, and enterprise procurement teams move forward. It helps reduce security objections during sales.",
  },
  {
    Icon: HeartHandshake,
    title: "Build customer trust",
    description:
      "Certification shows customers that your information security management system is structured, reviewed, and independently auditable. That matters when you handle sensitive data.",
  },
  {
    Icon: Layers,
    title: "Reduce future compliance work",
    description:
      "A strong ISO 27001 foundation can support SOC 2, DPDPA, GDPR, HIPAA, vendor reviews, and customer security questionnaires because many controls overlap.",
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
              How can ISO 27001 compliance{" "}
              <span className="text-[#ff7d1c]">support your business?</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Enterprise customers, auditors, investors, and regulators all want proof
              that your security programme is not running on hope. ISO 27001 gives
              them that proof.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.1} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 sm:p-7 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(249,115,22,0.16)] transition-all duration-300">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />
                <span className="pointer-events-none absolute -top-1 right-5 text-[56px] font-bold leading-none text-white/[0.06] tabular-nums select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.15)] group-hover:scale-105 group-hover:bg-orange-500/15 transition-all duration-300">
                    <b.Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-orange-400/80 border border-orange-500/25 bg-orange-500/[0.07] rounded-full px-3 py-1">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2.5">
                  {b.title}
                </h3>
                <div className="w-10 h-[2px] bg-orange-500/70 rounded-full mb-4 group-hover:w-16 transition-all duration-300" />
                <p className="text-sm text-slate-400 leading-relaxed">{b.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
