import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SolutionCTA from "@/features/solution/components/SolutionCTA";
import GdprHero from "@/features/compliance/components/gdpr/Hero";
import Benefits from "@/features/compliance/components/gdpr/Benefits";
import Journey from "@/features/compliance/components/gdpr/Journey";
import BeforeAfter from "@/features/compliance/components/gdpr/BeforeAfter";
import PairsWith from "@/features/compliance/components/gdpr/PairsWith";
import Readiness from "@/features/compliance/components/iso27001/Readiness";
import GdprFaq from "@/features/compliance/components/gdpr/Faq";

export const metadata = {
  title: "GDPR Compliance & Privacy Readiness | Risknox Compliance",
  description:
    "Prepare for the GDPR with Risknox — map personal data flows, manage DSARs and consent, track vendors, and keep privacy evidence audit-ready.",
};

export default function GdprPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/compliance" />

      <main className="flex-grow relative z-10 font-sans">
        <GdprHero />
        <Benefits />
        <Journey />
        <BeforeAfter />
        <PairsWith />
        <Readiness />
        <GdprFaq />
        <SolutionCTA />
      </main>

      <Footer />
    </div>
  );
}
