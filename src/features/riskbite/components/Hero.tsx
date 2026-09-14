"use client";

import React, { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useHeroReveal } from "@/hooks/useHeroReveal";
import BeamsBackground from "@/components/BeamsBackground";

const RISK_SLIDES = [
  {
    name: "Fortress logic",
    oneLiner: "The same scoring model that powers Fortress — distilled into 8 questions.",
  },
  {
    name: "Breach-cost benchmark",
    oneLiner: "Industry + size calibrated against IBM Cost of a Data Breach data.",
  },
  {
    name: "Dollar exposure",
    oneLiner: "Your estimated range, not a vanity number — ready to take to the board.",
  },
  {
    name: "Risk drivers",
    oneLiner: "Top 3 factors raising your exposure, with clear next steps.",
  },
  {
    name: "No sales call needed",
    oneLiner: "See your teaser instantly. Full breakdown gated only by work email.",
  },
];

export default function RiskBiteHero() {
  const { mounted, textStyle } = useHeroReveal();
  const [activeIdx, setActiveIdx] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const total = RISK_SLIDES.length;

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

  const slide = RISK_SLIDES[activeIdx];

  const scrollToAssessment = () => {
    document.getElementById("riskbite-assessment")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToMethodology = () => {
    document.getElementById("riskbite-methodology")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative min-h-[92vh] md:min-h-screen flex flex-col overflow-hidden bg-[#000000]"
      style={{ contain: "layout style" }}
    >
      <BeamsBackground mounted={mounted} />

      <div className="relative z-10 flex-1 flex items-center px-6 sm:px-10 lg:px-16 pt-28 pb-24 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center w-full">
          {/* LEFT */}
          <div className="lg:w-[58%] flex flex-col justify-center items-start">
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
                <span>RiskBite — 3-Minute Assessment</span>
              </div>
            </div>

            <h1 className="text-[32px] sm:text-[44px] lg:text-[40px] xl:text-[48px] font-bold text-[#f4f1ed] tracking-[-0.02em] leading-[1.08] select-none">
              <span className="block overflow-hidden pb-1">
                <span className="block lg:whitespace-nowrap" style={textStyle(900)}>
                  What&apos;s your cyber risk
                </span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="block lg:whitespace-nowrap" style={textStyle(1050)}>
                  actually <span className="text-[#ff7d1c]">worth?</span>
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block text-[22px] sm:text-[26px] lg:text-[24px] xl:text-[28px] font-bold tracking-[-0.015em] text-[#f4f1ed] lg:whitespace-nowrap" style={textStyle(1200)}>
                  Find out in <span className="text-[#ff7d1c]">3 minutes.</span>
                </span>
              </span>
            </h1>

            <p
              className="mt-6 max-w-[560px] text-[15px] lg:text-base text-[#cfc9c2] font-normal leading-[1.65]"
              style={textStyle(1300)}
            >
              Answer a few questions about your organisation. Get an instant risk posture score
              and an estimated dollar exposure — the same logic Fortress runs continuously.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4" style={textStyle(1500)}>
              <button
                type="button"
                onClick={scrollToAssessment}
                className="group inline-flex items-center justify-center gap-3 px-7 py-[15px] rounded-[10px] bg-black/70 text-white font-semibold text-[15px] border border-[#f97316]/70 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-400 hover:shadow-[0_0_28px_rgba(249,115,22,0.35)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <span>Start your RiskBite</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={scrollToMethodology}
                className="group inline-flex items-center justify-center gap-3 px-7 py-[15px] rounded-[10px] bg-black/70 text-white font-semibold text-[15px] border border-white/15 hover:border-orange-400 hover:shadow-[0_0_28px_rgba(249,115,22,0.2)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <span>How scoring works</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="mt-4 text-xs font-mono text-slate-500" style={textStyle(1500)}>
              No email required for your teaser score · ~3 min · Fortress-aligned
            </p>
          </div>

          {/* RIGHT: carousel */}
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
                <p className="text-[19px] lg:text-[21px] text-[#eae5df] font-normal leading-[1.5]">{slide.oneLiner}</p>
                <p className="mt-6 text-[12px] text-[#ff7d1c] font-medium tracking-[0.22em] uppercase">{slide.name}</p>
              </div>
            </div>

            <div className="w-full max-w-[420px] border-t border-white/15 mt-10" />

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-orange-500/60 hover:bg-orange-500/10 transition-all cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-[18px] h-[18px]" />
              </button>
              <button
                onClick={() => go(1)}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-orange-500/60 hover:bg-orange-500/10 transition-all cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-[18px] h-[18px]" />
              </button>

              <div className="flex items-center gap-2 ml-4">
                {RISK_SLIDES.map((_, i) => (
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
