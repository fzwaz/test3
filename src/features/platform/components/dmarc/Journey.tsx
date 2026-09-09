"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const STAGES = [
  { n: "01", name: "Monitor", policy: "p=none", description: "Understand who is sending." },
  { n: "02", name: "Protect", policy: "p=quarantine", description: "Handle suspicious email." },
  { n: "03", name: "Enforce", policy: "p=reject", description: "Block unauthorised senders." },
];

export default function Journey() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % STAGES.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 text-center max-w-2xl mx-auto">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Don&apos;t jump straight to reject
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Move to enforcement <span className="text-[#ff7d1c]">without breaking email.</span>
            </h2>
            <p className="mt-5 text-[15px] text-[#cfc9c2] leading-relaxed">
              Every organisation&apos;s email environment is different. DMARC
              Monitoring helps you understand legitimate sending sources first,
              so stronger enforcement can be introduced with greater confidence.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row items-stretch gap-4">
          {STAGES.map((s, i) => (
            <React.Fragment key={s.n}>
              <Reveal delay={i * 0.1} className="flex-1">
                <div
                  className={cn(
                    "h-full rounded-2xl border p-6 sm:p-8 text-center transition-all duration-500",
                    i === active
                      ? "border-orange-500/50 bg-orange-500/[0.07] shadow-[0_0_45px_rgba(249,115,22,0.2)]"
                      : "border-white/10 bg-white/[0.02]",
                  )}
                >
                  <p className="text-xs font-mono font-bold text-slate-600 tabular-nums">{s.n}</p>
                  <p className={cn("mt-2 text-lg font-bold tracking-tight", i === active ? "text-white" : "text-slate-300")}>
                    {s.name}
                  </p>
                  <p className="mt-3 inline-block px-4 py-1.5 rounded-full bg-black/60 border border-orange-500/30 font-mono text-sm font-bold text-orange-400">
                    {s.policy}
                  </p>
                  <p className="mt-3 text-sm text-slate-400">{s.description}</p>
                </div>
              </Reveal>
              {i < STAGES.length - 1 && (
                <div className="hidden md:flex items-center" aria-hidden>
                  <ArrowRight className="w-6 h-6 text-orange-500/60" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
