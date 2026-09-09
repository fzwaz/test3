"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/reveal";

const FRAMEWORKS = [
  {
    title: "ISO 27001:2022",
    description:
      "Best for organisations that need a formal information security management system around payment data, access, vendors, incidents, and security governance.",
    href: "/compliance/iso-27001",
  },
  {
    title: "SOC 2 Type II",
    description:
      "Useful for SaaS, fintech, and payment platforms that need customer trust reporting for security, availability, confidentiality, and processing integrity.",
    href: "/compliance/soc-2",
  },
  {
    title: "DPDPA",
    description:
      "Helpful for Indian businesses handling personal data alongside payment operations, customer records, consent workflows, and breach response.",
    href: "/compliance/dpdpa-data-mapping",
  },
];

export default function PairsWith() {
  return (
    <section className="relative w-full py-16 md:py-20 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              PCI DSS pairs with
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Build once, <span className="text-[#ff7d1c]">reuse where controls overlap.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Use PCI DSS as part of a broader compliance programme supported by
              one evidence system.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FRAMEWORKS.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1} className="h-full">
              <div className="h-full flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
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
