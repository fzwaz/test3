"use client";

import React, { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useHeroReveal } from "@/hooks/useHeroReveal";
import BeamsBackground from "@/components/BeamsBackground";

const GRC_SLIDES = [
  {
    name: "One builder",
    oneLiner: "ISO 27001, SOC 2, DPDPA, NIST, GDPR, PCI DSS, AI — same engine, different landing pages.",
  },
  {
    name: "Self-serve commerce",
    oneLiner: "Pick frameworks, set your profile, add seats & monitoring — provisioned automatically.",
  },
  {
    name: "Framework reuse",
    oneLiner: "One evidence set maps across frameworks. Add a framework later without starting over.",
  },
  {
    name: "Razorpay · Stripe",
    oneLiner: "India via Razorpay, Saudi/Bahrain & global via Stripe — selected by billing country.",
  },
  {
    name: "Dashboard on day one",
    oneLiner: "Controls, tasks, evidence, and audit-ready export — onboarding wizard pre-loads your picks.",
  },
];

export default function GrcHero() {
  const { mounted, textStyle } = useHeroReveal();
  const [activeIdx, setActiveIdx] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const total = GRC_SLIDES.length;

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

  const slide = GRC_SLIDES[activeIdx];

  const scrollToBuilder = () => {
    document.getElementById("grc-builder")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToCatalogue = () => {
    document.getElementById("grc-catalogue")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
                <span>Build Your Own GRC — Self-Serve</span>
              </div>
            </div>

            <h1 className="text-[32px] sm:text-[44px] lg:text-[40px] xl:text-[48px] font-bold text-[#f4f1ed] tracking-[-0.02em] leading-[1.08] select-none">
              <span className="block overflow-hidden pb-1">
                <span className="block lg:whitespace-nowrap" style={textStyle(900)}>
                  Build your GRC
                </span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="block lg:whitespace-nowrap" style={textStyle(1050)}>
                  program — <span className="text-[#ff7d1c]">your way.</span>
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block text-[22px] sm:text-[26px] lg:text-[24px] xl:text-[28px] font-bold tracking-[-0.015em] text-[#f4f1ed] lg:whitespace-nowrap"
                  style={textStyle(1200)}
                >
                  Checkout to <span className="text-[#ff7d1c]">dashboard in minutes.</span>
                </span>
              </span>
            </h1>

            <p
              className="mt-6 max-w-[560px] text-[15px] lg:text-base text-[#cfc9c2] font-normal leading-[1.65]"
              style={textStyle(1300)}
            >
              The commerce engine behind the Compliance Hub, ISO 27001 and SOC 2 pages — one builder for
              every framework. Select, pay, and get provisioned automatically with controls pre-loaded.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4" style={textStyle(1500)}>
              <button
                type="button"
                onClick={scrollToBuilder}
                className="group inline-flex items-center justify-center gap-3 px-7 py-[15px] rounded-[10px] bg-black/70 text-white font-semibold text-[15px] border border-[#f97316]/70 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-400 hover:shadow-[0_0_28px_rgba(249,115,22,0.35)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <span>Start building</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={scrollToCatalogue}
                className="group inline-flex items-center justify-center gap-3 px-7 py-[15px] rounded-[10px] bg-black/70 text-white font-semibold text-[15px] border border-white/15 hover:border-orange-400 hover:shadow-[0_0_28px_rgba(249,115,22,0.2)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <span>See frameworks</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="mt-4 text-xs font-mono text-slate-500" style={textStyle(1500)}>
              Base fee covers 1 framework · Add more anytime · Monthly or annual billing
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
                {GRC_SLIDES.map((_, i) => (
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
