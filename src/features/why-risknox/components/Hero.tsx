"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BeamsBackground from "@/components/BeamsBackground";
import { useHeroReveal } from "@/hooks/useHeroReveal";
import RiskTrendChart from "./RiskTrendChart";

export default function WhyRisknoxHero() {
  const { mounted, textStyle } = useHeroReveal();

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex flex-col overflow-hidden bg-[#000000]" style={{ contain: "layout style" }}>
      <BeamsBackground mounted={mounted} />

      {/* ── Main split layout ── */}
      <div className="relative z-10 flex-1 flex items-center px-6 sm:px-10 lg:px-16 pt-28 pb-24 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center w-full">

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
                <span>Why Risknox</span>
              </div>
            </div>

            {/* Headline — 2 lines */}
            <h1 className="text-[30px] sm:text-[36px] lg:text-[30px] xl:text-[40px] font-bold text-[#f4f1ed] tracking-[-0.02em] leading-[1.12] select-none">
              <span className="block overflow-hidden pb-1">
                <span className="block lg:whitespace-nowrap" style={textStyle(900)}>
                  Most tools tell you what&apos;s wrong.
                </span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="block lg:whitespace-nowrap" style={textStyle(1050)}>
                  Risknox tells you <span className="text-[#ff7d1c]">what it costs.</span>
                </span>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 max-w-[560px] text-[15px] lg:text-base text-[#cfc9c2] font-normal leading-[1.65]" style={textStyle(1300)}>
              Risknox connects cyber visibility, AI-powered intelligence, and
              insurance insight to turn technical exposure into informed decisions.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4" style={textStyle(1500)}>
              <Link
                href="/platform"
                className="group inline-flex items-center justify-center gap-3 px-7 py-[15px] rounded-[10px] bg-black/70 text-white font-semibold text-[15px] border border-[#f97316]/70 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-400 hover:shadow-[0_0_28px_rgba(249,115,22,0.35)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <span>Explore the platform</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-3 px-7 py-[15px] rounded-[10px] bg-black/70 text-white font-semibold text-[15px] border border-[#f97316]/70 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-400 hover:shadow-[0_0_28px_rgba(249,115,22,0.35)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <span>See how it works</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Risk trend chart ── */}
          <div
            className="lg:w-[42%] w-full flex flex-col justify-center items-start mt-14 lg:mt-0 lg:pl-14 lg:ml-6 lg:border-l border-white/10"
            style={textStyle(1150)}
          >
            <div className="w-full max-w-[520px] rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-4 sm:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-slate-400">
                  Risk telemetry · 30 days
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Live
                </span>
              </div>
              <RiskTrendChart />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
