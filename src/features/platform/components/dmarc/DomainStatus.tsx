"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const ROWS = ["SPF", "DKIM", "DMARC"];
const POLICIES = [
  { policy: "p=none", label: "Monitor" },
  { policy: "p=quarantine", label: "Protect" },
  { policy: "p=reject", label: "Enforce" },
];

export default function DomainStatus() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), 1400);
    return () => clearInterval(t);
  }, []);

  const litRows = Math.min(3, (tick % 4) + 1);
  const showAll = tick % 4 === 3;
  const policy = POLICIES[tick % 3];

  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div>
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Your domain at a glance
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              One domain. <span className="text-[#ff7d1c]">A clearer security posture.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-2xl border border-white/10 bg-[#07080a] p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
            <p className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.9)]" />
              DMARC Monitoring
            </p>
            <p className="text-lg font-bold text-white tracking-tight mb-5">risknox.ai</p>

            <div className="space-y-2.5">
              {ROWS.map((r, i) => {
                const lit = i < litRows;
                return (
                  <div key={r} className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3">
                    <span className="font-mono text-sm font-bold text-slate-300">{r}</span>
                    <span className="flex items-center gap-2 text-[13px]">
                      <span className="flex gap-1" aria-hidden>
                        {[0, 1, 2, 3].map((d) => (
                          <span
                            key={d}
                            className={cn(
                              "w-1.5 h-1.5 rounded-full transition-all duration-300",
                              lit ? "bg-orange-500" : "bg-white/15",
                            )}
                          />
                        ))}
                      </span>
                      {lit ? (
                        <span className="flex items-center gap-1 font-semibold text-emerald-400">
                          <CheckCircle2 className="w-4 h-4" /> Active
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-slate-600">
                          <Loader className="w-4 h-4 animate-spin" /> Checking
                        </span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-xl border border-orange-500/25 bg-orange-500/[0.05] px-4 py-3.5">
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500">Policy</p>
              <p key={policy.policy} className="mt-1 font-mono text-lg font-bold text-orange-400">
                {policy.policy}
                <span className="ml-2 text-xs font-sans font-semibold text-slate-400">→ Continue toward {policy.label.toLowerCase() === "monitor" ? "enforcement" : "full enforcement"}</span>
              </p>
            </div>

            {showAll && (
              <p className="mt-3 text-[11px] text-slate-600">Product illustration · Sample data</p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
