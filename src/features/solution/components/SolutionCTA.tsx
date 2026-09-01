"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Lock } from "lucide-react";

export default function SolutionCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-b from-[#140e08] via-[#0d0d12] to-[#08080c] border border-orange-500/40 p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(249,115,22,0.15)]">
          {/* Ambient center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-500/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Deployment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to See Cyber Risk Through <span className="text-[#f97316]">Your World?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Experience an interactive demonstration mapped directly to your industry’s threat vectors and your specific executive role.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-[#f95700] hover:from-orange-400 hover:to-orange-500 text-white font-bold text-base shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)] transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>Book A Tailored Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact#risk-posture"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black/60 hover:bg-white/[0.06] text-white border border-white/[0.15] hover:border-orange-500/50 font-semibold text-base transition-all duration-200"
              >
                <span>Find Your Risk Posture</span>
                <Shield className="w-4 h-4 text-orange-400" />
              </Link>
            </div>

            <div className="pt-6 flex items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-orange-400" />
                <span>Zero Agent Installation</span>
              </div>
              <span>•</span>
              <div>SOC 2 & ISO 27001 Certified</div>
              <span>•</span>
              <div>Live in Under 10 Minutes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
