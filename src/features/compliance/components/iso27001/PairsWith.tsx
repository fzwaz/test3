"use client";

import React from "react";
import { ArrowRight, FileCheck, Database, Landmark } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/reveal";

const FRAMEWORKS = [
  {
    Icon: FileCheck,
    tag: "SaaS · US market",
    title: "SOC 2 Type II",
    description:
      "Best for SaaS and technology companies that need trust reporting for US customers, enterprise procurement, and vendor security reviews.",
    href: "/contact?role=compliance-soc2",
  },
  {
    Icon: Database,
    tag: "Privacy · India",
    title: "DPDPA",
    description:
      "Useful for Indian businesses handling personal data and preparing for privacy obligations, consent processes, breach response, and data governance.",
    href: "/contact?role=compliance-dpdpa",
  },
  {
    Icon: Landmark,
    tag: "Regulated · BFSI",
    title: "SEBI CSCRF",
    description:
      "Built for listed SEBI regulated entities (REs) and regulated market participants that need stronger cyber resilience, governance, control evidence, and reporting.",
    href: "/contact?role=compliance-sebi",
  },
];

export default function PairsWith() {
  return (
    <section className="relative w-full py-16 md:py-20 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              ISO 27001 pairs with
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              The frameworks that share <span className="text-[#ff7d1c]">an ISMS spine.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Most organisations pursuing ISO 27001 also face customer, privacy,
              sectoral, or security assurance requirements. Risknox helps you reuse
              controls and evidence wherever possible.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FRAMEWORKS.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1} className="h-full">
              <div className="group relative h-full flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 sm:p-7 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(249,115,22,0.16)] transition-all duration-300">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.15)] group-hover:scale-105 group-hover:bg-orange-500/15 transition-all duration-300">
                    <f.Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold tracking-wide text-slate-400 border border-white/10 bg-white/[0.04] rounded-full px-3 py-1">
                    {f.tag}
                  </span>
                </div>
                <p className="text-[11px] font-mono font-bold tracking-[0.18em] text-orange-400/80 uppercase mb-2">
                  ISO 27001 +
                </p>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2.5">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{f.description}</p>
                <Link
                  href={f.href}
                  className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between group/link"
                >
                  <span className="text-sm font-semibold text-white group-hover/link:text-orange-300 transition-colors">
                    Know more
                  </span>
                  <span className="w-9 h-9 rounded-full border border-orange-500/30 bg-orange-500/10 flex items-center justify-center group-hover/link:bg-orange-500 group-hover/link:border-orange-500 transition-all duration-300">
                    <ArrowRight className="h-4 w-4 text-orange-400 group-hover/link:text-white group-hover/link:translate-x-0.5 transition-all" />
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
