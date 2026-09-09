import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CompassHero from "@/features/platform/components/compass/Hero";
import Problem from "@/features/platform/components/compass/Problem";
import Capabilities from "@/features/platform/components/compass/Capabilities";
import Workflow from "@/features/platform/components/compass/Workflow";
import Advantage from "@/features/platform/components/compass/Advantage";
import WhoFor from "@/features/platform/components/compass/WhoFor";
import Portfolio from "@/features/platform/components/compass/Portfolio";
import Monitoring from "@/features/platform/components/compass/Monitoring";
import FaqSection from "@/components/faq-section";
import FinalCta from "@/features/platform/components/compass/FinalCta";

export const metadata = {
  title: "Compass — Cyber Underwriting Intelligence | Risknox",
  description:
    "Compass gives underwriters the intelligence to evaluate cyber risk beyond static questionnaires — risk profiles, exposure context, and continuous policyholder monitoring.",
};

export default function CompassPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/platform/compass" />

      <main className="flex-grow relative z-10 font-sans">
        <CompassHero />
        <Problem />
        <Capabilities />
        <Workflow />
        <Advantage />
        <WhoFor />
        <Portfolio />
        <Monitoring />
        <FinalCta />
        <FaqSection defaultCategory="compass" />
      </main>

      <Footer />
    </div>
  );
}
