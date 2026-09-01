"use client";

import React from "react";

export default function TrustStrip() {
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

      {/* Brand Logos Strip in Glass container */}
      <div className="rounded-2xl md:rounded-3xl bg-[#06070a]/90 py-4 px-4 sm:px-6 md:px-8 shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-0 lg:divide-x lg:divide-slate-800/80 items-center justify-items-center">
          {/* 1. Deloitte. */}
          <div className="flex items-center justify-center h-12 w-full px-2">
            <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white flex items-baseline select-none">
              <span>Deloitte</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#86bc25] ml-0.5 inline-block" />
            </div>
          </div>

          {/* 2. Accenture */}
          <div className="flex items-center justify-center h-12 w-full px-2">
            <div className="relative inline-flex items-center text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-white select-none">
              <span>accenture</span>
              <span className="absolute -top-2 left-[58%] text-base sm:text-lg font-black text-[#a100ff] leading-none pointer-events-none">
                &gt;
              </span>
            </div>
          </div>

          {/* 3. Asianet */}
          <div className="flex items-center justify-center h-12 w-full px-2">
            <div className="flex items-center gap-2 select-none">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4L34 34H6L20 4Z" stroke="#e50914" strokeWidth="3.5" fill="none" />
                <path d="M20 12L28 30H12L20 12Z" fill="#ff4d4d" />
                <line x1="10" y1="26" x2="30" y2="26" stroke="#ffffff" strokeWidth="2" />
              </svg>
              <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-wider text-[#e50914] uppercase">
                ASIANET
              </span>
            </div>
          </div>

          {/* 4. KPMG */}
          <div className="flex items-center justify-center h-12 w-full px-2">
            <div className="text-xl sm:text-2xl md:text-3xl font-black tracking-widest text-[#00338d] hover:text-[#0052cc] transition-colors select-none font-sans">
              KPMG
            </div>
          </div>

          {/* 5. BIMAKAVACH */}
          <div className="flex items-center justify-center h-12 w-full px-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg border border-[#0070f3] bg-[#0070f3]/5 select-none">
              <svg
                className="w-3.5 h-3.5 text-[#0070f3]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-[11px] sm:text-xs font-black tracking-wider text-[#0070f3]">
                BIMAKAVACH
              </span>
            </div>
          </div>

          {/* 6. KUKU */}
          <div className="flex items-center justify-center h-12 w-full px-2">
            <div className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white font-serif select-none">
              kuku
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
