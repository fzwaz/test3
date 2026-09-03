import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhyRisknoxHero from "@/features/why-risknox/components/Hero";
import GapSection from "@/features/why-risknox/components/GapSection";
import ThreePillarsSection from "@/features/why-risknox/components/ThreePillarsSection";
import MethodologySection from "@/features/why-risknox/components/MethodologySection";
import AwardSection from "@/features/why-risknox/components/AwardSection";
import SolutionCTA from "@/features/solution/components/SolutionCTA";

export const metadata = {
  title: "Why Risknox | Turn Technical Exposure Into Financial Reality",
  description:
    "Risknox connects cyber visibility, AI-powered intelligence, and insurance insight to turn technical exposure into informed decisions. Most tools tell you what's wrong. Risknox tells you what it costs.",
};

export default function WhyRisknoxPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/why-risknox" />

      <main className="flex-grow relative z-10 font-sans">
        <WhyRisknoxHero />
        <GapSection />
        <ThreePillarsSection />
        <MethodologySection />
        <AwardSection />
        <SolutionCTA />
      </main>

      <Footer />
    </div>
  );
}
