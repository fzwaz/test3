import dynamic from "next/dynamic";
import Header from "@/components/header";
import Footer from "@/components/footer";
import RiskBiteHero from "@/features/riskbite/components/Hero";

const Assessment = dynamic(() => import("@/features/riskbite/components/Assessment"));
const Methodology = dynamic(() => import("@/features/riskbite/components/Methodology"));
const RiskBiteFaq = dynamic(() => import("@/features/riskbite/components/Faq"));
const SolutionCTA = dynamic(() => import("@/features/solution/components/SolutionCTA"));

export const metadata = {
  title: "RiskBite — What's Your Cyber Risk Worth? 3-Minute Assessment | Risknox",
  description:
    "Answer 8 questions. Get an instant 0–100 risk posture score and an estimated dollar exposure range — same Fortress logic, distilled into a 3-minute teaser. No email needed for your score.",
};

export default function RiskBitePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/risk-bite" />

      <main className="flex-grow relative z-10 font-sans">
        <RiskBiteHero />
        <Assessment />
        <Methodology />
        <RiskBiteFaq />
        <SolutionCTA />
      </main>

      <Footer />
    </div>
  );
}
