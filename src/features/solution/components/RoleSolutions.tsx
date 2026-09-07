// @ts-nocheck
"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  Scale,
  TrendingUp,
  FileCheck2,
  Terminal,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { ROLES_DATA } from "../lib/constants";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  Scale,
  TrendingUp,
  FileCheck2,
  Terminal,
};

export default function RoleSolutions() {
  const [selectedRoleId, setSelectedRoleId] = useState<string>("ciso");

  const currentRole = ROLES_DATA.find((r) => r.id === selectedRoleId) || ROLES_DATA[0];
  const IconComponent = iconMap[currentRole.icon] || ShieldAlert;

  return (
    <section id="role-solutions" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#050507]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Built For Every Stakeholder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Tailored For <span className="text-[#f97316]">Your Role</span> & Mission.
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            From technical remediation scripts for engineering teams to quantified dollar risk metrics for the Board,
            Risknox aligns the entire organization around measurable cyber defense.
          </p>
        </div>

        {/* Role Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {ROLES_DATA.map((role) => {
            const RoleIcon = iconMap[role.icon] || ShieldAlert;
            const isSelected = role.id === selectedRoleId;
            return (
              <button
                key={role.id}
                type="button"
                onClick={() => setSelectedRoleId(role.id)}
                className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#181109] border-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] scale-105"
                    : "bg-[#0b0c10] border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.04] hover:border-white/[0.2]"
                }`}
              >
                <RoleIcon
                  className={`w-4 h-4 ${isSelected ? "text-orange-400" : "text-slate-400"}`}
                />
                <span>{role.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Role Content Display */}
        <div className="rounded-3xl bg-[#090a0f]/90 border border-white/[0.12] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
          {/* Ambient Glow */}
          <div className="absolute -top-24 left-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-[110px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
            {/* Left Col (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1c1208] border border-orange-500/40 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {currentRole.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-orange-400 font-medium">
                    {currentRole.persona}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentRole.summary}
              </p>

              {/* Challenge vs Risknox Impact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-red-950/15 border border-red-500/20">
                  <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                    The Pain Point
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentRole.primaryChallenge}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-orange-950/20 border border-orange-500/30">
                  <div className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                    The Risknox Impact
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentRole.risknoxImpact}
                  </p>
                </div>
              </div>

              {/* Specific Role Deliverables */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Role Deliverables & Workflows
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentRole.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {currentRole.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-[#0e0f17] border border-white/[0.08] flex items-center justify-between"
                  >
                    <div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#f97316]">
                        {metric.value}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                        {metric.label}
                      </div>
                    </div>
                    <Sparkles className="w-6 h-6 text-orange-400/40" />
                  </div>
                ))}
              </div>

              {/* Call to action */}
              <div className="p-6 rounded-2xl bg-[#140e08] border border-orange-500/30 space-y-3 text-center">
                <h4 className="text-base font-bold text-white">
                  See how Risknox empowers {currentRole.shortTitle}
                </h4>
                <p className="text-xs text-slate-400">
                  Schedule a customized walkthrough focused exclusively on your workflow.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(249,115,22,0.35)] transition-all"
                >
                  <span>Book {currentRole.shortTitle} Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
