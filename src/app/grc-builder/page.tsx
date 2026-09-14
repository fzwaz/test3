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
  title: "Build Your Own GRC — Self-Serve Compliance Builder | Risknox",
  description:
    "The commerce engine behind Compliance. Select frameworks, set your org profile, add monitoring & seats — monthly or annual billing. Auto-provisioned with control mapping, tasks, evidence collection & audit-ready export.",
};

export default function GrcBuilderPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/grc-builder" />

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
