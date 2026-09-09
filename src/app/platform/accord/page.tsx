import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AccordHero from "@/features/platform/components/accord/Hero";
import WhatItDoes from "@/features/platform/components/accord/WhatItDoes";
import HowItWorks from "@/features/platform/components/accord/HowItWorks";
import WhyMatters from "@/features/platform/components/accord/WhyMatters";
import Frameworks from "@/features/platform/components/accord/Frameworks";
import WhoFor from "@/features/platform/components/accord/WhoFor";
import FinalCta from "@/features/platform/components/accord/FinalCta";
import FaqSection from "@/components/faq-section";

export const metadata = {
  title: "Accord — AI Governance Platform | Risknox",
  description:
    "Accord helps organisations understand their AI landscape, manage AI risk, and build governance for responsible and compliant AI deployment.",
};

export default function AccordPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/platform/accord" />

      <main className="flex-grow relative z-10 font-sans">
        <AccordHero />
        <WhatItDoes />
        <HowItWorks />
        <WhyMatters />
        <Frameworks />
        <WhoFor />
        <FinalCta />
        <FaqSection defaultCategory="accord" />
      </main>

      <Footer />
    </div>
  );
}
