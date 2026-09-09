"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowUp } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/reveal";

export default function FinalCta() {
  const [coords, setCoords] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: `${e.clientX - rect.left}px`,
      y: `${e.clientY - rect.top}px`,
    });
  };

  return (
    <section
      className="relative w-full py-24 md:py-32 px-6 sm:px-10 lg:px-16 bg-[#080808] border-t border-white/[0.06] overflow-hidden group/section"
      onMouseMove={handleMouseMove}
    >
      {/* Static orange dot grid (brightens around cursor on hover) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80" style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23FF6B35' cx='10' cy='10' r='1.5' opacity='0.5'/%3E%3C/svg%3E\")" }} />
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23FF6B35' cx='10' cy='10' r='1.5'/%3E%3C/svg%3E\")",
          maskImage: `radial-gradient(400px circle at ${coords.x} ${coords.y}, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${coords.x} ${coords.y}, black 0%, transparent 100%)`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-6">
            One platform. The right intelligence for your risk.
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.08]">
            Start with what you <span className="text-[#ff7d1c]">need to understand.</span>
          </h2>
          <p className="mt-6 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed max-w-xl mx-auto">
            Explore the Risknox platform and discover the product built for
            your specific risk challenge.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <Link
              href="#products"
              className="group inline-flex items-center justify-center gap-3 px-8 py-[15px] rounded-[10px] bg-[#f97316] hover:bg-[#ff7d1c] text-white font-semibold text-[15px] shadow-[0_0_28px_rgba(249,115,22,0.45)] hover:shadow-[0_0_36px_rgba(249,115,22,0.65)] transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <span>Explore Our Products</span>
              <ArrowUp className="w-[18px] h-[18px] stroke-[2.5] group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact?role=platform"
              className="group inline-flex items-center justify-center gap-3 px-8 py-[15px] rounded-[10px] bg-black/70 text-white font-semibold text-[15px] border border-[#f97316]/70 shadow-[0_0_20px_rgba(249,115,22,0.15)] hover:border-orange-400 hover:shadow-[0_0_28px_rgba(249,115,22,0.35)] hover:bg-[#140c06] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
            >
              <span>Talk to Risknox</span>
              <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] text-orange-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
