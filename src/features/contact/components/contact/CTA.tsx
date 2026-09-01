"use client";

import React from "react";
import { ArrowUp, Mail, Shield } from "lucide-react";

/**
 * Dedicated Contact Page CTA Component.
 * Tailored specifically for the Contact Us page so users can scroll up to the form
 * or reach out via direct channels instead of navigating to the same URL.
 */
export const ContactCTA: React.FC = () => {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Contact Page Custom CTA Container */}
        <div className="relative rounded-3xl md:rounded-[2rem] bg-gradient-to-br from-[#080a10] via-[#0f121a] to-[#080a10] border border-slate-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden p-8 sm:p-12 lg:p-14 text-white">

          {/* Soft Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">

            {/* Left Content */}
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-[11px] font-extrabold tracking-wider text-orange-400 uppercase">
                <Shield className="w-3.5 h-3.5" />
                <span>DIRECT SUPPORT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Ready to secure your business? <br />
                <span className="text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.5)]">Fill out the form above.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-xl">
                Our cybersecurity architects respond within 24 hours. Prefer email? Reach us directly at{" "}
                <a href="mailto:info@risknox.ai" className="text-white font-bold underline underline-offset-4 hover:text-orange-400 transition-colors">
                  info@risknox.ai
                </a>.
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto shrink-0">
              {/* Smooth Scroll to Form Button */}
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto min-h-[52px] px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-[15px] rounded-2xl shadow-[0_0_25px_rgba(249,115,22,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Fill Out Form</span>
                <ArrowUp className="w-4 h-4" />
              </button>

              {/* Direct Mail Link */}
              <a
                href="mailto:info@risknox.ai"
                className="w-full sm:w-auto min-h-[52px] px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-[15px] rounded-2xl border border-slate-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-orange-400" />
                <span>Email Us</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export const CTA = ContactCTA;
export default ContactCTA;
