"use client";

import React from "react";
import Reveal from "@/components/reveal";

const STEPS = [
  {
    title: "Confirm audit scope",
    description:
      "We define your products, systems, teams, vendors, tools, locations, and trust service criteria so the audit boundary is clear from day one.",
  },
  {
    title: "Run the AI gap scan",
    description:
      "Compass reviews your current policies, controls, risks, workflows, logs, tickets, and evidence against SOC 2 Type 1 and Type 2 readiness needs.",
  },
  {
    title: "Set control owners",
    description:
      "We map each control to an owner, evidence type, review frequency, and operating expectation so nothing depends on memory.",
  },
  {
    title: "Monitor control activity",
    description:
      "Access reviews, change approvals, incident records, vendor reviews, backups, security training, and monitoring tasks are tracked throughout the period.",
  },
  {
    title: "Automate audit evidence",
    description:
      "Compass collects and organises time-stamped evidence from connected tools, tickets, policies, logs, screenshots, approvals, and review records.",
  },
  {
    title: "Support the audit",
    description:
      "We prepare the auditor workspace, close last-mile gaps, support requests — and help your team move from Type 1 readiness toward Type 2 monitoring.",
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
              The SOC 2 journey, <span className="text-[#ff7d1c]">minus evidence chasing.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              SOC 2 becomes easier when tickets, logs, approvals, reviews, tasks,
              and evidence live in one platform.
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
