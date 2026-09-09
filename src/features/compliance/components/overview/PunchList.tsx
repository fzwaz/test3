"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

const ROWS = [
  { control: "A.5.1", name: "Information security policies", status: "Present", detail: "ISMS policy approved. Last reviewed Q3. Owner: CISO." },
  { control: "A.5.7", name: "Threat intelligence", status: "Gap", detail: "No documented threat intel source. Add ANIDS or commercial feed." },
  { control: "A.6.3", name: "Security awareness training", status: "Partial", detail: "Annual training exists. Phishing simulation cadence missing." },
  { control: "A.8.7", name: "Malware protection", status: "Present", detail: "EDR active across 96% of fleet. Dev systems pending." },
  { control: "A.8.15", name: "Logging", status: "Gap", detail: "No central SIEM. Logs split across cloud and on-prem tools." },
  { control: "A.8.24", name: "Cryptography", status: "Present", detail: "TLS 1.3 enabled. KMS encryption active. Rotation every 90 days." },
];

const STATUS_STYLE: Record<string, string> = {
  Present: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  Partial: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  Gap: "bg-rose-500/10 text-rose-400 border-rose-500/30",
};

export default function PunchList() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Sample punch-list · ISO 27001:2022
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              What the <span className="text-[#ff7d1c]">gap report</span> actually looks like.
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Not a 90-page mystery deck. A working punch-list with control
              status, evidence notes, owners, and next steps your team can
              actually act on.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.015] overflow-hidden">
            {/* Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 sm:px-8 py-4 border-b border-white/10 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500">
              <span className="col-span-1">Control</span>
              <span className="col-span-3">Name</span>
              <span className="col-span-2">Status</span>
              <span className="col-span-6">Detail</span>
            </div>
            {ROWS.map((r) => (
              <div
                key={r.control}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 sm:px-8 py-5 border-b border-white/[0.07] last:border-b-0 hover:bg-orange-500/[0.03] transition-colors"
              >
                <span className="md:col-span-1 text-sm font-mono font-bold text-orange-400">{r.control}</span>
                <span className="md:col-span-3 text-sm font-semibold text-white">{r.name}</span>
                <span className="md:col-span-2">
                  <span className={cn("inline-block px-3 py-1 rounded-full border text-xs font-semibold", STATUS_STYLE[r.status])}>
                    {r.status}
                  </span>
                </span>
                <span className="md:col-span-6 text-sm text-slate-400 leading-relaxed">{r.detail}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
