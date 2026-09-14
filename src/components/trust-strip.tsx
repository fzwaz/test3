"use client";

import React, { useMemo } from "react";
import LogoLoop, { type LogoItem } from "@/components/LogoLoop";

export default function TrustStrip() {
  const logos = useMemo<LogoItem[]>(
    () => [
      // 1) BimaKavach — blended with dark strip: white "Bima" + blue "Kavach".
      {
        title: "BimaKavach",
        node: (
          <div className="flex items-center gap-2 select-none whitespace-nowrap bg-transparent">
            <div className="w-7 h-7 rounded-md bg-[#0066FF] flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <span className="text-[15px] md:text-[17px] font-extrabold tracking-tight">
              <span className="text-white">Bima</span>
              <span className="text-[#2E90FA]">Kavach</span>
            </span>
          </div>
        ),
      },
      // 2) Kuku FM — audio platform (kukufm.com). Wordmark is lowercase "kuku" + small "FM".
      {
        title: "Kuku FM",
        node: (
          <div className="flex items-baseline gap-1 select-none whitespace-nowrap">
            <span className="text-xl md:text-2xl font-black tracking-tight text-white">kuku</span>
            <span className="text-[11px] md:text-xs font-black tracking-[0.18em] text-[#FF4D8D] uppercase border border-[#FF4D8D]/40 rounded px-1 py-0.5">FM</span>
          </div>
        ),
      },
      // 3) FSSI — white FSSI on blue, blended with dark strip, mark only like reference.
      {
        title: "FSSI",
        node: (
          <div className="flex items-center select-none whitespace-nowrap bg-transparent">
            <div className="h-9 px-4 rounded-md bg-gradient-to-br from-[#0E5BB5] to-[#083C7E] flex items-center justify-center">
              <span className="text-white text-xl md:text-2xl font-black tracking-wide">FSSI</span>
            </div>
          </div>
        ),
      },
      // 4) KloudStacks — stylized as "KloudStacks" with cloud + stacked-layers motif
      {
        title: "KloudStacks",
        node: (
          <div className="flex items-center gap-2 select-none whitespace-nowrap">
            <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6.5 17a3.5 3.5 0 0 1-.5-7 4.5 4.5 0 0 1 8.7-1.2A3.5 3.5 0 0 1 18 17H6.5z" stroke="#111827" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M8 14h8M8 11h5" stroke="#FF6B35" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[15px] md:text-[17px] font-bold tracking-tight text-white">
              Kloud<span className="font-extrabold">Stacks</span>
            </span>
          </div>
        ),
      },
      // 5) Zwift — orange wordmark (zwift.com). Fact-check: Zwift orange is #FF6B00 / #FF6A00.
      {
        title: "Zwift",
        node: (
          <div className="flex items-center gap-1 select-none whitespace-nowrap">
            <span className="text-xl md:text-2xl font-black tracking-tight text-[#FF6B00] italic" style={{ letterSpacing: "-0.02em" }}>
              Zwift
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-1 hidden sm:inline-block" />
          </div>
        ),
      },
      // 6) Asianet Satellite Communications — the parent company of Asianet Broadband (asianetbroadband.in / Wikipedia).
      // Fact-check: This is *not* Asianet News (red triangle) nor Asianet Fiber (sub-brand). The correct parent
      // wordmark is lowercase "asianet" in blue (#0066B3 / #0B4DA6) with a satellite-dish icon and small caps subtitle
      // "SATELLITE COMMUNICATIONS". We reproduce that distinction here; the red ASIANET triangle belongs to the TV channel.
      {
        title: "Asianet Satellite Communications",
        node: (
          <div className="flex items-center gap-2 select-none whitespace-nowrap">
            <div className="w-7 h-7 rounded-full bg-[#0B4DA6] flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 3a9 9 0 0 1 9 9" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M12 7a5 5 0 0 1 5 5" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
                <circle cx="12" cy="12" r="2.2" fill="white" />
                <path d="M2 12h3M19 12h3M12 2v3M12 19v3" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
              </svg>
            </div>
            <div className="leading-none">
              <div className="text-[13px] md:text-[15px] font-bold tracking-tight text-[#0B4DA6]" style={{ letterSpacing: "-0.01em" }}>
                asianet
              </div>
              <div className="text-[7px] md:text-[7.5px] font-bold tracking-[0.18em] text-[#0B4DA6]/80 uppercase">SATELLITE COMMUNICATIONS</div>
            </div>
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
      {/* Header Label with Flares on Both Sides */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
        {/* Left glowing line */}
        <div className="relative flex items-center justify-center w-24 sm:w-44 md:w-56 h-[1px]">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-slate-700 to-slate-600" />
          {/* Glowing flare in center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
            <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-[0.5px]" />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_10px_#f97316,0_0_20px_#ea580c]" />
          </div>
        </div>

        {/* Title */}
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-slate-300 uppercase whitespace-nowrap select-none">
          WE HAVE SECURED
        </span>

        {/* Right glowing line */}
        <div className="relative flex items-center justify-center w-24 sm:w-44 md:w-56 h-[1px]">
          <div className="w-full h-full bg-gradient-to-l from-transparent via-slate-700 to-slate-600" />
          {/* Glowing flare in center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
            <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-[0.5px]" />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_10px_#f97316,0_0_20px_#ea580c]" />
          </div>
        </div>
      </div>

      {/* Brand Logos Loop in Glass container */}
      <div className="rounded-2xl md:rounded-3xl bg-black py-5 px-4 sm:px-6 md:px-8 shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden">
        <LogoLoop
          logos={logos}
          speed={70}
          direction="left"
          logoHeight={30}
          gap={72}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#06070a"
          ariaLabel="Companies secured by Risknox"
        />
      </div>
    </section>
  );
}
