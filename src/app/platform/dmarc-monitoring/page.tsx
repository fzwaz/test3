import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import DmarcHero from "@/features/platform/components/dmarc/Hero";
import Problem from "@/features/platform/components/dmarc/Problem";
import SenderMap from "@/features/platform/components/dmarc/SenderMap";
import AuthCards from "@/features/platform/components/dmarc/AuthCards";
import HowItWorks from "@/features/platform/components/dmarc/HowItWorks";
import Journey from "@/features/platform/components/dmarc/Journey";
import Protect from "@/features/platform/components/dmarc/Protect";
import DomainStatus from "@/features/platform/components/dmarc/DomainStatus";
import WhoFor from "@/features/platform/components/dmarc/WhoFor";
import FinalCta from "@/features/platform/components/dmarc/FinalCta";
import FaqSection from "@/components/faq-section";

export const metadata = {
  title: "DMARC Monitoring — Stop Email Spoofing | Risknox",
  description:
    "Know exactly who sends email as your domain. Monitor SPF, DKIM and DMARC, isolate rogue senders, and move safely to p=reject enforcement.",
};

export default function DmarcPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/platform/dmarc-monitoring" />

      <main className="flex-grow relative z-10 font-sans">
        <DmarcHero />
        <Problem />
        <SenderMap />
        <AuthCards />
        <HowItWorks />
        <Journey />
        <Protect />
        <DomainStatus />
        <WhoFor />
        <FinalCta />
        <FaqSection defaultCategory="dmarc" />
      </main>

      <Footer />
    </div>
  );
}
