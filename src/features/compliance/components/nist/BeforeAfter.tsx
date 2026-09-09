"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/reveal";

const BEFORE = {
  tag: "Status quo",
  title: "Scattered tools. Unclear priorities. Reactive security.",
  points: [
    { title: "Limited risk visibility", description: "Teams struggle to understand which assets, threats, vulnerabilities, and dependencies create the greatest cybersecurity risk." },
    { title: "Security control gaps", description: "Policies and controls exist across different teams and tools, making it difficult to understand what is implemented, missing, or ineffective." },
    { title: "Reactive incident response", description: "Security teams often focus on responding after incidents occur instead of maintaining clear detection, response, and recovery processes." },
    { title: "Leadership visibility gaps", description: "Executives and boards lack a clear view of cybersecurity maturity, risk exposure, remediation priorities, and resilience progress." },
  ],
  footer: "Cybersecurity readiness stays unclear.",
};

const AFTER = {
  tag: "One platform",
  title: "Clear risks. Structured controls. Continuous resilience.",
  points: [
    { title: "Cyber risks prioritised", description: "Risknox helps organisations identify critical assets, understand risk exposure, and focus security resources on the areas that matter most." },
    { title: "Controls organised", description: "Security controls, policies, evidence, owners, and remediation activities stay structured and easier to manage." },
    { title: "Incident readiness strengthened", description: "Detection processes, response procedures, responsibilities, evidence, and recovery plans remain visible before an incident creates pressure." },
    { title: "Leadership dashboard", description: "Management gains a clearer view of cybersecurity maturity, risk exposure, control gaps, remediation progress, and overall resilience." },
  ],
  footer: "Cybersecurity readiness becomes measurable.",
};

export default function BeforeAfter() {
  return (
    <section className="relative w-full py-16 md:py-20 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Why Risknox
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              NIST CSF, from scattered efforts <span className="text-[#ff7d1c]">to measurable resilience.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Risknox helps leadership understand cyber risk, gives security teams
              clear priorities, and creates a structured view of cybersecurity
              readiness across the organisation.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* BEFORE */}
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 opacity-90">
              <p className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-zinc-500 mb-2">
                Before · {BEFORE.tag}
              </p>
              <h3 className="text-xl font-bold text-zinc-200 tracking-tight mb-6">
                {BEFORE.title}
              </h3>
              <div className="space-y-5">
                {BEFORE.points.map((p, i) => (
                  <div key={p.title} className="flex gap-4">
                    <span className="text-xs font-mono font-bold text-zinc-600 tabular-nums pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">{p.title}</p>
                      <p className="mt-1 text-sm text-zinc-500 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-7 pt-5 border-t border-white/10 text-sm text-zinc-500">
                Net — <span className="text-zinc-300">{BEFORE.footer}</span>
              </p>
            </div>
          </Reveal>

          {/* AFTER */}
          <Reveal className="h-full" delay={0.12}>
            <div className="h-full rounded-2xl border border-orange-500/30 bg-gradient-to-b from-orange-500/[0.07] to-transparent p-6 sm:p-8 shadow-[0_0_45px_rgba(249,115,22,0.1)]">
              <p className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-[#ff7d1c] mb-2">
                After · {AFTER.tag}
              </p>
              <h3 className="text-xl font-bold text-white tracking-tight mb-6">
                {AFTER.title}
              </h3>
              <div className="space-y-5">
                {AFTER.points.map((p) => (
                  <div key={p.title} className="flex gap-4">
                    <CheckCircle2 className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white uppercase tracking-wide">{p.title}</p>
                      <p className="mt-1 text-sm text-slate-400 leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-7 pt-5 border-t border-orange-500/20 text-sm text-slate-400">
                Outcome — <span className="text-white font-medium">{AFTER.footer}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
