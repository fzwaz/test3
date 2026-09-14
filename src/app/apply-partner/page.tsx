import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ApplyPartnerHero from "@/features/applyPartner/components/Hero";
import ApplyPartnerForm from "@/features/applyPartner/components/Form";
import SolutionCTA from "@/features/solution/components/SolutionCTA";

export const metadata = {
  title: "Apply to Become a Partner | Risknox",
  description:
    "Apply to become a Risknox partner. Tell us about your firm and partnership goals — our team reviews every application within 24 hours.",
};

export default function ApplyPartnerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/partner" />
      <main className="flex-grow relative z-10 font-sans">
        <ApplyPartnerHero />
        <ApplyPartnerForm />
        <SolutionCTA />
      </main>
      <Footer />
    </div>
  );
}
