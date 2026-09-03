import React from "react";
import {
  Search,
  Bell,
  AlertTriangle,
} from "lucide-react";

export default function GapSection() {
  return (
    <section className="relative w-full py-5 md:py-8 px-4 sm:px-6 lg:px-8 bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200">
      {/* Outer Main Cyber Chamfered Container (All 4 corners chamfered) */}
      <div className="relative max-w-[1240px] mx-auto p-[1px] bg-[#1e1e22] [clip-path:polygon(0_28px,28px_0,calc(100%-28px)_0,100%_28px,100%_calc(100%-28px),calc(100%-28px)_100%,28px_100%,0_calc(100%-28px))] shadow-[0_0_60px_rgba(0,0,0,0.95)]">
        <div className="relative w-full bg-[#000000] [clip-path:polygon(0_28px,28px_0,calc(100%-28px)_0,100%_28px,100%_calc(100%-28px),calc(100%-28px)_100%,28px_100%,0_calc(100%-28px))] p-4 sm:p-6 md:p-7 lg:p-8 overflow-hidden">
          
          {/* Closely packed dot field in the top-right corner */}
          <div
            className="absolute top-0 right-0 w-72 h-56 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #4b5563 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
              maskImage:
                "linear-gradient(to bottom left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 45%, transparent 80%)",
              WebkitMaskImage:
                "linear-gradient(to bottom left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 45%, transparent 80%)",
            }}
          />

          {/* Top Header Row (NO bottom divider line, exactly matching image) */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-6 pb-4 md:pb-6">
            {/* Left: THE GAP + Headline (clean 2-line structure) */}
            <div className="flex-1 max-w-2xl">
              <span className="block text-[#ff5500] font-bold text-[13px] tracking-[0.18em] uppercase mb-3.5 font-sans">
                THE GAP
              </span>
              <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold text-white tracking-tight leading-[1.18]">
                <span className="block">Knowing the problem isn’t</span>
                <span className="block mt-1 sm:whitespace-nowrap">
                  the same as knowing the{" "}
                  <span className="text-[#ff5500]">decision.</span>
                </span>
              </h2>
            </div>

            {/* Center Vertical Divider Line */}
            <div className="hidden md:block w-[1px] h-16 bg-[#27272a] shrink-0 self-center" />

            {/* Right: Subtitle explanation */}
            <div className="flex-1 max-w-md text-sm sm:text-[15px] md:text-base text-[#a1a1aa] font-normal leading-relaxed space-y-1.5">
              <p>Traditional tools stop at identifying issues.</p>
              <p className="text-[#d4d4d8]">
                Risknox connects the dots — and drives action.
              </p>
            </div>
          </div>

          {/* Comparison Area (2 Column Cards with VS in center) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-7 items-stretch">
            
            {/* ================= LEFT COLUMN: TRADITIONAL SECURITY TOOLS ================= */}
            <div className="relative p-[1px] bg-[#222226] [clip-path:polygon(0_16px,16px_0,calc(100%-24px)_0,100%_24px,100%_calc(100%-16px),calc(100%-16px)_100%,24px_100%,0_calc(100%-24px))]">
              <div className="relative w-full h-full bg-[#09090b] [clip-path:polygon(0_16px,16px_0,calc(100%-24px)_0,100%_24px,100%_calc(100%-16px),calc(100%-16px)_100%,24px_100%,0_calc(100%-24px))] p-4 sm:p-5 flex flex-col justify-between">
                {/* Column Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-[18px] h-[18px] rounded-[3px] border border-[#52525b] bg-[#121215] flex items-center justify-center">
                    <div className="w-[5px] h-[5px] rounded-[1px] bg-[#d4d4d8]" />
                  </div>
                  <h3 className="text-[12px] sm:text-[13px] md:text-sm font-semibold tracking-wider text-[#d4d4d8] uppercase font-sans">
                    TRADITIONAL SECURITY TOOLS
                  </h3>
                </div>

                {/* Steps Container */}
                <div className="relative flex flex-col">
                  {/* Step 1: Find vulnerability */}
                  <div className="relative z-10 rounded-xl border border-[#1f1f23] bg-[#0f0f12] p-2.5 sm:p-3 flex items-center gap-3 transition-colors hover:border-[#323238]">
                    <div className="w-12 h-12 rounded-lg border border-[#27272a] bg-[#141418] flex items-center justify-center text-white shrink-0">
                      <Search className="w-5 h-5 text-white stroke-[1.8]" />
                    </div>
                    <span className="text-sm sm:text-[15px] font-medium text-[#f4f4f5]">
                      Find vulnerability
                    </span>
                  </div>

                  {/* Connector 1 -> 2 */}
                  <div className="relative h-5 flex items-center">
                    <div className="absolute left-[48px] sm:left-[56px] -top-1 -bottom-1 w-[1px] border-l border-dashed border-[#3f3f46]" />
                    <div className="w-full flex justify-center">
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className="text-[#52525b]">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Step 2: Generate alert */}
                  <div className="relative z-10 rounded-xl border border-[#1f1f23] bg-[#0f0f12] p-2.5 sm:p-3 flex items-center gap-3 transition-colors hover:border-[#323238]">
                    <div className="w-12 h-12 rounded-lg border border-[#27272a] bg-[#141418] flex items-center justify-center text-white shrink-0">
                      <Bell className="w-5 h-5 text-white stroke-[1.8]" />
                    </div>
                    <span className="text-sm sm:text-[15px] font-medium text-[#f4f4f5]">
                      Generate alert
                    </span>
                  </div>

                  {/* Connector 2 -> 3 */}
                  <div className="relative h-5 flex items-center">
                    <div className="absolute left-[48px] sm:left-[56px] -top-1 -bottom-1 w-[1px] border-l border-dashed border-[#3f3f46]" />
                    <div className="w-full flex justify-center">
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className="text-[#52525b]">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Step 3: Assign severity */}
                  <div className="relative z-10 rounded-xl border border-[#1f1f23] bg-[#0f0f12] p-2.5 sm:p-3 flex items-center gap-3 transition-colors hover:border-[#323238]">
                    <div className="w-12 h-12 rounded-lg border border-[#27272a] bg-[#141418] flex items-center justify-center text-white shrink-0">
                      <AlertTriangle className="w-5 h-5 text-white stroke-[1.8]" />
                    </div>
                    <span className="text-sm sm:text-[15px] font-medium text-[#f4f4f5]">
                      Assign severity
                    </span>
                  </div>

                  {/* Connector 3 -> 4 */}
                  <div className="relative h-5 flex items-center">
                    <div className="absolute left-[48px] sm:left-[56px] -top-1 -bottom-1 w-[1px] border-l border-dashed border-[#3f3f46]" />
                    <div className="w-full flex justify-center">
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className="text-[#52525b]">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Step 4: What does it actually mean for the business? */}
                  <div className="relative z-10 rounded-xl border border-[#1f1f23] bg-[#0f0f12] p-2.5 sm:p-3 flex items-center gap-3 transition-colors hover:border-[#323238]">
                    <div className="w-12 h-12 rounded-lg border border-[#27272a] bg-[#141418] flex items-center justify-center text-white font-sans text-xl font-medium shrink-0">
                      ?
                    </div>
                    <span className="text-sm sm:text-[15px] font-medium text-[#d4d4d8] leading-snug">
                      What does it actually mean
                      <br /> for the business?
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= CENTER "VS" DELIMITER (Desktop) ================= */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
              <div className="flex items-center gap-2 text-[#71717a] font-sans text-xs font-bold tracking-widest bg-[#000000] px-2 py-1">
                {/* Left bracket */}
                <svg width="8" height="26" viewBox="0 0 8 26" fill="none" className="text-[#3f3f46]">
                  <path d="M7 1L1 8V18L7 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[#8e8e93] font-sans font-bold text-xs tracking-wider">VS</span>
                {/* Right bracket */}
                <svg width="8" height="26" viewBox="0 0 8 26" fill="none" className="text-[#3f3f46]">
                  <path d="M1 1L7 8V18L1 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Mobile VS indicator */}
            <div className="lg:hidden flex items-center justify-center -my-2">
              <div className="flex items-center gap-2 px-3 py-1 text-[#8e8e93] font-sans text-xs font-bold tracking-widest bg-[#09090b] border border-[#222226] rounded-md">
                <span>VS</span>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: RISKNOX ================= */}
            <div className="relative p-[1px] bg-[#222226] [clip-path:polygon(0_16px,16px_0,calc(100%-24px)_0,100%_24px,100%_calc(100%-16px),calc(100%-16px)_100%,24px_100%,0_calc(100%-24px))]">
              <div className="relative w-full h-full bg-[#09090b] [clip-path:polygon(0_16px,16px_0,calc(100%-24px)_0,100%_24px,100%_calc(100%-16px),calc(100%-16px)_100%,24px_100%,0_calc(100%-24px))] p-4 sm:p-5 flex flex-col justify-between">
                {/* Column Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-[18px] h-[18px] rounded-[3px] border border-[#ff5500] bg-[#ff5500]/10 flex items-center justify-center">
                    <div className="w-[5px] h-[5px] rounded-[1px] bg-[#ff5500]" />
                  </div>
                  <h3 className="text-[12px] sm:text-[13px] md:text-sm font-semibold tracking-wider text-[#ff5500] uppercase font-sans">
                    RISKNOX
                  </h3>
                </div>

                {/* Steps Container */}
                <div className="relative flex flex-col">
                  {/* Step 1: Discover exposure */}
                  <div className="relative z-10 rounded-xl border border-[#1f1f23] bg-[#0f0f12] p-2.5 sm:p-3 flex items-center gap-3 transition-colors hover:border-[#ff5500]/40 group">
                    <div className="w-12 h-12 rounded-lg border border-[#ff5500] bg-transparent flex items-center justify-center text-[#ff5500] shrink-0 shadow-[0_0_12px_rgba(255,85,0,0.15)]">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5500" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="12" r="2.5" />
                        <line x1="12" y1="12" x2="8" y2="8" strokeWidth="2" />
                        <line x1="12" y1="5.5" x2="12" y2="7" />
                        <line x1="18.5" y1="12" x2="17" y2="12" />
                        <line x1="5.5" y1="12" x2="7" y2="12" />
                        <line x1="12" y1="18.5" x2="12" y2="17" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-[15px] font-medium text-white">
                      Discover exposure
                    </span>
                  </div>

                  {/* Connector 1 -> 2 */}
                  <div className="relative h-5 flex items-center">
                    <div className="absolute left-[48px] sm:left-[56px] -top-1 -bottom-1 w-[1px] border-l border-dashed border-[#3f3f46]" />
                    <div className="w-full flex justify-center">
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className="text-[#52525b]">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Step 2: Understand risk */}
                  <div className="relative z-10 rounded-xl border border-[#1f1f23] bg-[#0f0f12] p-2.5 sm:p-3 flex items-center gap-3 transition-colors hover:border-[#ff5500]/40 group">
                    <div className="w-12 h-12 rounded-lg border border-[#ff5500] bg-transparent flex items-center justify-center text-[#ff5500] shrink-0 shadow-[0_0_12px_rgba(255,85,0,0.15)]">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5500" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="6" cy="6" r="2.2" />
                        <circle cx="18" cy="6" r="2.2" />
                        <circle cx="6" cy="18" r="2.2" />
                        <circle cx="18" cy="18" r="2.2" />
                        <circle cx="12" cy="12" r="1.8" fill="#ff5500" />
                        <line x1="7.8" y1="7.8" x2="10.5" y2="10.5" />
                        <line x1="16.2" y1="7.8" x2="13.5" y2="10.5" />
                        <line x1="7.8" y1="16.2" x2="10.5" y2="13.5" />
                        <line x1="16.2" y1="16.2" x2="13.5" y2="13.5" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-[15px] font-medium text-white">
                      Understand risk
                    </span>
                  </div>

                  {/* Connector 2 -> 3 */}
                  <div className="relative h-5 flex items-center">
                    <div className="absolute left-[48px] sm:left-[56px] -top-1 -bottom-1 w-[1px] border-l border-dashed border-[#3f3f46]" />
                    <div className="w-full flex justify-center">
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className="text-[#52525b]">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Step 3: Quantify impact */}
                  <div className="relative z-10 rounded-xl border border-[#1f1f23] bg-[#0f0f12] p-2.5 sm:p-3 flex items-center gap-3 transition-colors hover:border-[#ff5500]/40 group">
                    <div className="w-12 h-12 rounded-lg border border-[#ff5500] bg-transparent flex items-center justify-center text-[#ff5500] shrink-0 shadow-[0_0_12px_rgba(255,85,0,0.15)]">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5500" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12A9 9 0 1 1 12 3v9z" />
                        <path d="M21 12A9 9 0 0 0 12 3" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-[15px] font-medium text-white">
                      Quantify impact
                    </span>
                  </div>

                  {/* Connector 3 -> 4 */}
                  <div className="relative h-5 flex items-center">
                    <div className="absolute left-[48px] sm:left-[56px] -top-1 -bottom-1 w-[1px] border-l border-dashed border-[#3f3f46]" />
                    <div className="w-full flex justify-center">
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" className="text-[#52525b]">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Step 4: Know what to do next */}
                  <div className="relative z-10 rounded-xl border border-[#1f1f23] bg-[#0f0f12] p-2.5 sm:p-3 flex items-center gap-3 transition-colors hover:border-[#ff5500]/40 group">
                    <div className="w-12 h-12 rounded-lg border border-[#ff5500] bg-transparent flex items-center justify-center text-[#ff5500] shrink-0 shadow-[0_0_12px_rgba(255,85,0,0.15)]">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5500" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="8 7 17 7 17 16" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-[15px] font-medium text-white">
                      Know what to do next
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
