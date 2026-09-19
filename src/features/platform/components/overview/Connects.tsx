"use client";

import React from "react";
import { Activity, ShieldAlert, Compass, Scale, MailCheck } from "lucide-react";
import Reveal from "@/components/reveal";

const CHAIN = [
  { name: "Pulse", tag: "See what's happening", Icon: Activity, step: "01" },
  { name: "Fortress", tag: "Understand what it means", Icon: ShieldAlert, step: "02" },
  { name: "Compass", tag: "Use intelligence to underwrite risk", Icon: Compass, step: "03" },
];

const SIDE = [
  { name: "Accord", tag: "Govern AI risk", Icon: Scale, step: "04" },
  { name: "DMARC Monitoring", tag: "Protect your domain and identity", Icon: MailCheck, step: "05" },
];

function ChainCard({ item, isActive, delay }: { item: (typeof CHAIN)[number]; isActive: boolean; delay: number }) {
  return (
    <Reveal delay={delay} className="relative">
      <div
        className={`group relative isolate overflow-hidden rounded-2xl border p-5 flex items-center gap-4 min-h-[82px] transition-all duration-300 ${
          isActive
            ? "border-[#db7043]/50 bg-black shadow-[0_0_0_1px_rgba(219,112,67,0.18),0_12px_40px_rgba(219,112,67,0.18)]"
            : "border-white/10 bg-black hover:border-white/20 shadow-none"
        }`}
      >
        {isActive && <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#db7043]/70 to-transparent" />}
        <div
          className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${
            isActive ? "bg-[#db7043]/15 border-[#db7043]/40 text-[#db7043]" : "bg-white/[0.04] border-white/10 text-slate-400 group-hover:text-white"
          }`}
        >
          <item.Icon className="w-5 h-5" />
        </div>
        <div className="text-left min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-[#db7043]/70">{item.step}</span>
            <span className={`text-[15px] font-bold tracking-tight truncate ${isActive ? "text-white" : "text-slate-100"}`}>{item.name}</span>
            {isActive && <span className="ml-1 w-1.5 h-1.5 rounded-full bg-[#db7043] shadow-[0_0_8px_rgba(219,112,67,0.9)]" />}
          </div>
          <p className={`text-sm leading-snug ${isActive ? "text-[#ffcfb0]" : "text-slate-500"}`}>{item.tag}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Connects() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06] overflow-hidden">
      {/* ambient */}
      <div className="pointer-events-none absolute -top-28 right-0 w-[520px] h-[520px] bg-[#db7043]/[0.06] rounded-full blur-[120px]" />
      <div className="max-w-[1100px] mx-auto relative">
        <Reveal>
          <div className="mb-10 md:mb-12 text-center max-w-2xl mx-auto">
            <p className="text-[#db7043] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Connected risk intelligence
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Different problems. <span className="text-[#db7043]">One clearer view of risk.</span>
            </h2>
            <p className="mt-5 text-[15px] text-[#cfc9c2] leading-relaxed">
              Each product solves a specific risk problem. Together, they help organisations move from visibility to
              understanding, governance, and action.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Main chain — confident pipeline */}
          <div className="relative flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              {CHAIN.map((n, i) => (
                <ChainCard key={n.name} item={n} isActive={true} delay={i * 0.07} />
              ))}
            </div>
            <p className="mt-4 text-center text-[11px] font-mono tracking-[0.18em] uppercase text-white/30">Pipeline · Visibility → Context → Decision</p>
          </div>

          {/* Side products — same card language, offset like branches */}
          <div className="flex flex-col gap-3">
            {SIDE.map((n, i) => (
              <Reveal key={n.name} delay={0.12 + i * 0.08}>
                <div className="group relative isolate overflow-hidden rounded-2xl border p-5 flex items-center gap-4 min-h-[82px] border-[#db7043]/50 bg-black shadow-[0_0_0_1px_rgba(219,112,67,0.18),0_12px_40px_rgba(219,112,67,0.18)] transition-all duration-300">
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#db7043]/70 to-transparent" />
                  <div className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 bg-[#db7043]/15 border-[#db7043]/40 text-[#db7043]">
                    <n.Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold tracking-[0.18em] text-[#db7043]/70">{n.step}</span>
                      <p className="text-[15px] font-bold text-white tracking-tight truncate">{n.name}</p>
                      <span className="ml-1 w-1.5 h-1.5 rounded-full bg-[#db7043] shadow-[0_0_8px_rgba(219,112,67,0.9)]" />
                    </div>
                    <p className="text-sm leading-snug text-[#ffcfb0]">{n.tag}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-4 text-center min-h-[82px] flex items-center justify-center">
                <p className="text-xs font-mono tracking-[0.18em] uppercase text-white/40">Together — visibility, understanding, governance & action</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
