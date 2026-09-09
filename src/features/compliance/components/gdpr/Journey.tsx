"use client";

import React from "react";
import Reveal from "@/components/reveal";

const STEPS = [
  {
    title: "Scope personal data flows",
    description:
      "We map where personal data enters, moves, gets stored, gets shared, and leaves your business across teams, tools, vendors, and processes.",
  },
  {
    title: "Run the AI gap scan",
    description:
      "Compass reviews your policies, consent records, lawful basis, vendor contracts, data inventories, breach process, and evidence against GDPR requirements.",
  },
  {
    title: "Build the privacy control plan",
    description:
      "We turn GDPR obligations into clear tasks for lawful basis, data subject rights, retention, access, security controls, and vendor governance.",
  },
  {
    title: "Implement policies and workflows",
    description:
      "Privacy notices, consent processes, DSAR workflows, breach response, retention rules, processor checks, and internal training are built into one programme.",
  },
  {
    title: "Automate privacy evidence",
    description:
      "Compass tracks artefacts, approvals, data maps, owner tasks, vendor records, policy versions, DSAR logs, and missing evidence before review pressure arrives.",
  },
  {
    title: "Stay privacy-ready",
    description:
      "We help monitor changes, update records, support reviews, track remediation, and keep GDPR readiness alive as your systems, vendors, and data use evolve.",
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
              The GDPR journey, <span className="text-[#ff7d1c]">minus the evidence chase.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Risknox does not leave GDPR to privacy policy edits and consent banners.
              Compass helps map data flows, assign owners, track gaps, organise
              evidence, and keep privacy controls moving.
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
