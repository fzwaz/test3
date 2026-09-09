"use client";

import React from "react";
import Reveal from "@/components/reveal";

export default function Overview() {
  return (
    <section id="overview" className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              From signal to decision
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Risk intelligence for <span className="text-[#ff7d1c]">every stage of the journey.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Cyber risk does not exist in one place. Security teams need
              visibility. Leaders need business context. Insurers need
              underwriting intelligence. AI teams need governance. And
              organisations need to protect the trust behind their domains.
              Risknox brings these needs together through five specialised
              products.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
