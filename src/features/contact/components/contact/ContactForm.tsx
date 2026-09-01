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
  Boxes,
  ShieldCheck,
  PlusCircle,
} from "lucide-react";

interface OptionItem {
  id: string;
  name: string;
  description: string;
}

const PRODUCTS: OptionItem[] = [
  { id: "pulse", name: "Pulse", description: "Continuous Threat Monitoring" },
  { id: "compass", name: "Compass", description: "Cyber Risk Assessment" },
  { id: "accord", name: "Accord", description: "AI Compliance Platform" },
  { id: "fortress", name: "Fortress", description: "GRC & Policy Management" },
];

const SERVICES: OptionItem[] = [
  { id: "vapt", name: "Penetration Testing & VAPT", description: "Application & Network Testing" },
  { id: "cloud", name: "Cloud Security & Compliance", description: "AWS / Azure / GCP Posture" },
  { id: "vciso", name: "vCISO & Governance", description: "Strategy, Policy & Leadership" },
  { id: "ai", name: "AI & ML Security Audit", description: "Model Safety & Risk Evaluation" },
  { id: "compliance", name: "SOC2 & ISO 27001", description: "Audit & Compliance Readiness" },
  { id: "other", name: "Other / Custom Request", description: "Request New or Custom Service" },
];

const COMPANY_SIZES = [
  "1 - 10 employees",
  "11 - 50 employees",
  "51 - 200 employees",
  "201 - 500 employees",
  "500+ employees",
];

/**
 * ContactForm Component.
 * Redesigned interactive contact card featuring inquiry toggles, product/service selection cards,
 * international phone number input with country flags, custom service request inputs, trust signals,
 * and direct Zoho CRM submission handling.
 */
export const ContactForm: React.FC = () => {
  // Inquiry category selection ("Product Demo" | "Service Inquiry")
  const [reachOutFor, setReachOutFor] = useState<"Product Demo" | "Service Inquiry">("Product Demo");

  // Selected product state
  const [selectedProduct, setSelectedProduct] = useState<string>("Pulse");

  // Selected service state
  const [selectedService, setSelectedService] = useState<string>("Penetration Testing & VAPT");

  // Custom service input text (for "Other / Custom Request")
  const [customService, setCustomService] = useState<string>("");

  // International Phone Number state
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  // Form input field state management
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    jobTitle: "",
    companySize: "",
    requirements: "",
  });

  // Anti-bot honeypot state
  const [honeypot, setHoneypot] = useState("");

  // Form submission feedback states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /**
   * Universal change handler for controlled inputs
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * Form submission event handler
   */
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
          reachOutFor,
          selectedProduct,
          selectedService,
          customService,
          honeypot,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Elevated Card Container */}
        <div className="bg-[#080a10]/95 rounded-[32px] border border-slate-800/90 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden p-6 sm:p-10 lg:p-12 backdrop-blur-2xl relative">
          
          {/* Subtle glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10">
            
            {/* ========================================================================= */}
            {/* LEFT SIDEBAR PANEL: TITLE, DESCRIPTION & TRUST SIGNALS                   */}
            {/* ========================================================================= */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-8 pr-0 lg:pr-4 border-b lg:border-b-0 lg:border-r border-slate-800/80 pb-8 lg:pb-0">
              
              <div className="space-y-5">
                {/* Badge Label */}
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange-400">
                  SEND US A MESSAGE
                </span>

                {/* Main Section Header */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  We&apos;ll get back <br />
                  to you <span className="text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.5)]">soon.</span>
                </h2>

                {/* Body Subtext */}
                <p className="text-sm text-slate-400 font-normal leading-relaxed max-w-sm">
                  Fill out the form and our cybersecurity architects will get in touch with you shortly.
                </p>
              </div>

              {/* Vertical Trust Signals */}
              <div className="space-y-5 pt-4">
                
                {/* Trust Item 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0 mt-0.5">
                    <Lock className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium leading-normal">
                    Your information is secure and will never be shared.
                  </span>
                </div>

                {/* Trust Item 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium leading-normal">
                    We typically respond within 24 hours.
                  </span>
                </div>

                {/* Trust Item 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-orange-400" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium leading-normal">
                    Talk to real cybersecurity specialists who care.
                  </span>
                </div>

              </div>

            </div>

            {/* ========================================================================= */}
            {/* RIGHT FORM PANEL: INQUIRY TOGGLE, SELECTION CARDS & FORM FIELDS           */}
            {/* ========================================================================= */}
            <div className="lg:col-span-8">
              {submitted ? (
                /* Success Message State */
                <div className="h-full min-h-[420px] flex flex-col items-center justify-center text-center p-8 bg-orange-500/10 rounded-3xl border border-orange-500/30">
                  <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(249,115,22,0.6)]">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Thank you!</h3>
                  <p className="text-slate-300 mt-2 max-w-md text-sm sm:text-base leading-relaxed">
                    Your request has been received. Our security team will reach out to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        workEmail: "",
                        companyName: "",
                        jobTitle: "",
                        companySize: "",
                        requirements: "",
                      });
                      setPhoneNumber("");
                      setCustomService("");
                    }}
                    className="mt-6 px-6 py-2.5 bg-slate-900 border border-slate-700 text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                /* Primary Contact Form Fields */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Invisible Honeypot Spam Trap */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Error Notification Alert */}
                  {errorMessage && (
                    <div className="p-4 bg-red-950/60 border border-red-800 text-red-300 text-sm rounded-xl">
                      {errorMessage}
                    </div>
                  )}

                  {/* =================================================================== */}
                  {/* 1. INQUIRY TYPE TOGGLE: "I am reaching out for"                     */}
                  {/* =================================================================== */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                      I am reaching out for
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Option 1: Product Demo */}
                      <div
                        onClick={() => setReachOutFor("Product Demo")}
                        className={`cursor-pointer rounded-2xl p-4 border transition-all duration-200 flex items-center justify-between ${
                          reachOutFor === "Product Demo"
                            ? "bg-orange-500/15 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.2)]"
                            : "bg-[#0f121a]/90 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                              reachOutFor === "Product Demo"
                                ? "bg-orange-500/20 text-orange-400 border border-orange-500/40"
                                : "bg-slate-900 border border-slate-800 text-slate-400"
                            }`}
                          >
                            <Boxes className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white">
                              Product Demo
                            </h4>
                            <p className="text-xs text-slate-400 font-normal">
                              Explore our platform suite
                            </p>
                          </div>
                        </div>

                        {/* Custom Radio Circle */}
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            reachOutFor === "Product Demo"
                              ? "border-orange-500"
                              : "border-slate-600"
                          }`}
                        >
                          {reachOutFor === "Product Demo" && (
                            <div className="w-2 h-2 rounded-full bg-orange-500" />
                          )}
                        </div>
                      </div>

                      {/* Option 2: Service Inquiry */}
                      <div
                        onClick={() => setReachOutFor("Service Inquiry")}
                        className={`cursor-pointer rounded-2xl p-4 border transition-all duration-200 flex items-center justify-between ${
                          reachOutFor === "Service Inquiry"
                            ? "bg-orange-500/15 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.2)]"
                            : "bg-[#0f121a]/90 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                              reachOutFor === "Service Inquiry"
                                ? "bg-orange-500/20 text-orange-400 border border-orange-500/40"
                                : "bg-slate-900 border border-slate-800 text-slate-400"
                            }`}
                          >
                            <ShieldCheck className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white">
                              Service Inquiry
                            </h4>
                            <p className="text-xs text-slate-400 font-normal">
                              Explore our security services
                            </p>
                          </div>
                        </div>

                        {/* Custom Radio Circle */}
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            reachOutFor === "Service Inquiry"
                              ? "border-orange-500"
                              : "border-slate-600"
                          }`}
                        >
                          {reachOutFor === "Service Inquiry" && (
                            <div className="w-2 h-2 rounded-full bg-orange-500" />
                          )}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* =================================================================== */}
                  {/* 2A. SELECT PRODUCT CARDS GRID (When Product Demo Selected)          */}
                  {/* =================================================================== */}
                  {reachOutFor === "Product Demo" && (
                    <div className="pt-1">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                        Select Product
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {PRODUCTS.map((prod) => {
                          const isSelected = selectedProduct === prod.name;
                          return (
                            <div
                              key={prod.id}
                              onClick={() => setSelectedProduct(prod.name)}
                              className={`cursor-pointer rounded-2xl p-4 border transition-all duration-200 text-left flex flex-col justify-between min-h-[90px] ${
                                isSelected
                                  ? "bg-orange-500/20 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.25)]"
                                  : "bg-[#0f121a]/90 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                              }`}
                            >
                              <h4 className="text-sm font-extrabold text-white">
                                {prod.name}
                              </h4>
                              <p className="text-[11px] text-slate-400 font-normal leading-tight mt-1">
                                {prod.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* =================================================================== */}
                  {/* 2B. SELECT SERVICE CARDS GRID (When Service Inquiry Selected)        */}
                  {/* =================================================================== */}
                  {reachOutFor === "Service Inquiry" && (
                    <div className="pt-1 space-y-3">
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                        Select Service
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {SERVICES.map((srv) => {
                          const isSelected = selectedService === srv.name;
                          return (
                            <div
                              key={srv.id}
                              onClick={() => setSelectedService(srv.name)}
                              className={`cursor-pointer rounded-2xl p-4 border transition-all duration-200 text-left flex flex-col justify-between min-h-[95px] ${
                                isSelected
                                  ? "bg-orange-500/20 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.25)]"
                                  : "bg-[#0f121a]/90 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-extrabold text-white">
                                  {srv.name}
                                </h4>
                                {srv.id === "other" && (
                                  <PlusCircle className="w-4 h-4 text-orange-400 shrink-0 ml-1" />
                                )}
                              </div>
                              <p className="text-[11px] text-slate-400 font-normal leading-tight mt-1.5">
                                {srv.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Custom Service Input (Appears when "Other / Custom Request" is selected) */}
                      {selectedService === "Other / Custom Request" && (
                        <div className="pt-2">
                          <label className="block text-xs font-bold text-orange-400 mb-1.5">
                            Specify New or Custom Service Needed
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Red Teaming, Incident Response, Cloud Audit..."
                            value={customService}
                            onChange={(e) => setCustomService(e.target.value)}
                            className="w-full h-11 px-4 text-sm rounded-xl border border-orange-500/60 bg-[#0f121a] text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* =================================================================== */}
                  {/* 3. INPUT FIELDS GRID (2 COLUMNS)                                    */}
                  {/* =================================================================== */}
                  <div className="space-y-4 pt-1">
                    
                    {/* Row 1: Full Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Full Name Field */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full h-11 px-4 text-sm rounded-xl border border-slate-800 bg-[#0f121a] text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                        />
                      </div>

                      {/* Work Email Field */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Work Email
                        </label>
                        <input
                          type="email"
                          name="workEmail"
                          required
                          placeholder="Enter your work email"
                          value={formData.workEmail}
                          onChange={handleChange}
                          className="w-full h-11 px-4 text-sm rounded-xl border border-slate-800 bg-[#0f121a] text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                        />
                      </div>

                    </div>

                    {/* Row 2: Company Name & International Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Company Name Field */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          placeholder="Enter your company name"
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full h-11 px-4 text-sm rounded-xl border border-slate-800 bg-[#0f121a] text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                        />
                      </div>

                      {/* International Phone Number Field with Country Flags & Codes */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <PhoneInput
                          defaultCountry="in"
                          value={phoneNumber}
                          onChange={(phone: string) => setPhoneNumber(phone)}
                          placeholder="Enter your phone number"
                          className="w-full flex items-center"
                          inputClassName="!w-full !h-11 !px-4 !text-sm !rounded-r-xl !border-slate-800 !bg-[#0f121a] !text-white !placeholder:text-slate-500 focus:!border-orange-500 focus:!ring-1 focus:!ring-orange-500"
                          countrySelectorStyleProps={{
                            buttonClassName: "!h-11 !px-3 !bg-slate-900 !border-slate-800 !rounded-l-xl !text-xs !font-bold !text-slate-200",
                          }}
                        />
                      </div>

                    </div>

                    {/* Row 3: Job Title & Company Size */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Job Title Field */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Job Title
                        </label>
                        <input
                          type="text"
                          name="jobTitle"
                          placeholder="Your designation"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full h-11 px-4 text-sm rounded-xl border border-slate-800 bg-[#0f121a] text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                        />
                      </div>

                      {/* Company Size Dropdown */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Company Size
                        </label>
                        <div className="relative">
                          <select
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            className="w-full h-11 px-4 pr-10 text-sm rounded-xl border border-slate-800 bg-[#0f121a] text-slate-200 appearance-none cursor-pointer focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                          >
                            <option value="" disabled className="bg-slate-900 text-slate-400">
                              Select company size
                            </option>
                            {COMPANY_SIZES.map((size) => (
                              <option key={size} value={size} className="bg-slate-900 text-white">
                                {size}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                    </div>

                    {/* Row 4: Requirements Message Textarea */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="requirements"
                        rows={4}
                        placeholder="Tell us about your goals or any specific requirements..."
                        value={formData.requirements}
                        onChange={handleChange}
                        className="w-full p-4 text-sm rounded-xl border border-slate-800 bg-[#0f121a] text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                      />
                    </div>

                  </div>

                  {/* =================================================================== */}
                  {/* 4. SUBMIT ACTION BUTTON & PRIVACY DISCLAIMER                        */}
                  {/* =================================================================== */}
                  <div className="pt-2 flex flex-col items-center">
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-13 inline-flex items-center justify-center gap-2.5 px-8 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-base rounded-2xl shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] hover:scale-[1.005] active:scale-[0.99] transition-all duration-200 disabled:opacity-75 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-slate-400 font-medium text-center mt-3">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">
                        Privacy Policy
                      </a>.
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
};

export default ContactForm;
