"use client";

import React from "react";
import Reveal from "@/components/reveal";

export default function ProofStrip() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-16 md:pb-20">
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
    </section>
  );
}
