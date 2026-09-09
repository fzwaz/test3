"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, ShieldAlert, ScanLine } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BeamsBackground from "@/components/BeamsBackground";
import { useHeroReveal } from "@/hooks/useHeroReveal";

const LEGIT = ["Google Workspace", "Microsoft 365", "SendGrid"];

/** Looping spoof-blocked story: flow → intruder → scan → blocked. */
function SpoofVisual() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPhase((p) => (p + 1) % 4), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
      <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
        Live · Inbound mail flow
      </p>

      {/* Legit senders */}
      <div className="space-y-2">
        {LEGIT.map((s) => (
          <div key={s} className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-3.5 py-2.5">
            <span className="flex items-center gap-2.5 text-[13px] text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              {s}
            </span>
            <span className="text-[11px] font-mono text-slate-600">→ inbox</span>
          </div>
        ))}
      </div>

      {/* Domain */}
      <div className="my-3 rounded-xl border border-orange-500/30 bg-orange-500/[0.06] px-3.5 py-2.5 text-center">
        <p className="text-sm font-bold text-white tracking-tight">YOUR DOMAIN</p>
        <p className="text-[11px] font-mono text-orange-400">risknox.ai</p>
      </div>

      {/* Attacker row */}
      <div
        className={cn(
          "flex items-center justify-between rounded-xl border px-3.5 py-2.5 transition-all duration-500",
          phase === 0 && "opacity-0 -translate-y-1",
          phase === 1 && "opacity-100 border-rose-500/50 bg-rose-500/[0.07] shadow-[0_0_20px_rgba(244,63,94,0.25)]",
          phase === 2 && "opacity-100 border-amber-500/50 bg-amber-500/[0.07]",
          phase === 3 && "opacity-40 border-white/10 bg-white/[0.02]",
        )}
      >
        <span className="flex items-center gap-2.5 text-[13px] text-slate-200">
          {phase === 3 ? (
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : (
            <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
          )}
          attacker@yourdomain.com
        </span>
        <span className={cn("text-[11px] font-mono", phase === 3 ? "text-emerald-400 line-through" : "text-rose-400")}>
          {phase === 3 ? "✕ blocked" : "→ inbox?"}
        </span>
      </div>

      {/* Status banner */}
      <div className="mt-3 min-h-[52px]">
        {phase === 2 && (
          <div className="flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/[0.08] px-3.5 py-2.5 text-[13px] font-semibold text-amber-300">
            <ScanLine className="w-4 h-4 animate-pulse" />
            Scanning SPF → DKIM → DMARC…
          </div>
        )}
        {phase === 3 && (
          <div className="flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/[0.08] px-3.5 py-2.5 text-[13px] font-semibold text-emerald-300">
            <ShieldCheck className="w-4 h-4" />
            DMARC ENFORCED · BLOCKED
          </div>
        )}
        {phase === 1 && (
          <div className="flex items-center gap-2 rounded-xl border border-rose-500/40 bg-rose-500/[0.08] px-3.5 py-2.5 text-[13px] font-semibold text-rose-300">
            <ShieldAlert className="w-4 h-4" />
            UNAUTHORISED SENDER DETECTED
          </div>
        )}
      </div>

      {/* Phase dots */}
      <div className="mt-2 flex items-center gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={cn("h-1 rounded-full transition-all duration-300", i === phase ? "w-6 bg-orange-500" : "w-1.5 bg-white/20")} />
        ))}
      </div>
    </div>
  );
}

export default function DmarcHero() {
  const { mounted, textStyle } = useHeroReveal();

  return (
    <section
      className="relative min-h-[92vh] md:min-h-screen flex flex-col overflow-hidden bg-[#000000]"
      style={{ contain: "layout style" }}
    >
      <BeamsBackground mounted={mounted} />

      <div className="relative z-10 flex-1 flex items-center px-6 sm:px-10 lg:px-16 pt-28 pb-24 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center w-full">

          {/* ── LEFT ── */}
          <div className="lg:w-[58%] flex flex-col justify-center items-start">
            <div style={textStyle(700)} className="mb-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-[7px] rounded-full bg-black/60 border border-orange-500/25 text-orange-400 text-xs font-semibold tracking-[0.22em] uppercase shadow-[0_0_24px_rgba(249,115,22,0.25)] backdrop-blur-md">
                <span className="grid grid-cols-3 gap-[3px] w-3.5 items-center justify-center" aria-hidden>
                  <span className="w-1 h-1 rounded-[1px] bg-orange-400" />
                  <span className="w-1 h-1 rounded-[1px] bg-orange-400" />
                  <span className="w-1 h-1 rounded-[1px] bg-orange-400" />
                  <span className="w-1 h-1 rounded-[1px] bg-orange-400" />
                  <span className="w-1 h-1 rounded-[1px] bg-orange-400" />
                  <span className="w-1 h-1 rounded-[1px] bg-orange-400" />
                </span>
                <span>Risknox · Brand Protection</span>
              </div>
            </div>

            <h1 className="text-[38px] sm:text-[50px] lg:text-[60px] font-bold text-[#f4f1ed] tracking-[-0.02em] leading-[1.08] select-none">
              <span className="block overflow-hidden pb-1">
                <span className="block" style={textStyle(900)}>Stop attackers from</span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="block" style={textStyle(1050)}>
                  sending email <span className="text-[#ff7d1c]">as you.</span>
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-[15px] lg:text-base text-[#cfc9c2] font-normal leading-[1.65]" style={textStyle(1300)}>
              Know exactly who is sending email using your domain. Monitor
              authentication, identify unauthorised senders, and move safely
              toward complete DMARC enforcement.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4" style={textStyle(1500)}>
              <Link
                href="#senders"
                className="group inline-flex items-center justify-center gap-3 px-7 py-[15px] rounded-[10px] bg-black/70 text-white font-semibold text-[15px] border border-[#f97316]/70 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-400 hover:shadow-[0_0_28px_rgba(249,115,22,0.35)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <span>Explore DMARC Monitoring</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact?role=dmarc-check"
                className="group inline-flex items-center justify-center gap-3 px-7 py-[15px] rounded-[10px] bg-black/70 text-white font-semibold text-[15px] border border-white/15 hover:border-orange-400 hover:shadow-[0_0_28px_rgba(249,115,22,0.25)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <span>Check Your Domain</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Spoof animation ── */}
          <div
            className="lg:w-[42%] w-full flex flex-col justify-center items-start mt-14 lg:mt-0 lg:pl-14 lg:ml-6 lg:border-l border-white/10"
            style={textStyle(1150)}
          >
            <SpoofVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
