"use client";

import React from "react";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";
import DashboardChart from "./DashboardChart";

const CALLOUTS = [
  { title: "Risk Score", description: "Track your overall security posture." },
  { title: "Financial Exposure", description: "Understand potential cyber loss." },
  { title: "Threat Paths", description: "Understand potential routes to critical assets." },
  { title: "Priority Actions", description: "Focus on what reduces risk most." },
];

const DRIVERS = [
  { risk: "Exposed internet-facing asset", impact: "High", priority: "Critical" },
  { risk: "Unpatched critical vulnerability", impact: "High", priority: "Critical" },
  { risk: "Weak access configuration", impact: "Medium", priority: "High" },
  { risk: "Third-party exposure", impact: "Medium", priority: "Medium" },
];

const PRIORITY_STYLE: Record<string, string> = {
  Critical: "bg-rose-500/10 text-rose-400 border-rose-500/30",
  High: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  Medium: "bg-sky-500/10 text-sky-400 border-sky-500/30",
};

const ACTIONS = [
  {
    n: "01",
    title: "Patch critical exposure",
    impact: "High",
    description: "Address the highest-priority vulnerability affecting your risk exposure.",
    link: "View recommendation",
  },
  {
    n: "02",
    title: "Review attack path",
    impact: "High",
    description: "Investigate the identified path leading toward critical assets.",
    link: "View attack path",
  },
  {
    n: "03",
    title: "Strengthen access controls",
    impact: "Medium",
    description: "Reduce exposure associated with identity and access configuration.",
    link: "View recommendation",
  },
];

const TACTICS = [
  { name: "Initial Access", status: "Detected" },
  { name: "Credential Access", status: "Monitored" },
  { name: "Privilege Escalation", status: "Attention Required" },
  { name: "Lateral Movement", status: "Monitored" },
  { name: "Exfiltration", status: "Protected" },
];

const TACTIC_DOT: Record<string, string> = {
  Detected: "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.9)]",
  Monitored: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]",
  "Attention Required": "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.9)]",
  Protected: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]",
};

export default function Showcase() {
  return (
    <section id="showcase" className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              See the risk
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              One view of <span className="text-[#ff7d1c]">what matters most.</span>
            </h2>
          </div>
        </Reveal>

        {/* Callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {CALLOUTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-orange-500/20 bg-orange-500/[0.04] p-5">
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-orange-400 mb-1.5">
                  {String(i + 1).padStart(2, "0")} · {c.title}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Dashboard */}
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-[#07080a] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_50px_rgba(249,115,22,0.07)]">
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-white/10">
              <div>
                <p className="text-sm font-bold tracking-[0.18em] text-white">FORTRESS</p>
                <p className="text-xs text-slate-500 mt-0.5">Risk Overview</p>
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
              Your enterprise cyber risk, quantified. <span className="text-slate-600">· Sample data</span>
            </p>

            {/* KPI row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-5 sm:px-6 py-4">
              <div className="rounded-xl border border-orange-500/25 bg-orange-500/[0.05] px-4 py-3.5">
                <p className="text-3xl font-bold text-white tabular-nums tracking-tight">78</p>
                <p className="mt-0.5 text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-orange-400">Iris · Moderate</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5">
                <p className="text-3xl font-bold text-white tabular-nums tracking-tight">₹4.2 Cr</p>
                <p className="mt-0.5 text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-slate-400">Est. Loss</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5">
                <p className="text-3xl font-bold text-white tabular-nums tracking-tight">18%</p>
                <p className="mt-0.5 text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-slate-400">Attack Prob.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5">
                <p className="text-3xl font-bold text-white tabular-nums tracking-tight">02</p>
                <p className="mt-0.5 text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-slate-400">Critical Vulns</p>
              </div>
            </div>

            {/* Trend */}
            <div className="mx-5 sm:mx-6 mb-4 rounded-xl border border-white/10 bg-white/[0.015] px-4 py-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
                  Risk Trend — Last 30 Days
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                  <ArrowDownRight className="w-4 h-4" /> Improving risk posture
                </span>
              </div>
              <DashboardChart />
            </div>

            {/* Drivers + Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-5 sm:px-6 pb-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.015] px-4 py-3.5">
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                  Top Risk Drivers
                </p>
                <div className="space-y-1">
                  {DRIVERS.map((d) => (
                    <div key={d.risk} className="flex items-center justify-between gap-3 py-1.5 border-b border-white/[0.06] last:border-b-0">
                      <span className="text-sm text-slate-200">{d.risk}</span>
                      <span className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] text-slate-500 hidden sm:inline">{d.impact} impact</span>
                        <span className={cn("px-2.5 py-0.5 rounded-full border text-[11px] font-semibold", PRIORITY_STYLE[d.priority])}>
                          {d.priority}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.015] px-4 py-3.5">
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                  What to fix first
                </p>
                <div className="space-y-2.5">
                  {ACTIONS.map((a) => (
                    <div key={a.n} className="flex gap-4">
                      <span className="text-xs font-mono font-bold text-[#ff7d1c] tabular-nums pt-0.5">{a.n}</span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">
                          {a.title} <span className="ml-1 text-[11px] font-normal text-slate-500">· {a.impact} impact</span>
                        </p>
                        <p className="mt-0.5 text-[13px] text-slate-500 leading-relaxed">{a.description}</p>
                        <span className="mt-1.5 inline-flex items-center gap-1.5 text-[13px] font-medium text-orange-400">
                          {a.link} <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MITRE */}
            <div className="mx-5 sm:mx-6 mb-4 rounded-xl border border-white/10 bg-white/[0.015] px-4 py-3.5">
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 mb-2.5">
                MITRE ATT&amp;CK Coverage
              </p>
              <div className="flex flex-wrap gap-2">
                {TACTICS.map((t) => (
                  <span key={t.name} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-black/40 text-xs text-slate-300">
                    <span className={cn("w-1.5 h-1.5 rounded-full", TACTIC_DOT[t.status])} />
                    {t.name}
                    <span className="text-slate-500">· {t.status}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="px-5 sm:px-6 pb-4">
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
                Compliance &amp; Framework Alignment
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["ISO 27001", "SOC 2", "SEBI-CSCRF"].map((f) => (
                  <span key={f} className="px-4 py-1.5 rounded-md bg-orange-500/[0.07] border border-orange-500/25 text-orange-300 text-xs font-mono font-medium">
                    ✓ {f}
                  </span>
                ))}
                <span className="px-4 py-1.5 rounded-md bg-white/[0.03] border border-white/10 text-slate-400 text-xs font-mono font-medium">
                  +4 More Frameworks
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-5 sm:px-6 py-3 border-t border-white/10 text-[11px] text-slate-500">
              <span>Last Updated · 2 min ago</span>
              <span className="flex items-center gap-1.5 font-semibold uppercase tracking-wider text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Live risk intelligence
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
