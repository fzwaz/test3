import dynamic from "next/dynamic";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GrcHero from "@/features/grc/components/Hero";

const Builder = dynamic(() => import("@/features/grc/components/Builder"));
const Catalogue = dynamic(() => import("@/features/grc/components/Catalogue"));
const Plan = dynamic(() => import("@/features/grc/components/Plan"));
const GrcFaq = dynamic(() => import("@/features/grc/components/Faq"));
const SolutionCTA = dynamic(() => import("@/features/solution/components/SolutionCTA"));

export const metadata = {
  title: "Build Your GRC Program — Self-Serve Compliance | Risknox",
  description:
    "The commerce engine behind ISO 27001 & SOC 2. Same builder, different entry point — select frameworks, add monitoring & seats, monthly/annual billing, auto-provisioned.",
};

export default function BuildYourGrcAliasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/compliance" />

      <main className="flex-grow relative z-10 font-sans">
        <GrcHero />
        <Builder />
        <Catalogue />
        <Plan />
        <GrcFaq />
        <SolutionCTA />
      </main>

      <Footer />
    </div>
  );
}
