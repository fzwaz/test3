"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const NODES = [
  { label: "Policy Issued", active: false },
  { label: "Continuous Risk Intelligence", active: true },
  { label: "Meaningful Change Detected", active: true },
  { label: "Underwriting / Risk Review", active: false },
];

export default function Monitoring() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 text-center">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              The underwriting decision is not the end
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Bind the policy. <span className="text-[#ff7d1c]">Keep understanding the risk.</span>
            </h2>
            <p className="mt-5 text-[15px] text-[#cfc9c2] leading-relaxed max-w-xl mx-auto">
              Cyber risk continues to change after a policy is issued. Compass
              helps maintain visibility into meaningful changes in policyholder
              risk — creating opportunities for earlier conversations and
              proactive risk management.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col items-stretch">
          {NODES.map((n, i) => (
            <React.Fragment key={n.label}>
              <Reveal delay={i * 0.05}>
                <div
                  className={cn(
                    "rounded-2xl border p-5 text-center transition-all duration-300",
                    n.active
                      ? "border-orange-500/40 bg-orange-500/[0.06] shadow-[0_0_40px_rgba(249,115,22,0.15)]"
                      : "border-white/10 bg-white/[0.02]",
                  )}
                >
                  <p className={cn("text-base sm:text-lg font-bold tracking-tight", n.active ? "text-white" : "text-slate-300")}>
                    {n.label}
                  </p>
                </div>
              </Reveal>
              {i < NODES.length - 1 && (
                <div className="flex justify-center py-3" aria-hidden>
                  <ArrowDown className="w-5 h-5 text-orange-500/60" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
