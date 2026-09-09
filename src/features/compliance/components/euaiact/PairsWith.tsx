"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/reveal";

const FRAMEWORKS = [
  {
    eyebrow: "AI Management",
    title: "ISO/IEC 42001",
    description:
      "Best for organisations that need a structured AI management system covering AI governance, policies, risk management, responsibilities, and continuous improvement.",
    href: "/contact?role=compliance-iso42001",
  },
  {
    eyebrow: "EU Privacy",
    title: "GDPR",
    description:
      "Essential for organisations processing personal data through AI systems and needing stronger governance around data protection, privacy, and individual rights.",
    href: "/compliance/gdpr",
  },
  {
    eyebrow: "Information Security",
    title: "ISO 27001:2022",
    description:
      "Helpful for organisations that need structured information security controls around data, access, systems, vendors, incidents, and risk management.",
    href: "/compliance/iso-27001",
  },
];

export default function PairsWith() {
  return (
    <section className="relative w-full py-16 md:py-20 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              EU AI Act pairs with
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              From EU AI Act to <span className="text-[#ff7d1c]">GDPR, ISO 42001, and ISO 27001.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              AI governance does not exist in isolation. Organisations deploying AI
              often need connected approaches to privacy, AI management,
              cybersecurity, and enterprise risk.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FRAMEWORKS.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1} className="h-full">
              <div className="h-full flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-orange-400/80 mb-2">
                  {f.eyebrow}
                </p>
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {f.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{f.description}</p>
                <Link
                  href={f.href}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <span>Know more</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
