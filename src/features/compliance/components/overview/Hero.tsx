"use client";

import React, { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useHeroReveal } from "@/hooks/useHeroReveal";
import BeamsBackground from "@/components/BeamsBackground";

const FRAMEWORK_SLIDES = [
  {
    name: "ISO/IEC 27001:2022",
    oneLiner:
      "Prove your ISMS works — 93 Annex A controls mapped, evidenced, and audit-ready.",
  },
  {
    name: "SOC 2 · Type 1 & Type 2",
    oneLiner:
      "Demonstrate control design and operating effectiveness for point-in-time and review-period examinations.",
  },
  {
    name: "DPDPA · DPDP Act 2023",
    oneLiner:
      "Structure privacy compliance across data mapping, consent, principal rights, and breach response.",
  },
  {
    name: "GDPR · EU Privacy",
    oneLiner:
      "Make EU privacy obligations operational — RoPA, DPIAs, rights handling, and vendor records.",
  },
  {
    name: "NIST CSF 2.0",
    oneLiner:
      "Run Govern to Recover as one programme, with maturity-tracked capabilities across every function.",
  },
  {
    name: "PCI DSS v4.0",
    oneLiner:
      "Shrink the cardholder data environment and walk into assessment with evidence already organised.",
  },
  {
    name: "EU AI Act",
    oneLiner:
      "Inventory AI systems, classify risk tiers, and organise governance and transparency evidence.",
  },
];

export default function OverviewHero() {
  const { mounted, textStyle } = useHeroReveal();
  const [activeIdx, setActiveIdx] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const total = FRAMEWORK_SLIDES.length;

  const go = useCallback(
    (d: 1 | -1) => {
      setDir(d);
      setActiveIdx((i) => (i + d + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, [go]);

  const slide = FRAMEWORK_SLIDES[activeIdx];

  return (
    <section
      className="relative min-h-[92vh] md:min-h-screen flex flex-col overflow-hidden bg-[#000000]"
      style={{ contain: "layout style" }}
    >
      {/* Beams background */}
      <BeamsBackground mounted={mounted} />

      {/* ── Main split layout ── */}
      <div className="relative z-10 flex-1 flex items-center px-6 sm:px-10 lg:px-16 pt-28 pb-24 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center w-full">

          {/* ── LEFT ── */}
          <div className="lg:w-[58%] flex flex-col justify-center items-start">
            {/* Badge */}
            <div style={textStyle(700)} className="mb-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-[7px] rounded-full bg-black/60 border border-orange-500/25 text-orange-400 text-xs font-semibold tracking-[0.22em] uppercase shadow-[0_0_24px_rgba(249,115,22,0.25)] backdrop-blur-md">
                <span className="grid grid-cols-3 gap-[3px] w-3.5 items-center justify-center" aria-hidden>
                  <span className="w-1 h-1 rounded-[1px] bg-orange-400" />
                  <span className="w-1 h-1 rounded-[1px] bg-orange-400" />
                  <span className="w-1 h-1 rounded-[1px] bg-orange-400" />
                  <span className="w-1 h-1 rounded-[1px] bg-orange-400" />
                  <span className="w-1 h-1 rounded-[1px] bg-orange-400" />
                  <span className="w-1 h-1 rounded-[1px] bg-orange-400" />
                </span>
                <span>Compliance Hub</span>
              </div>
            </div>

            {/* Headline — locked to two lines on desktop */}
            <h1 className="text-[32px] sm:text-[44px] lg:text-[40px] xl:text-[48px] font-bold text-[#f4f1ed] tracking-[-0.02em] leading-[1.08] select-none">
              <span className="block overflow-hidden pb-1">
                <span className="block lg:whitespace-nowrap" style={textStyle(900)}>Get audit-ready —</span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="block lg:whitespace-nowrap" style={textStyle(1050)}>
                  without hiring <span className="text-[#ff7d1c]">a GRC team.</span>
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-[560px] text-[15px] lg:text-base text-[#cfc9c2] font-normal leading-[1.65]" style={textStyle(1300)}>
              Risknox combines continuous monitoring (Fortress) with automated
              governance workflows (Accord) so you can reach ISO 27001, SOC 2,
              DPDPA or any framework you need — self-serve, at a fraction of
              traditional GRC consulting cost.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4" style={textStyle(1500)}>
              <Link
                href="/grc-builder"
                className="group inline-flex items-center justify-center gap-3 px-7 py-[15px] rounded-[10px] bg-black/70 text-white font-semibold text-[15px] border border-[#f97316]/70 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-400 hover:shadow-[0_0_28px_rgba(249,115,22,0.35)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <span>Build your GRC program</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact?role=managed-rollout"
                className="group inline-flex items-center justify-center gap-3 px-7 py-[15px] rounded-[10px] bg-black/70 text-white font-semibold text-[15px] border border-[#f97316]/70 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-400 hover:shadow-[0_0_28px_rgba(249,115,22,0.35)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <span>Talk to us about a managed rollout</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Framework carousel ── */}
          <div
            className="lg:w-[42%] w-full flex flex-col justify-center items-start mt-14 lg:mt-0 lg:pl-14 lg:ml-6 lg:border-l border-white/10"
            style={textStyle(1150)}
          >
            <div className="relative min-h-[150px] w-full max-w-[420px]">
              <div
                key={activeIdx}
                className="animate-heroSlideIn"
                style={{ animationDirection: dir === 1 ? "normal" : "reverse" }}
              >
                <p className="text-[19px] lg:text-[21px] text-[#eae5df] font-normal leading-[1.5]">
                  {slide.oneLiner}
                </p>
                <p className="mt-6 text-[12px] text-[#ff7d1c] font-medium tracking-[0.22em] uppercase">
                  {slide.name}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full max-w-[420px] border-t border-white/15 mt-10" />

            {/* Navigation */}
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-orange-500/60 hover:bg-orange-500/10 transition-all cursor-pointer"
                aria-label="Previous framework"
              >
                <ChevronLeft className="w-[18px] h-[18px]" />
              </button>
              <button
                onClick={() => go(1)}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-orange-500/60 hover:bg-orange-500/10 transition-all cursor-pointer"
                aria-label="Next framework"
              >
                <ChevronRight className="w-[18px] h-[18px]" />
              </button>

              {/* Progress dots */}
              <div className="flex items-center gap-2 ml-4">
                {FRAMEWORK_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDir(i > activeIdx ? 1 : -1);
                      setActiveIdx(i);
                    }}
                    className={`h-[6px] rounded-full transition-all duration-300 cursor-pointer ${
                      i === activeIdx
                        ? "w-8 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.7)]"
                        : "w-[6px] bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <span className="ml-4 text-[15px] text-slate-500 tabular-nums">
                {String(activeIdx + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
