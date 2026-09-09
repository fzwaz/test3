"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/reveal";

const BEFORE = {
  tag: "Status quo",
  title: "Manual evidence. Late surprises. Expensive follow-up.",
  points: [
    { title: "Manual evidence chase", description: "40+ hours a week lost to screenshots, folders, forms, and reminder emails." },
    { title: "Long certification cycles", description: "Teams spend 6–12 months moving from gap review to audit readiness." },
    { title: "Spreadsheet sprawl", description: "Control status, owners, evidence, and policies live across different files." },
    { title: "Audit-day discovery", description: "Gaps appear late because evidence is checked only when auditors ask." },
  ],
  footer: "Compliance visibility stays low.",
};

const AFTER = {
  tag: "One pod",
  title: "Live evidence. Cleaner ownership. Always closer to audit-ready.",
  points: [
    { title: "Evidence on autopilot", description: "Compass collects and tracks evidence across connected tools and workflows." },
    { title: "Faster readiness path", description: "Control gaps, tasks, evidence, and owners move through one guided programme." },
    { title: "Unified dashboard", description: "Leadership sees readiness score, open gaps, control health, and owner progress." },
    { title: "Framework reuse", description: "Controls and evidence can map across ISO 27001, SOC 2, DPDPA and more." },
  ],
  footer: "Audit readiness becomes visible.",
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
              ISO 27001 before and after <span className="text-[#ff7d1c]">Compass</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              The old way runs on spreadsheets, follow-ups, screenshots, and
              last-minute audit panic. Risknox keeps evidence live, gaps visible,
              and owners accountable.
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
                {AFTER.points.map((p, i) => (
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
