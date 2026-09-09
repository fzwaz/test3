"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const CHAIN = [
  { name: "Pulse", tag: "See what's happening", active: false },
  { name: "Fortress", tag: "Understand what it means", active: true },
  { name: "Compass", tag: "Use intelligence to underwrite risk", active: false },
];

const SIDE = [
  { name: "Accord", tag: "Govern AI risk" },
  { name: "DMARC Monitoring", tag: "Protect your domain and identity" },
];

export default function Connects() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 text-center max-w-2xl mx-auto">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Connected risk intelligence
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Different problems. <span className="text-[#ff7d1c]">One clearer view of risk.</span>
            </h2>
            <p className="mt-5 text-[15px] text-[#cfc9c2] leading-relaxed">
              Each product solves a specific risk problem. Together, they help
              organisations move from visibility to understanding, governance,
              and action.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          {/* Main chain */}
          <div className="flex flex-col items-stretch">
            {CHAIN.map((n, i) => (
              <React.Fragment key={n.name}>
                <Reveal delay={i * 0.05}>
                  <div
                    className={cn(
                      "rounded-2xl border p-5 text-center transition-all duration-300",
                      n.active
                        ? "border-orange-500/40 bg-orange-500/[0.06] shadow-[0_0_40px_rgba(249,115,22,0.15)]"
                        : "border-white/10 bg-white/[0.02]",
                    )}
                  >
                    <p className={cn("text-lg font-bold tracking-tight", n.active ? "text-white" : "text-slate-200")}>
                      {n.name}
                    </p>
                    <p className={cn("mt-0.5 text-sm", n.active ? "text-orange-400" : "text-slate-500")}>
                      {n.tag}
                    </p>
                  </div>
                </Reveal>
                {i < CHAIN.length - 1 && (
                  <div className="flex justify-center py-2.5" aria-hidden>
                    <ArrowDown className="w-5 h-5 text-orange-500/60" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Side products */}
          <div className="flex flex-col gap-5 lg:pt-8">
            {SIDE.map((n, i) => (
              <Reveal key={n.name} delay={0.1 + i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
                  <p className="text-lg font-bold text-slate-200 tracking-tight">{n.name}</p>
                  <p className="mt-0.5 text-sm text-slate-500">{n.tag}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
