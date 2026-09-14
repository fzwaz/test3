import dynamic from "next/dynamic";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AuthHero from "@/features/auth/components/Hero";

const LoginForm = dynamic(() => import("@/features/auth/components/LoginForm"));
const SolutionCTA = dynamic(() => import("@/features/solution/components/SolutionCTA"));

export const metadata = {
  title: "Log In — My Risknox | Risknox",
  description: "Sign in to My Risknox. Same portal shell for self-serve and enterprise — scoped to your frameworks, seats, and add-ons.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/login" />
      <main className="flex-grow relative z-10 font-sans">
        <AuthHero variant="login" />
        <LoginForm />
        <SolutionCTA />
      </main>
      <Footer />
    </div>
  );
}
