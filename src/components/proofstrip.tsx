"use client";

import React, { useMemo } from "react";
import Reveal from "@/components/reveal";

export default function ProofStrip() {
  const beamExtension = useMemo(() => {
    const numBars = 20;
    return Array.from({ length: numBars }).map((_, i) => {
      const position = i / (numBars - 1);
      const distanceFromCenter = Math.abs(position - 0.5);
      // match hero: edges brighter, center dimmer
      const opacity = 0.55 + distanceFromCenter * 0.9;
      return { width: 100 / numBars, opacity };
    });
  }, []);

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 md:pt-12 pb-12 md:pb-20 bg-black overflow-x-clip">
      {/* — Beam continuation from hero — */}
      <div className="absolute inset-x-0 top-0 h-[88px] flex pointer-events-none" aria-hidden>
        {beamExtension.map((bar, i) => (
          <div
            key={i}
            style={{
              flex: `1 0 ${bar.width}%`,
              maxWidth: `${bar.width}%`,
              height: "100%",
              opacity: bar.opacity,
              background:
                "linear-gradient(to bottom, rgba(200,45,0,1) 0%, rgba(220,70,0,1) 38%, rgba(255,110,0,0.95) 58%, rgba(0,0,0,0) 100%)",
              boxShadow: "0 0 14px 2px rgba(255,90,0,0.18)",
            }}
          />
        ))}
      </div>
      {/* fade the beams into the dark gap */}
      <div className="absolute inset-x-0 top-[88px] h-16 bg-gradient-to-b from-[#1a0a00]/45 via-[#0f0400]/25 to-transparent pointer-events-none" aria-hidden />
      <div className="relative w-full max-w-6xl mx-auto pt-2">
      <Reveal>
      <div className="rounded-2xl md:rounded-3xl bg-[#06070a]/90 py-5 px-4 sm:px-6 md:px-8 shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-slate-800/80 items-center justify-items-center">

          {/* Stat 1: 60% */}
          <div className="flex items-center justify-center gap-3 w-full px-2">
            <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-none">
              60%
            </span>
            <div className="text-xs sm:text-[13px] text-slate-400 font-normal leading-tight">
              <div>lower cyber</div>
              <div>exposure in 90 days</div>
            </div>
          </div>

          {/* Stat 2: 30% */}
          <div className="flex items-center justify-center gap-3 w-full px-2">
            <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-none">
              30%
            </span>
            <div className="text-xs sm:text-[13px] text-slate-400 font-normal leading-tight">
              <div>higher detection</div>
              <div>accuracy</div>
            </div>
          </div>

          {/* Stat 3: 24/7 */}
          <div className="flex items-center justify-center gap-3 w-full px-2">
            <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-none">
              24/7
            </span>
            <span className="text-xs sm:text-[13px] text-slate-400 font-normal leading-tight">
              monitoring
            </span>
          </div>

          {/* Stat 4: 3 */}
          <div className="flex items-center justify-center gap-3 w-full px-2">
            <span className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-none">
              3
            </span>
            <span className="text-xs sm:text-[13px] text-slate-400 font-normal leading-tight">
              countries served
            </span>
          </div>

        </div>
      </div>
      </Reveal>
      </div>
    </section>
  );
}
