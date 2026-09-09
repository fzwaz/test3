"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  FileCheck,
  FileClock,
  Cpu,
  BadgeCheck,
  Scale,
  Landmark,
  Globe2,
  HeartPulse,
  Layers,
  CreditCard,
  Sparkles,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

interface Framework {
  id: string;
  name: string;
  meta: string;
  Icon: LucideIcon;
  headline: string;
  description: string;
  deliverables: string[];
  highlights: { value: string; label: string }[];
  cta: string;
  href: string;
}

const FRAMEWORKS: Framework[] = [
  {
    id: "iso27001",
    name: "ISO/IEC 27001:2022",
    meta: "ISMS · 93 Annex A controls",
    Icon: ShieldCheck,
    headline: "Prove your security management actually works.",
    description:
      "Risknox helps scope your ISMS, run risk assessment and treatment, implement Annex A controls, assign owners, and organise evidence for Stage 1 and Stage 2 certification audits.",
    deliverables: ["ISMS scope", "Risk assessment", "Statement of Applicability", "Control evidence", "Stage-2 readiness"],
    highlights: [
      { value: "93 controls", label: "Annex A mapped" },
      { value: "8–12 weeks", label: "Typical readiness" },
      { value: "Stage 1 + 2", label: "Certification path" },
    ],
    cta: "Prepare for ISO 27001",
    href: "/compliance/iso-27001",
  },
  {
    id: "soc1",
    name: "SOC 2 Type 1",
    meta: "Control design · Point-in-time",
    Icon: FileCheck,
    headline: "Demonstrate that your controls are suitably designed.",
    description:
      "Risknox helps define the system boundary, select the relevant Trust Services Criteria, document controls, assign owners, and prepare evidence for a point-in-time CPA examination.",
    deliverables: ["System description", "Control matrix", "Trust Services mapping", "Management assertion", "Auditor's Type 1 report"],
    highlights: [
      { value: "5 criteria", label: "Trust Services available" },
      { value: "2–3 months", label: "Typical readiness" },
      { value: "Point-in-time", label: "Design assessment" },
    ],
    cta: "Prepare for SOC 2 Type 1",
    href: "/compliance/soc-2",
  },
  {
    id: "soc2",
    name: "SOC 2 Type 2",
    meta: "Operating effectiveness · Review period",
    Icon: FileClock,
    headline: "Prove your controls operated — every day of the period.",
    description:
      "Risknox extends Type 1 design into operating effectiveness: Compass collects evidence continuously across the review period, tracks exceptions, and keeps the observation window audit-clean.",
    deliverables: ["Control operation logs", "Evidence timeline", "Exception register", "Management assertion", "Auditor's Type 2 report"],
    highlights: [
      { value: "5 criteria", label: "Trust Services available" },
      { value: "3–12 months", label: "Review period" },
      { value: "Continuous", label: "Evidence collection" },
    ],
    cta: "Prepare for SOC 2 Type 2",
    href: "/compliance/soc-2",
  },
  {
    id: "iso42001",
    name: "ISO/IEC 42001:2023",
    meta: "AIMS · 38 Annex A controls",
    Icon: Cpu,
    headline: "Govern your AI like you govern your data.",
    description:
      "Risknox helps build an AI management system — AI risk assessments, policies, objectives, and controls mapped across the full AI lifecycle, ready for AIMS certification.",
    deliverables: ["AIMS scope", "AI risk assessment", "AI policy pack", "Annex A evidence", "Certification readiness"],
    highlights: [
      { value: "38 controls", label: "Annex A mapped" },
      { value: "AI + 27001", label: "Control reuse" },
      { value: "Lifecycle", label: "AI governance" },
    ],
    cta: "Prepare for ISO 42001",
    href: "/compliance/build-your-grc",
  },
  {
    id: "iso9001",
    name: "ISO 9001:2015",
    meta: "QMS · Quality management",
    Icon: BadgeCheck,
    headline: "Turn quality processes into audit-ready proof.",
    description:
      "Risknox helps document quality objectives, processes, and controls — with evidence organised across every clause for a clean QMS certification audit.",
    deliverables: ["QMS manual", "Process maps", "Quality objectives", "Internal audit pack", "Certification readiness"],
    highlights: [
      { value: "Clause 4–10", label: "Full coverage" },
      { value: "Process-based", label: "Evidence model" },
      { value: "ISO stack", label: "Control reuse" },
    ],
    cta: "Prepare for ISO 9001",
    href: "/compliance/build-your-grc",
  },
  {
    id: "dpdpa",
    name: "DPDPA",
    meta: "DPDP Act 2023 · Rules 2025",
    Icon: Scale,
    headline: "Structure privacy compliance across processing, rights, and security.",
    description:
      "Risknox helps map personal data flows, manage consent and Data Principal rights, implement fiduciary obligations, and run breach response under the DPDP Act and Rules 2025.",
    deliverables: ["Data map", "Consent register", "Rights workflows", "Breach playbook", "Board report"],
    highlights: [
      { value: "18 duties", label: "Fiduciary obligations" },
      { value: "Consent +", label: "Grievance tracking" },
      { value: "Rules 2025", label: "Full alignment" },
    ],
    cta: "Prepare for DPDPA",
    href: "/compliance/dpdpa-data-mapping",
  },
  {
    id: "sebi",
    name: "SEBI CSCRF",
    meta: "Cyber security · Cyber resilience",
    Icon: Landmark,
    headline: "Meet SEBI resilience expectations without the scramble.",
    description:
      "Risknox maps CSCRF controls to your environment, organises audit evidence, tracks gaps to closure, and keeps reporting packs ready for every compliance cycle.",
    deliverables: ["CSCRF control matrix", "Audit evidence", "Incident reporting pack", "Board updates", "Submission support"],
    highlights: [
      { value: "Regulated", label: "Entity coverage" },
      { value: "Cycle-ready", label: "Audit + reporting" },
      { value: "Continuous", label: "Control monitoring" },
    ],
    cta: "Prepare for CSCRF",
    href: "/compliance/build-your-grc",
  },
  {
    id: "gdpr",
    name: "GDPR",
    meta: "EU privacy · Data protection",
    Icon: Globe2,
    headline: "Make EU privacy obligations operational.",
    description:
      "Risknox helps map processing activities, run DPIAs, handle data-subject rights, manage vendors, and keep breach workflows ready under the GDPR.",
    deliverables: ["RoPA", "DPIA register", "Rights workflows", "DPA pack", "Breach log"],
    highlights: [
      { value: "6 bases", label: "Lawful bases mapped" },
      { value: "Automated", label: "DPIA + RoPA" },
      { value: "Transfers", label: "Cross-border records" },
    ],
    cta: "Prepare for GDPR",
    href: "/compliance/gdpr",
  },
  {
    id: "hipaa",
    name: "HIPAA",
    meta: "PHI · ePHI safeguards",
    Icon: HeartPulse,
    headline: "Protect PHI with safeguards you can prove.",
    description:
      "Risknox organises administrative, physical, and technical safeguards — risk analysis, policies, training, and ePHI flow evidence — into one audit-ready view.",
    deliverables: ["Safeguard matrix", "Risk analysis", "Policy pack", "Training logs", "Audit readiness"],
    highlights: [
      { value: "3 families", label: "Safeguard coverage" },
      { value: "ePHI flows", label: "Data mapping" },
      { value: "BAAs", label: "Vendor tracking" },
    ],
    cta: "Prepare for HIPAA",
    href: "/compliance/build-your-grc",
  },
  {
    id: "nist",
    name: "NIST CSF 2.0",
    meta: "Govern · Identify · Protect · Detect · Respond · Recover",
    Icon: Layers,
    headline: "Run the six functions as one programme.",
    description:
      "Risknox helps stand up Govern-to-Recover capabilities — asset inventory, control implementation, detection, response playbooks, and recovery evidence in one place.",
    deliverables: ["CSF target profile", "Control implementation", "Detection coverage", "Response playbooks", "Recovery evidence"],
    highlights: [
      { value: "6 functions", label: "Full coverage" },
      { value: "Tiers 1–4", label: "Maturity tracking" },
      { value: "Profiles", label: "Current vs target" },
    ],
    cta: "Prepare for NIST CSF",
    href: "/compliance/nist",
  },
  {
    id: "pci",
    name: "PCI DSS v4.0",
    meta: "Cardholder data · 12 requirements",
    Icon: CreditCard,
    headline: "Shrink the cardholder environment. Ace the assessment.",
    description:
      "Risknox maps your cardholder data environment, tightens the 12 requirement areas, organises scan and control evidence, and keeps remediation ahead of the QSA visit.",
    deliverables: ["CDE scope map", "Requirement evidence", "Scan reports", "Remediation tracker", "SAQ / RoC support"],
    highlights: [
      { value: "12 reqs", label: "Requirement coverage" },
      { value: "Scoped", label: "CDE reduction" },
      { value: "v4.0", label: "Current standard" },
    ],
    cta: "Prepare for PCI DSS",
    href: "/compliance/pci-dss",
  },
  {
    id: "euai",
    name: "EU AI Act",
    meta: "Risk classification · Transparency",
    Icon: Sparkles,
    headline: "Classify AI risk before the regulator asks.",
    description:
      "Risknox inventories your AI systems, classifies risk tiers, assigns governance owners, and organises documentation and transparency evidence under the EU AI Act.",
    deliverables: ["AI inventory", "Risk classification", "Governance owners", "Technical documentation", "Transparency records"],
    highlights: [
      { value: "4 tiers", label: "Risk classification" },
      { value: "Inventory", label: "AI visibility" },
      { value: "Phased", label: "Timeline tracking" },
    ],
    cta: "Prepare for EU AI Act",
    href: "/compliance/eu-ai-act",
  },
];

export default function Frameworks() {
  const [activeId, setActiveId] = useState(FRAMEWORKS[1].id);
  const active = FRAMEWORKS.find((f) => f.id === activeId) ?? FRAMEWORKS[0];

  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              — What&apos;s in the box —
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Pick the framework. We&apos;ll deal with the{" "}
              <span className="text-[#ff7d1c] italic">evidence trail.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              25+ compliance frameworks managed through one continuous compliance
              program with automated evidence collection, control monitoring,
              remediation tracking, and audit coordination.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl border border-white/10 bg-white/[0.015] overflow-hidden">
            {/* Left: framework list */}
            <div className="lg:col-span-5 lg:border-r border-b lg:border-b-0 border-white/10 max-h-[560px] overflow-y-auto">
              {FRAMEWORKS.map((f) => {
                const isActive = f.id === activeId;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setActiveId(f.id)}
                    className={cn(
                      "w-full flex items-center gap-4 px-5 sm:px-6 py-4 text-left border-b border-white/[0.07] last:border-b-0 transition-all cursor-pointer",
                      isActive
                        ? "bg-orange-500/[0.07] shadow-[inset_3px_0_0_0_#f97316]"
                        : "hover:bg-white/[0.03]",
                    )}
                  >
                    <span
                      className={cn(
                        "w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors",
                        isActive
                          ? "bg-orange-500/10 border-orange-500/30 text-orange-400"
                          : "bg-white/[0.03] border-white/10 text-slate-400",
                      )}
                    >
                      <f.Icon className="w-5 h-5" />
                    </span>
                    <span className="min-w-0">
                      <span className={cn("block text-sm font-bold tracking-tight truncate", isActive ? "text-white" : "text-slate-200")}>
                        {f.name}
                      </span>
                      <span className="block text-xs font-mono text-slate-500 truncate mt-0.5">
                        {f.meta}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: detail panel */}
            <div className="lg:col-span-7 p-6 sm:p-10" key={active.id}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                {active.headline}
              </h3>
              <p className="mt-4 text-[15px] text-slate-400 leading-relaxed max-w-2xl">
                {active.description}
              </p>

              <p className="mt-8 mb-3 text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-slate-500">
                What we deliver
              </p>
              <div className="flex flex-wrap gap-2">
                {active.deliverables.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.9)]" />
                    {d}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                {active.highlights.map((h) => (
                  <div key={h.label} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/25 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-orange-400" />
                    </span>
                    <p className="text-[15px] text-slate-200">
                      <span className="font-semibold text-white">{h.value}</span>{" "}
                      <span className="text-slate-400">{h.label}</span>
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href={active.href}
                className="group mt-9 inline-flex items-center justify-center gap-3 px-8 py-[14px] rounded-full bg-[#f97316] hover:bg-[#ff7d1c] text-white font-semibold text-[15px] shadow-[0_0_24px_rgba(249,115,22,0.4)] hover:shadow-[0_0_32px_rgba(249,115,22,0.6)] transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>{active.cta}</span>
                <ArrowRight className="w-[18px] h-[18px] stroke-[2.5] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
