"use client";

import React from "react";
import { ArrowRight, Scale, Network, Boxes } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/reveal";

const FRAMEWORKS = [
  {
    Icon: Scale,
    name: "EU AI Act",
    meta: "Risk · Accountability · Transparency",
    description:
      "Support a structured approach to AI risk, accountability, transparency, and governance requirements.",
    href: "/compliance/eu-ai-act",
  },
  {
    Icon: Network,
    name: "NIST AI RMF",
    meta: "Govern · Map · Measure · Manage",
    description:
      "Manage AI risks through a structured framework for trustworthy and responsible AI.",
    href: "/compliance/nist",
  },
  {
    Icon: Boxes,
    name: "ISO/IEC 42001",
    meta: "AIMS · AI management system",
    description:
      "Build a systematic approach to managing AI systems and AI governance across the organisation.",
    href: "/compliance/build-your-grc",
  },
];

export default function Frameworks() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Built for evolving AI governance
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              One governance approach. <span className="text-[#ff7d1c]">Multiple requirements.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Accord helps organisations structure their AI governance around
              recognised frameworks and regulatory requirements.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FRAMEWORKS.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1} className="h-full">
              <Link
                href={f.href}
                className="group h-full flex flex-col rounded-2xl border border-orange-500/20 bg-gradient-to-b from-orange-500/[0.06] to-transparent p-6 sm:p-8 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center mb-6">
                  <f.Icon className="w-7 h-7 text-orange-400" />
                </div>
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-orange-400/80 mb-2">
                  {f.meta}
                </p>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-3">
                  {f.name}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{f.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 group-hover:text-orange-300 transition-colors">
                  Explore framework
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
