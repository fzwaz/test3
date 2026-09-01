import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/features/contact/components/contact/Hero";
import { ContactForm } from "@/features/contact/components/contact/ContactForm";
import { OfficeLocations } from "@/features/contact/components/contact/OfficeLocations";
import { CTA } from "@/features/contact/components/contact/CTA";

export const metadata = {
  title: "Contact Us | Risknox",
  description: "Get in touch with the Risknox team for inquiries, support, or a product demo.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(0,0,0)] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 relative">
      {/* Ambient background glows in fixed layer to preserve sticky navbar */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px]" />
      </div>

      <Header />
      <main className="flex-grow subpage-typography font-sohne relative z-10">
        <Hero />
        <div id="contact-form">
          <ContactForm />
        </div>
        <OfficeLocations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
