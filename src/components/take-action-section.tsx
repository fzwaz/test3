"use client";

import React from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import Reveal from "@/components/reveal";

export default function TakeActionSection() {
  return (
    <section className="w-full pt-12 md:pt-16 pb-20 md:pb-28 bg-black relative border-t border-white/[0.06] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#f36734]/[0.03] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ───────────── Header Section ───────────── */}
        <Reveal className="text-center space-y-4">
          {/* Top Line with TAKE ACTION in center and arrow at right end */}
          <div className="flex items-center justify-center gap-4 max-w-xl mx-auto">
            {/* Left fade-in line */}
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-white/30" />

            {/* Tagline */}
            <span className="text-[#f36734] text-xs font-mono font-bold tracking-[0.22em] uppercase px-2">
              TAKE ACTION
            </span>

            {/* Right line with terminal arrow */}
            <div className="flex-1 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-white/30 via-white/20 to-[#f36734]" />
              <ArrowRight className="w-3.5 h-3.5 text-[#f36734] -ml-0.5 flex-shrink-0" />
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Start with what matters most.
          </h2>
        </Reveal>

        {/* ───────────── 2-Column Side-by-Side Cards Grid ───────────── */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch" delay={0.12}>
          {/* ─────── Card 1: What's your risk actually worth? ─────── */}
          <div className="group relative rounded-2xl bg-black border border-white/[0.08] hover:border-[#f36734]/40 p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_30px_rgba(243,103,52,0.12)] overflow-hidden">
            {/* Subtle interior design: ambient glow + dot grid + top hairline */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#f36734]/[0.08] rounded-full blur-[90px] pointer-events-none" />
            <div
              className="absolute inset-0 pointer-events-none opacity-60"
              style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E\")", maskImage: "radial-gradient(320px circle at 20% 0%, black 0%, transparent 75%)", WebkitMaskImage: "radial-gradient(320px circle at 20% 0%, black 0%, transparent 75%)" }}
            />
            <div className="absolute top-0 inset-x-10 h-px bg-gradient-to-r from-transparent via-[#f36734]/50 to-transparent pointer-events-none" />
            {/* Top-Right Corner Diagonal Line (Top edge to Right edge \) & Arrow */}
            <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
              <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
                <line
                  x1="0"
                  y1="0"
                  x2="80"
                  y2="80"
                  stroke="#f36734"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                />
              </svg>
              <div className="absolute top-3 right-3 z-10 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-[#f36734] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

            {/* Top Content */}
            <div className="relative z-10 space-y-3 pr-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                What&apos;s your risk <br className="hidden sm:inline" />
                actually worth?
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-400 font-normal leading-relaxed">
                Find out in 3 minutes.
              </p>
            </div>

            {/* Bottom Section with Divider */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
              {/* Duration Indicator */}
              <div className="flex items-center gap-2.5 text-[#f36734] font-medium text-sm sm:text-[15px]">
                <Clock className="w-4 h-4 text-[#f36734]" />
                <span>3 min</span>
              </div>

              {/* Action Button */}
              <Link
                href="#risk-bite"
                className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black/70 border border-[#f97316]/60 hover:border-orange-400 text-white font-semibold text-xs sm:text-sm shadow-[0_0_16px_rgba(243,103,52,0.15)] hover:shadow-[0_0_24px_rgba(243,103,52,0.35)] hover:bg-[#140c06] transition-all duration-200"
              >
                <span>Take the Risk Bite</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#f36734] group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ─────── Card 2: Get ISO 27001 or SOC 2 ready ─────── */}
          <div className="group relative rounded-2xl bg-black border border-white/[0.08] hover:border-[#f36734]/40 p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_30px_rgba(243,103,52,0.12)] overflow-hidden">
            {/* Subtle interior design: ambient glow + dot grid + top hairline */}
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#f36734]/[0.08] rounded-full blur-[90px] pointer-events-none" />
            <div
              className="absolute inset-0 pointer-events-none opacity-60"
              style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E\")", maskImage: "radial-gradient(320px circle at 80% 100%, black 0%, transparent 75%)", WebkitMaskImage: "radial-gradient(320px circle at 80% 100%, black 0%, transparent 75%)" }}
            />
            <div className="absolute top-0 inset-x-10 h-px bg-gradient-to-r from-transparent via-[#f36734]/50 to-transparent pointer-events-none" />
            {/* Top-Right Corner Diagonal Line (Top edge to Right edge \) & Arrow */}
            <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
              <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
                <line
                  x1="0"
                  y1="0"
                  x2="80"
                  y2="80"
                  stroke="#f36734"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                />
              </svg>
              <div className="absolute top-3 right-3 z-10 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-[#f36734] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>

            {/* Top Content */}
            <div className="relative z-10 space-y-3 pr-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                Get ISO 27001 or SOC 2 ready &mdash; without hiring a GRC team.
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-400 font-normal leading-relaxed">
                Automate. Simplify. Get audit-ready.
              </p>
            </div>

            {/* Bottom Section with Divider */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
              {/* Duration Indicator */}
              <div className="flex items-center gap-2.5 text-[#f36734] font-medium text-sm sm:text-[15px]">
                <Clock className="w-4 h-4 text-[#f36734]" />
                <span>3 min</span>
              </div>

              {/* Action Button */}
              <Link
                href="#compliance"
                className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black/70 border border-[#f97316]/60 hover:border-orange-400 text-white font-semibold text-xs sm:text-sm shadow-[0_0_16px_rgba(243,103,52,0.15)] hover:shadow-[0_0_24px_rgba(243,103,52,0.35)] hover:bg-[#140c06] transition-all duration-200"
              >
                <span>Explore Compliance</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#f36734] group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
