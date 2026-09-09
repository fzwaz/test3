"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";

const AWARDS = [
  {
    award: "Best InsurTech Player of the Year",
    description:
      "Special Jury Award (2025) at the India InsurTech Summit hosted by The Digital Fifth.",
    year: "2025",
  },
  {
    award: "Best Innovative Solution Award",
    description:
      "Won at the North Star Startup / Pitch Competition during GISEC Global in Dubai (2025).",
    year: "2025",
  },
  {
    award: "AI Innovation in Insurance Services",
    description:
      "Recognized at the India InsurTech Association (IIA) Annual Awards (2025).",
    year: "2025",
  },
];

export default function AwardsSection() {
  return (
    <section className="w-full bg-black border-t border-white/[0.06] py-16 md:py-20">
      <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 md:mb-8 text-center">
          <div className="flex items-center justify-center gap-4 max-w-xl mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/30" />
            <span className="text-[#f36734] text-xs font-mono font-bold tracking-[0.22em] uppercase px-2">
              Recognition
            </span>
            <div className="flex-1 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-white/30 via-white/20 to-[#f36734]" />
              <ArrowRight className="w-3.5 h-3.5 text-[#f36734] -ml-0.5 flex-shrink-0" />
            </div>
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            Award-winning risk intelligence.
          </h2>
        </div>

        {/* Table header */}
        <div className="hidden md:grid md:grid-cols-12 gap-6 pb-3 border-b border-white/10 text-white font-semibold text-sm">
          <div className="col-span-4">Award</div>
          <div className="col-span-6">Description</div>
          <div className="col-span-2 text-right">Year</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-white/10 border-b border-white/10">
          {AWARDS.map((item) => (
            <div
              key={item.award}
              className="group grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-6 py-4 md:py-5 hover:bg-white/[0.02] transition-colors"
            >
              <div className="md:col-span-4 text-base md:text-lg font-light text-white tracking-tight group-hover:text-orange-200 transition-colors">
                {item.award}
              </div>
              <div className="md:col-span-6 text-[13px] md:text-sm text-slate-400 font-normal leading-relaxed">
                {item.description}
              </div>
              <div className="md:col-span-2 text-left md:text-right text-white text-sm md:text-base tabular-nums">
                {item.year}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
