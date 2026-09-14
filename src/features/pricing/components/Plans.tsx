"use client";

import React from "react";
import { Receipt, Users, Plug, MailCheck, Info, CreditCard, Shield, Boxes } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/reveal";

export default function Plans() {
  return (
    <section id="pricing-plans" className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">— How you buy —</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Two motions. <span className="text-[#ff7d1c]">One portal.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Sales-assisted for the full platform — self-serve checkout for GRC and DMARC. Same portal shell, different
              entitlements. Payment gateway auto-selected by billing country.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Motions */}
          <div className="lg:col-span-5 space-y-5">
            <Reveal>
              <div className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.06] p-6 sm:p-7">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Sales-assisted</h3>
                <p className="mt-1 text-xs font-mono font-bold tracking-widest uppercase text-orange-400">Provisioned by Risknox team — after a demo</p>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  Pulse, Fortress, Compass (full platform), Accord, DPDPA Data Flow Mapping. No online self-checkout — we
                  provision your environment, map your controls, and onboard your team.
                </p>
                <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300">
                  Book a demo <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4">
                  <Boxes className="w-5 h-5 text-slate-300" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Self-serve</h3>
                <p className="mt-1 text-xs font-mono font-bold tracking-widest uppercase text-slate-500">Checkout → auto-provisioned</p>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  Build Your Own GRC (incl. ISO 27001 / SOC 2 entry points) and DMARC Monitoring paid tier. Sign up, pay
                  online, and get dashboard access in minutes with controls pre-loaded.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href="/grc-builder" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-zinc-100 transition-colors">Build Your GRC</Link>
                  <Link href="/platform/dmarc-monitoring" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.04] text-slate-300 text-xs font-semibold hover:text-white hover:border-white/20 transition-colors">DMARC Monitoring</Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Payment + illustrative table */}
          <div className="lg:col-span-7 space-y-5">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-orange-400" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">Payment</h3>
                    <p className="text-xs font-mono text-slate-500">Gateway auto-selected by billing country — to be confirmed</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-xl border border-orange-500/20 bg-orange-500/[0.06] p-4">
                    <p className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400">India — INR</p>
                    <p className="mt-1 text-sm font-bold text-white flex items-center gap-2"><span>🇮🇳</span> Razorpay</p>
                    <p className="text-xs text-slate-400 mt-1">Recommended for India-billed customers.</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black p-4">
                    <p className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500">Saudi / Bahrain / Other — SAR / BHD / USD</p>
                    <p className="mt-1 text-sm font-bold text-white flex items-center gap-2"><span>🌐</span> Stripe</p>
                    <p className="text-xs text-slate-400 mt-1">Recommended for all international markets.</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-600 flex items-start gap-1.5">
                  <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  From Section 7 — “Risknox to confirm gateway preference and supported currencies.”
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-b from-orange-500/[0.06] to-transparent overflow-hidden shadow-[0_0_45px_rgba(249,115,22,0.08)]">
                <div className="px-6 py-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
                  <h3 className="text-sm font-bold tracking-tight text-white">Illustrative plan structure</h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] font-mono font-bold uppercase">Placeholder — pricing TBD</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[520px]">
                    <thead>
                      <tr className="bg-white/[0.03] border-b border-white/10">
                        <th className="text-left px-5 py-3 text-xs font-mono font-bold tracking-widest uppercase text-slate-500">Plan element</th>
                        <th className="text-left px-5 py-3 text-xs font-mono font-bold tracking-widest uppercase text-slate-500">Illustrative structure</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-white/[0.06]">
                        <td className="px-5 py-3.5 text-white font-medium flex items-center gap-2"><Receipt className="w-4 h-4 text-orange-400" /> Base platform fee</td>
                        <td className="px-5 py-3.5 text-slate-400 leading-snug">Flat monthly/annual fee covering the self-serve dashboard and one framework.</td>
                      </tr>
                      <tr className="border-b border-white/[0.06]">
                        <td className="px-5 py-3.5 text-white font-medium">Additional framework</td>
                        <td className="px-5 py-3.5 text-slate-400 leading-snug">Per-framework add-on fee (e.g., adding SOC 2 to an existing ISO 27001 plan).</td>
                      </tr>
                      <tr className="border-b border-white/[0.06]">
                        <td className="px-5 py-3.5 text-white font-medium flex items-center gap-2"><Users className="w-4 h-4 text-orange-400" /> Seats</td>
                        <td className="px-5 py-3.5 text-slate-400 leading-snug">Per-additional-collaborator/auditor seat fee beyond an included baseline.</td>
                      </tr>
                      <tr className="border-b border-white/[0.06]">
                        <td className="px-5 py-3.5 text-white font-medium flex items-center gap-2"><Plug className="w-4 h-4 text-orange-400" /> Continuous monitoring add-on</td>
                        <td className="px-5 py-3.5 text-slate-400 leading-snug">Optional Pulse integration fee for live control monitoring vs. point-in-time evidence.</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-3.5 text-white font-medium flex items-center gap-2"><MailCheck className="w-4 h-4 text-orange-400" /> DMARC Monitoring</td>
                        <td className="px-5 py-3.5 text-slate-400 leading-snug">Free domain check; paid monthly tier for continuous monitoring and alerting.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-4 bg-black/40 border-t border-white/10">
                  <p className="text-xs text-slate-500 leading-relaxed flex items-start gap-2">
                    <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span><span className="text-slate-300 font-semibold">Note:</span> Numbers above are illustrative placeholders to show structure, not proposed prices — actual pricing needs a Risknox commercial decision (Section 9).</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
