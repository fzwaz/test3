"use client";

import React, { useState } from "react";
import { Radar, Layers, TrendingUp, CheckCircle2, ArrowRight, ShieldCheck, Activity, Scale } from "lucide-react";
import { SOLUTION_PILLARS } from "../lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Radar,
  Layers,
  TrendingUp,
};

export default function SolutionEngine() {
  const [activePillar, setActivePillar] = useState<string>("exposure");

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>The Unified Intelligence Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            How Risknox Connects the <span className="text-[#f97316]">Three Pillars</span>.
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Eliminate silos between technical telemetry, regulatory mandates, and financial risk models.
            Risknox weaves them into a unified operational fabric.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SOLUTION_PILLARS.map((pillar) => {
            const PillarIcon = iconMap[pillar.icon] || Radar;
            const isActive = activePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`cursor-pointer rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isActive
                    ? "bg-[#140e08]/90 border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.25)] scale-[1.02]"
                    : "bg-[#0a0b10]/80 border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.02]"
                }`}
              >
                {/* Top Step + Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest px-2.5 py-1 rounded-md ${
                        isActive
                          ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                          : "bg-white/[0.05] text-slate-400"
                      }`}
                    >
                      STEP {pillar.step}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? "bg-orange-500/20 text-orange-400" : "bg-white/[0.05] text-slate-400"
                      }`}
                    >
                      <PillarIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1.5">{pillar.title}</h3>
                  <p className="text-xs text-orange-400/90 font-medium mb-3">{pillar.subtitle}</p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Features & Stat */}
                <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                  {pillar.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}

                  <div className="pt-3 text-[11px] font-mono text-orange-300/80">
                    ⚡ {pillar.stats}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
