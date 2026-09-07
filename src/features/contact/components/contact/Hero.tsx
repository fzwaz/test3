"use client";

import React from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import BeamsBackground from "@/components/BeamsBackground";
import { useHeroReveal } from "@/hooks/useHeroReveal";

export const Hero: React.FC = () => {
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
                <span>Contact us</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-[38px] sm:text-[50px] lg:text-[60px] font-bold text-[#f4f1ed] tracking-[-0.02em] leading-[1.08] select-none">
              <span className="block overflow-hidden pb-1">
                <span className="block" style={textStyle(900)}>Let&apos;s build a stronger</span>
              </span>
              <span className="block overflow-hidden pb-2">
                <span className="block" style={textStyle(1050)}>
                  security posture, <span className="text-[#ff7d1c]">together.</span>
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-[560px] text-[15px] lg:text-base text-[#cfc9c2] font-normal leading-[1.65]" style={textStyle(1300)}>
              Have a question, need a product demo, or want to explore our custom GRC solutions? We&apos;d love to hear from you.
            </p>
          </div>

          {/* ── RIGHT: Quick contact cards ── */}
          <div
            className="lg:w-[42%] w-full flex flex-col justify-center items-start mt-14 lg:mt-0 lg:pl-14 lg:ml-6 lg:border-l border-white/10"
            style={textStyle(1150)}
          >
            <div className="flex flex-col gap-4 w-full max-w-[420px]">
              <a
                href="mailto:info@risknox.ai"
                className="group relative bg-[#090b10]/90 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-xl hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] hover:border-orange-500/50 backdrop-blur-xl transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#1d120c] border border-[#3e2216] flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">EMAIL US</span>
                    <span className="block text-sm font-bold text-white group-hover:text-orange-400 transition-colors">info@risknox.ai</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-orange-400 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              <a
                href="tel:+919947513687"
                className="group relative bg-[#090b10]/90 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-xl hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] hover:border-orange-500/50 backdrop-blur-xl transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#1d120c] border border-[#3e2216] flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">CALL US</span>
                    <span className="block text-sm font-bold text-white group-hover:text-orange-400 transition-colors">+91 9947513687</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-orange-400 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
