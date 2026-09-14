"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import ProofStrip from "@/components/proofstrip";
import PipelineSection from "@/components/pipeline-section";
import TakeActionSection from "@/components/take-action-section";
import IndustriesMarquee from "@/components/industries-marquee";
import RiskNumberCTASection from "@/components/risk-number-cta-section";
import TestimonialsSection from "@/components/testimonials-section";
import AwardsSection from "@/components/awards-section";
import ResourcesPreview from "@/components/resources-preview";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";
import { ArrowRight, Activity, Search, Zap } from "lucide-react";
import { FeatureHeroBackground } from "@/components/FeatureHeroBackground";
import { useHeroReveal } from "@/hooks/useHeroReveal";

export default function Home() {
  const { mounted, textStyle } = useHeroReveal();
  const [activeModal, setActiveModal] = useState<"demo" | "posture" | null>(null);
  const [domainInput, setDomainInput] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [scanResult, setScanResult] = useState<boolean>(false);
  const [showHomeCta, setShowHomeCta] = useState(false);
  const [homeCtaName, setHomeCtaName] = useState("");
  const [homeCtaEmail, setHomeCtaEmail] = useState("");
  const [homeCtaError, setHomeCtaError] = useState<string | null>(null);
  const [homeCtaSubmitting, setHomeCtaSubmitting] = useState(false);

  // Show CTA popup 3s after homepage open — only on first launch / hard refresh, not on client-side page switches
  React.useEffect(() => {
    const key = "home-cta-shown";
    const clear = () => sessionStorage.removeItem(key);
    window.addEventListener("beforeunload", clear);
    window.addEventListener("pagehide", clear);

    if (!sessionStorage.getItem(key)) {
      const t = setTimeout(() => {
        setShowHomeCta(true);
        sessionStorage.setItem(key, "1");
      }, 3000);
      return () => {
        clearTimeout(t);
        window.removeEventListener("beforeunload", clear);
        window.removeEventListener("pagehide", clear);
      };
    }
    return () => {
      window.removeEventListener("beforeunload", clear);
      window.removeEventListener("pagehide", clear);
    };
  }, []);

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

      <div className="relative min-h-screen flex flex-col bg-black overflow-hidden" style={{ contain: "layout style" }}>
        {/* Animated orange bar background */}
        <FeatureHeroBackground mounted={mounted} />
        {/* Centered hero content — fills remaining viewport height, padded for fixed navbar */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-28 pb-12 max-w-6xl mx-auto -translate-y-8">
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[0.92] tracking-[-0.055em] select-none">
            <span className="block overflow-hidden pb-3 -mb-1">
              <span className="block text-white" style={textStyle(900)}>Know your cyber risk.</span>
            </span>
            <span className="block overflow-hidden mt-2 pb-3 -mb-1">
              <span className="block text-[#f95700]" style={textStyle(1050)}>In dollars, not just scores.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-[880px] text-lg md:text-xl text-slate-300 font-normal leading-relaxed" style={textStyle(1300)}>
            Risknox turns your security posture into a quantified financial number, maps your compliance obligations, and connects the result directly to the right insurance coverage — AI-driven, in one platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={textStyle(1550)}>
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

      {/* ─────────────── 4. PIPELINE SECTION ─────────────── */}
      <PipelineSection />

      {/* ─────────────── 5. TAKE ACTION SECTION ─────────────── */}
      <TakeActionSection />

      {/* ─────────────── 5b. INDUSTRIES MARQUEE ─────────────── */}
      <IndustriesMarquee />

      {/* ─────────────── 6. TESTIMONIALS SECTION ─────────────── */}
      <TestimonialsSection />

      {/* ─────────────── 6b. AWARDS SECTION ─────────────── */}
      <AwardsSection />

      {/* ─────────────── 6c. RESOURCES PREVIEW ─────────────── */}
      <ResourcesPreview />

      {/* ─────────────── 7. RISK NUMBER CTA SECTION ─────────────── */}
      <RiskNumberCTASection />

      {/* ─────────────── 7b. FAQ SECTION ─────────────── */}
      <FaqSection />

      {/* ─────────────── 8. FOOTER ─────────────── */}
      <Footer />

      {/* ─────────────── HOME CTA POPUP (3s) ─────────────── */}
      {showHomeCta && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/20" onClick={() => setShowHomeCta(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[560px] rounded-[24px] bg-[#0a0a0a] border border-white/[0.08] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
          >
            {/* dotted background */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.18]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/40" />
            <button onClick={() => setShowHomeCta(false)} className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer" aria-label="Close">✕</button>

            <div className="relative z-10 px-7 sm:px-10 py-8 sm:py-10 text-center">
              <p className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#ff7d1c] uppercase mb-3">SEE RISK DIFFERENTLY</p>
              <h3 className="text-[26px] sm:text-[30px] font-bold text-white tracking-tight leading-tight">Ready to understand your risk?</h3>
              <p className="mt-2 text-[13px] sm:text-sm text-slate-400 leading-relaxed">Explore how Risknox can help you build a safer, more resilient tomorrow.</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div>
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-slate-500 mb-1.5">Full Name</label>
                  <input type="text" value={homeCtaName} onChange={(e) => setHomeCtaName(e.target.value)} placeholder="Jane Doe" className="w-full h-11 px-3.5 rounded-xl border border-white/10 bg-black text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold tracking-widest uppercase text-slate-500 mb-1.5">Work Email</label>
                  <input type="email" value={homeCtaEmail} onChange={(e) => setHomeCtaEmail(e.target.value)} placeholder="you@company.com" className="w-full h-11 px-3.5 rounded-xl border border-white/10 bg-black text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50" />
                </div>
              </div>

              {homeCtaError && <p className="mt-3 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 text-left">{homeCtaError}</p>}

              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                <button
                  type="button"
                  disabled={homeCtaSubmitting}
                  onClick={async () => {
                    setHomeCtaError(null);
                    if (!homeCtaName.trim() || !homeCtaEmail.trim()) {
                      setHomeCtaError("Please enter your name and work email.");
                      return;
                    }
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(homeCtaEmail)) {
                      setHomeCtaError("Enter a valid work email.");
                      return;
                    }
                    setHomeCtaSubmitting(true);
                    try {
                      await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ fullName: homeCtaName, workEmail: homeCtaEmail, companyName: homeCtaName, source: "homepage-cta", Product_Interest: "Platform", reachOutFor: "Product Demo", selectedProduct: "Platform" }),
                      });
                    } catch {}
                    setHomeCtaSubmitting(false);
                    setShowHomeCta(false);
                    setActiveModal("demo");
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#ff5a1f] hover:bg-[#ff6a20] text-white font-semibold text-sm shadow-[0_0_22px_rgba(255,90,31,0.45)] hover:shadow-[0_0_30px_rgba(255,90,31,0.6)] transition-all disabled:opacity-60"
                >
                  <span>{homeCtaSubmitting ? "Sending..." : "Book a demo"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowHomeCta(false);
                    window.location.href = "/platform";
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/15 bg-transparent text-white font-semibold text-sm hover:border-white/25 hover:bg-white/[0.04] transition-colors"
                >
                  Explore the platform
                </button>
              </div>

              <p className="mt-4 text-[11px] text-slate-600">No spam · Reply within 24h · Same Zoho CRM as Contact</p>
            </div>
          </div>
        </div>
      )}

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
