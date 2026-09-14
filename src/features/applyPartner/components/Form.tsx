"use client";

import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import {
  Lock,
  Clock,
  Users,
  CheckCircle2,
  ChevronDown,
  Send,
  Building2,
  Shield,
  Handshake,
} from "lucide-react";

const COMPANY_SIZES = ["1 - 10 employees", "11 - 50 employees", "51 - 200 employees", "201 - 500 employees", "500+ employees"];
const COMPANY_TYPES = [
  "Insurance Carrier",
  "Reinsurance",
  "Broker / Agency",
  "MGA / MGU",
  "Technology Partner",
  "MSSP / Security Vendor",
  "Other",
];
const PARTNERSHIP_INTENTS = [
  "Integrate Compass into underwriting workflow",
  "Resell / Refer Risknox",
  "Technology / API integration",
  "Co-sell with our portfolio",
  "Other",
];
const REGIONS = ["India", "Saudi Arabia", "Bahrain", "United States", "United Kingdom", "EU", "Other"];

export default function ApplyPartnerForm() {
  const [companyType, setCompanyType] = useState(COMPANY_TYPES[0]);
  const [region, setRegion] = useState(REGIONS[0]);
  const [partnershipIntent, setPartnershipIntent] = useState(PARTNERSHIP_INTENTS[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    jobTitle: "",
    companySize: "",
    website: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phoneNumber,
          honeypot,
          reachOutFor: "Service Inquiry",
          selectedService: "Partnership — Apply",
          companyType,
          region,
          partnershipIntent,
          source: "applyPartner",
        }),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.error || "Failed to send application. Please try again.");
      }
    } catch {
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="apply-form" className="py-10 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#000000] rounded-[32px] border border-slate-800/90 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden p-6 sm:p-10 lg:p-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10">
            {/* LEFT */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-8 pr-0 lg:pr-4 border-b lg:border-b-0 lg:border-r border-slate-800/80 pb-8 lg:pb-0">
              <div className="space-y-5">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange-400">PARTNER APPLICATION</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Let&apos;s build <br />
                  <span className="text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.5)]">together.</span>
                </h2>
                <p className="text-sm text-slate-400 font-normal leading-relaxed max-w-sm">
                  Tell us about your firm, book of business, and how you&apos;d like to partner with Compass. We&apos;ll review and
                  get back within 24 hours.
                </p>
              </div>

              <div className="space-y-5 pt-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Handshake className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium leading-normal">
                    For insurers, brokers, MGAs, and technology partners.
                  </span>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium leading-normal">
                    We typically respond within 24 hours.
                  </span>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium leading-normal">
                    Your information is encrypted and never shared.
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="h-full min-h-[420px] flex flex-col items-center justify-center text-center p-8 bg-orange-500/10 rounded-3xl border border-orange-500/30">
                  <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(249,115,22,0.6)]">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Application received!</h3>
                  <p className="text-slate-300 mt-2 max-w-md text-sm sm:text-base leading-relaxed">
                    Thank you for applying. Our partnerships team will review your submission and get back within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: "", workEmail: "", companyName: "", jobTitle: "", companySize: "", website: "", message: "" });
                      setPhoneNumber("");
                    }}
                    className="mt-6 px-6 py-2.5 bg-zinc-900 border border-slate-700 text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" name="website_hp" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                  {errorMessage && <div className="p-4 bg-red-950/60 border border-red-800 text-red-300 text-sm rounded-xl">{errorMessage}</div>}

                  {/* Row 1: Full Name + Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Full Name *</label>
                      <input type="text" name="fullName" required placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} className="w-full h-11 px-4 text-sm rounded-xl border border-slate-800 bg-zinc-900 text-white placeholder:text-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Work Email *</label>
                      <input type="email" name="workEmail" required placeholder="Enter your work email" value={formData.workEmail} onChange={handleChange} className="w-full h-11 px-4 text-sm rounded-xl border border-slate-800 bg-zinc-900 text-white placeholder:text-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                    </div>
                  </div>

                  {/* Row 2: Company Name + Job Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Company Name *</label>
                      <input type="text" name="companyName" required placeholder="Enter your company name" value={formData.companyName} onChange={handleChange} className="w-full h-11 px-4 text-sm rounded-xl border border-slate-800 bg-zinc-900 text-white placeholder:text-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Job Title *</label>
                      <input type="text" name="jobTitle" required placeholder="Your designation" value={formData.jobTitle} onChange={handleChange} className="w-full h-11 px-4 text-sm rounded-xl border border-slate-800 bg-zinc-900 text-white placeholder:text-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                    </div>
                  </div>

                  {/* Row 3: Company Type + Region */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Company Type *</label>
                      <div className="relative">
                        <select value={companyType} onChange={(e) => setCompanyType(e.target.value)} className="w-full h-11 px-4 pr-10 text-sm rounded-xl border border-slate-800 bg-zinc-900 text-slate-200 appearance-none cursor-pointer focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors">
                          {COMPANY_TYPES.map((t) => (
                            <option key={t} value={t} className="bg-zinc-900 text-white">
                              {t}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Region / HQ *</label>
                      <div className="relative">
                        <select value={region} onChange={(e) => setRegion(e.target.value)} className="w-full h-11 px-4 pr-10 text-sm rounded-xl border border-slate-800 bg-zinc-900 text-slate-200 appearance-none cursor-pointer focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors">
                          {REGIONS.map((r) => (
                            <option key={r} value={r} className="bg-zinc-900 text-white">
                              {r}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Phone + Company Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Phone Number</label>
                      <PhoneInput
                        defaultCountry="in"
                        value={phoneNumber}
                        onChange={(phone: string) => setPhoneNumber(phone)}
                        placeholder="Enter your phone number"
                        className="w-full flex items-center"
                        inputClassName="!w-full !h-11 !px-4 !text-sm !rounded-r-xl !border-slate-800 !bg-zinc-900 !text-white !placeholder:text-zinc-400 focus:!border-orange-500 focus:!ring-1 focus:!ring-orange-500"
                        countrySelectorStyleProps={{
                          buttonClassName: "!h-11 !px-3 !bg-zinc-900 !border-slate-800 !rounded-l-xl !text-xs !font-bold !text-slate-200",
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Company Size</label>
                      <div className="relative">
                        <select name="companySize" value={formData.companySize} onChange={handleChange} className="w-full h-11 px-4 pr-10 text-sm rounded-xl border border-slate-800 bg-zinc-900 text-slate-200 appearance-none cursor-pointer focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors">
                          <option value="" disabled className="bg-zinc-900 text-slate-400">
                            Select company size
                          </option>
                          {COMPANY_SIZES.map((s) => (
                            <option key={s} value={s} className="bg-zinc-900 text-white">
                              {s}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Website + Partnership Intent */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Company Website</label>
                      <input type="url" name="website" placeholder="https://example.com" value={formData.website} onChange={handleChange} className="w-full h-11 px-4 text-sm rounded-xl border border-slate-800 bg-zinc-900 text-white placeholder:text-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Partnership Intent *</label>
                      <div className="relative">
                        <select value={partnershipIntent} onChange={(e) => setPartnershipIntent(e.target.value)} className="w-full h-11 px-4 pr-10 text-sm rounded-xl border border-slate-800 bg-zinc-900 text-slate-200 appearance-none cursor-pointer focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors">
                          {PARTNERSHIP_INTENTS.map((p) => (
                            <option key={p} value={p} className="bg-zinc-900 text-white">
                              {p}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Tell us about your partnership goals</label>
                    <textarea name="message" rows={4} placeholder="Book of business, integration needs, timeline, or questions for our team..." value={formData.message} onChange={handleChange} className="w-full p-4 text-sm rounded-xl border border-slate-800 bg-zinc-900 text-white placeholder:text-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none" />
                  </div>

                  <div className="pt-2 flex flex-col items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-13 inline-flex items-center justify-center gap-2.5 px-8 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-base rounded-2xl shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] hover:scale-[1.005] active:scale-[0.99] transition-all duration-200 disabled:opacity-75 cursor-pointer"
                    >
                      {isSubmitting ? <span>Submitting...</span> : <><span>Submit Application</span><Send className="w-4 h-4" /></>}
                    </button>
                    <p className="text-[11px] text-slate-400 font-medium text-center mt-3">
                      By submitting, you agree to our <a href="/privacy" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">Privacy Policy</a>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
