"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/reveal";

const BEFORE = {
  tag: "Status quo",
  title: "Unclear scope. Manual proof. Payment risk stress.",
  points: [
    { title: "CDE confusion", description: "Teams struggle to define which systems, networks, vendors, and apps are inside PCI scope." },
    { title: "Evidence scattered", description: "Scan reports, access reviews, logs, policies, and remediation proof live across different folders." },
    { title: "Remediation delays", description: "Vulnerabilities, segmentation issues, access gaps, and configuration fixes move slower than they should." },
    { title: "Validation pressure", description: "SAQ, ROC, AOC, and customer evidence requests become deadline-driven instead of readiness-driven." },
  ],
  footer: "PCI visibility stays low.",
};

const AFTER = {
  tag: "One pod",
  title: "Mapped scope. Live evidence. Cleaner payment readiness.",
  points: [
    { title: "CDE mapped", description: "Compass helps structure payment flows, systems, owners, controls, and evidence requirements." },
    { title: "Evidence organised", description: "Scan results, policies, logs, approvals, access records, and remediation proof stay in one place." },
    { title: "Gaps visible early", description: "Open risks, missing artefacts, overdue tasks, and control issues are tracked before audit week." },
    { title: "Framework reuse", description: "Evidence can support PCI DSS, ISO 27001, SOC 2, DPDPA, and customer security reviews." },
  ],
  footer: "PCI readiness becomes visible.",
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
              PCI DSS before and after <span className="text-[#ff7d1c]">Compass enters the payment flow.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              The old way runs on manual scan records. Risknox uses Compass to keep
              payment controls visible, evidence live, and owners accountable.
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
