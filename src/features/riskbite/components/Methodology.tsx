"use client";

import React from "react";
import { Calculator, Database, Gauge, TrendingUp, Shield, Info } from "lucide-react";
import Reveal from "@/components/reveal";

export default function Methodology() {
  return (
    <section
      id="riskbite-methodology"
      className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]"
    >
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              How it works · Fortress-aligned
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Teaser-simple. <span className="text-[#ff7d1c]">Directionally true.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              RiskBite uses the same weighted scoring logic as Fortress — kept intentionally simple as a
              teaser, not the full continuous-monitoring engine. Dollar exposure is a range derived from
              published breach-cost benchmarks.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left: scoring */}
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center mb-6">
                <Gauge className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">0–100 Risk Posture Score</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Each of the 8 answers carries a weighted contribution (e.g., no continuous monitoring, recent
                incident, extensive PII). Raw points are normalised to 0–100 so the free tool stays directionally
                consistent with what paying Fortress customers see.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-black p-4">
                  <p className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500">Low</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-400">0–30</p>
                  <p className="text-xs text-slate-500">Controlled posture</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black p-4">
                  <p className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500">Critical</p>
                  <p className="mt-1 text-sm font-semibold text-red-400">86–100</p>
                  <p className="text-xs text-slate-500">Immediate attention</p>
                </div>
                <div className="rounded-xl border border-orange-500/20 bg-orange-500/[0.06] p-4 col-span-2">
                  <p className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400">Bands</p>
                  <p className="mt-1 text-sm text-slate-200">Moderate 31–50 · Elevated 51–70 · High 71–85</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-600 flex items-start gap-2">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                Methodology owned by the Fortress scoring team — reviewed so free-tool numbers don&apos;t drift from
                the paid engine.
              </p>
            </div>
          </Reveal>

          {/* Right: dollar exposure */}
          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl border border-orange-500/20 bg-gradient-to-b from-orange-500/[0.06] to-transparent p-6 sm:p-8 shadow-[0_0_45px_rgba(249,115,22,0.08)]">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Dollar exposure as a range</h3>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                Industry + size set the baseline from breach-cost data (e.g., IBM Cost of a Data Breach — healthcare
                ~$9.77M, BFSI ~$6.08M, avg ~$4.45M). Your posture score adjusts the range — never a false-precision
                single number.
              </p>

              <div className="mt-6 rounded-xl border border-white/10 bg-black p-4">
                <p className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 mb-3">
                  Formula (simplified)
                </p>
                <p className="font-mono text-sm text-white break-words">
                  exposure = benchmark<sub className="text-slate-500">industry</sub> × scale<sub className="text-slate-500">size</sub> ×
                  mult<sub className="text-slate-500">posture</sub>
                </p>
                <p className="mt-1 font-mono text-sm text-orange-400 break-words">
                  range = 0.82× exposure — 1.18× exposure
                </p>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Database className="w-3.5 h-3.5 text-orange-400" />
                  <span>Benchmarks from published breach-cost data, updated annually</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Calculator className="w-3.5 h-3.5 text-orange-400" />
                  <span>Size: 0.15× (1–10) → 2.2× (1,000+) · posture: 0.7× → 1.65×</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Shield className="w-3.5 h-3.5 text-orange-400" />
                  <span>Range presentation avoids single-number false precision</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom: lead handling teaser */}
        <Reveal delay={0.14}>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h4 className="text-sm font-bold tracking-tight text-white uppercase">
              What happens after you unlock?
            </h4>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm leading-relaxed">
              <div>
                <p className="font-semibold text-white">Gated full results</p>
                <p className="mt-1 text-slate-400">
                  Dollar range, top 3 drivers, and a downloadable PDF — standard freemium-calculator pattern for
                  high completion + lead quality.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Zoho CRM lead</p>
                <p className="mt-1 text-slate-400">
                  Every email-captured session becomes a Lead with score, range, and 8 answers as custom fields +
                  automatic PDF via email.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">High-risk fast lane</p>
                <p className="mt-1 text-slate-400">
                  Top risk band or large orgs trigger an internal notification so sales can follow up same-day, not
                  just nurture.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300">
                Primary CTA: <span className="text-white font-semibold">Book a demo to reduce exposure</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300">
                If Q7/Q8 signal intent → <span className="text-white font-semibold">/compliance</span> or{" "}
                <span className="text-white font-semibold">Compass</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
