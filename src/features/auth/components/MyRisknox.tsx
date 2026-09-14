"use client";

import React from "react";
import Link from "next/link";
import { LayoutDashboard, FileCheck, Receipt, Settings, Users, Shield, Plug, MailCheck, Crown, ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";

const TILES = [
  { title: "Control mapping", desc: "Your frameworks mapped — reuse one evidence set.", Icon: LayoutDashboard, href: "/grc-builder" },
  { title: "Tasks & evidence", desc: "Assignments, due dates, Compass workflows.", Icon: FileCheck, href: "/my-risknox" },
  { title: "Audit-ready export", desc: "Evidence packs for your auditor.", Icon: Shield, href: "/my-risknox" },
  { title: "Billing & invoices", desc: "Razorpay / Stripe history, receipts.", Icon: Receipt, href: "/pricing" },
  { title: "Upgrade path", desc: "Add frameworks/seats without migration.", Icon: Users, href: "/grc-builder" },
  { title: "DMARC Monitoring", desc: "Free check vs. paid continuous tier.", Icon: MailCheck, href: "/platform/dmarc-monitoring" },
];

export default function MyRisknox() {
  return (
    <section id="auth-form" className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">— Dashboard — My Risknox —</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Everything in <span className="text-[#ff7d1c]">one place.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              This is the self-serve account system for GRC and DMARC Monitoring customers — and the same portal shell
              enterprise Pulse/Fortress/Compass/Accord teams use after being provisioned. See Section 7 for the model.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TILES.map((t, i) => (
                <Reveal key={t.title} delay={i * 0.04} className="h-full">
                  <Link href={t.href} className="h-full group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-orange-500/30 hover:bg-white/[0.03] transition-colors flex flex-col">
                    <t.Icon className="w-5 h-5 text-orange-400" />
                    <p className="mt-3 text-sm font-bold text-white group-hover:text-orange-300">{t.title}</p>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">{t.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-white">
                      Open <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <Reveal>
              <div className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.06] p-6">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-orange-400" />
                  <p className="text-sm font-bold text-white">Two account motions</p>
                </div>
                <div className="mt-3 space-y-2 text-sm leading-relaxed">
                  <div className="rounded-xl bg-black border border-white/10 p-3">
                    <p className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">Self-serve</p>
                    <p className="text-slate-300">Sign up → pay → auto-provisioned (GRC / DMARC). This is where you are.</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
                    <p className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400">Enterprise</p>
                    <p className="text-slate-400">Provisioned by Risknox post-demo — Pulse/Fortress/Compass/Accord entitlements set by team, not checkout.</p>
                  </div>
                </div>
                <Link href="/pricing" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-orange-400 hover:text-orange-300">
                  See Accounts, Subscriptions & Payments <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-slate-400" />
                  <p className="text-sm font-bold text-white">What you see here is scoped</p>
                </div>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">Dashboard shows only your purchased frameworks. Upgrade anytime — evidence you already collected is reused.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300">
                    <Plug className="w-3.5 h-3.5 text-orange-400" /> Pulse add-on
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300">
                    <Users className="w-3.5 h-3.5 text-orange-400" /> Add seats
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/signup" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-zinc-100 transition-colors">
              Create a self-serve account
            </Link>
            <Link href="/login" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-white text-sm font-semibold hover:border-white/20 transition-colors">
              Sign in
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-sm font-semibold hover:bg-orange-500/15 transition-colors">
              Enterprise — book a demo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
