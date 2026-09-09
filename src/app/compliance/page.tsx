import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SolutionCTA from "@/features/solution/components/SolutionCTA";
import TestimonialsSection from "@/components/testimonials-section";
import OverviewHero from "@/features/compliance/components/overview/Hero";
import Frameworks from "@/features/compliance/components/overview/Frameworks";
import Stack from "@/features/compliance/components/overview/Stack";
import WhyRisknox from "@/features/compliance/components/overview/WhyRisknox";
import PunchList from "@/features/compliance/components/overview/PunchList";
import RiskAssessment from "@/features/compliance/components/overview/RiskAssessment";
import OverviewFaq from "@/features/compliance/components/overview/Faq";

export const metadata = {
  title: "Compliance Hub — Get Audit-Ready Without Hiring a GRC Team | Risknox",
  description:
    "One continuous compliance program for ISO 27001, SOC 2, DPDPA, GDPR and 25+ frameworks — automated evidence collection, control monitoring, remediation tracking, and audit coordination.",
};

export default function ComplianceOverviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/compliance" />

      <main className="flex-grow relative z-10 font-sans">
        <OverviewHero />
        <Frameworks />
        <Stack />
        <WhyRisknox />
        <PunchList />
        <RiskAssessment />
        <TestimonialsSection />
        <OverviewFaq />
        <SolutionCTA />
      </main>

      <Footer />
    </div>
  );
}
