import dynamic from "next/dynamic";
import Header from "@/components/header";
import Footer from "@/components/footer";
import OverviewHero from "@/features/compliance/components/overview/Hero";

const Frameworks = dynamic(
  () => import("@/features/compliance/components/overview/Frameworks")
);
const Stack = dynamic(
  () => import("@/features/compliance/components/overview/Stack")
);
const WhyRisknox = dynamic(
  () => import("@/features/compliance/components/overview/WhyRisknox")
);
const PunchList = dynamic(
  () => import("@/features/compliance/components/overview/PunchList")
);
const RiskAssessment = dynamic(
  () => import("@/features/compliance/components/overview/RiskAssessment")
);
const OverviewFaq = dynamic(
  () => import("@/features/compliance/components/overview/Faq")
);
const SolutionCTA = dynamic(
  () => import("@/features/solution/components/SolutionCTA")
);

export const metadata = {
  title: "Compliance Hub — Get Audit-Ready Without Hiring a GRC Team | Risknox",
  description:
    "One continuous compliance program for ISO 27001, SOC 2, DPDPA, GDPR and 25+ frameworks — automated evidence collection, control monitoring, remediation tracking, and audit coordination.",
};

export default function ComplianceOverviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/compliance" />

      <main className="flex-grow relative z-10 font-sans">
        <OverviewHero />
        <Frameworks />
        <Stack />
        <WhyRisknox />
        <PunchList />
        <RiskAssessment />
        <OverviewFaq />
        <SolutionCTA />
      </main>

      <Footer />
    </div>
  );
}
