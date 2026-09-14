import dynamic from "next/dynamic";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AuthHero from "@/features/auth/components/Hero";

const SignupForm = dynamic(() => import("@/features/auth/components/SignupForm"));
const SolutionCTA = dynamic(() => import("@/features/solution/components/SolutionCTA"));

export const metadata = {
  title: "Sign Up — My Risknox (Self-Serve) | Risknox",
  description:
    "Create your My Risknox account for Compliance/GRC and DMARC Monitoring. Pay online, get auto-provisioned. Enterprise Pulse/Fortress/Compass/Accord is provisioned post-demo per Section 7.",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/signup" />
      <main className="flex-grow relative z-10 font-sans">
        <AuthHero variant="signup" />
        <SignupForm />
        <SolutionCTA />
      </main>
      <Footer />
    </div>
  );
}
