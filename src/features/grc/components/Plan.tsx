"use client";

import React from "react";
import { Receipt, Users, Plug, MailCheck, FileText, Shield, CreditCard, Info } from "lucide-react";
import Reveal from "@/components/reveal";

export default function Plan() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Section 7 · Accounts, Subscriptions & Payments
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Plans, gateways, <span className="text-[#ff7d1c]">and portal.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Two account motions. One illustrative plan structure — numbers are placeholders pending a Risknox commercial
              decision. See Section 9 open decisions.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Motions */}
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white tracking-tight">Two account motions</h3>
              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-orange-500/20 bg-orange-500/[0.06] p-4">
                  <p className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400">Sales-assisted (provisioned by team)</p>
                  <p className="mt-1 text-sm text-slate-200">Pulse, Fortress, Compass (full platform), Accord, DPDPA Data Flow Mapping</p>
                  <p className="text-xs text-slate-500 mt-1">No online self-checkout — provisioned after a demo.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black p-4">
                  <p className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">Self-serve (auto-provisioned)</p>
                  <p className="mt-1 text-sm text-white">Build Your Own GRC — incl. ISO 27001 / SOC 2 entry points — and DMARC Monitoring paid tier</p>
                  <p className="text-xs text-slate-500 mt-1">Sign up, pay online, provisioned automatically.</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                <CreditCard className="w-4 h-4 text-orange-400" />
                Razorpay for India · Stripe for Saudi / Bahrain / other — auto-selected by billing country — to be confirmed.
              </div>
            </div>
          </Reveal>

          {/* Illustrative plan structure */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-orange-500/20 bg-gradient-to-b from-orange-500/[0.06] to-transparent p-6 sm:p-8 shadow-[0_0_45px_rgba(249,115,22,0.08)]">
              <h3 className="text-xl font-bold text-white tracking-tight">Illustrative plan structure</h3>
              <p className="mt-1 text-xs font-mono font-bold tracking-widest uppercase text-orange-400">Placeholder — pricing TBD</p>
              <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-black">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/[0.03] border-b border-white/10">
                      <th className="text-left px-4 py-3 text-xs font-mono font-bold tracking-widest uppercase text-slate-500">Plan element</th>
                      <th className="text-left px-4 py-3 text-xs font-mono font-bold tracking-widest uppercase text-slate-500">Illustrative structure</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/[0.06]">
                      <td className="px-4 py-3 text-white font-medium flex items-center gap-2">
                        <Receipt className="w-4 h-4 text-orange-400" /> Base platform fee
                      </td>
                      <td className="px-4 py-3 text-slate-400">Flat monthly/annual fee covering dashboard + one framework.</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="px-4 py-3 text-white font-medium">Additional framework</td>
                      <td className="px-4 py-3 text-slate-400">Per-framework add-on fee (e.g., adding SOC 2 to ISO 27001).</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="px-4 py-3 text-white font-medium flex items-center gap-2">
                        <Users className="w-4 h-4 text-orange-400" /> Seats
                      </td>
                      <td className="px-4 py-3 text-slate-400">Per additional collaborator/auditor seat beyond baseline.</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="px-4 py-3 text-white font-medium flex items-center gap-2">
                        <Plug className="w-4 h-4 text-orange-400" /> Continuous monitoring
                      </td>
                      <td className="px-4 py-3 text-slate-400">Optional Pulse integration — live monitoring vs. point-in-time.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-white font-medium flex items-center gap-2">
                        <MailCheck className="w-4 h-4 text-orange-400" /> DMARC Monitoring
                      </td>
                      <td className="px-4 py-3 text-slate-400">Free domain check; paid monthly tier for continuous monitoring.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-slate-600 flex items-start gap-2">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                Numbers above are illustrative placeholders to show structure, not proposed prices — per Section 7 note.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <h4 className="text-sm font-bold tracking-tight text-white uppercase flex items-center gap-2">
              <Shield className="w-4 h-4 text-orange-400" /> Customer portal requirements
            </h4>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
              <div>
                <p className="font-semibold text-white">Self-serve customers</p>
                <p className="mt-1 text-slate-400">Dashboard scoped to purchased frameworks, billing/invoice history, plan upgrade path, evidence/task center.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Enterprise customers</p>
                <p className="mt-1 text-slate-400">Full platform login provisioned post-demo, same portal shell, broader entitlements set by Risknox team.</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-black p-4">
              <p className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 mb-2">
                Section 9 · Open decisions for Risknox to confirm
              </p>
              <ul className="space-y-1.5 text-sm text-slate-400 list-disc list-inside marker:text-orange-400">
                <li>Payment gateway(s) and supported currencies for self-serve checkout (Razorpay + Stripe recommended).</li>
                <li>Actual pricing for GRC plans, per-framework add-ons, and DMARC Monitoring paid tier.</li>
                <li>Whether RiskBite&apos;s dollar-exposure model should mirror Fortress&apos;s real logic exactly or stay as a simplified benchmark version.</li>
                <li>Qualification criteria for the Insurance Partner pipeline (Try Compass eligibility).</li>
                <li>Brand voice / naming / terminology reconciliation against the Brand Guideline.</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
