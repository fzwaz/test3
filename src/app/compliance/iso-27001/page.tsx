import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SolutionCTA from "@/features/solution/components/SolutionCTA";
import IsoHero from "@/features/compliance/components/iso27001/Hero";
import Benefits from "@/features/compliance/components/iso27001/Benefits";
import Steps from "@/features/compliance/components/iso27001/Steps";
import BeforeAfter from "@/features/compliance/components/iso27001/BeforeAfter";
import PairsWith from "@/features/compliance/components/iso27001/PairsWith";
import Readiness from "@/features/compliance/components/iso27001/Readiness";
import IsoFaq from "@/features/compliance/components/iso27001/Faq";

export const metadata = {
  title: "ISO 27001:2022 Certification Readiness | Risknox Compliance",
  description:
    "Prepare for ISO 27001:2022 with Risknox — scope your ISMS, map controls, automate audit evidence, and get audit-ready with Compass.",
};

export default function Iso27001Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/compliance" />

      <main className="flex-grow relative z-10 font-sans">
        <IsoHero />
        <Benefits />
        <Steps />
        <BeforeAfter />
        <PairsWith />
        <Readiness />
        <IsoFaq />
        <SolutionCTA />
      </main>

      <Footer />
    </div>
  );
}
