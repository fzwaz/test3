"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const NEEDS = [
  { need: "Monitor security in real time", product: "Pulse", href: "/platform/pulse", external: false },
  { need: "Understand cyber risk in business terms", product: "Fortress", href: "/platform/fortress", external: false },
  { need: "Improve cyber insurance underwriting", product: "Compass", href: "https://compass.risknox.ai", external: true },
  { need: "Govern AI systems and AI risk", product: "Accord", href: "https://accord.risknox.ai", external: true },
  { need: "Protect your domain from spoofing", product: "DMARC Monitoring", href: "/platform/dmarc-monitoring", external: false },
];

export default function Finder() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = NEEDS[activeIdx];

  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 text-center max-w-2xl mx-auto">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Start with the problem
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              What do you need <span className="text-[#ff7d1c]">to solve?</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
            {/* Needs */}
            <div className="flex flex-col gap-2.5">
              {NEEDS.map((n, i) => (
                <button
                  key={n.need}
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  className={cn(
                    "w-full text-left rounded-xl border px-5 py-4 transition-all cursor-pointer",
                    i === activeIdx
                      ? "border-orange-500/50 bg-orange-500/[0.07] shadow-[0_0_25px_rgba(249,115,22,0.15)]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/25",
                  )}
                >
                  <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500 mb-1">
                    If you need to…
                  </p>
                  <p className={cn("text-[15px] font-semibold", i === activeIdx ? "text-white" : "text-slate-300")}>
                    {n.need}
                  </p>
                </button>
              ))}
            </div>

            {/* Answer */}
            <div key={activeIdx} className="rounded-2xl border border-orange-500/30 bg-gradient-to-b from-orange-500/[0.08] to-transparent p-8 sm:p-10 flex flex-col items-start justify-center text-left">
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#ff7d1c] mb-3">
                Start with
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {active.product}
              </p>
              <div className="mt-6">
                {active.external ? (
                  <a
                    href={active.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[10px] bg-[#f97316] hover:bg-[#ff7d1c] text-white text-[15px] font-semibold shadow-[0_0_24px_rgba(249,115,22,0.4)] transition-all active:scale-[0.98]"
                  >
                    <span>Explore {active.product}</span>
                    <ArrowUpRight className="w-[18px] h-[18px] stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <Link
                    href={active.href}
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[10px] bg-[#f97316] hover:bg-[#ff7d1c] text-white text-[15px] font-semibold shadow-[0_0_24px_rgba(249,115,22,0.4)] transition-all active:scale-[0.98]"
                  >
                    <span>Explore {active.product}</span>
                    <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
