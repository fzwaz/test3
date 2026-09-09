import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PulseHero from "@/features/platform/components/pulse/Hero";
import WhatItDoes from "@/features/platform/components/pulse/WhatItDoes";
import HowItWorks from "@/features/platform/components/pulse/HowItWorks";
import WhoFor from "@/features/platform/components/pulse/WhoFor";
import FinalCta from "@/features/platform/components/pulse/FinalCta";
import FaqSection from "@/components/faq-section";

export const metadata = {
  title: "Pulse — Continuous Monitoring & Detection | Risknox Platform",
  description:
    "Pulse continuously monitors your infrastructure, detects anomalies and emerging threats, and surfaces the signals that actually need attention.",
};

export default function PulsePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/platform/pulse" />

      <main className="flex-grow relative z-10 font-sans">
        <PulseHero />
        <WhatItDoes />
        <HowItWorks />
        <WhoFor />
        <FinalCta />
        <FaqSection defaultCategory="pulse" />
      </main>

      <Footer />
    </div>
  );
}
