"use client";

import React from "react";
import { Shield, LayoutDashboard, FileText, Crown } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/reveal";

export default function Portal() {
  return (
    <section id="pricing-portal" className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">— Portal & entitlements —</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Same shell. <span className="text-[#ff7d1c]">Scoped entitlements.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Whether you checked out online or were provisioned after a demo, you land in the same portal — only your
              frameworks, seats, and add-ons differ.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4">
                <LayoutDashboard className="w-5 h-5 text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">Self-serve customers</h3>
              <p className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 mt-1">Build Your Own GRC / DMARC paid tier</p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-400 leading-relaxed list-none">
                <li className="flex gap-2"><span className="text-orange-400 mt-1">•</span><span>Dashboard scoped to your purchased frameworks</span></li>
                <li className="flex gap-2"><span className="text-orange-400 mt-1">•</span><span>Billing & invoice history inside the portal</span></li>
                <li className="flex gap-2"><span className="text-orange-400 mt-1">•</span><span>Plan upgrade path — add frameworks/seats without migration</span></li>
                <li className="flex gap-2"><span className="text-orange-400 mt-1">•</span><span>Evidence & task center for each control</span></li>
              </ul>
              <Link href="/grc-builder" className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-zinc-100 transition-colors">Try the builder</Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-orange-500/20 bg-gradient-to-b from-orange-500/[0.06] to-transparent p-6 sm:p-8">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                <Crown className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">Enterprise customers</h3>
              <p className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400 mt-1">Provisioned post-demo</p>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-400 leading-relaxed list-none">
                <li className="flex gap-2"><span className="text-orange-400 mt-1">•</span><span>Full platform login for Pulse, Fortress, Compass, Accord, DPDPA Mapping</span></li>
                <li className="flex gap-2"><span className="text-orange-400 mt-1">•</span><span>Same portal shell as self-serve — broader entitlements</span></li>
                <li className="flex gap-2"><span className="text-orange-400 mt-1">•</span><span>Entitlements set by the Risknox team, not by checkout</span></li>
                <li className="flex gap-2"><span className="text-orange-400 mt-1">•</span><span>Onboarding + control mapping led by your team</span></li>
              </ul>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-white text-xs font-semibold hover:border-white/20 hover:text-white transition-colors">Book a demo</Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Try before you buy?</h4>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed max-w-2xl">
                Run <Link href="/risk-bite" className="text-white underline underline-offset-4 hover:text-orange-400">RiskBite</Link> for a 3-minute exposure teaser, or check a domain free on DMARC Monitoring before you pick a
                paid tier.
              </p>
            </div>
            <Shield className="w-6 h-6 text-slate-600 shrink-0 hidden sm:block ml-auto" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
