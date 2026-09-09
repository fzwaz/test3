import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SolutionCTA from "@/features/solution/components/SolutionCTA";
import NistHero from "@/features/compliance/components/nist/Hero";
import Benefits from "@/features/compliance/components/nist/Benefits";
import Journey from "@/features/compliance/components/nist/Journey";
import BeforeAfter from "@/features/compliance/components/nist/BeforeAfter";
import PairsWith from "@/features/compliance/components/nist/PairsWith";
import Readiness from "@/features/compliance/components/iso27001/Readiness";
import NistFaq from "@/features/compliance/components/nist/Faq";

export const metadata = {
  title: "NIST CSF Compliance & Cyber Resilience | Risknox Compliance",
  description:
    "Establish a practical NIST Cybersecurity Framework programme with Risknox — assess posture, close gaps, organise evidence, and build continuous cyber resilience.",
};

export default function NistPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/compliance" />

      <main className="flex-grow relative z-10 font-sans">
        <NistHero />
        <Benefits />
        <Journey />
        <BeforeAfter />
        <PairsWith />
        <Readiness />
        <NistFaq />
        <SolutionCTA />
      </main>

      <Footer />
    </div>
  );
}
