import dynamic from "next/dynamic";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AuthHero from "@/features/auth/components/Hero";

const MyRisknox = dynamic(() => import("@/features/auth/components/MyRisknox"));
const SolutionCTA = dynamic(() => import("@/features/solution/components/SolutionCTA"));

export const metadata = {
  title: "My Risknox — Dashboard | Risknox",
  description:
    "Your My Risknox dashboard: control mapping, tasks & evidence, audit-ready export, billing & upgrade path. Scoped to purchased frameworks. Enterprise entitlements set by the team (Section 7).",
};

export default function MyRisknoxPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/my-risknox" />
      <main className="flex-grow relative z-10 font-sans">
        <AuthHero variant="my" />
        <MyRisknox />
        <SolutionCTA />
      </main>
      <Footer />
    </div>
  );
}
