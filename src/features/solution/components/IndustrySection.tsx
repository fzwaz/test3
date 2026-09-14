"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SpecularCardBorder from "@/components/SpecularCard";

type Industry = {
  id: string;
  name: string;
  description: string;
  risks: string[];
  frameworks: string[];
  cta: string;
  icon: (props: { className?: string }) => React.ReactNode;
};

// Custom SVG Icons crafted to match the exact aesthetic in the reference
const FinancialServicesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 9.5L12 3.5l9 6" />
    <path d="M4 10h16" />
    <path d="M6 10v7.5" />
    <path d="M10 10v7.5" />
    <path d="M14 10v7.5" />
    <path d="M18 10v7.5" />
    <path d="M3 17.5h18" />
    <path d="M2 20.5h20" />
  </svg>
);

const HealthcareIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    <path d="M3.5 12.5h3.2l2-3.8 2.8 7.6 2.5-4.8 1.5 2h4.5" />
  </svg>
);

const ManufacturingIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 20h18" />
    <path d="M6 20V11l6 3.5V11l6 3.5V4h3v16" />
    <path d="M9 16.5h1.5" />
    <path d="M15 16.5h1.5" />
  </svg>
);

const LogisticsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 17V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1" />
    <path d="M14 8.5h4.2a1 1 0 0 1 .8.4L21.5 12V17a1 1 0 0 1-1 1h-2" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="16.5" cy="18" r="2" />
    <path d="M6 8h4" />
    <path d="M6 11h2.5" />
  </svg>
);

const AutomotiveIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11" />
    <rect x="3" y="11" width="18" height="6.5" rx="1.5" />
    <circle cx="6.5" cy="14.5" r="1.25" />
    <circle cx="17.5" cy="14.5" r="1.25" />
    <path d="M10 14.5h4" />
    <path d="M5 17.5v2" />
    <path d="M19 17.5v2" />
  </svg>
);

const RetailIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="8" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
    <path d="M2.5 3.5h3.2l2.3 11.2a1.5 1.5 0 0 0 1.5 1.2h8.5a1.5 1.5 0 0 0 1.5-1.2l1.5-7.7H6.5" />
  </svg>
);

const OilGasIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2.8l5.5 6.2A7.5 7.5 0 1 1 6.5 9L12 2.8z" />
  </svg>
);

const ArchitectureIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3.5" y="7" width="7" height="14" rx="0.5" />
    <rect x="13.5" y="3" width="7" height="18" rx="0.5" />
    <path d="M6 10h2M6 13h2M6 16h2" />
    <path d="M16 6h2M16 9h2M16 12h2M16 15h2M16 18h2" />
    <path d="M1.5 21h21" />
  </svg>
);

const INDUSTRIES: Industry[] = [
  {
    id: "financial-services",
    name: "Financial Services",
    description:
      "Understand cyber exposure across complex financial ecosystems and strengthen resilience where risk meets impact.",
    risks: [
      "Third-Party Exposure",
      "Regulatory Pressure",
      "Critical Asset Visibility",
      "Financial Impact",
    ],
    frameworks: ["DORA", "PCI DSS", "ISO 27001", "SOC 2"],
    cta: "Explore Financial Services",
    icon: FinancialServicesIcon,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description:
      "Protect critical systems where cyber risk directly impacts patient care, operations, and trust.",
    risks: [
      "Patient Data Exposure",
      "Critical System Disruption",
      "Medical Device Security",
      "Third-Party Risk",
    ],
    frameworks: ["HIPAA", "HITRUST", "ISO 27001", "NIST CSF"],
    cta: "Explore Healthcare",
    icon: HealthcareIcon,
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description:
      "Connect IT, OT, and third-party exposure into one unified view of operational cyber risk.",
    risks: [
      "OT & Industrial Control Systems",
      "Supply Chain Exposure",
      "Production Downtime",
      "Asset Visibility",
    ],
    frameworks: ["IEC 62443", "NIST CSF", "ISO 27001", "NIS2"],
    cta: "Explore Manufacturing",
    icon: ManufacturingIcon,
  },
  {
    id: "logistics",
    name: "Logistics",
    description:
      "Secure connected operations across supply chains, fleets, partners, and critical infrastructure.",
    risks: [
      "Supply Chain Disruption",
      "Third-Party Exposure",
      "Connected Asset Visibility",
      "Operational Downtime",
    ],
    frameworks: ["ISO 27001", "NIST CSF", "NIS2", "SOC 2"],
    cta: "Explore Logistics",
    icon: LogisticsIcon,
  },
  {
    id: "automotive",
    name: "Automotive",
    description:
      "Understand cyber exposure across connected vehicles, manufacturing systems, and complex supplier ecosystems.",
    risks: [
      "Connected Vehicle Security",
      "Supply Chain Exposure",
      "OT & Manufacturing Risk",
      "Software Vulnerabilities",
    ],
    frameworks: ["ISO/SAE 21434", "UNECE R155", "ISO 27001", "NIST CSF"],
    cta: "Explore Automotive",
    icon: AutomotiveIcon,
  },
  {
    id: "retail",
    name: "Retail",
    description:
      "Protect customer data, payment systems, and digital operations across an increasingly connected retail ecosystem.",
    risks: [
      "Payment System Security",
      "Customer Data Exposure",
      "Third-Party & Vendor Risk",
      "Digital Commerce Disruption",
    ],
    frameworks: ["PCI DSS", "ISO 27001", "SOC 2", "NIST CSF"],
    cta: "Explore Retail",
    icon: RetailIcon,
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    description:
      "Bring visibility to cyber risk across critical infrastructure, industrial systems, and distributed operations.",
    risks: [
      "Critical Infrastructure Exposure",
      "OT & ICS Security",
      "Operational Disruption",
      "Remote Asset Visibility",
    ],
    frameworks: ["IEC 62443", "NIST CSF", "ISO 27001", "NIS2"],
    cta: "Explore Oil & Gas",
    icon: OilGasIcon,
  },
  {
    id: "real-estate",
    name: "Architecture & Real Estate",
    description:
      "Manage cyber risk across connected buildings, digital infrastructure, contractors, and complex property ecosystems.",
    risks: [
      "Smart Building Exposure",
      "Third-Party Risk",
      "Connected Infrastructure",
      "Data & Asset Visibility",
    ],
    frameworks: ["ISO 27001", "NIST CSF", "SOC 2", "ISO 22301"],
    cta: "Explore Architecture & Real Estate",
    icon: ArchitectureIcon,
  },
];

export default function IndustrySection() {
  const [activeTab, setActiveTab] = useState<string>("financial-services");

  const currentIndustry =
    INDUSTRIES.find((item) => item.id === activeTab) || INDUSTRIES[0];

  return (
    <section
      id="explore-by-industry"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#000000] text-slate-100 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* 1. Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs sm:text-[13px] font-mono font-semibold uppercase tracking-wider text-[#f97316] mb-3">
              01 / EXPLORE BY INDUSTRY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Risk intelligence tailored <br className="hidden sm:inline" />
              to your environment.
            </h2>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-sm">
            Select an industry to explore the risks, compliance frameworks, and
            intelligence that matter most.
          </p>
        </div>

        {/* 2. Industry Tabs Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 border border-white/10 bg-[#07080a] mb-6 rounded-t-sm overflow-hidden">
          {INDUSTRIES.map((industry, idx) => {
            const isActive = activeTab === industry.id;
            const IconComponent = industry.icon;

            return (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`relative flex flex-col items-center justify-center p-4 sm:p-5 text-center transition-all duration-200 border-r border-b lg:border-b-0 border-white/10 last:border-r-0 group cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-b from-orange-500/[0.14] to-transparent border-t-2 border-t-[#f97316] -mt-[1px] shadow-[0_8px_24px_rgba(249,115,22,0.12)]"
                    : "hover:bg-white/[0.04] text-zinc-400 hover:text-white"
                }`}
              >
                {/* Active bottom line indicator with downward triangle */}
                {isActive && (
                  <div className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f97316] to-transparent z-20">
                    <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[#f97316]" />
                  </div>
                )}

                {/* Icon in boxed container */}
                <div
                  className={`w-11 h-11 rounded-lg border flex items-center justify-center mb-3 transition-all duration-200 ${
                    isActive
                      ? "bg-orange-500/15 border-orange-500/40 text-[#f97316] shadow-[0_0_18px_rgba(249,115,22,0.25)]"
                      : "bg-white/[0.03] border-white/10 text-zinc-500 group-hover:text-white group-hover:border-white/25"
                  }`}
                >
                  <IconComponent className="w-5 h-5 mx-auto" />
                </div>

                {/* Label */}
                <span
                  className={`text-xs sm:text-[13px] leading-tight transition-colors ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-400 font-medium group-hover:text-white"
                  }`}
                >
                  {industry.name}
                </span>
                <span
                  className={`mt-1 text-[10px] font-mono tabular-nums tracking-widest ${
                    isActive ? "text-orange-400/80" : "text-zinc-600"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. Main Detail Card — chamfered top-right like reference, same hover as role cards */}
        <div className="relative group">
        <div className="relative bg-white/10 hover:bg-white/25 shadow-[0_0_20px_rgba(255,121,54,0.05)] hover:shadow-[0_0_30px_rgba(255,121,54,0.15)] transition-all duration-300 [clip-path:polygon(0_0,calc(100%-32px)_0,100%_32px,100%_100%,0_100%)] p-px">
          <div className="relative bg-[#07080a] [clip-path:polygon(0_0,calc(100%-31px)_0,100%_31px,100%_100%,0_100%)] p-6 sm:p-8 md:p-10 overflow-hidden">
          {/* Subtle Ambient Orange Glow — same as role cards */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#ff7936]/[0.05] group-hover:bg-[#ff7936]/[0.12] rounded-full blur-2xl pointer-events-none transition-all duration-500" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Overview */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#f97316]">
                    INDUSTRY OVERVIEW
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-orange-500/40 to-transparent" />
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  {currentIndustry.name}
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                  {currentIndustry.description}
                </p>

                {/* Dotted Divider */}
                <div className="border-b border-dotted border-white/15 mb-8" />
              </div>

              {/* Action Button */}
              <div>
                <Link
                  href={`/contact?industry=${currentIndustry.id}`}
                  className="group inline-flex items-center justify-between gap-4 px-6 py-3.5 rounded-none bg-gradient-to-r from-[#0c0a07] to-[#050608] border border-white/20 hover:border-orange-500 hover:shadow-[0_0_28px_rgba(249,115,22,0.3)] text-white text-sm font-medium transition-all duration-200 hover:bg-orange-500/[0.08] w-full sm:w-auto min-w-[280px]"
                >
                  <span>{currentIndustry.cta}</span>
                  <span className="w-8 h-8 border border-orange-500/40 bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-200">
                    <ArrowRight className="w-4 h-4 text-[#f97316] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Column: Key Risk Areas & Frameworks */}
            <div className="lg:col-span-6 lg:border-l lg:border-white/10 lg:pl-10 flex flex-col justify-between">
              {/* Key Risk Areas */}
              <div>
                <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#f97316] mb-4">
                  KEY RISK AREAS
                </div>

                <div className="divide-y divide-dotted divide-white/10 border-b border-dotted border-white/10">
                  {currentIndustry.risks.map((risk, idx) => (
                    <div
                      key={risk}
                      className="group flex items-center gap-3 py-3.5 text-sm sm:text-[15px] text-zinc-300 font-normal tracking-wide hover:text-white hover:bg-orange-500/[0.04] hover:pl-1.5 transition-all duration-200"
                    >
                      <span className="text-[11px] font-mono text-zinc-600 group-hover:text-orange-400 tabular-nums transition-colors">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500/60 group-hover:bg-orange-500 group-hover:shadow-[0_0_10px_rgba(249,115,22,0.9)] flex-shrink-0 transition-all" />
                      {risk}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Frameworks */}
              <div className="mt-8">
                <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#f97316] mb-3">
                  KEY FRAMEWORKS
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {currentIndustry.frameworks.map((fw) => (
                    <span
                      key={fw}
                      className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0e1015] border border-white/15 hover:border-orange-500/50 hover:bg-orange-500/[0.08] hover:shadow-[0_0_16px_rgba(249,115,22,0.18)] text-white text-xs font-mono font-medium tracking-wide transition-all duration-200 cursor-default"
                    >
                      <span className="w-1 h-1 rounded-full bg-orange-500" />
                      {fw}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            </div>
          </div>
          </div>
        <SpecularCardBorder />
        </div>

        {/* 4. Bottom Banner */}
        <div className="mt-6 border border-white/10 bg-[#07080a] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* 3x3 Orange Dot Matrix */}
            <div className="grid grid-cols-3 gap-1 w-4 h-4 flex-shrink-0">
              {[...Array(9)].map((_, i) => (
                <span
                  key={i}
                  className="w-1 h-1 bg-[#f97316] rounded-[0.5px]"
                />
              ))}
            </div>

            <div className="h-6 w-px bg-white/10 hidden sm:block mx-1" />

            <div>
              <div className="text-white text-sm font-medium">
                One platform. Multiple paths.
              </div>
              <div className="text-zinc-400 text-xs sm:text-[13px]">
                Risknox connects intelligence to decisions that drive resilience.
              </div>
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex items-center w-full sm:w-auto justify-end">
            <div className="h-6 w-px bg-white/10 hidden sm:block mr-5" />
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-4 py-2 border border-white/20 hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] bg-[#0b0d11] hover:bg-orange-500/[0.08] text-white text-xs sm:text-sm font-medium hover:text-white transition-all duration-200 w-full sm:w-auto justify-between sm:justify-start"
            >
              <span>Talk to Risknox</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#f97316] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}