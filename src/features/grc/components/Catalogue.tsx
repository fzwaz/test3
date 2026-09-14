"use client";

import React from "react";
import { ShieldCheck, FileCheck, Scale, Layers, Globe2, CreditCard, Cpu, Sparkles, Info } from "lucide-react";
import Reveal from "@/components/reveal";

const ROWS = [
  { fw: "ISO 27001", desc: "International information security management standard.", icon: ShieldCheck },
  { fw: "SOC 2 (Type I / II)", desc: "Trust Services Criteria for service organizations, common for SaaS vendors.", icon: FileCheck },
  { fw: "DPDPA (India)", desc: "Digital Personal Data Protection Act — consent, data-flow and breach obligations.", icon: Scale },
  { fw: "NIST CSF", desc: "US-origin cybersecurity risk management framework, widely used as a baseline.", icon: Layers },
  { fw: "GDPR", desc: "EU data protection regulation, relevant for organizations with EU customers/users.", icon: Globe2 },
  { fw: "PCI DSS", desc: "Payment card data security standard for anyone handling card transactions.", icon: CreditCard },
  { fw: "EU AI Act / NIST AI RMF", desc: "AI governance frameworks — delivered via Accord.", icon: Cpu },
];

export default function Catalogue() {
  return (
    <section id="grc-catalogue" className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">— Framework catalogue —</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Seven to start. <span className="text-[#ff7d1c]">25+ when you need them.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              The builder surfaces the core seven from your spec as checkboxes — multi-select, base covers one, the rest
              are add-ons. The wider 25+ catalogue is an upgrade path after provisioning.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.015] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02]">
                    <th className="text-left px-6 py-4 text-xs font-mono font-bold tracking-widest uppercase text-slate-500">Framework</th>
                    <th className="text-left px-6 py-4 text-xs font-mono font-bold tracking-widest uppercase text-slate-500">Description</th>
                    <th className="text-right px-6 py-4 text-xs font-mono font-bold tracking-widest uppercase text-slate-500">In builder</th>
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((r) => (
                    <tr key={r.fw} className="border-b border-white/[0.06] last:border-0 hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-2.5">
                          <span className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300">
                            <r.icon className="w-4 h-4" />
                          </span>
                          <span className="text-sm font-bold text-white">{r.fw}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-400 leading-relaxed">{r.desc}</td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-bold">
                          <Sparkles className="w-3 h-3" /> Checkbox
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 bg-black/40 border-t border-white/10 flex items-start gap-2">
              <Info className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
              <p className="text-xs text-slate-500 leading-relaxed">
                Verbatim from Section 4.4. Additional frameworks (ISO 42001, ISO 9001, SEBI CSCRF, HIPAA, etc.) remain
                available as post-provisioning upgrades — same dashboard, expanded entitlements.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
