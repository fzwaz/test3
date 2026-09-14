"use client";

import React from "react";
import Link from "next/link";
import { Bell, LineChart, Layers, ShoppingCart, ArrowRight, ShieldCheck } from "lucide-react";
import Reveal from "@/components/reveal";

const BULLETS = [
  {
    Icon: Bell,
    title: "Continuous monitoring with real-time alerts",
    desc: "Alerts on SPF/DKIM/DMARC record changes or failures — know the moment authentication breaks.",
  },
  {
    Icon: LineChart,
    title: "Domain reputation tracking over time",
    desc: "Watch reputation and enforcement posture trend — not just a one-time snapshot.",
  },
  {
    Icon: Layers,
    title: "Multi-domain support",
    desc: "For organisations with several brands/domains — manage them from one place.",
  },
  {
    Icon: ShoppingCart,
    title: "Standalone or as a GRC add-on",
    desc: "Buy DMARC Monitoring standalone, or add it inside the Build Your Own GRC checkout.",
  },
];

export default function PaidTier() {
  return (
    <section id="dmarc-paid-tier" className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">— Paid tier —</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              From one-time check to <span className="text-[#ff7d1c]">continuous protection.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              The free tool is your instant baseline. The paid tier keeps it monitored — with history, alerts, and portfolio coverage.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BULLETS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.07} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                  <b.Icon className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-[15px] font-bold text-white leading-snug">{b.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.14}>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-slate-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              Purchased standalone — or as an add-on in <span className="font-semibold text-white">Build Your Own GRC</span> checkout.
            </p>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="#dmarc-free-check"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-white text-sm font-medium hover:border-white/20 transition-colors"
              >
                Try free check
              </a>
              <Link
                href="/grc-builder"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ff7d1c] text-white text-sm font-semibold shadow-[0_0_18px_rgba(249,115,22,0.35)] transition-colors"
              >
                Add to GRC builder <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact?role=dmarc-paid"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-semibold hover:bg-orange-500/15 transition-colors"
              >
                Talk about paid tier <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
