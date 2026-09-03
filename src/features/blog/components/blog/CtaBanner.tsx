"use client";

import React from "react";
import Link from "next/link";
import { CTA_STATS } from "../../data/posts";
import { Shield, Layers, Grid, CheckCircle2, ArrowRight } from "lucide-react";

export const CtaBanner: React.FC = () => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case "shield":
        return <Shield className="w-5 h-5 text-[#ff5500]" />;
      case "layers":
        return <Layers className="w-5 h-5 text-blue-400" />;
      case "grid":
        return <Grid className="w-5 h-5 text-purple-400" />;
      case "check-circle":
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Shield className="w-5 h-5 text-[#ff5500]" />;
    }
  };

  return (
    <div className="w-full rounded-2xl bg-[#09090b] border border-[#1f1f23] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-[#1f1f23]">
        <div className="max-w-xl space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#ff5500] font-sans">
            ENTERPRISE INTELLIGENCE
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Turn Technical Exposure Into Clear Action.
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Join security teams, insurers, and risk managers using Risknox to make continuous, defensible cyber decisions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#ff5500] hover:bg-[#ff661a] text-white text-sm font-semibold shadow-[0_0_20px_rgba(255,85,0,0.35)] transition-all active:scale-95"
          >
            <span>Request Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/solution"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#141418] hover:bg-[#1a1a20] border border-[#27272a] text-white text-sm font-semibold transition-all"
          >
            <span>Explore Solutions</span>
          </Link>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 relative z-10">
        {CTA_STATS.map((stat) => (
          <div key={stat.label} className="p-3.5 rounded-xl bg-[#111114] border border-[#1f1f23] flex flex-col justify-between">
            <div className="mb-2">{getStatIcon(stat.iconName)}</div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-sans">{stat.value}</div>
              <div className="text-[10px] sm:text-[11px] text-zinc-400 font-semibold tracking-wider uppercase mt-0.5">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CtaBanner;

