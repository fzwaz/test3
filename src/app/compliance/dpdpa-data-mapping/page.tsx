import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SolutionCTA from "@/features/solution/components/SolutionCTA";
import DpdpaHero from "@/features/compliance/components/dpdpa/Hero";
import Benefits from "@/features/compliance/components/dpdpa/Benefits";
import Journey from "@/features/compliance/components/dpdpa/Journey";
import BeforeAfter from "@/features/compliance/components/dpdpa/BeforeAfter";
import PairsWith from "@/features/compliance/components/dpdpa/PairsWith";
import Readiness from "@/features/compliance/components/iso27001/Readiness";
import DpdpaFaq from "@/features/compliance/components/dpdpa/Faq";

export const metadata = {
  title: "DPDPA Compliance & Data Mapping | Risknox Compliance",
  description:
    "Prepare for India's DPDPA with Risknox — map personal data flows, manage consent and data principal requests, and keep privacy evidence audit-ready.",
};

export default function DpdpaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/compliance" />

      <main className="flex-grow relative z-10 font-sans">
        <DpdpaHero />
        <Benefits />
        <Journey />
        <BeforeAfter />
        <PairsWith />
        <Readiness />
        <DpdpaFaq />
        <SolutionCTA />
      </main>

      <Footer />
    </div>
  );
}
