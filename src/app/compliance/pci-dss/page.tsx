import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SolutionCTA from "@/features/solution/components/SolutionCTA";
import PciHero from "@/features/compliance/components/pci/Hero";
import Benefits from "@/features/compliance/components/pci/Benefits";
import Journey from "@/features/compliance/components/pci/Journey";
import BeforeAfter from "@/features/compliance/components/pci/BeforeAfter";
import PairsWith from "@/features/compliance/components/pci/PairsWith";
import Readiness from "@/features/compliance/components/iso27001/Readiness";
import PciFaq from "@/features/compliance/components/pci/Faq";

export const metadata = {
  title: "PCI DSS Compliance & Cardholder Protection | Risknox Compliance",
  description:
    "Prepare for PCI DSS with Risknox — scope your cardholder data environment, tighten payment controls, organise scan evidence, and reduce audit stress.",
};

export default function PciDssPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/compliance" />

      <main className="flex-grow relative z-10 font-sans">
        <PciHero />
        <Benefits />
        <Journey />
        <BeforeAfter />
        <PairsWith />
        <Readiness />
        <PciFaq />
        <SolutionCTA />
      </main>

      <Footer />
    </div>
  );
}
