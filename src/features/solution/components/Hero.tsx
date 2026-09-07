"use client";

import React, { useMemo, useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { useHeroReveal } from "@/hooks/useHeroReveal";
import { INDUSTRIES_DATA } from "@/features/solution/lib/constants";

const Beams = dynamic(() => import("@/components/Beams"), { ssr: false });

const OUT = "cubic-bezier(0.16,1,0.3,1)";

const INDUSTRY_SLIDES = INDUSTRIES_DATA.map((ind) => ({
  name: ind.name,
  oneLiner:
    ind.id === "bfsi"
      ? "Resilient financial architecture & regulatory assurance for high-frequency transaction networks."
      : ind.id === "healthcare"
      ? "Uncompromising patient data privacy & medical IoT defense without disrupting clinical ops."
      : ind.id === "saas"
      ? "Turn security into a sales accelerator with continuous trust across multi-cloud environments."
      : ind.id === "manufacturing"
      ? "OT/IT convergence security & supply chain integrity for Industry 4.0 operations."
      : ind.id === "energy"
      ? "National grid resilience & sovereign defense against nation-state adversaries."
      : "Customer credential protection & brand integrity during peak-season traffic.",
}));

export default function Hero() {
  const { mounted, textStyle } = useHeroReveal();
  const [activeIdx, setActiveIdx] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const total = INDUSTRY_SLIDES.length;

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

  const beamCount = useMemo(() => (mounted ? 12 : 0), [mounted]);

  const slide = INDUSTRY_SLIDES[activeIdx];

  return (
    <section
      className="relative min-h-[92vh] md:min-h-screen flex flex-col overflow-hidden bg-[#000000]"
      style={{ contain: "layout style" }}
    >
      {/* Beams background */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          opacity: mounted ? 0.6 : 0,
          transform: mounted ? "scale(1) rotate(0deg)" : "scale(1.35) rotate(3deg)",
          transition: `opacity 1200ms ${OUT} 100ms, transform 1800ms ${OUT} 100ms`,
          willChange: "opacity, transform",
        }}
      >
        <Beams
          beamWidth={2}
          beamHeight={22}
          beamNumber={beamCount}
          lightColor="#ffa500"
          beamColor="#1a0a00"
          backgroundColor="#000000"
          speed={2}
          noiseIntensity={1.65}
          scale={0.22}
          rotation={18}
        />
      </div>

      {/* Flash burst */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255,165,0,0.65) 0%, rgba(255,100,0,0.25) 25%, transparent 55%)",
          opacity: mounted ? 0 : 1,
          transition: "opacity 800ms ease-out",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,165,0,0.1) 0%, transparent 60%)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 1200ms ease-out 1200ms",
          animation: mounted ? "beamPulse 4s ease-in-out infinite 2s" : "none",
        }}
      />

      {/* Text-legibility overlays */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-b from-black/30 via-black/10 to-black/75" />
      <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(ellipse_85%_65%_at_50%_45%,transparent_35%,rgba(0,0,0,0.55)_78%,#000000_92%)]" />

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
                <span>Solutions</span>
              </div>
            </div>

            {/* Headline — two lines like reference */}
            <h1 className="text-[38px] sm:text-[50px] lg:text-[60px] font-bold text-[#f4f1ed] tracking-[-0.02em] leading-[1.08] select-none">
              <span className="block overflow-hidden pb-1">
                <span className="block" style={textStyle(900)}>Cyber Risk,</span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="block whitespace-nowrap" style={textStyle(1050)}>
                  Built Around <span className="text-[#ff7d1c]">Your World.</span>
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-[560px] text-[15px] lg:text-base text-[#cfc9c2] font-normal leading-[1.65]" style={textStyle(1300)}>
              Whether you&apos;re managing risk in a complex industry or solving it from a
              specific role, Risknox connects exposure, compliance, and decision-making
              into one intelligence layer.
            </p>

            {/* CTA Buttons — orange filled + dark outline */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4" style={textStyle(1500)}>
              <a
                href="#explore-by-industry"
                className="group inline-flex items-center justify-center gap-3 px-7 py-[15px] rounded-[10px] bg-black/70 text-white font-semibold text-[15px] border border-[#f97316]/70 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-400 hover:shadow-[0_0_28px_rgba(249,115,22,0.35)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <span>Explore by Industry</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#explore-by-role"
                className="group inline-flex items-center justify-center gap-3 px-7 py-[15px] rounded-[10px] bg-black/70 text-white font-semibold text-[15px] border border-[#f97316]/70 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-400 hover:shadow-[0_0_28px_rgba(249,115,22,0.35)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <span>Explore by Role</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Industry carousel ── */}
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
                aria-label="Previous industry"
              >
                <ChevronLeft className="w-[18px] h-[18px]" />
              </button>
              <button
                onClick={() => go(1)}
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-orange-500/60 hover:bg-orange-500/10 transition-all cursor-pointer"
                aria-label="Next industry"
              >
                <ChevronRight className="w-[18px] h-[18px]" />
              </button>

              {/* Progress dots */}
              <div className="flex items-center gap-2 ml-4">
                {INDUSTRY_SLIDES.map((_, i) => (
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
