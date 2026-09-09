"use client";

import React from "react";
import { ArrowRight, Siren, Globe2, BrainCircuit, Zap, LineChart, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const STATS = [
  { Icon: Siren, value: "07", label: "Priority Alerts" },
  { Icon: Globe2, value: "1,248", label: "Assets Monitored" },
  { Icon: Zap, value: "23", label: "Active Signals" },
  { Icon: BrainCircuit, value: "41", label: "Anomalies Today" },
];

const ALERTS = [
  { title: "Credential exposure detected in public repo", meta: "Secrets scanning · 4 min ago", level: "Critical" },
  { title: "Anomalous login velocity across admin accounts", meta: "Behavioural analysis · 18 min ago", level: "High" },
  { title: "New internet-facing API without auth gate", meta: "Attack surface · 42 min ago", level: "High" },
  { title: "Unusual outbound traffic to rare destination", meta: "Network telemetry · 1 hr ago", level: "Medium" },
];

const LEVEL_STYLE: Record<string, string> = {
  Critical: "bg-rose-500/10 text-rose-400 border-rose-500/30",
  High: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  Medium: "bg-sky-500/10 text-sky-400 border-sky-500/30",
};

const SURFACE = [
  { label: "Domains", value: "312" },
  { label: "Cloud workloads", value: "486" },
  { label: "APIs", value: "198" },
  { label: "Endpoints", value: "252" },
];

const ACTIONS = [
  { n: "01", title: "Rotate exposed credentials", description: "Revoke and rotate the leaked secret, then rescan the repo history." },
  { n: "02", title: "Enforce step-up auth on admin logins", description: "Require phishing-resistant MFA for the flagged admin group." },
  { n: "03", title: "Gate the exposed API", description: "Place the new endpoint behind auth and add it to continuous monitoring." },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Live security intelligence
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Know what&apos;s happening <span className="text-[#ff7d1c]">across your environment.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-[#07080a] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_50px_rgba(249,115,22,0.07)]">
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-white/10">
              <div>
                <p className="text-sm font-bold tracking-[0.18em] text-white">PULSE</p>
                <p className="text-xs text-slate-500 mt-0.5">Live Security Intelligence</p>
              </div>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Live
              </span>
            </div>
            <p className="px-5 sm:px-6 pt-3.5 text-sm text-slate-400">
              Prioritised detections with relevant context. <span className="text-slate-600">· Sample data</span>
            </p>

            {/* Stat row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-5 sm:px-6 py-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/25 flex items-center justify-center shrink-0">
                    <s.Icon className="w-4 h-4 text-orange-400" />
                  </span>
                  <span>
                    <span className="block text-2xl font-bold text-white tabular-nums tracking-tight leading-none">{s.value}</span>
                    <span className="mt-1 block text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-slate-400">{s.label}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Alerts + Surface */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 px-5 sm:px-6 pb-4">
              {/* Priority alerts */}
              <div className="lg:col-span-3 rounded-xl border border-white/10 bg-white/[0.015] px-4 py-3.5">
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Priority Alerts
                </p>
                <div className="space-y-1">
                  {ALERTS.map((a) => (
                    <div key={a.title} className="flex items-center justify-between gap-3 py-2 border-b border-white/[0.06] last:border-b-0">
                      <div className="min-w-0">
                        <p className="text-sm text-slate-200 truncate">{a.title}</p>
                        <p className="text-[11px] text-slate-600 mt-0.5">{a.meta}</p>
                      </div>
                      <span className={cn("shrink-0 px-2.5 py-0.5 rounded-full border text-[11px] font-semibold", LEVEL_STYLE[a.level])}>
                        {a.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attack surface + trends */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.015] px-4 py-3.5">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 mb-2.5">
                    Attack Surface
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {SURFACE.map((s) => (
                      <div key={s.label} className="rounded-lg bg-black/40 border border-white/[0.07] px-3 py-2.5">
                        <p className="text-lg font-bold text-white tabular-nums leading-none">{s.value}</p>
                        <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.015] px-4 py-3.5 flex-1">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 flex items-center gap-2">
                    <LineChart className="w-3.5 h-3.5 text-orange-400" /> Security Trends
                  </p>
                  <div className="h-20 relative">
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                      <defs>
                        <linearGradient id="pulse-trend" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#f97316" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,32 L12,26 L24,29 L36,20 L48,23 L60,14 L72,18 L84,10 L100,13 L100,40 L0,40 Z" fill="url(#pulse-trend)" />
                      <polyline points="0,32 12,26 24,29 36,20 48,23 60,14 72,18 84,10 100,13" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="mt-1.5 text-[11px] text-slate-600">Detection volume · last 30 days</p>
                </div>
              </div>
            </div>

            {/* AI detection + actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-5 sm:px-6 pb-4">
              <div className="rounded-xl border border-orange-500/20 bg-orange-500/[0.04] px-4 py-3.5">
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-orange-400 mb-2 flex items-center gap-2">
                  <BrainCircuit className="w-3.5 h-3.5" /> AI Detection
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Behavioural anomalies and suspicious activity identified through continuous analysis — correlated with threat intelligence before anything reaches your queue.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.015] px-4 py-3.5">
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 flex items-center gap-2">
                  <Target className="w-3.5 h-3.5 text-orange-400" /> Recommended Actions
                </p>
                <div className="space-y-2">
                  {ACTIONS.map((a) => (
                    <div key={a.n} className="flex gap-3 items-start">
                      <span className="text-[11px] font-mono font-bold text-[#ff7d1c] tabular-nums pt-0.5">{a.n}</span>
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold text-white leading-snug">{a.title}</p>
                        <p className="text-xs text-slate-500 leading-relaxed">{a.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-5 sm:px-6 py-3 border-t border-white/10">
              <span className="text-[11px] text-slate-500">Policy-violation detection · posture monitoring · log analysis</span>
              <span className="inline-flex items-center gap-1 text-[13px] font-medium text-orange-400">
                View live signals <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
