import dynamic from "next/dynamic";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PricingHero from "@/features/pricing/components/Hero";

const Plans = dynamic(() => import("@/features/pricing/components/Plans"));
const Portal = dynamic(() => import("@/features/pricing/components/Portal"));
const SolutionCTA = dynamic(() => import("@/features/solution/components/SolutionCTA"));

export const metadata = {
  title: "Pricing — Accounts, Subscriptions & Payments | Risknox",
  description:
    "Two ways to buy: sales-assisted for Pulse/Fortress/Compass/Accord and self-serve checkout for GRC & DMARC. Illustrative plan structure, gateways (Razorpay/Stripe), and portal entitlements.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">
      <Header currentPath="/pricing" />
      <main className="flex-grow relative z-10 font-sans">
        <PricingHero />
        <Plans />
        <Portal />
        <SolutionCTA />
      </main>
      <Footer />
    </div>
  );
}
