import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SolutionCTA from "@/features/solution/components/SolutionCTA";
import Reveal from "@/components/reveal";
import LeadForm from "@/features/compliance/components/iso27001/LeadForm";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Build Your GRC Program — Self-Serve Compliance | Risknox",
  description:
    "Start your self-serve GRC program with Risknox Compass — pick your frameworks, connect your stack, and automate evidence collection.",
};

const INCLUDED = [
  "Pick from 25+ frameworks — ISO 27001, SOC 2, DPDPA, GDPR, HIPAA, NIST, PCI DSS and more",
  "Connect your cloud, identity, HR, endpoint, and ticketing systems",
  "Automated evidence collection with Compass workflows",
  "Cross-framework control mapping — one evidence set, many audits",
  "Continuous drift detection powered by Fortress monitoring",
  "Audit coordination through to report and certification",
];

export default function BuildYourGrcPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/compliance" />

      <main className="flex-grow relative z-10 font-sans">
        <section className="relative w-full px-6 sm:px-10 lg:px-16 pt-32 pb-16 md:pb-20">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <Reveal>
              <div>
                <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
                  Self-serve · Compass
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
                  Build your GRC program{" "}
                  <span className="text-[#ff7d1c]">in days, not quarters.</span>
                </h1>
                <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
                  Tell us which frameworks you need and where you stand — we set
                  up your continuous compliance program with automated evidence
                  collection, at a fraction of traditional GRC consulting cost.
                </p>
                <div className="mt-8 space-y-4">
                  {INCLUDED.map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="h-full">
              <div className="rounded-2xl border border-orange-500/25 bg-black/60 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(249,115,22,0.08)] lg:sticky lg:top-28">
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Start building today.
                </h2>
                <p className="mt-1 mb-5 text-[13px] text-slate-400">
                  Secure · No spam · Reply &lt; 24h
                </p>
                <LeadForm source="build-your-grc" submitLabel="Build my GRC program" />
              </div>
            </Reveal>
          </div>
        </section>

        <SolutionCTA />
      </main>

      <Footer />
    </div>
  );
}
