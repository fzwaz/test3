import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/features/solution/components/Hero";

export const metadata = {
  title: "Solutions | Risknox - Cyber Risk Built Around Your World",
  description:
    "Explore Risknox cyber risk and compliance solutions tailored by industry sectors and executive roles. Connect exposure, compliance, and decision-making into one unified intelligence layer.",
};

export default function SolutionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/solution" />

      <main className="flex-grow relative z-10 font-sans">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
