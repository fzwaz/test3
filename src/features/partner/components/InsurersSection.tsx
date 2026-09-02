"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  Users,
  Settings,
  ArrowRight,
  Lock,
} from "lucide-react";

export default function InsurersSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#000000] text-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Outer Chamfered Container with 1px border */}
        <div
          className="relative p-[1px] bg-white/10 hover:bg-white/15 transition-all duration-300"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)",
          }}
        >
          <div
            className="bg-[#07080a] p-6 sm:p-10 lg:p-12 relative overflow-hidden"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)",
            }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff7936]/[0.03] rounded-full blur-3xl pointer-events-none" />

            {/* Top Row: 01 + Underwrite smarter with Compass + Graph Graphic */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-10 border-b border-white/10 relative">
              {/* Left Column: Number 01 & Circuit Line */}
              <div className="lg:col-span-2 flex flex-row lg:flex-col items-center lg:items-start gap-3">
                <span className="text-6xl sm:text-7xl font-bold tracking-tight text-[#ff7936] leading-none select-none">
                  01
                </span>
                {/* Circuit Line under 01 */}
                <svg
                  className="w-20 h-10 overflow-visible text-[#ff7936]"
                  viewBox="0 0 80 40"
                  fill="none"
                >
                  <path
                    d="M 0 35 L 15 35 L 45 12 L 65 12"
                    stroke="rgba(255, 121, 54, 0.7)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle cx="65" cy="12" r="3.5" fill="#ff7936" />
                  <circle
                    cx="65"
                    cy="12"
                    r="7"
                    fill="#ff7936"
                    fillOpacity="0.25"
                  />
                </svg>
              </div>

              {/* Middle Column: Heading & Description */}
              <div className="lg:col-span-6 flex flex-col justify-center border-l-0 lg:border-l lg:border-white/10 lg:pl-8">
                <div className="text-xs sm:text-[13px] font-mono font-semibold uppercase tracking-wider text-[#ff7936] mb-3">
                  FOR INSURERS & BROKERS
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.18] mb-3">
                  Underwrite smarter <br />
                  with <span className="text-[#ff7936]">Compass.</span>
                </h2>
                <p className="text-zinc-400 text-sm sm:text-[15px] leading-relaxed max-w-lg">
                  For insurers and brokers who want Compass integrated into their underwriting workflow.
                </p>
              </div>

              {/* Right Column: Dot Matrix + Stepped Circuit Polyline Graph */}
              <div className="lg:col-span-4 relative h-32 sm:h-36 flex items-center justify-end overflow-hidden">
                {/* Dot Matrix Grid */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-25"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
                    backgroundSize: "14px 14px",
                    maskImage:
                      "linear-gradient(to left, black 60%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to left, black 60%, transparent 100%)",
                  }}
                />

                {/* Ascending Stepped Circuit Line */}
                <svg
                  className="w-full h-full relative z-10 overflow-visible"
                  viewBox="0 0 280 120"
                  fill="none"
                >
                  <path
                    d="M 10 90 L 70 90 L 100 65 L 140 65 L 170 35 L 230 35 L 245 20 L 270 20"
                    stroke="rgba(255, 255, 255, 0.25)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Glowing Highlight Path Segments */}
                  <path
                    d="M 140 65 L 170 35"
                    stroke="#ff7936"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="170" cy="35" r="3" fill="#ff7936" />
                  <circle cx="170" cy="35" r="7" fill="#ff7936" fillOpacity="0.3" />

                  <circle cx="270" cy="20" r="3" fill="#ff7936" />
                  <circle cx="270" cy="20" r="7" fill="#ff7936" fillOpacity="0.3" />
                </svg>
              </div>
            </div>

            {/* Bottom Row: Partnership Journey */}
            <div className="pt-8">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#ff7936] mb-6">
                PARTNERSHIP JOURNEY
              </div>

              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-8">
                {/* 3 Steps Container */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-grow">
                  {/* Step 1: Apply */}
                  <div className="flex items-start gap-3.5 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-[#0e1015] border border-white/15 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-[#ff7936]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Apply</h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        Submit your partnership application.
                      </p>
                    </div>
                  </div>

                  {/* Arrow Separator */}
                  <ArrowRight className="w-4 h-4 text-zinc-600 hidden sm:block flex-shrink-0" />

                  {/* Step 2: Partner Review */}
                  <div className="flex items-start gap-3.5 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-[#0e1015] border border-white/15 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-[#ff7936]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Partner Review</h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        Our team reviews your application and aligns on integration.
                      </p>
                    </div>
                  </div>

                  {/* Arrow Separator */}
                  <ArrowRight className="w-4 h-4 text-zinc-600 hidden sm:block flex-shrink-0" />

                  {/* Step 3: Compass Integration */}
                  <div className="flex items-start gap-3.5 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-[#0e1015] border border-white/15 flex items-center justify-center flex-shrink-0">
                      <Settings className="w-5 h-5 text-[#ff7936]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Compass Integration</h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        Integrate Compass into your workflow and start underwriting smarter.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: CTA Button + Security Trust Note */}
                <div className="flex flex-col items-center sm:items-end gap-2.5 flex-shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
                  <Link
                    href="/contact?role=insurers-brokers"
                    className="group relative inline-flex items-center justify-center p-[1px] transition-all duration-200 active:scale-[0.98] w-full sm:w-auto"
                    style={{
                      clipPath:
                        "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                    }}
                  >
                    <div
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-zinc-100 text-black font-semibold text-sm transition-all duration-200 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                      style={{
                        clipPath:
                          "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                      }}
                    >
                      <span>Apply to Become a Partner</span>
                      <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>

                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Lock className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Secure. Confidential. Trusted.</span>
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
