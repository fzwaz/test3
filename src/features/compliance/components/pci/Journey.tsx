"use client";

import React from "react";
import Reveal from "@/components/reveal";

const STEPS = [
  {
    title: "Scope the cardholder data environment",
    description:
      "We identify systems, applications, networks, users, vendors, payment flows, storage points, and integrations that touch cardholder data.",
  },
  {
    title: "Run the AI gap scan",
    description:
      "Compass reviews your current controls, policies, scans, network records, access practices, logs, and evidence against PCI DSS requirements.",
  },
  {
    title: "Build the control plan",
    description:
      "We map required controls, assign owners, define evidence needs, and turn PCI DSS work into clear tasks your teams can complete.",
  },
  {
    title: "Implement payment security controls",
    description:
      "Access control, encryption, vulnerability management, logging, segmentation, secure configuration, incident response, and testing practices are brought into one programme.",
  },
  {
    title: "Automate audit evidence",
    description:
      "Compass tracks artefacts, scan records, policy approvals, access reviews, remediation proof, logs, and missing evidence before audit pressure arrives.",
  },
  {
    title: "Prepare and stay ready",
    description:
      "We organise PCI evidence, support SAQ, ROC, or AOC preparation where applicable, close last-mile gaps, and keep readiness alive after validation.",
  },
];

export default function Journey() {
  return (
    <section className="relative w-full py-16 md:py-20 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              The programme
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Scope, map, evidence, <span className="text-[#ff7d1c]">validate.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Risknox experts guide every stage of PCI DSS readiness, while Compass
              tracks controls, evidence, owners, gaps, and remediation.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                <p className="text-xs font-mono font-bold tracking-[0.2em] text-[#ff7d1c] mb-4 tabular-nums">
                  {String(i + 1).padStart(2, "0")} / 06
                </p>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2.5">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
