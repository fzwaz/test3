"use client";

import React from "react";
import Reveal from "@/components/reveal";

const STEPS = [
  {
    title: "Map personal data flows",
    description:
      "We identify what personal data you collect, where it comes from, where it goes, who can access it, and which vendors process it.",
  },
  {
    title: "Run the AI gap scan",
    description:
      "Compass reviews your notices, consent flows, data inventory, breach process, vendor records, security controls, and evidence against DPDPA needs.",
  },
  {
    title: "Build the privacy control plan",
    description:
      "We turn DPDPA obligations into clear tasks for consent, notices, retention, access, deletion, grievance handling, breach response, and vendor governance.",
  },
  {
    title: "Implement policies and workflows",
    description:
      "Privacy notices, consent records, data principal rights workflows, retention rules, breach playbooks, processor checks, and team training are built into one programme.",
  },
  {
    title: "Automate privacy evidence",
    description:
      "Compass tracks artefacts, owner tasks, approvals, data maps, consent records, vendor checks, breach logs, policy versions, and missing evidence.",
  },
  {
    title: "Stay privacy-ready",
    description:
      "We help monitor changes, update records, track remediation, support reviews, and keep DPDPA readiness alive as your data use evolves.",
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
              The DPDPA journey, <span className="text-[#ff7d1c]">minus the evidence chase.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Risknox does not leave DPDPA to policy edits and consent banners.
              Compass helps map personal data, track gaps, organise evidence, and
              keep privacy work moving.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-7 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                <p className="text-xs font-mono font-bold tracking-[0.2em] text-[#ff7d1c] mb-4 tabular-nums">
                  Step {String(i + 1).padStart(2, "0")}
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
