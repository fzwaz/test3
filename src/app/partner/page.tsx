import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PartnerHero from "@/features/partner/components/Hero";
import TrustStrip from "@/components/trust-strip";
import PartnerStack from "@/features/partner/components/PartnerStack";
import RiskNumberCTASection from "@/components/risk-number-cta-section";

export const metadata = {
  title: "Partners | Risknox - Better Underwriting Starts with Better Intelligence",
  description:
    "Integrate Compass into your underwriting workflow or explore it firsthand. Partner with Risknox for continuous cyber risk intelligence.",
};

export default function PartnerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/partner" />

      <main className="flex-grow relative z-10 font-sans pb-20">
        <PartnerHero />
        <TrustStrip />
        <PartnerStack />
        <RiskNumberCTASection />
      </main>

      <Footer />
    </div>
  );
}
