import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FortressHero from "@/features/platform/components/fortress/Hero";
import Problem from "@/features/platform/components/fortress/Problem";
import Capabilities from "@/features/platform/components/fortress/Capabilities";
import HowItWorks from "@/features/platform/components/fortress/HowItWorks";
import Showcase from "@/features/platform/components/fortress/Showcase";
import WhoFor from "@/features/platform/components/fortress/WhoFor";
import Ecosystem from "@/features/platform/components/fortress/Ecosystem";
import FinalCta from "@/features/platform/components/fortress/FinalCta";
import FaqSection from "@/components/faq-section";

export const metadata = {
  title: "Fortress — Cyber Risk Intelligence | Risknox Platform",
  description:
    "Fortress transforms technical cyber exposure into measurable business risk — quantify, prioritise, and communicate cyber risk in terms leadership can act on.",
};

export default function FortressPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/platform/fortress" />

      <main className="flex-grow relative z-10 font-sans">
        <FortressHero />
        <Problem />
        <Capabilities />
        <HowItWorks />
        <Showcase />
        <WhoFor />
        <Ecosystem />
        <FinalCta />
        <FaqSection defaultCategory="fortress" />
      </main>

      <Footer />
    </div>
  );
}
