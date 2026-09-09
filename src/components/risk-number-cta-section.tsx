"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, IndianRupee, ShieldAlert } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/reveal";

/**
 * DiscoveryCallAndMetrics Component (Business Section)
 * 
 * Redesigned to match the dark Hero section (#080808) with the interactive
 * dot-glow hover effect, and includes a live dashboard mockup.
 */
export default function BusinessSection() {
  const [coords, setCoords] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: `${e.clientX - rect.left}px`,
      y: `${e.clientY - rect.top}px`,
    });
  };

  return (
    <section
      id="business"
      className="relative bg-[#080808] text-white min-h-[85vh] flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden border-t border-white/10 group/section"
      onMouseMove={handleMouseMove}
    >
      <style>{`
        @keyframes gauge-fill {
          from { stroke-dashoffset: 251.2; }
          to { stroke-dashoffset: 55.26; }
        }
      `}</style>

      {/* 1. STATIC LIGHT-ORANGE DOT GRID (brightens on hover via layer 2) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80" style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23FF6B35' cx='10' cy='10' r='1.5' opacity='0.5'/%3E%3C/svg%3E\")" }} />
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23FF6B35' cx='10' cy='10' r='1.5'/%3E%3C/svg%3E\")",
          maskImage: `radial-gradient(400px circle at ${coords.x} ${coords.y}, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${coords.x} ${coords.y}, black 0%, transparent 100%)`,
        }}
      />

      <div className="max-w-[1400px] mx-auto space-y-16 w-full relative z-10">

        {/* ========================================================================= */}
        {/* MAIN SECTION GRID (Left Copy vs Right Dashboard Mockup)                  */}
        {/* ========================================================================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-6">
            <Reveal className="space-y-8">

            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35] shadow-[0_0_8px_#FF6B35]"></span>
              <span className="text-[#FF6B35] text-xs font-mono font-bold tracking-wider uppercase">Talk to Risknox</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2]">
              You&apos;ve seen the risk. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8C61]">Now put a number on it.</span>
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-white/70 text-base max-w-lg leading-relaxed">
              A 30-minute call to walk through your IRIS Score and what&apos;s actually driving it.
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#book-call"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-[#FF6B35] text-white rounded-[16px] font-semibold text-[16px] overflow-hidden shadow-[0_0_20px_rgba(255,107,53,0.3)] active:scale-[0.98] transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                <span className="relative z-10 text-[#080808]">Book a quick call</span>
                <ArrowRight className="relative z-10 ml-2 w-5 h-5 text-[#080808] group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex -space-x-3 items-center justify-center pt-2 sm:pt-0">
                <div className="w-10 h-10 rounded-full border-2 border-[#080808] bg-white/10 overflow-hidden"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-[#080808] bg-white/10 overflow-hidden"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="avatar" /></div>
                <div className="w-10 h-10 rounded-full border-2 border-[#080808] bg-white/10 overflow-hidden"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jocelyn" alt="avatar" /></div>
                <div className="pl-6 text-xs font-semibold text-white/50">
                  Join 50+ <br /> protected companies
                </div>
              </div>
            </div>

            </Reveal>
          </div>

          {/* Right Column: Dashboard Mockup */}
          <div className="lg:col-span-6 relative w-full h-full flex items-center justify-center">
            <Reveal className="w-full flex items-center justify-center" delay={0.15}>

            {/* The Dashboard Mockup Card */}
            <div className="w-full max-w-lg bg-[#1A1A1A] rounded-2xl border border-[#2A2A2A] overflow-hidden flex flex-col shadow-2xl">

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#2A2A2A]">
                <div className="text-white/80 font-medium text-sm">Fortress — Risk Overview</div>
                <div className="flex items-center gap-2">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </div>
                  <span className="text-green-500 text-xs font-semibold uppercase tracking-wider">Live</span>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="p-6 flex flex-col gap-8">

                {/* Top Row: Gauge + Stats */}
                <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-stretch">

                  {/* IRIS Gauge (Left) */}
                  <div className="flex flex-col items-center justify-center shrink-0">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      {/* SVG Ring */}
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        {/* Track */}
                        <circle cx="50" cy="50" r="40" className="stroke-[#2A2A2A] fill-none" strokeWidth="8" />
                        {/* Progress Arc */}
                        <circle cx="50" cy="50" r="40" className="stroke-[#FF6B35] fill-none" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="251.2" strokeLinecap="round"
                          style={{ animation: 'gauge-fill 1.5s ease-out forwards 0.2s' }} />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white tracking-tighter">78</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-col items-center gap-2">
                      <span className="text-sm font-semibold text-white/90">IRIS Score</span>
                      <div className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase tracking-wider font-bold">
                        Moderate Risk
                      </div>
                    </div>
                  </div>

                  {/* Secondary Stats (Right) */}
                  <div className="flex flex-col justify-center w-full gap-3">
                    {/* Stat Tile 1 */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#222222] border border-[#2A2A2A]">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-white/5 text-white/60">
                          <IndianRupee className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <span className="text-xs text-white/60 font-medium">Estimated Loss</span>
                      </div>
                      <span className="text-sm font-bold text-white tracking-tight">₹4.2Cr</span>
                    </div>
                    {/* Stat Tile 2 */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#222222] border border-[#2A2A2A]">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-white/5 text-white/60">
                          <TrendingUp className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <span className="text-xs text-white/60 font-medium">Attack Probability</span>
                      </div>
                      <span className="text-sm font-bold text-white tracking-tight">18%</span>
                    </div>
                    {/* Stat Tile 3 */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#222222] border border-[#2A2A2A]">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-[#FF6B35]/10 text-[#FF6B35]">
                          <ShieldAlert className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <span className="text-xs text-white/60 font-medium">Open Critical Vulns</span>
                      </div>
                      <span className="text-sm font-bold text-white tracking-tight">2</span>
                    </div>
                  </div>
                </div>

                {/* Mini Trend Chart */}
                <div className="flex flex-col gap-3">
                  <div className="text-xs font-semibold text-white/40 uppercase tracking-wider">Risk Trend — 30 days</div>
                  <div className="h-16 w-full relative bg-[#222222] rounded-lg border border-[#2A2A2A] overflow-hidden">
                    {/* Decorative Sparkline */}
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                      <defs>
                        <linearGradient id="trend-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,30 L10,25 L20,28 L30,20 L40,22 L50,15 L60,18 L70,10 L80,12 L90,5 L100,8 L100,40 L0,40 Z" fill="url(#trend-grad)" className="opacity-50" />
                      <polyline points="0,30 10,25 20,28 30,20 40,22 50,15 60,18 70,10 80,12 90,5 100,8" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* Compliance Strip */}
              <div className="px-5 py-4 border-t border-[#2A2A2A] bg-[#161616]">
                <div className="flex flex-wrap gap-2">
                  {['ISO 27001', 'SOC 2', 'SEBI-CSCRF'].map((fw, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#222222] border border-[#2A2A2A]">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      <span className="text-[10px] font-semibold text-white/70 tracking-wide">{fw}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#222222] border border-[#2A2A2A]">
                    <span className="text-[10px] font-semibold text-white/50 tracking-wide">+4 more</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-5 pb-4 bg-[#161616] flex justify-end">
                <span className="text-[10px] text-white/30 font-medium">Updated 2 min ago</span>
              </div>

            </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}

