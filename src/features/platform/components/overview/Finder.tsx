"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const NEEDS = [
  {
    need: "Monitor security in real time",
    product: "Pulse",
    href: "/platform/pulse",
    external: false,
    why: "You can't fix what you can't see. Pulse gives continuous visibility across your environment so meaningful changes surface instantly.",
    who: "Security & operations teams",
    hint: "Monitor → Detect → Prioritise",
  },
  {
    need: "Understand cyber risk in business terms",
    product: "Fortress",
    href: "/platform/fortress",
    external: false,
    why: "Technical findings stall without business context. Fortress translates exposure into financial impact a board will act on.",
    who: "CISOs, risk leaders & executives",
    hint: "Assess → Quantify → Prioritise",
  },
  {
    need: "Improve cyber insurance underwriting",
    product: "Compass",
    href: "https://compass.risknox.ai",
    external: true,
    why: "Underwriting on stale questionnaires misses real risk. Compass brings live technical intelligence to every applicant.",
    who: "Insurers, underwriters, MGAs & brokers",
    hint: "Assess → Evaluate → Underwrite",
  },
  {
    need: "Govern AI systems and AI risk",
    product: "Accord",
    href: "https://accord.risknox.ai",
    external: true,
    why: "AI is deployed faster than it's governed. Accord maps systems, aligns EU AI Act controls, and keeps accountability live.",
    who: "AI, compliance, risk & tech teams",
    hint: "Discover → Assess → Govern",
  },
  {
    need: "Protect your domain from spoofing",
    product: "DMARC Monitoring",
    href: "/platform/dmarc-monitoring",
    external: false,
    why: "A spoofed domain erodes trust in every email you send. DMARC Monitoring shows who sends as you and helps you enforce it.",
    who: "Security, IT & email teams",
    hint: "Monitor → Identify → Enforce",
  },
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
            <div key={activeIdx} className="rounded-2xl border border-orange-500/30 bg-gradient-to-b from-orange-500/[0.08] to-transparent p-8 sm:p-8 flex flex-col text-left overflow-hidden">
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#ff7d1c] mb-2">
                Start with
              </p>
              <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {active.product}
              </p>
              <p className="mt-1 text-xs font-mono text-white/40">{active.hint}</p>
              <p className="mt-4 text-[14px] leading-[1.7] text-[#cfc9c2]">
                {active.why}
              </p>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-[#ff7d1c]">Who it&apos;s for</p>
                <p className="mt-1 text-sm font-medium text-white">{active.who}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
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
