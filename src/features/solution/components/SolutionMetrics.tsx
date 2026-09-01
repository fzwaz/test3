"use client";

import React from "react";
import { SOLUTION_METRICS } from "../lib/constants";
import { TrendingUp, ShieldCheck, Zap } from "lucide-react";

export default function SolutionMetrics() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-y border-white/[0.08] bg-[#07080c]/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTION_METRICS.map((metric, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-orange-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-100 to-orange-400">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-white mt-1.5">{metric.label}</div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{metric.sublabel}</p>
              </div>

              {metric.trend && (
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] text-orange-400 font-medium">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{metric.trend}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
