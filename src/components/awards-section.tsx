"use client";

import React, { useState } from "react";
import { ArrowRight, Trophy, Star, Award } from "lucide-react";
import Reveal from "@/components/reveal";

const AWARDS = [
  {
    award: "Best InsurTech Player\nof the Year",
    description: "Special Jury Award (2025) at the India InsurTech Summit hosted by The Digital Fifth.",
    year: "2025",
    Icon: Trophy,
  },
  {
    award: "Best Innovative\nSolution Award",
    description: "Won at the North Star Startup / Pitch Competition during GISEC Global in Dubai (2025).",
    year: "2025",
    Icon: Star,
  },
  {
    award: "AI Innovation in\nInsurance Services",
    description: "Recognized at the India InsurTech Association (IIA) Annual Awards (2025).",
    year: "2025",
    Icon: Award,
  },
];

export default function AwardsSection() {
  const [coords, setCoords] = useState({ x: "50%", y: "50%" });
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: `${e.clientX - rect.left}px`, y: `${e.clientY - rect.top}px` });
  };
  return (
    <section className="relative w-full bg-[#080808] border-t border-white/10 py-16 md:py-20 overflow-hidden group/section" onMouseMove={handleMouseMove}>
      {/* CTA-matching dot background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80" style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23FF6B35' cx='10' cy='10' r='1.5' opacity='0.5'/%3E%3C/svg%3E\")" }} />
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23FF6B35' cx='10' cy='10' r='1.5'/%3E%3C/svg%3E\")",
          maskImage: `radial-gradient(400px circle at ${coords.x} ${coords.y}, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${coords.x} ${coords.y}, black 0%, transparent 100%)`,
        }}
      />
      <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Cards — exactly as image */}
        <div className="space-y-4">
          {AWARDS.map((item) => (
            <div
              key={item.award}
              className="group flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-6 rounded-[16px] border border-white/[0.08] bg-[#0a0a0a] px-5 sm:px-6 py-4 sm:py-4 hover:border-white/[0.12] transition-colors"
            >
              {/* Left: icon + award */}
              <div className="flex items-center gap-4 lg:w-[320px] shrink-0">
                <div className="w-[52px] h-[52px] rounded-xl bg-[#0f0f0f] border border-orange-500/40 flex items-center justify-center shrink-0 shadow-[0_0_18px_rgba(249,115,22,0.35)]">
                  <item.Icon className="w-6 h-6 text-orange-400" strokeWidth={1.7} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-mono font-bold tracking-[0.18em] text-slate-500 uppercase">AWARD</p>
                  <h3 className="mt-1 text-[15px] font-bold text-white leading-tight whitespace-pre-line">{item.award}</h3>
                </div>
              </div>

              {/* Vertical divider */}
              <div className="hidden lg:block w-px self-stretch bg-white/15 shrink-0" />

              {/* Middle: description */}
              <div className="flex-1 min-w-0 lg:pl-2">
                <p className="text-[11px] font-mono font-bold tracking-[0.18em] text-slate-500 uppercase">DESCRIPTION</p>
                <p className="mt-1.5 text-[13px] sm:text-[14px] text-slate-400 leading-relaxed">{item.description}</p>
              </div>

              {/* Right: year pill */}
              <div className="flex items-center shrink-0 lg:ml-4">
                <span className="inline-flex items-center justify-center min-w-[72px] px-5 py-1.5 rounded-full border border-orange-500/50 bg-black text-[#ff7d1c] text-sm font-semibold">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
