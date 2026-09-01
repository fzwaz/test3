"use client";

import React, { useState } from "react";
import {
  Landmark,
  Stethoscope,
  Cloud,
  Factory,
  Zap,
  ShoppingBag,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { INDUSTRIES_DATA } from "../lib/constants";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Landmark,
  Stethoscope,
  Cloud,
  Factory,
  Zap,
  ShoppingBag,
};

export default function IndustrySolutions() {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>("bfsi");

  const currentIndustry =
    INDUSTRIES_DATA.find((item) => item.id === selectedIndustryId) || INDUSTRIES_DATA[0];
  const IconComponent = iconMap[currentIndustry.icon] || Landmark;

  return (
    <section id="industry-solutions" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Landmark className="w-3.5 h-3.5" />
            <span>Tailored By Sector</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Engineered For Your <span className="text-[#f97316]">Industry’s</span> Regulatory Reality.
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Different sectors face fundamentally different threat profiles and regulatory mandates.
            Risknox provides pre-configured compliance blueprints and attack surface telemetry tailored to your vertical.
          </p>
        </div>

        {/* Industry Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {INDUSTRIES_DATA.map((ind) => {
            const TabIcon = iconMap[ind.icon] || Landmark;
            const isSelected = ind.id === selectedIndustryId;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`flex flex-col items-center justify-center text-center p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#181109] border-orange-500 text-white shadow-[0_0_24px_rgba(249,115,22,0.25)] scale-[1.02]"
                    : "bg-[#0b0c10]/70 border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.04] hover:border-white/[0.18]"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 transition-colors ${
                    isSelected
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-white/[0.04] text-slate-400 group-hover:text-white"
                  }`}
                >
                  <TabIcon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold leading-tight line-clamp-2">
                  {ind.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Industry Details Showcase Card */}
        <div className="rounded-3xl bg-[#090a0f]/90 border border-white/[0.12] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(249,115,22,0.06)] backdrop-blur-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 items-start">
            {/* Left Column (7 cols): Overview, Threat Vector & Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentIndustry.badge}</span>
                </div>
                <span className="text-slate-400 text-xs">Sector Blueprint</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {currentIndustry.name}
                </h3>
                <p className="text-orange-400/90 text-sm font-medium mt-1">
                  {currentIndustry.tagline}
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                  {currentIndustry.description}
                </p>
              </div>

              {/* Threat Vector Callout */}
              <div className="p-4 rounded-xl bg-[#140e08] border border-orange-500/25 flex items-start gap-3.5">
                <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-orange-300">
                    Primary Threat Vector
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 mt-0.5">
                    {currentIndustry.threatVector}
                  </div>
                </div>
              </div>

              {/* Key Capabilities List */}
              <div className="space-y-3.5 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Targeted Industry Defense Capabilities
                </div>
                {currentIndustry.keyCapabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-orange-500/40 transition-all flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{cap.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (5 cols): Compliance Mapping & Exposure Stats */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              {/* Compliance Frameworks Box */}
              <div className="p-6 rounded-2xl bg-[#0c0d14] border border-white/[0.08] space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-orange-400" />
                  <span>Pre-Integrated Compliance Standards</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentIndustry.complianceStandards.map((std, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white text-xs font-medium"
                    >
                      {std}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Automatic cross-framework telemetry mapping satisfies continuous evidence collection without duplicate audit overhead.
                </p>
              </div>

              {/* Exposure & Metric Stat Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1c1208] to-[#0c0d14] border border-orange-500/30 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                    Quantified Industry Impact
                  </span>
                  <TrendingUp className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white">
                    {currentIndustry.stat.value}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {currentIndustry.stat.label}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                  <span>Benchmark Exposure:</span>
                  <span className="font-semibold text-orange-300">
                    {currentIndustry.averageExposure}
                  </span>
                </div>
              </div>

              {/* Action Link */}
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request {currentIndustry.name} Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
