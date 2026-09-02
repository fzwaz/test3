import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/features/contact/components/contact/Hero";
import { ContactForm } from "@/features/contact/components/contact/ContactForm";
import { OfficeLocations } from "@/features/contact/components/contact/OfficeLocations";
import SolutionCTA from "@/features/solution/components/SolutionCTA";

export const metadata = {
  title: "Contact Us | Risknox",
  description: "Get in touch with the Risknox team for inquiries, support, or a product demo.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative overflow-x-clip">


      <Header currentPath="/contact" />
      <main className="flex-grow relative z-10 font-sans">
        <Hero />
        <div id="contact-form">
          <ContactForm />
        </div>
        <OfficeLocations />
        <SolutionCTA />
      </main>
      <Footer />
    </div>
  );
}
