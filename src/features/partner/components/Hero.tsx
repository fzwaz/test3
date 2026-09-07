"use client";

import React from "react";
import { ShieldCheck, Compass, ArrowRight } from "lucide-react";
import Link from "next/link";
import BeamsBackground from "@/components/BeamsBackground";
import { useHeroReveal } from "@/hooks/useHeroReveal";

export default function PartnerHero() {
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
                <span>Partners</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-[38px] sm:text-[50px] lg:text-[60px] font-bold text-[#f4f1ed] tracking-[-0.02em] leading-[1.08] select-none">
              <span className="block overflow-hidden pb-1">
                <span className="block" style={textStyle(900)}>Better underwriting starts</span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="block" style={textStyle(1050)}>
                  with <span className="text-[#ff7d1c]">better intelligence.</span>
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-[560px] text-[15px] lg:text-base text-[#cfc9c2] font-normal leading-[1.65]" style={textStyle(1300)}>
              Whether you&apos;re ready to integrate Compass into your underwriting workflow or want to explore it firsthand, choose the path that works for you.
            </p>
          </div>

          {/* ── RIGHT: Partner path cards ── */}
          <div
            className="lg:w-[42%] w-full flex flex-col justify-center items-start mt-14 lg:mt-0 lg:pl-14 lg:ml-6 lg:border-l border-white/10"
            style={textStyle(1150)}
          >
            <div className="flex flex-col gap-4 w-full max-w-[420px]">
              <Link
                href="/contact?role=insurers-brokers"
                className="group w-full inline-flex items-center gap-4 px-6 py-5 rounded-2xl bg-[#0e0e11]/80 hover:bg-[#1a1714] border border-orange-500/25 hover:border-orange-500 shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(249,115,22,0.12)] hover:shadow-[0_0_25px_rgba(249,115,22,0.35)] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <ShieldCheck className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="flex-1 font-semibold text-white group-hover:text-orange-100 transition-colors text-[15px]">
                  Become an Insurance Partner
                </span>
                <ArrowRight className="w-[18px] h-[18px] text-orange-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>

              <Link
                href="/platform/compass"
                className="group w-full inline-flex items-center gap-4 px-6 py-5 rounded-2xl bg-[#0e0e11]/80 hover:bg-[#1a1714] border border-orange-500/25 hover:border-orange-500 shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(249,115,22,0.12)] hover:shadow-[0_0_25px_rgba(249,115,22,0.35)] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
              >
                <Compass className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="flex-1 font-semibold text-white group-hover:text-orange-100 transition-colors text-[15px]">
                  Try Compass
                </span>
                <ArrowRight className="w-[18px] h-[18px] text-orange-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
