"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import Reveal from "@/components/reveal";

const STEPS = [
  {
    n: "01",
    title: "Connect Your Domain",
    description: "Route DMARC aggregate reports into Risknox for analysis.",
  },
  {
    n: "02",
    title: "See Every Sender",
    description: "Identify the services legitimately sending email using your domain.",
  },
  {
    n: "03",
    title: "Investigate the Unknown",
    description: "Isolate rogue senders, unauthorised relays, and authentication failures.",
  },
  {
    n: "04",
    title: "Enforce Protection",
    description:
      "Move safely toward stronger DMARC policies without disrupting legitimate business email.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 text-center">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              From unknown to protected
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Four steps to <span className="text-[#ff7d1c]">stronger domain protection.</span>
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col items-stretch">
          {STEPS.map((s, i) => (
            <React.Fragment key={s.n}>
              <Reveal delay={i * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <span className="shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-sm font-mono font-bold text-orange-400 tabular-nums">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
              {i < STEPS.length - 1 && (
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
