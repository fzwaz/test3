"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import ProofStrip from "@/components/proofstrip";
import DashboardSection from "@/components/dashboard-section";
import PipelineSection from "@/components/pipeline-section";
import TakeActionSection from "@/components/take-action-section";
import RiskNumberCTASection from "@/components/risk-number-cta-section";
import TestimonialsSection from "@/components/testimonials-section";
import Footer from "@/components/footer";
import { ArrowRight, Activity, Search, Zap } from "lucide-react";

export default function Home() {
  const [activeModal, setActiveModal] = useState<"demo" | "posture" | null>(null);
  const [domainInput, setDomainInput] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [scanResult, setScanResult] = useState<boolean>(false);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput) return;
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setScanResult(true);
    }, 1200);
  };

  return (
    <main className="bg-[#000000] text-white overflow-x-clip">

      {/* ─────────────── 1. HERO SECTION (full viewport) ─────────────── */}
      {/* Fixed navbar — rendered outside flex flow */}
      <Header currentPath="/" />

      <div className="relative min-h-screen flex flex-col bg-black">
        {/* Centered hero content — fills remaining viewport height, padded for fixed navbar */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-28 pb-12 max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[78px] font-black tracking-tight leading-[1.08] select-none">
            <span className="block text-white">Know your cyber risk.</span>
            <span className="block text-[#f95700] mt-1">In dollars, not just scores.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
            Risknox turns your security posture into a quantified financial number, maps your compliance obligations, and connects the result directly to the right insurance coverage — AI-driven, in one platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setActiveModal("demo")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#f95700] hover:bg-[#ff6a20] text-white font-semibold text-base shadow-[0_0_30px_rgba(249,87,0,0.5)] hover:shadow-[0_0_40px_rgba(249,87,0,0.7)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Book A Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setActiveModal("posture")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black text-white border border-[#f95700]/80 hover:border-[#f95700] font-semibold text-base shadow-[0_0_0_1px_rgba(249,87,0,0.3)] hover:shadow-[0_0_20px_rgba(249,87,0,0.25)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Find your risk posture</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────── 2. PROOF STRIP ─────────────── */}
      <ProofStrip />

      {/* ─────────────── 3. DASHBOARD SECTION ─────────────── */}
      <DashboardSection />

      {/* ─────────────── 4. PIPELINE SECTION ─────────────── */}
      <PipelineSection />

      {/* ─────────────── 5. TAKE ACTION SECTION ─────────────── */}
      <TakeActionSection />

      {/* ─────────────── 6. TESTIMONIALS SECTION ─────────────── */}
      <TestimonialsSection />

      {/* ─────────────── 7. RISK NUMBER CTA SECTION ─────────────── */}
      <RiskNumberCTASection />

      {/* ─────────────── 8. FOOTER ─────────────── */}
      <Footer />

      {/* ─────────────── MODALS ─────────────── */}

      {/* Risk Posture Modal */}
      {activeModal === "posture" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0c0d12] border border-white/[0.12] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(249,115,22,0.2)]">
            <button onClick={() => { setActiveModal(null); setScanResult(false); }} className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg">✕</button>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold">
                <Search className="w-3.5 h-3.5" />
                <span>Instant Perimeter Assessment</span>
              </div>
              <h3 className="text-xl font-bold text-white">Find Your Organization&apos;s Risk Posture</h3>
              <p className="text-xs sm:text-sm text-slate-400">Enter your company domain to run an external passive telemetry scan across shadow IT, exposed assets, and compliance gaps.</p>
              {!scanResult ? (
                <form onSubmit={handleScan} className="space-y-3 pt-2">
                  <div className="flex rounded-xl overflow-hidden border border-white/[0.12] focus-within:border-orange-500 transition-colors">
                    <span className="bg-white/[0.03] text-slate-400 px-3.5 py-2.5 text-xs flex items-center border-r border-white/[0.08]">https://</span>
                    <input type="text" placeholder="yourcompany.com" value={domainInput} onChange={(e) => setDomainInput(e.target.value)} required className="flex-1 bg-transparent px-3.5 py-2.5 text-sm text-white focus:outline-none placeholder:text-slate-600" />
                  </div>
                  <button type="submit" disabled={analyzing} className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 font-semibold text-sm text-white shadow-[0_0_18px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-2">
                    {analyzing ? (<><Activity className="w-4 h-4 animate-spin" /><span>Scanning...</span></>) : (<><span>Scan Risk Posture</span><ArrowRight className="w-4 h-4" /></>)}
                  </button>
                </form>
              ) : (
                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-orange-500/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-300 font-medium">{domainInput}</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[11px] font-mono border border-emerald-500/30">Scan Complete</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-left">
                      <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.06]">
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Exposed Endpoints</div>
                        <div className="text-base font-bold text-orange-400">14 Assets</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.06]">
                        <div className="text-[10px] text-slate-400 uppercase font-mono">Audit Readiness</div>
                        <div className="text-base font-bold text-amber-400">84% Score</div>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => { setActiveModal("demo"); setScanResult(false); }} className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 font-semibold text-sm text-white shadow-[0_0_18px_rgba(249,115,22,0.4)] flex items-center justify-center gap-2">
                    <span>View Full Remediation Report in Demo</span><ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Book a Demo Modal */}
      {activeModal === "demo" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <div className="relative w-full max-w-md rounded-2xl bg-[#0c0d12] border border-white/[0.12] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(249,115,22,0.2)]">
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg">✕</button>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold">
                <Zap className="w-3.5 h-3.5" /><span>Executive Live Walkthrough</span>
              </div>
              <h3 className="text-xl font-bold text-white">Book a Risknox Demo</h3>
              <p className="text-xs sm:text-sm text-slate-400">Experience Fortress attack surface telemetry and Accord automated GRC workflows customized for your stack.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! A Risknox cybersecurity specialist will reach out shortly."); setActiveModal(null); }} className="space-y-3 pt-2">
                <input type="text" placeholder="Full Name" required className="w-full bg-white/[0.04] border border-white/[0.12] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 placeholder:text-slate-600" />
                <input type="email" placeholder="Work Email" required className="w-full bg-white/[0.04] border border-white/[0.12] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 placeholder:text-slate-600" />
                <input type="text" placeholder="Company Name" required className="w-full bg-white/[0.04] border border-white/[0.12] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 placeholder:text-slate-600" />
                <button type="submit" className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 font-semibold text-sm text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all mt-2">Schedule Demo with Specialist</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
