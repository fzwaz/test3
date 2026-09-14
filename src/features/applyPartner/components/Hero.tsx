"use client";

import React, { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useHeroReveal } from "@/hooks/useHeroReveal";
import BeamsBackground from "@/components/BeamsBackground";

const APPLY_SLIDES = [
  {
    name: "Partnership path",
    oneLiner: "Apply → Partner Review → Compass Integration — from application to underwriting in one flow.",
  },
  {
    name: "For insurers & brokers",
    oneLiner: "Integrate Compass into your workflow and price cyber risk with continuous intelligence.",
  },
  {
    name: "What you get",
    oneLiner: "Applicant risk data, portfolio intelligence, and onboarding to price policies with confidence.",
  },
  {
    name: "Secure & confidential",
    oneLiner: "Your application is encrypted, reviewed by our partnerships team within 24 hours.",
  },
];

export default function ApplyPartnerHero() {
  const { mounted, textStyle } = useHeroReveal();
  const [activeIdx, setActiveIdx] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const total = APPLY_SLIDES.length;

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

  const slide = APPLY_SLIDES[activeIdx];

  const scrollToForm = () => {
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
                <span>Partners — Apply</span>
              </div>
            </div>

            <h1 className="text-[38px] sm:text-[50px] lg:text-[60px] font-bold text-[#f4f1ed] tracking-[-0.02em] leading-[1.08] select-none">
              <span className="block overflow-hidden pb-1">
                <span className="block" style={textStyle(900)}>
                  Become a
                </span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="block whitespace-nowrap" style={textStyle(1050)}>
                  <span className="text-[#ff7d1c]">Risknox</span> Partner.
                </span>
              </span>
            </h1>

            <p
              className="mt-6 max-w-[560px] text-[15px] lg:text-base text-[#cfc9c2] font-normal leading-[1.65]"
              style={textStyle(1300)}
            >
              Tell us about your firm and how you want to partner with Compass. Our partnerships team reviews every
              application and gets back within 24 hours.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4" style={textStyle(1500)}>
              <button
                type="button"
                onClick={scrollToForm}
                className="group inline-flex items-center justify-center gap-3 px-7 py-[15px] rounded-[10px] bg-black/70 text-white font-semibold text-[15px] border border-[#f97316]/70 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-400 hover:shadow-[0_0_28px_rgba(249,115,22,0.35)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <span>Apply now</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="/platform/compass"
                className="group inline-flex items-center justify-center gap-3 px-7 py-[15px] rounded-[10px] bg-black/70 text-white font-semibold text-[15px] border border-white/15 hover:border-orange-400 hover:shadow-[0_0_28px_rgba(249,115,22,0.2)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <span>Explore Compass</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
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
                {APPLY_SLIDES.map((_, i) => (
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
