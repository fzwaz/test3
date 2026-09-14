"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ShieldCheck,
  Layers,
  FileCheck,
  Scale,
  Globe2,
  CreditCard,
  Cpu,
  Sparkles,
  Building2,
  Users,
  MapPin,
  Plug,
  MailCheck,
  FileText,
  Crown,
  Zap,
  Receipt,
  type LucideIcon,
  Rocket,
  Info,
  Lock,
} from "lucide-react";
import Reveal from "@/components/reveal";

// ── Catalogue types ──
type Framework = {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
  priceMo: number; // illustrative per-framework fee beyond first
};

const FRAMEWORKS: Framework[] = [
  { id: "iso27001", name: "ISO 27001", desc: "International ISMS — 93 Annex A controls.", icon: ShieldCheck, priceMo: 79 },
  { id: "soc2", name: "SOC 2 (Type I / II)", desc: "Trust Services Criteria for SaaS vendors.", icon: FileCheck, priceMo: 79 },
  { id: "dpdpa", name: "DPDPA (India)", desc: "Consent, data-flow & breach obligations.", icon: Scale, priceMo: 79 },
  { id: "nist", name: "NIST CSF", desc: "US cybersecurity baseline — Govern→Recover.", icon: Layers, priceMo: 69 },
  { id: "gdpr", name: "GDPR", desc: "EU data protection for EU customers/users.", icon: Globe2, priceMo: 69 },
  { id: "pci", name: "PCI DSS", desc: "Card data security for payment handlers.", icon: CreditCard, priceMo: 79 },
  { id: "ai", name: "EU AI Act / NIST AI RMF", desc: "AI governance — delivered via Accord.", icon: Cpu, priceMo: 79 },
];

// ── Pricing constants (illustrative, TBD — Section 7/9) ──
const BASE_MO = 199; // covers dashboard + 1 framework
const SEAT_MO = 29; // beyond 3 included
const PULSE_MO = 149;
const DMARC_MO = 49;
const POLICY_PACK_ONETIME = 199;
const INCLUDED_SEATS = 3;
const ANNUAL_DISCOUNT = 0.2; // 20% off monthly when billed annually

const INDUSTRIES = ["SaaS / Technology", "BFSI / Fintech", "Healthcare", "Manufacturing", "Retail / E-commerce", "Government / PSU", "Other"];
const SIZES = ["1–10", "11–50", "51–200", "201–1,000", "1,000+"];
const REGIONS = [
  { label: "India", gateway: "Razorpay (INR)", flag: "🇮🇳" },
  { label: "Saudi Arabia", gateway: "Stripe (SAR)", flag: "🇸🇦" },
  { label: "Bahrain", gateway: "Stripe (BHD)", flag: "🇧🇭" },
  { label: "Other", gateway: "Stripe (USD)", flag: "🌐" },
];

export default function GrcBuilder() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  // Selections
  const [selected, setSelected] = useState<string[]>(["iso27001"]);
  const [industry, setIndustry] = useState(INDUSTRIES[0]);
  const [size, setSize] = useState(SIZES[2]);
  const [region, setRegion] = useState(REGIONS[0].label);

  const [pulse, setPulse] = useState(false);
  const [seats, setSeats] = useState(3);
  const [policyPack, setPolicyPack] = useState(false);
  const [dmarc, setDmarc] = useState(false);

  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [showCheckout, setShowCheckout] = useState(false);

  const totalSteps = 5; // 0 frameworks, 1 profile, 2 add-ons, 3 pricing, 4 provisioned

  const pricing = useMemo(() => {
    const extraFrameworks = Math.max(0, selected.length - 1);
    const extraFrameworkFee = selected.reduce((acc, id, idx) => {
      if (idx === 0) return acc; // first included
      const fw = FRAMEWORKS.find((f) => f.id === id);
      return acc + (fw?.priceMo ?? 79);
    }, 0);
    const extraSeats = Math.max(0, seats - INCLUDED_SEATS);
    const seatsFee = extraSeats * SEAT_MO;
    const pulseFee = pulse ? PULSE_MO : 0;
    const dmarcFee = dmarc ? DMARC_MO : 0;
    const monthlySubtotal = BASE_MO + extraFrameworkFee + seatsFee + pulseFee + dmarcFee;
    const onetime = policyPack ? POLICY_PACK_ONETIME : 0;
    const monthly = billing === "annual" ? Math.round(monthlySubtotal * (1 - ANNUAL_DISCOUNT)) : monthlySubtotal;
    const annualBilled = monthly * 12;
    const gateway = REGIONS.find((r) => r.label === region)?.gateway || "Stripe (USD)";
    return { extraFrameworks, extraFrameworkFee, seatsFee, extraSeats, pulseFee, dmarcFee, monthlySubtotal, monthly, annualBilled, onetime, gateway };
  }, [selected, seats, pulse, dmarc, policyPack, billing, region]);

  const toggleFramework = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev; // keep at least one
        return prev.filter((x) => x !== id);
      }
      return [...prev, id];
    });
  };

  const canNext = useMemo(() => {
    if (step === 0) return selected.length > 0;
    if (step === 1) return !!industry && !!size && !!region;
    return true;
  }, [step, selected, industry, size, region]);

  const next = () => {
    if (!canNext) return;
    setDir(1);
    setStep((s) => Math.min(totalSteps - 1, s + 1));
  };
  const back = () => {
    setDir(-1);
    setStep((s) => Math.max(0, s - 1));
  };

  const progress = ((step + 1) / totalSteps) * 100;

  return (
    <section
      id="grc-builder"
      className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]"
    >
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-8 md:mb-10 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">— Self-serve builder —</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              One builder for <span className="text-[#ff7d1c]">every framework.</span>
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              Compliance Hub, ISO 27001 and SOC 2 pages all funnel into the same engine. Pick frameworks, set your
              profile, add seats & monitoring — provisioned automatically.
            </p>
          </div>
        </Reveal>

        {/* ── Shell ── */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.015] overflow-hidden">
          {/* Progress rail — compact so laptop fits */}
          <div className="px-4 sm:px-6 py-3.5 border-b border-white/10 bg-black/40">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-[11px] font-mono font-bold tracking-widest uppercase">
                  <Layers className="w-3.5 h-3.5" />
                  {step === 0 && "Select frameworks"}
                  {step === 1 && "Organisation profile"}
                  {step === 2 && "Add-ons"}
                  {step === 3 && "Pricing summary"}
                  {step === 4 && "Provisioning"}
                </span>
                <span className="hidden sm:inline text-xs font-mono text-slate-500">
                  Step {step + 1} / {totalSteps}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-500 tabular-nums">{Math.round(progress)}%</span>
                <button
                  type="button"
                  onClick={() => setBilling((b) => (b === "monthly" ? "annual" : "monthly"))}
                  className="ml-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-white/20 transition-colors"
                >
                  <Crown className="w-3.5 h-3.5 text-orange-400" />
                  {billing === "monthly" ? "Monthly" : "Annual — 20% off"}
                </button>
              </div>
            </div>

            <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#f97316] to-[#ffb37a] shadow-[0_0_12px_rgba(249,115,22,0.6)] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-3 flex items-center gap-2">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === step
                      ? "w-8 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.7)]"
                      : i < step
                        ? "w-8 bg-orange-500/60"
                        : "w-2 bg-white/15"
                  }`}
                />
              ))}
              <span className="ml-2 text-[11px] font-mono text-slate-500">Provisioned automatically after checkout</span>
            </div>
          </div>

          {/* Body — compact for laptop: everything + Continue fits without scroll */}
          <div className="p-4 sm:p-5 lg:p-6 overflow-hidden min-h-[560px] sm:min-h-[480px] lg:min-h-[430px] flex flex-col justify-start">
            <AnimatePresence mode="wait" initial={false} custom={dir}>
              <motion.div
                key={step}
                custom={dir}
                variants={{
                  enter: (d: number) => ({ x: d * 18, opacity: 0, filter: "blur(8px)" }),
                  center: {
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: {
                      x: { duration: 0.48, ease: [0.16, 1, 0.3, 1] as const },
                      opacity: { duration: 0.32, ease: [0.16, 1, 0.3, 1] as const },
                      filter: { duration: 0.38, ease: [0.16, 1, 0.3, 1] as const },
                    },
                  },
                  exit: (d: number) => ({
                    x: d * -18,
                    opacity: 0,
                    filter: "blur(8px)",
                    transition: { x: { duration: 0.34, ease: [0.4, 0, 1, 1] as const }, opacity: { duration: 0.22 } },
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                className="will-change-transform"
              >
                {/* STEP 0 — Frameworks — compact */}
                {step === 0 && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-5">
                      <p className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-orange-400 mb-2">
                        Step 01 — Frameworks
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                        Pick what you need. Add the rest later.
                      </h3>
                      <p className="mt-2 text-[13px] text-slate-400 leading-snug">
                        Multi-select. First framework is included in the base fee — each additional is a flat add-on.
                        Control mapping is reused, so SOC 2 after ISO 27001 is incrementally cheaper than starting twice.
                      </p>
                      <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs text-orange-300">
                        <Info className="w-3.5 h-3.5" />
                        {selected.length} selected · Base covers 1 · +{pricing.extraFrameworks} × add-on fee
                      </div>
                    </div>

                    <motion.div
                      initial="hidden"
                      animate="show"
                      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.045, delayChildren: 0.12 } } }}
                      className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                      {FRAMEWORKS.map((fw) => {
                        const active = selected.includes(fw.id);
                        const isFirst = selected[0] === fw.id;
                        return (
                          <motion.button
                            key={fw.id}
                            variants={{
                              hidden: { opacity: 0, y: 10, scale: 0.98 },
                              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.36, ease: [0.16, 1, 0.3, 1] as const } },
                            }}
                            type="button"
                            onClick={() => toggleFramework(fw.id)}
                            className={`group relative text-left p-3 sm:p-4 rounded-2xl border overflow-hidden will-change-transform text-left ${
                              active
                                ? "bg-orange-500/[0.08] border-orange-500/50 shadow-[0_0_24px_rgba(249,115,22,0.15)]"
                                : "bg-white/[0.02] border-white/10 hover:border-orange-500/30 hover:bg-white/[0.04]"
                            }`}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span
                              className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                                active ? "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.6)]" : "border border-white/15 bg-white/[0.03]"
                              }`}
                            >
                              {active && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                            </span>
                            <span
                              className={`w-8 h-8 rounded-xl border flex items-center justify-center mb-2.5 transition-colors ${
                                active ? "bg-orange-500/10 border-orange-500/30 text-orange-400" : "bg-white/[0.04] border-white/10 text-slate-400"
                              }`}
                            >
                              <fw.icon className="w-4 h-4" />
                            </span>
                            <p className={`text-sm font-bold pr-8 ${active ? "text-white" : "text-slate-100 group-hover:text-white"}`}>
                              {fw.name}
                            </p>
                            <p className="mt-1 text-xs text-slate-500 leading-snug">{fw.desc}</p>
                            <p className="mt-3 text-[11px] font-mono text-slate-500">
                              {isFirst && selected.length > 0 ? (
                                <span className="text-emerald-400 font-semibold">Included in base</span>
                              ) : (
                                <>
                                  +${billing === "annual" ? Math.round(fw.priceMo * 0.8) : fw.priceMo}
                                  <span className="text-slate-600"> /mo · illustrative</span>
                                </>
                              )}
                            </p>
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  </div>
                )}

                {/* STEP 1 — Profile — compact for laptop (Continue visible without scroll) */}
                {step === 1 && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-5">
                      <p className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-orange-400 mb-2">
                        Step 02 — Organisation profile
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
                        Tailor controls, pricing & region.
                      </h3>
                      <p className="mt-2 text-[13px] text-slate-400 leading-snug">
                        Company size and industry drive applicable controls and the illustrative exposure baseline.
                        Region drives gateway and local obligations (DPDPA for India, etc.).
                      </p>
                    </div>

                    <div className="lg:col-span-7 space-y-3.5">
                      <div>
                        <p className="text-[11px] font-mono font-bold tracking-widest uppercase text-slate-500 mb-1.5 flex items-center gap-1.5">
                          <Users className="w-3 h-3 text-orange-400" /> Employees / Company size
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                          {SIZES.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setSize(s)}
                              className={`px-2.5 py-2 rounded-xl border text-xs font-medium transition-colors ${
                                size === s ? "bg-orange-500 text-white border-orange-500 shadow-[0_0_14px_rgba(249,115,22,0.35)]" : "bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20 hover:text-white"
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] font-mono font-bold tracking-widest uppercase text-slate-500 mb-1.5 flex items-center gap-1.5">
                          <Building2 className="w-3 h-3 text-orange-400" /> Industry
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {INDUSTRIES.map((ind) => (
                            <button
                              key={ind}
                              type="button"
                              onClick={() => setIndustry(ind)}
                              className={`px-2.5 py-2 rounded-xl border text-xs font-medium text-center transition-colors ${
                                industry === ind
                                  ? "bg-orange-500 text-white border-orange-500 shadow-[0_0_14px_rgba(249,115,22,0.35)]"
                                  : "bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20 hover:text-white"
                              }`}
                            >
                              {ind}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-[11px] font-mono font-bold tracking-widest uppercase text-slate-500 mb-1.5 flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-orange-400" /> Primary region · billing gateway
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {REGIONS.map((r) => (
                            <button
                              key={r.label}
                              type="button"
                              onClick={() => setRegion(r.label)}
                              className={`px-2.5 py-2 rounded-xl border text-xs font-medium flex items-center justify-between transition-colors ${
                                region === r.label ? "bg-orange-500/10 border-orange-500/40 text-white" : "bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20"
                              }`}
                            >
                              <span className="flex items-center gap-1.5">
                                <span>{r.flag}</span> {r.label}
                              </span>
                              <span className={`text-[11px] font-mono ${region === r.label ? "text-orange-300" : "text-slate-500"}`}>{r.gateway}</span>
                            </button>
                          ))}
                        </div>
                        <p className="mt-1.5 text-[11px] text-slate-600 leading-snug">
                          Razorpay for India — Stripe for Saudi/Bahrain/other — auto-selected by billing country. See Section 9.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2 — Add-ons */}
                {step === 2 && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5">
                      <p className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-orange-400 mb-3">
                        Step 03 — Add-ons
                      </p>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                        Add monitoring, seats, and packs.
                      </h3>
                      <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                        Everything is optional. Add now or upgrade after provisioning — the dashboard stays the same, entitlements
                        expand.
                      </p>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-1 gap-3">
                      {/* Pulse */}
                      <button
                        type="button"
                        onClick={() => setPulse((v) => !v)}
                        className={`flex items-center gap-4 p-4 sm:p-5 rounded-2xl border text-left transition-colors ${pulse ? "bg-orange-500/[0.08] border-orange-500/50" : "bg-white/[0.02] border-white/10 hover:border-white/20"}`}
                      >
                        <span className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${pulse ? "bg-orange-500 text-white border-orange-500" : "bg-white/[0.04] border-white/10 text-slate-400"}`}>
                          <Zap className="w-5 h-5" />
                        </span>
                        <span className="flex-1">
                          <span className="flex items-center gap-2 text-sm font-bold text-white">
                            Continuous monitoring — Pulse{" "}
                            <span className="text-xs font-mono font-normal text-slate-500">+${PULSE_MO}/mo</span>
                          </span>
                          <span className="text-xs text-slate-400">Live control monitoring vs. point-in-time evidence.</span>
                        </span>
                        <span className={`w-11 h-6 rounded-full p-1 flex items-center transition-colors ${pulse ? "bg-orange-500 justify-end" : "bg-white/10 justify-start"}`}>
                          <span className="w-4 h-4 rounded-full bg-white shadow" />
                        </span>
                      </button>

                      {/* Seats */}
                      <div className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                        <div className="flex items-center justify-between gap-4">
                          <span className="flex items-center gap-3">
                            <span className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400">
                              <Users className="w-5 h-5" />
                            </span>
                            <span>
                              <span className="text-sm font-bold text-white flex items-center gap-2">
                                Auditor collaboration seats <span className="text-xs font-mono font-normal text-slate-500">+${SEAT_MO}/mo each beyond {INCLUDED_SEATS}</span>
                              </span>
                              <span className="text-xs text-slate-500">{INCLUDED_SEATS} included · SSO & evidence sharing</span>
                            </span>
                          </span>
                          <span className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={() => setSeats((s) => Math.max(1, s - 1))}
                              className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08] transition-colors"
                            >
                              −
                            </button>
                            <span className="w-9 text-center text-sm font-bold text-white tabular-nums">{seats}</span>
                            <button
                              type="button"
                              onClick={() => setSeats((s) => Math.min(20, s + 1))}
                              className="w-8 h-8 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                            >
                              +
                            </button>
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-slate-600">
                          Extra seats fee: ${pricing.seatsFee}/mo {pricing.extraSeats > 0 ? `(${pricing.extraSeats} × $${SEAT_MO})` : "— within included"}
                        </p>
                      </div>

                      {/* Policy pack */}
                      <button
                        type="button"
                        onClick={() => setPolicyPack((v) => !v)}
                        className={`flex items-center gap-4 p-4 sm:p-5 rounded-2xl border text-left transition-colors ${policyPack ? "bg-orange-500/[0.08] border-orange-500/50" : "bg-white/[0.02] border-white/10 hover:border-white/20"}`}
                      >
                        <span className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${policyPack ? "bg-orange-500 text-white border-orange-500" : "bg-white/[0.04] border-white/10 text-slate-400"}`}>
                          <FileText className="w-5 h-5" />
                        </span>
                        <span className="flex-1">
                          <span className="text-sm font-bold text-white flex items-center gap-2">
                            Policy template pack <span className="text-xs font-mono font-normal text-slate-500">+${POLICY_PACK_ONETIME} one-time</span>
                          </span>
                          <span className="text-xs text-slate-400">Hardened ISMS + Trust Services + DPDPA/GDPR templates, pre-tuned.</span>
                        </span>
                        <span className={`w-11 h-6 rounded-full p-1 flex items-center transition-colors ${policyPack ? "bg-orange-500 justify-end" : "bg-white/10 justify-start"}`}>
                          <span className="w-4 h-4 rounded-full bg-white shadow" />
                        </span>
                      </button>

                      {/* DMARC */}
                      <button
                        type="button"
                        onClick={() => setDmarc((v) => !v)}
                        className={`flex items-center gap-4 p-4 sm:p-5 rounded-2xl border text-left transition-colors ${dmarc ? "bg-orange-500/[0.08] border-orange-500/50" : "bg-white/[0.02] border-white/10 hover:border-white/20"}`}
                      >
                        <span className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${dmarc ? "bg-orange-500 text-white border-orange-500" : "bg-white/[0.04] border-white/10 text-slate-400"}`}>
                          <MailCheck className="w-5 h-5" />
                        </span>
                        <span className="flex-1">
                          <span className="text-sm font-bold text-white flex items-center gap-2">
                            DMARC monitoring <span className="text-xs font-mono font-normal text-slate-500">+${DMARC_MO}/mo</span>
                          </span>
                          <span className="text-xs text-slate-400">Domain authentication + deliverability alerts.</span>
                        </span>
                        <span className={`w-11 h-6 rounded-full p-1 flex items-center transition-colors ${dmarc ? "bg-orange-500 justify-end" : "bg-white/10 justify-start"}`}>
                          <span className="w-4 h-4 rounded-full bg-white shadow" />
                        </span>
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 — Pricing summary */}
                {step === 3 && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5">
                      <p className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-orange-400 mb-3">
                        Step 04 — Pricing summary
                      </p>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                        Transparent, modular — <span className="text-[#ff7d1c]">placeholders for now.</span>
                      </h3>
                      <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                        Numbers below are <span className="text-white font-semibold">illustrative only</span> to show structure.
                        Actual pricing per framework/seat is a Risknox commercial decision — see Section 9.
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setBilling("monthly")}
                          className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${billing === "monthly" ? "bg-white text-black border-white" : "bg-white/[0.04] border-white/10 text-slate-400 hover:text-white"}`}
                        >
                          Monthly
                        </button>
                        <button
                          type="button"
                          onClick={() => setBilling("annual")}
                          className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${billing === "annual" ? "bg-orange-500 text-white border-orange-500" : "bg-white/[0.04] border-white/10 text-slate-400 hover:text-white"}`}
                        >
                          Annual · 20% off
                        </button>
                      </div>
                      <p className="mt-3 text-xs text-slate-600">Via {pricing.gateway} — auto-selected by billing country.</p>
                    </div>

                    <div className="lg:col-span-7">
                      <div className="rounded-2xl border border-white/10 bg-black overflow-hidden">
                        <div className="px-6 py-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
                          <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">Your GRC total</span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] font-mono font-bold uppercase">
                            <Receipt className="w-3.5 h-3.5" /> Illustrative
                          </span>
                        </div>

                        <div className="p-6 sm:p-7 space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-400">Base platform fee — 1 framework included</span>
                            <span className="font-mono font-bold text-white tabular-nums">
                              ${billing === "annual" ? Math.round(BASE_MO * 0.8) : BASE_MO}
                              <span className="text-slate-500 font-normal"> /mo</span>
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-400">
                              +{pricing.extraFrameworks} additional framework{pricing.extraFrameworks !== 1 ? "s" : ""} × add-on
                            </span>
                            <span className="font-mono font-bold text-white tabular-nums">
                              ${billing === "annual" ? Math.round(pricing.extraFrameworkFee * 0.8) : pricing.extraFrameworkFee}
                              <span className="text-slate-500 font-normal"> /mo</span>
                            </span>
                          </div>

                          {pricing.extraSeats > 0 || seats !== INCLUDED_SEATS ? (
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-400">Seats — {seats} total ({INCLUDED_SEATS} incl.)</span>
                              <span className="font-mono font-bold text-white tabular-nums">
                                ${billing === "annual" ? Math.round(pricing.seatsFee * 0.8) : pricing.seatsFee}
                                <span className="text-slate-500 font-normal"> /mo</span>
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-400">Seats — {INCLUDED_SEATS} included</span>
                              <span className="font-mono font-bold text-emerald-400">$0 /mo</span>
                            </div>
                          )}

                          {pulse && (
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-400 flex items-center gap-1.5">
                                <Plug className="w-3.5 h-3.5 text-orange-400" /> Continuous monitoring (Pulse)
                              </span>
                              <span className="font-mono font-bold text-white tabular-nums">
                                ${billing === "annual" ? Math.round(PULSE_MO * 0.8) : PULSE_MO}
                                <span className="text-slate-500 font-normal"> /mo</span>
                              </span>
                            </div>
                          )}
                          {dmarc && (
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-400 flex items-center gap-1.5">
                                <MailCheck className="w-3.5 h-3.5 text-orange-400" /> DMARC monitoring
                              </span>
                              <span className="font-mono font-bold text-white tabular-nums">
                                ${billing === "annual" ? Math.round(DMARC_MO * 0.8) : DMARC_MO}
                                <span className="text-slate-500 font-normal"> /mo</span>
                              </span>
                            </div>
                          )}

                          <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                            <span className="text-sm font-bold text-white">Subtotal</span>
                            <span className="text-2xl font-extrabold tracking-tighter text-white tabular-nums">
                              ${pricing.monthly}
                              <span className="text-sm font-normal text-slate-500"> /mo</span>
                            </span>
                          </div>
                          {billing === "annual" && (
                            <p className="text-right text-xs text-slate-500">
                              Billed annually as <span className="text-white font-mono font-bold">${pricing.annualBilled}</span> · Save{" "}
                              {Math.round(pricing.monthlySubtotal * 0.2 * 12)} /yr
                            </p>
                          )}

                          {policyPack && (
                            <p className="text-xs text-slate-400 border-t border-white/10 pt-3">
                              + <span className="text-white font-bold">${POLICY_PACK_ONETIME}</span> one-time policy pack on first
                              invoice.
                            </p>
                          )}

                          <div className="rounded-xl bg-orange-500/10 border border-orange-500/20 p-3 flex items-start gap-2">
                            <Info className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                            <p className="text-xs text-orange-200 leading-relaxed">
                              Placeholder pricing — TBD. Numbers shown only to demonstrate base + per-framework + seat/add-on
                              structure from Section 7.
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              setShowCheckout(true);
                              // Fire Zoho (Contacts + Deal Closed Won) — Website – Self-serve Signup, Section 6
                              fetch("/api/contact", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  fullName: "GRC Builder Checkout",
                                  workEmail: "grc-builder@risknox.ai",
                                  companyName: `${industry} · ${size} · ${region}`,
                                  source: "grc-builder",
                                  Product_Interest: "Compliance/GRC",
                                  Frameworks_Selected: selected,
                                  Company_Size: size,
                                  Industry: industry,
                                  Region: region,
                                  Company_Size_detail: size,
                                  selectedFrameworks: selected,
                                  seats,
                                  pulse,
                                  dmarc,
                                  policyPack,
                                  billing,
                                  monthly: pricing.monthly,
                                  annualBilled: pricing.annualBilled,
                                }),
                              }).catch(() => {});
                            }}
                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f97316] hover:bg-[#ff7d1c] text-white font-semibold text-sm shadow-[0_0_20px_rgba(249,115,22,0.35)] transition-colors"
                          >
                            <Lock className="w-4 h-4" />
                            Proceed to checkout · {billing === "annual" ? `$${pricing.annualBilled}/yr` : `$${pricing.monthly}/mo`}
                          </button>
                          <p className="text-center text-xs text-slate-600">Invoice/receipt issued · Entitlements scoped to purchased frameworks</p>
                        </div>
                      </div>

                      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                        <div className="text-xs leading-relaxed">
                          <p className="font-semibold text-white">You&apos;re buying the same engine.</p>
                          <p className="text-slate-400">
                            “Build a GRC program” and “Get ISO 27001 ready” are the same product wearing different landing pages — the
                            dashboard is identical, entitlements differ.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4 — Provisioning */}
                {step === 4 && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-5">
                      <p className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-emerald-400 mb-3 flex items-center gap-2">
                        <Check className="w-4 h-4" /> Provisioning
                      </p>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                        Payment → account → wizard.
                      </h3>
                      <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                        Checkout, invoice, and auto-provisioning happen in one flow. Onboarding pre-loads your selected
                        frameworks&apos; controls so you don&apos;t start from blank.
                      </p>

                      <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                        <div className="rounded-xl border border-white/10 bg-black p-3">
                          <Receipt className="w-5 h-5 text-orange-400 mx-auto" />
                          <p className="mt-1 text-xs font-bold text-white">Checkout</p>
                          <p className="text-[11px] text-slate-500">{pricing.gateway}</p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-black p-3">
                          <Zap className="w-5 h-5 text-orange-400 mx-auto" />
                          <p className="mt-1 text-xs font-bold text-white">Provisioned</p>
                          <p className="text-[11px] text-slate-500">Auto · minutes</p>
                        </div>
                        <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-3">
                          <Rocket className="w-5 h-5 text-orange-400 mx-auto" />
                          <p className="mt-1 text-xs font-bold text-white">Dashboard</p>
                          <p className="text-[11px] text-orange-300">Controls pre-loaded</p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                      <div className="rounded-2xl border border-white/10 bg-black overflow-hidden">
                        <div className="px-6 py-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
                          <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">
                            What lands on day one
                          </span>
                          <span className="text-xs font-mono text-slate-500">
                            {selected.map((id) => FRAMEWORKS.find((f) => f.id === id)?.name ?? id).join(" · ")}
                          </span>
                        </div>
                        <div className="p-6 sm:p-7 space-y-3">
                          <div className="flex gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                            <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                              <Layers className="w-4 h-4" />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-white">Control mapping</p>
                              <p className="text-xs text-slate-400">Your frameworks mapped — reuse one evidence set across many.</p>
                            </div>
                          </div>
                          <div className="flex gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                            <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                              <Users className="w-4 h-4" />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-white">Task assignments & evidence collection</p>
                              <p className="text-xs text-slate-400">Owners, due dates, and Compass workflows move together.</p>
                            </div>
                          </div>
                          <div className="flex gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.02]">
                            <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                              <FileCheck className="w-4 h-4" />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-white">Audit-ready export & upgrades</p>
                              <p className="text-xs text-slate-400">Export evidence packs and add frameworks later from billing.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                        <h4 className="text-sm font-bold text-white">Customer portal</h4>
                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs leading-relaxed">
                          <div>
                            <p className="font-semibold text-white">Self-serve customers</p>
                            <p className="text-slate-400">Dashboard scoped to purchased frameworks · billing history · upgrade path · evidence/task center.</p>
                          </div>
                          <div>
                            <p className="font-semibold text-white">Enterprise (sales-assisted)</p>
                            <p className="text-slate-400">Pulse/Fortress/Compass/Accord/DPDPA Mapping provisioned post-demo — same shell, entitlements set by team.</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => setShowCheckout(true)}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f97316] hover:bg-[#ff7d1c] text-white font-semibold text-sm shadow-[0_0_20px_rgba(249,115,22,0.35)] transition-colors"
                        >
                          <Crown className="w-4 h-4" />
                          Checkout demo · ${pricing.monthly}/mo
                        </button>
                        <a href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white font-medium text-sm hover:border-white/20 transition-colors">
                          Talk to sales <ArrowRight className="w-4 h-4 text-orange-400" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav — compact so Continue stays in viewport on laptop */}
          <div className="px-4 sm:px-6 py-3 flex items-center justify-between gap-4 border-t border-white/10 bg-black/20">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-medium text-slate-300 hover:text-white hover:border-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <div className="flex items-center gap-3">
              {step < totalSteps - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={!canNext}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ff7d1c] text-white text-sm font-semibold shadow-[0_0_18px_rgba(249,115,22,0.35)] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-100 transition-colors"
                >
                  Contact sales
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Checkout stub */}
          {showCheckout && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setShowCheckout(false)}>
              <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 sm:p-7 shadow-2xl"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">Checkout — illustrative only</h4>
                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                      This is a demo of the self-serve flow. Actual pricing + gateway (Razorpay/Stripe) are TBD per Section 9.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowCheckout(false)}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white shrink-0"
                  >
                    ✕
                  </button>
                </div>

                <div className="rounded-xl border border-white/10 bg-black p-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Frameworks</span>
                    <span className="text-white font-medium">{selected.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Region / gateway</span>
                    <span className="text-white font-mono text-xs">{pricing.gateway}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Billing</span>
                    <span className="text-white font-medium capitalize">{billing}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2 mt-2">
                    <span className="font-bold text-white">Total</span>
                    <span className="font-mono font-bold text-white">
                      ${pricing.monthly}/mo
                      {policyPack ? ` + $${POLICY_PACK_ONETIME} first invoice` : ""}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowCheckout(false)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#f97316] text-white font-semibold text-sm"
                  >
                    Got it
                  </button>
                  <a href="/contact" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-white font-medium text-sm">
                    Talk to sales
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Build Your Own GRC is the commerce engine behind Compliance. Numbers are illustrative placeholders — structure only — pending Risknox
          commercial decision (Sections 7 & 9). DMARC Monitoring free domain check vs. paid continuous tier is a separate path.
        </p>
      </div>
    </section>
  );
}
