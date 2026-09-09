"use client";

import React from "react";
import Reveal from "@/components/reveal";

export default function Problem() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              Underwriting needs better intelligence
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Cyber risk changes faster than{" "}
              <span className="text-[#ff7d1c]">the underwriting process.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              A traditional cyber insurance submission captures a point in
              time. But vulnerabilities emerge, attack surfaces change, and an
              applicant&apos;s security posture evolves continuously. Compass
              helps underwriters build a more informed view of risk before
              making a coverage decision.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
