import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SolutionCTA from "@/features/solution/components/SolutionCTA";
import SocHero from "@/features/compliance/components/soc2/Hero";
import Benefits from "@/features/compliance/components/soc2/Benefits";
import Journey from "@/features/compliance/components/soc2/Journey";
import BeforeAfter from "@/features/compliance/components/soc2/BeforeAfter";
import PairsWith from "@/features/compliance/components/soc2/PairsWith";
import Readiness from "@/features/compliance/components/iso27001/Readiness";
import SocFaq from "@/features/compliance/components/soc2/Faq";

export const metadata = {
  title: "SOC 2 Type 1 & Type 2 Readiness | Risknox Compliance",
  description:
    "Prepare for SOC 2 Type 1 and Type 2 with Risknox — mapped controls, assigned owners, automated evidence, and audit proof ready throughout the review period.",
};

export default function Soc2Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/compliance" />

      <main className="flex-grow relative z-10 font-sans">
        <SocHero />
        <Benefits />
        <Journey />
        <BeforeAfter />
        <PairsWith />
        <Readiness />
        <SocFaq />
        <SolutionCTA />
      </main>

      <Footer />
    </div>
  );
}
