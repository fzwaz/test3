import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SolutionCTA from "@/features/solution/components/SolutionCTA";
import EuAiHero from "@/features/compliance/components/euaiact/Hero";
import Benefits from "@/features/compliance/components/euaiact/Benefits";
import Journey from "@/features/compliance/components/euaiact/Journey";
import BeforeAfter from "@/features/compliance/components/euaiact/BeforeAfter";
import PairsWith from "@/features/compliance/components/euaiact/PairsWith";
import Readiness from "@/features/compliance/components/iso27001/Readiness";
import EuAiFaq from "@/features/compliance/components/euaiact/Faq";

export const metadata = {
  title: "EU AI Act Readiness & AI Governance | Risknox Compliance",
  description:
    "Prepare for the EU AI Act with Risknox Accord — map AI systems, classify risk, organise governance evidence, and build responsible AI readiness.",
};

export default function EuAiActPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/compliance" />

      <main className="flex-grow relative z-10 font-sans">
        <EuAiHero />
        <Benefits />
        <Journey />
        <BeforeAfter />
        <PairsWith />
        <Readiness
          eyebrow="AI governance readiness"
          titleA="A 30-second reality check"
          titleB="for your AI readiness."
          description="Pick your framework, add your organisation size, and tell us where your AI governance currently stands."
          frameworks={["EU AI Act", "ISO 42001", "GDPR", "ISO 27001", "NIST AI RMF"]}
          controlsLabel="Where does your AI governance stand?"
          footnote="Score is indicative. A full readiness plan maps AI systems, risks, controls, evidence, owners, and priorities."
          areasStat="80+ governance areas checked"
          modelledNote="Modelled on thousands of cybersecurity and compliance assessments."
          formSource="ai-readiness-calculator"
        />
        <EuAiFaq />
        <SolutionCTA />
      </main>

      <Footer />
    </div>
  );
}
