"use client";

import React from "react";

const INDUSTRIES = [
  "Financial Services",
  "Healthcare",
  "Manufacturing",
  "Logistics",
  "Automotive",
  "Retail",
  "Oil & Gas",
  "Architecture",
];

export default function IndustriesMarquee() {
  const row = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <section className="w-full bg-black border-t border-white/[0.06] overflow-hidden">
      {/* Eyebrow strip */}
      <div className="flex items-center justify-center gap-4 pt-10 md:pt-12 pb-6 px-4">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] shrink-0" />
        <p className="text-[11px] sm:text-xs font-mono tracking-[0.3em] uppercase text-slate-400 text-center select-none">
          Trusted across industries
          <span className="mx-3 text-slate-600">·</span>
          Industries served
        </p>
        <span className="w-1.5 h-1.5 rounded-full bg-[#f36734] shadow-[0_0_8px_rgba(243,103,52,0.9)] shrink-0" />
      </div>

      {/* Bordered cell track marquee */}
      <div className="border-y border-white/10 overflow-hidden mb-10 md:mb-12">
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
          {row.map((industry, i) => (
            <div
              key={`${industry}-${i}`}
              className="w-56 sm:w-72 shrink-0 border-l border-white/10 flex items-center justify-center px-6 py-7 sm:py-8"
            >
              <span className="text-lg sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap select-none">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
