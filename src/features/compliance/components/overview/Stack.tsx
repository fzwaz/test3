"use client";

import React from "react";
import { Bot, Layers, FileText, Radar, Library, Plug } from "lucide-react";
import Reveal from "@/components/reveal";

const ITEMS = [
  {
    Icon: Bot,
    title: "AI-Powered Automation",
    description:
      "Compass maps your controls, collects evidence, and generates audit-ready policies without anyone on your team lifting a finger. What used to take months of manual work now happens automatically in the background.",
  },
  {
    Icon: Layers,
    title: "Unified Control Management",
    description:
      "Cross-map your controls across ISO 27001, SOC 2, GDPR, PCI DSS, HIPAA, DPDPA, and 20+ more frameworks simultaneously — cutting the redundant work of managing multiple audits separately.",
  },
  {
    Icon: FileText,
    title: "Instant Document Generation",
    description:
      "Tell Compass which framework you need and which control area to focus on. It generates every audit-ready policy, procedure, and evidence document your auditor is asking for, in minutes.",
  },
  {
    Icon: Radar,
    title: "Continuous Drift Detection",
    description:
      "Your compliance posture changes every time someone joins, leaves, or changes a system. Compass monitors your controls in real time and alerts you the moment something drifts out of baseline — before your auditor finds it first.",
  },
  {
    Icon: Library,
    title: "Policy and Risk Library",
    description:
      "Get access to pre-built policy templates, risk registers, and control libraries built for your industry and regulatory requirements. Customise what you need and leave the rest.",
  },
  {
    Icon: Plug,
    title: "200+ integrations",
    description:
      "Connects directly to your cloud providers, HR systems, SIEM, and security tools. Everything feeds into one compliance picture, so nothing slips through the gaps.",
  },
];

export default function Stack() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Section 02 · GRC
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              The compliance stack your{" "}
              <span className="text-[#ff7d1c]">ops team won&apos;t hate</span> using.
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Compass connects directly with your cloud, identity, HR, endpoint,
              and ticketing systems to automate evidence collection across 150+
              frameworks.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center">
                    <item.Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-600 tabular-nums">
                    {String(i + 1).padStart(2, "0")} / 06
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
