"use client";

import React, { useState } from "react";
import CircuitTrace from "@/components/circuit-trace";
import { UserPlus, Lock, BarChart2, ArrowRight } from "lucide-react";
import TryCompassModal from "@/components/TryCompassModal";

export default function EvaluationSection() {
  const [tryOpen, setTryOpen] = useState(false);
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#000000] text-slate-100">
      <TryCompassModal open={tryOpen} onClose={() => setTryOpen(false)} />
      <div className="max-w-6xl mx-auto">
        {/* Section eyebrow label */}
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff7936] mb-5">
          02 / Trial Access
        </p>

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
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff7936]/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-10 border-b border-white/10 relative">
              <div className="lg:col-span-2 flex flex-row lg:flex-col items-center lg:items-start gap-3">
                <span className="text-6xl sm:text-7xl font-bold tracking-tight text-[#ff7936] leading-none select-none">
                  02
                </span>
                <svg className="w-20 h-10 overflow-visible text-[#ff7936]" viewBox="0 0 80 40" fill="none">
                  <path d="M 0 35 L 15 35 L 45 12 L 65 12" stroke="rgba(255, 121, 54, 0.7)" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="65" cy="12" r="3.5" fill="#ff7936" />
                  <circle cx="65" cy="12" r="7" fill="#ff7936" fillOpacity="0.25" />
                </svg>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-center border-l-0 lg:border-l lg:border-white/10 lg:pl-8">
                <div className="text-xs sm:text-[13px] font-mono font-semibold uppercase tracking-wider text-[#ff7936] mb-3">
                  HANDS-ON EVALUATION
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.18] mb-3">
                  See your applicants&apos; risk <br />
                  before you <span className="text-[#ff7936]">price the policy.</span>
                </h2>
                <p className="text-zinc-400 text-sm sm:text-[15px] leading-relaxed max-w-lg">
                  Lightweight self-serve request for a trial account &mdash; lower commitment than the full partner application.
                </p>
              </div>

              <div className="lg:col-span-4 relative h-32 sm:h-36 flex items-center justify-end overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none opacity-25"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
                    backgroundSize: "14px 14px",
                    maskImage: "linear-gradient(to left, black 60%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to left, black 60%, transparent 100%)",
                  }}
                />
                <svg className="w-full h-full relative z-10 overflow-visible" viewBox="0 0 280 120" fill="none">
                  <path d="M 10 100 L 50 100 L 80 78 L 120 78 L 155 50 L 200 50 L 230 28 L 270 28" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Animated circuit trace — draws left to right */}
                  <CircuitTrace
                    d="M 10 100 L 50 100 L 80 78 L 120 78 L 155 50 L 200 50 L 230 28 L 270 28"
                    endX={270}
                    endY={28}
                    phase={2.25}
                  />
                </svg>
              </div>
            </div>

            <div className="pt-8">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#ff7936] mb-6">
                EVALUATION JOURNEY
              </div>

              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-grow">
                  <div className="flex items-start gap-3.5 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-[#0e1015] border border-white/15 flex items-center justify-center flex-shrink-0">
                      <UserPlus className="w-5 h-5 text-[#ff7936]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Request Access</h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">Submit a few details to request trial access.</p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-zinc-600 hidden sm:block flex-shrink-0" />

                  <div className="flex items-start gap-3.5 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-[#0e1015] border border-white/15 flex items-center justify-center flex-shrink-0">
                      <Lock className="w-5 h-5 text-[#ff7936]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Get Trial Account</h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">Receive your trial account and onboarding guide.</p>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-zinc-600 hidden sm:block flex-shrink-0" />

                  <div className="flex items-start gap-3.5 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-[#0e1015] border border-white/15 flex items-center justify-center flex-shrink-0">
                      <BarChart2 className="w-5 h-5 text-[#ff7936]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Evaluate Risk</h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">Explore real applicant risk data before you price the policy.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center sm:items-end gap-2.5 flex-shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
                  <button
                    type="button"
                    onClick={() => setTryOpen(true)}
                    className="group relative inline-flex items-center justify-center p-[1px] bg-white/20 hover:bg-[#ff7936] hover:shadow-[0_0_18px_rgba(255,121,54,0.45)] transition-all duration-200 active:scale-[0.97] w-full sm:w-auto cursor-pointer"
                    style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                  >
                    <div
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-br from-[#ff7936]/15 via-[#140e0a] to-[#090a0d] group-hover:from-[#ff7936]/30 group-hover:via-[#1c120c] group-hover:to-[#0e0d12] text-zinc-100 group-hover:text-white font-medium text-sm transition-all duration-200 w-full sm:w-auto"
                      style={{ clipPath: "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)" }}
                    >
                      <span>Request a Trial Account</span>
                      <ArrowRight className="w-4 h-4 text-orange-300 group-hover:text-[#ff7936] group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </button>

                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Lock className="w-3.5 h-3.5 text-zinc-500" />
                    <span>No commitment. Cancel anytime.</span>
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