"use client";

import React from "react";
import Image from "next/image";

export default function DashboardSection() {
  return (
    <section className="w-full py-16 md:py-20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[500px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/*
        Layout:
        – Left ~40% of viewport: text content with standard left padding
        – Right ~60% of viewport: dashboard SVG, flush to right edge, no right padding
      */}
      <div className="relative w-full min-h-[440px] md:min-h-[540px]">

        {/* ── LEFT TEXT COLUMN ── */}
        <div className="absolute inset-y-0 left-0 w-[44%] flex items-center z-10">
          <div className="pl-8 sm:pl-12 md:pl-16 lg:pl-24 xl:pl-32 pr-8 space-y-5 py-8">
            {/* Category Tag */}
            <div className="text-sm md:text-base font-semibold text-[#f97316] tracking-wide">
              Risk In Context
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.2rem] font-extrabold tracking-tight text-white leading-[1.1]">
              Know Your Cyber Risk{" "}
              <span className="text-[#f95700]">In Dollars</span>,<br />Not Just Scores
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-sm">
              Risknox translates complex security signals into business impacts —
              prioritize what matters, justify what counts and reduce what hurts.
            </p>
          </div>
        </div>

        {/* ── RIGHT DASHBOARD SVG (flush to right edge, gap from text) ── */}
        <div
          className="absolute inset-y-0 right-0 flex items-center"
          style={{ left: "48%" }}
        >
          {/* Glass card: left/top/bottom borders only, bleeds off right edge */}
          <div
            className="relative h-full w-full rounded-tl-2xl rounded-bl-2xl overflow-hidden border-t border-l border-b border-white/[0.15] bg-[#0c0d12]/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),-20px_0_60px_rgba(0,0,0,0.6)]"
          >
            {/* Subtle glow inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />

            <Image
              src="/risknox_dashboard.svg"
              alt="Risknox Executive Dashboard — Total Risk Exposure, Critical Risks, Risk Posture"
              fill
              priority
              className="object-cover object-left-top"
              sizes="60vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
