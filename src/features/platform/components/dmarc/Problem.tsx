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
              Your domain is part of your brand
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              But can anyone send email{" "}
              <span className="text-[#ff7d1c]">pretending to be you?</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Email remains one of the easiest ways for attackers to impersonate
              organisations. Without proper authentication and enforcement,
              attackers may attempt to use your domain for phishing,
              impersonation, and fraudulent communications. DMARC Monitoring
              helps you understand exactly who is sending email on behalf of
              your domain — and identify sources that should not be.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
