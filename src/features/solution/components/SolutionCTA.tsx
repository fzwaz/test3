"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, ArrowRight, Mail } from "lucide-react";

export default function SolutionCTA() {
  const [coords, setCoords] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: `${e.clientX - rect.left}px`,
      y: `${e.clientY - rect.top}px`,
    });
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#000000] text-slate-100">
      <div className="max-w-6xl mx-auto">
        <div
          onMouseMove={handleMouseMove}
          className="relative group/cta-box rounded-2xl sm:rounded-3xl bg-[#080808] border border-white/[0.1] px-7 py-8 sm:px-12 sm:py-10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
        >
          {/* 1. Base Dot Grid */}
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23ffffff' cx='10' cy='10' r='1.2' opacity='0.15'/%3E%3C/svg%3E\")",
            }}
          />

          {/* 2. Interactive Orange Dot-Glow Highlight */}
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-20 group-hover/cta-box:opacity-75 transition-opacity duration-500"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23FF6B35' cx='10' cy='10' r='1.5'/%3E%3C/svg%3E\")",
              maskImage: `radial-gradient(380px circle at ${coords.x} ${coords.y}, black 0%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(380px circle at ${coords.x} ${coords.y}, black 0%, transparent 100%)`,
            }}
          />

          {/* 3. Interactive Ambient Orange Torch Glow */}
          <div
            className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/cta-box:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(420px circle at ${coords.x} ${coords.y}, rgba(255, 107, 53, 0.08), transparent 70%)`,
            }}
          />

          {/* ===== CONTENT ===== */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Left Column */}
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#160d07] border border-orange-500/40 text-[#f97316] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <Shield className="w-3.5 h-3.5 text-[#f97316]" strokeWidth={2} />
                <span>DIRECT SUPPORT</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
                Ready to secure your business? <br />
                <span className="text-[#f95700]">Fill out the form above.</span>
              </h2>

              {/* Description */}
              <p className="mt-3 text-zinc-400 text-sm sm:text-[15px] leading-relaxed max-w-lg">
                Our cybersecurity architects respond within 24 hours. Prefer email? Reach us
                directly at{" "}
                <a
                  href="mailto:info@risknox.ai"
                  className="text-white font-medium underline underline-offset-4 hover:text-[#f97316] transition-colors"
                >
                  info@risknox.ai
                </a>
                .
              </p>
            </div>

            {/* Right Column: Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-shrink-0">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center p-[1px] bg-white/20 hover:bg-[#ff7936] hover:shadow-[0_0_18px_rgba(255,121,54,0.45)] transition-all duration-200 active:scale-[0.97]"
                style={{
                  clipPath:
                    "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                }}
              >
                <div
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-br from-[#ff7936]/15 via-[#140e0a] to-[#090a0d] group-hover:from-[#ff7936]/30 group-hover:via-[#1c120c] group-hover:to-[#0e0d12] text-zinc-100 group-hover:text-white font-medium text-sm transition-all duration-200 w-full"
                  style={{
                    clipPath:
                      "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                  }}
                >
                  <span>Explore the platform</span>
                  <ArrowRight className="w-4 h-4 text-orange-300 group-hover:text-[#ff7936] group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </Link>

              <a
                href="mailto:info@risknox.ai"
                className="group relative inline-flex items-center justify-center p-[1px] bg-white/20 hover:bg-[#ff7936] hover:shadow-[0_0_18px_rgba(255,121,54,0.45)] transition-all duration-200 active:scale-[0.97]"
                style={{
                  clipPath:
                    "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                }}
              >
                <div
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-br from-[#ff7936]/15 via-[#140e0a] to-[#090a0d] group-hover:from-[#ff7936]/30 group-hover:via-[#1c120c] group-hover:to-[#0e0d12] text-zinc-100 group-hover:text-white font-medium text-sm transition-colors duration-200 w-full"
                  style={{
                    clipPath:
                      "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                  }}
                >
                  <Mail className="w-4 h-4 text-orange-300 group-hover:text-[#ff7936] transition-colors duration-200" />
                  <span>Email Us</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
