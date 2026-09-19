import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PlatformHero from "@/features/platform/components/overview/Hero";
import Products from "@/features/platform/components/overview/Products";
import Connects from "@/features/platform/components/overview/Connects";
import Finder from "@/features/platform/components/overview/Finder";
import FinalCta from "@/features/platform/components/overview/FinalCta";

export const metadata = {
  title: "The Risknox Platform — Five Ways to Understand Risk",
  description:
    "Pulse, Fortress, Compass, Accord, and DMARC Monitoring — five specialised products, one connected approach to cyber risk.",
};

export default function PlatformPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/platform" />

      <main className="flex-grow relative z-10 font-sans">
        <PlatformHero />
        <Products />
        <Connects />
        <Finder />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
