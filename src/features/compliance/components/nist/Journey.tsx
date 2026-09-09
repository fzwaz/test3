"use client";

import React from "react";
import Reveal from "@/components/reveal";

const STEPS = [
  {
    title: "Identify your cybersecurity landscape",
    description:
      "We help map critical assets, systems, data, business processes, dependencies, and cybersecurity risks across your organisation.",
  },
  {
    title: "Assess your current maturity",
    description:
      "Risknox evaluates your existing cybersecurity capabilities against the NIST CSF functions and helps identify gaps across governance, identification, protection, detection, response, and recovery.",
  },
  {
    title: "Build the cybersecurity roadmap",
    description:
      "We turn framework requirements and identified gaps into clear priorities, remediation activities, ownership, timelines, and measurable security objectives.",
  },
  {
    title: "Strengthen controls and processes",
    description:
      "Security policies, access controls, asset management, monitoring, incident response procedures, recovery plans, and governance workflows are brought into one structured programme.",
  },
  {
    title: "Organise security evidence",
    description:
      "Risknox helps teams track policies, control evidence, risk assessments, security activities, ownership, reviews, remediation tasks, and supporting documentation.",
  },
  {
    title: "Stay cyber-resilient",
    description:
      "Cybersecurity risk continuously evolves. Risknox helps organisations monitor changes, track remediation, review controls, and continuously improve their cybersecurity posture.",
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
              The NIST CSF journey, <span className="text-[#ff7d1c]">minus the control confusion.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Risknox does not treat NIST CSF as a checklist exercise. Our platform
              helps organisations assess posture, identify gaps, organise evidence,
              assign ownership, and continuously improve resilience.
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
