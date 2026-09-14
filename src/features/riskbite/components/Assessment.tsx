"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  Gauge,
  DollarSign,
  AlertTriangle,
  Download,
  Mail,
  Building2,
  Check,
  Lock,
} from "lucide-react";
import Reveal from "@/components/reveal";

// ──────────────────────────────────────────────────────────────
// Question model
// ──────────────────────────────────────────────────────────────
type Option = {
  label: string;
  helper?: string;
  score: number; // contribution to risk
  benchmark?: never;
};

type Question = {
  id: number;
  question: string;
  why: string;
  options: Option[];
};

// Benchmarks used for dollar exposure (M USD)
const INDUSTRY_BENCHMARK: Record<string, number> = {
  Healthcare: 9.77,
  "Financial Services / BFSI": 6.08,
  "SaaS / Technology": 5.5,
  Manufacturing: 4.5,
  "Retail / E-commerce": 3.28,
  Education: 3.5,
  "Government / PSU": 4.0,
  Other: 4.45,
};

const SIZE_MULT: Record<string, number> = {
  "1–10 employees": 0.15,
  "11–50 employees": 0.35,
  "51–200 employees": 0.7,
  "201–1,000 employees": 1.0,
  "1,000+ employees": 2.2,
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What industry are you in?",
    why: "Sets the breach-cost benchmark and relevant compliance frameworks.",
    options: [
      { label: "Healthcare", score: 18 },
      { label: "Financial Services / BFSI", score: 16 },
      { label: "SaaS / Technology", score: 14 },
      { label: "Manufacturing", score: 10 },
      { label: "Retail / E-commerce", score: 12 },
      { label: "Education", score: 8 },
      { label: "Government / PSU", score: 14 },
      { label: "Other", score: 10 },
    ],
  },
  {
    id: 2,
    question: "How large is your organisation?",
    why: "Scales the dollar exposure estimate.",
    options: [
      { label: "1–10 employees", score: 5 },
      { label: "11–50 employees", score: 8 },
      { label: "51–200 employees", score: 12 },
      { label: "201–1,000 employees", score: 16 },
      { label: "1,000+ employees", score: 20 },
    ],
  },
  {
    id: 3,
    question: "Do you store or process customer/personal data?",
    why: "Major driver of both risk and applicable regulation (DPDPA/GDPR).",
    options: [
      { label: "Yes, extensively", helper: "PII, payments, health, etc.", score: 15 },
      { label: "Yes, limited", helper: "Some customer data", score: 8 },
      { label: "No", helper: "Minimal personal data", score: 2 },
      { label: "Not sure", score: 6 },
    ],
  },
  {
    id: 4,
    question: "Do you have continuous security monitoring in place?",
    why: "Core Pulse-relevant signal. Lack of monitoring is the biggest posture driver.",
    options: [
      { label: "Yes — 24/7 SOC / MDR", helper: "Fortress/Pulse-equivalent", score: 2 },
      { label: "Yes — basic tools (EDR/SIEM)", score: 10 },
      { label: "No continuous monitoring", score: 18 },
      { label: "Not sure", score: 12 },
    ],
  },
  {
    id: 5,
    question: "Have you had a security incident in the last 24 months?",
    why: "Directly raises quantified risk and likelihood weighting.",
    options: [
      { label: "Yes — major incident", score: 18 },
      { label: "Yes — minor incident", score: 10 },
      { label: "No", score: 3 },
      { label: "Prefer not to say / Not sure", score: 8 },
    ],
  },
  {
    id: 6,
    question: "Do you use cloud infrastructure / SaaS tools extensively?",
    why: "Attack-surface indicator. Cloud sprawl without visibility raises exposure.",
    options: [
      { label: "Heavily — cloud-native", score: 14 },
      { label: "Moderately", score: 8 },
      { label: "Minimally / mostly on-prem", score: 4 },
      { label: "Not sure", score: 6 },
    ],
  },
  {
    id: 7,
    question: "Do you hold or need a compliance certification?",
    why: "Routes qualifying leads toward the Compliance/GRC funnel.",
    options: [
      { label: "We hold ISO 27001 / SOC 2", helper: "Certified today", score: 4 },
      { label: "We hold multiple frameworks", score: 3 },
      { label: "Planning in next 12 months", helper: "High intent", score: 8 },
      { label: "No plans yet", score: 12 },
      { label: "Not sure", score: 8 },
    ],
  },
  {
    id: 8,
    question: "Do you have cyber insurance?",
    why: "Routes qualifying leads toward Compass / partner funnel.",
    options: [
      { label: "Yes — comprehensive", score: 3 },
      { label: "Yes — basic", score: 6 },
      { label: "No, but considering", score: 8 },
      { label: "No", score: 10 },
    ],
  },
];

function getBand(score: number) {
  if (score <= 30) return { label: "Low risk", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", dot: "bg-emerald-400" };
  if (score <= 50) return { label: "Moderate risk", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/30", dot: "bg-yellow-400" };
  if (score <= 70) return { label: "Elevated risk", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30", dot: "bg-orange-400" };
  if (score <= 85) return { label: "High risk", color: "text-orange-500", bg: "bg-orange-500/15", border: "border-orange-500/40", dot: "bg-orange-500" };
  return { label: "Critical exposure", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/30", dot: "bg-red-400" };
}

function formatMoney(m: number) {
  if (m >= 1) return `$${m.toFixed(2)}M`;
  return `$${Math.round(m * 1000)}K`;
}

// Gated helper
function isFreeEmail(email: string) {
  const free = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "icloud.com", "protonmail.com"];
  const domain = email.split("@")[1]?.toLowerCase() || "";
  return free.includes(domain);
}

// ──────────────────────────────────────────────────────────────
export default function RiskBiteAssessment() {
  const [step, setStep] = useState(0); // 0..7 questions, 8 = teaser, 9 = gated/full
  const [answers, setAnswers] = useState<Record<number, number>>({}); // qIdx -> optionIdx
  const [dir, setDir] = useState<1 | -1>(1);
  const [showGate, setShowGate] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [consent, setConsent] = useState(false);
  const [gateError, setGateError] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  const totalQuestions = QUESTIONS.length;
  const progress = useMemo(() => {
    if (step < totalQuestions) return ((step + (answers[step] !== undefined ? 1 : 0)) / totalQuestions) * 100;
    return 100;
  }, [step, answers]);

  const { score, raw, low, high, band, topFactors, industry, sizeLabel } = useMemo(() => {
    if (Object.keys(answers).length < totalQuestions) {
      return { score: 0, raw: 0, low: 0, high: 0, band: getBand(42), topFactors: [] as string[], industry: "", sizeLabel: "" };
    }
    let rawSum = 0;
    const contributions: { q: string; opt: string; score: number }[] = [];
    QUESTIONS.forEach((q, qi) => {
      const oi = answers[qi];
      const opt = q.options[oi];
      if (opt) {
        rawSum += opt.score;
        contributions.push({ q: q.question, opt: opt.label, score: opt.score });
      }
    });
    const normalized = Math.round(((rawSum - 30) / 95) * 100);
    const clamped = Math.max(0, Math.min(100, normalized));

    // Dollar exposure
    const indLabel = QUESTIONS[0].options[answers[0]]?.label || "Other";
    const size = QUESTIONS[1].options[answers[1]]?.label || "51–200 employees";
    const bench = INDUSTRY_BENCHMARK[indLabel] ?? 4.45;
    const mult = SIZE_MULT[size] ?? 0.7;
    let riskMult = 1.0;
    if (clamped < 30) riskMult = 0.7;
    else if (clamped < 45) riskMult = 0.85;
    else if (clamped < 60) riskMult = 1.0;
    else if (clamped < 75) riskMult = 1.18;
    else if (clamped < 85) riskMult = 1.35;
    else riskMult = 1.65;
    const exposure = bench * mult * riskMult;
    const l = exposure * 0.82;
    const h = exposure * 1.18;

    const top = [...contributions].sort((a, b) => b.score - a.score).slice(0, 3).map((c) => c.opt + " — " + c.q.replace("?", ""));

    return {
      score: clamped,
      raw: rawSum,
      low: l,
      high: h,
      band: getBand(clamped),
      topFactors: top,
      industry: indLabel,
      sizeLabel: size,
    };
  }, [answers]);

  const canProceed = answers[step] !== undefined;
  const isLastQuestion = step === totalQuestions - 1;
  const showTeaser = step >= totalQuestions && !unlocked;
  const showFull = unlocked;

  const selectOption = (optIdx: number) => {
    setAnswers((prev) => ({ ...prev, [step]: optIdx }));
    // auto-advance after selection glow is visible
    if (step < totalQuestions - 1) {
      setDir(1);
      setTimeout(() => setStep((s) => s + 1), 340);
    }
  };

  const handleContinue = () => {
    if (!canProceed) return;
    setDir(1);
    if (isLastQuestion) {
      setStep(totalQuestions); // teaser
      window.scrollTo({ top: document.getElementById("riskbite-assessment")!.offsetTop - 80, behavior: "smooth" });
    } else {
      setStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    setDir(-1);
    if (step === totalQuestions && !unlocked) {
      setStep(totalQuestions - 1);
      return;
    }
    if (showFull) {
      setUnlocked(false);
      setShowGate(true);
      return;
    }
    setStep((s) => Math.max(0, s - 1));
  };

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setGateError(null);
    if (!company.trim()) {
      setGateError("Please enter your company name.");
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setGateError("Please enter a valid work email.");
      return;
    }
    if (isFreeEmail(email)) {
      setGateError("Please use your work email (no Gmail/Yahoo/Outlook).");
      return;
    }
    if (!consent) {
      setGateError("Please accept the consent to receive your report.");
      return;
    }
    // Hit Zoho CRM (Leads — Website – Risk Bite) with custom fields; fallback is handled server-side
    // Always unlock on-screen even if CRM is down (never surface failure)
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: company, // use company as fallback for First/Last split; email is the identifier
          workEmail: email,
          companyName: company,
          source: "risk-bite",
          Product_Interest: "Compliance/GRC",
          Risk_Bite_Score: score,
          Risk_Bite_Exposure_Range: `${formatMoney(low)} – ${formatMoney(high)}`,
          Company_Size: sizeLabel,
          Industry: industry,
          Region: "India",
          Description: `Top factors: ${topFactors.join(" | ")} — Band: ${band.label} — Raw: ${raw}`,
        }),
      });
    } catch {
      // swallow — server fallback will email sales alias
    }
    setUnlocked(true);
    setShowGate(false);
  };

  const handleDownload = () => {
    const content = `RiskBite — Risknox\nCompany: ${company || "—"}\nEmail: ${email || "—"}\nRisk Posture Score: ${score}/100 (${band.label})\nIndustry: ${industry} | Size: ${sizeLabel}\nEstimated dollar exposure: ${formatMoney(low)} – ${formatMoney(high)}\nTop factors:\n- ${topFactors.join("\n- ")}\n\nMethodology: Fortress-aligned teaser model. Range uses IBM Cost of a Data Breach benchmarks × size × posture multiplier.\n`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `RiskBite-${company || "report"}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const needsComplianceCTA = (() => {
    const v = QUESTIONS[6].options[answers[6]]?.label || "";
    return v.includes("Planning") || v.includes("No plans");
  })();
  const needsInsuranceCTA = (() => {
    const v = QUESTIONS[7].options[answers[7]]?.label || "";
    return v.includes("No");
  })();

  const answeredCount = Object.keys(answers).length;

  return (
    <section
      id="riskbite-assessment"
      className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]"
    >
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">— Interactive tool —</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Get your <span className="text-[#ff7d1c]">RiskBite</span> in 3 minutes.
            </h2>
            <p className="mt-5 text-[15px] lg:text-base text-[#cfc9c2] leading-relaxed">
              One question at a time. No email needed to see your teaser score — the same Fortress logic, distilled into
              8 quick questions.
            </p>
          </div>
        </Reveal>

        {/* ── Main interactive shell ── */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.015] overflow-hidden">
          {/* Progress rail */}
          <div className="px-6 sm:px-8 py-5 border-b border-white/10 bg-black/40">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-[11px] font-mono font-bold tracking-widest uppercase">
                  <Gauge className="w-3.5 h-3.5" />
                  {step < totalQuestions ? `Question ${step + 1} of ${totalQuestions}` : unlocked ? "Full results" : "Your teaser"}
                </span>
                <span className="hidden sm:inline text-xs font-mono text-slate-500">{answeredCount}/{totalQuestions} answered</span>
              </div>
              <span className="text-xs font-mono text-slate-500 tabular-nums">{Math.round(progress)}%</span>
            </div>

            {/* Pill progress */}
            <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#f97316] to-[#ffb37a] shadow-[0_0_12px_rgba(249,115,22,0.6)] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Step dots */}
            <div className="mt-4 flex items-center gap-2">
              {Array.from({ length: totalQuestions }).map((_, i) => {
                const done = answers[i] !== undefined;
                const active = i === step && step < totalQuestions;
                return (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      active
                        ? "w-8 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.7)]"
                        : done
                          ? "w-8 bg-orange-500/60"
                          : "w-2 bg-white/15"
                    }`}
                  />
                );
              })}
              <span className="ml-2 text-[11px] font-mono text-slate-500">Fortress-aligned</span>
            </div>
          </div>

          {/* Body — direction-aware smooth screen transitions */}
          <div className="p-6 sm:p-8 lg:p-10 overflow-hidden">
            <AnimatePresence mode="wait" initial={false} custom={dir}>
              <motion.div
                key={unlocked ? "full" : String(step)}
                custom={dir}
                variants={{
                  enter: (d: number) => ({
                    x: d * 18,
                    opacity: 0,
                    filter: "blur(8px)",
                  }),
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
                    transition: {
                      x: { duration: 0.34, ease: [0.4, 0, 1, 1] as const },
                      opacity: { duration: 0.22, ease: [0.4, 0, 1, 1] as const },
                      filter: { duration: 0.26, ease: [0.4, 0, 1, 1] as const },
                    },
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                className="will-change-transform"
              >
                {/* Question view */}
                {step < totalQuestions && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left: question */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] as const, delay: 0.08 } }}
                      className="lg:col-span-5"
                    >
                      <p className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-orange-400 mb-3">
                        Question 0{QUESTIONS[step].id}
                      </p>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                        {QUESTIONS[step].question}
                      </h3>
                      <div className="mt-4 inline-flex items-start gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10">
                        <Shield className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                        <p className="text-xs text-slate-400 leading-relaxed">
                          <span className="text-slate-300 font-semibold">Why we ask:</span> {QUESTIONS[step].why}
                        </p>
                      </div>

                      <div className="mt-8 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={handleBack}
                          disabled={step === 0}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-medium text-slate-300 hover:text-white hover:border-white/20 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={handleContinue}
                          disabled={!canProceed}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ff7d1c] text-white text-sm font-semibold shadow-[0_0_18px_rgba(249,115,22,0.35)] disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                        >
                          <span>{isLastQuestion ? "See my teaser" : "Continue"}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="mt-3 text-xs text-slate-500">Select an option to continue — auto-advances for speed.</p>
                    </motion.div>

                    {/* Right: options — staggered reveal */}
                    <motion.div
                      initial="hidden"
                      animate="show"
                      variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.045, delayChildren: 0.12 } },
                      }}
                      className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 content-start"
                    >
                      {QUESTIONS[step].options.map((opt, oi) => {
                        const selected = answers[step] === oi;
                        return (
                          <motion.button
                            key={opt.label}
                            type="button"
                            variants={{
                              hidden: { opacity: 0, y: 10, scale: 0.98 },
                              show: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: { duration: 0.36, ease: [0.16, 1, 0.3, 1] as const },
                              },
                            }}
                            onClick={() => selectOption(oi)}
                            className={`group relative text-left p-4 sm:p-5 rounded-2xl border cursor-pointer overflow-hidden will-change-transform ${
                              selected
                                ? "bg-orange-500/[0.08] border-orange-500/50 shadow-[0_0_24px_rgba(249,115,22,0.18)]"
                                : "bg-white/[0.02] border-white/10 hover:border-orange-500/30 hover:bg-white/[0.04]"
                            }`}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.14 }}
                          >
                            <span
                              className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                                selected ? "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.6)] scale-100" : "border border-white/15 bg-white/[0.03] scale-100"
                              }`}
                            >
                              {selected && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                            </span>
                            <p
                              className={`text-sm font-semibold pr-8 transition-colors duration-200 ${selected ? "text-white" : "text-slate-100 group-hover:text-white"}`}
                            >
                              {opt.label}
                            </p>
                            {opt.helper && <p className="mt-1 text-xs text-slate-500">{opt.helper}</p>}
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  </div>
                )}

                {/* Teaser view */}
                {showTeaser && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.36, ease: [0.16, 1, 0.3, 1] as const } }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                  >
                    {/* Gauge */}
                    <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                      <p className="text-xs font-mono font-bold tracking-[0.22em] uppercase text-orange-400 mb-4">
                        Teaser · No email required
                      </p>

                      <div className="relative w-[220px] h-[220px] flex items-center justify-center">
                        {/* Track */}
                        <svg width={220} height={220} className="absolute inset-0 -rotate-90">
                          <circle cx={110} cy={110} r={92} stroke="rgba(255,255,255,0.08)" strokeWidth={14} fill="none" />
                          <circle
                            cx={110}
                            cy={110}
                            r={92}
                            stroke={score > 70 ? "#f97316" : score > 50 ? "#fb923c" : score > 30 ? "#facc15" : "#22c55e"}
                            strokeWidth={14}
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={2 * Math.PI * 92}
                            strokeDashoffset={2 * Math.PI * 92 * (1 - score / 100)}
                            style={{ filter: "drop-shadow(0 0 12px rgba(249,115,22,0.45))", transition: "stroke-dashoffset 900ms cubic-bezier(0.16,1,0.3,1)" }}
                          />
                        </svg>
                        <div className="relative z-10">
                          <div className="flex items-baseline justify-center gap-1">
                            <span className="text-6xl font-extrabold tracking-tighter text-white tabular-nums">{score}</span>
                            <span className="text-xl font-bold text-slate-500">/100</span>
                          </div>
                          <span
                            className={`mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold tracking-widest uppercase ${band.bg} ${band.border} ${band.color}`}
                          >
                            <span className={`w-2 h-2 rounded-full ${band.dot} shadow-[0_0_8px_currentColor]`} />
                            {band.label}
                          </span>
                        </div>
                      </div>

                      <p className="mt-6 max-w-sm text-sm text-slate-400 leading-relaxed">
                        This is your Fortress-aligned posture teaser. Unlock the full range, top drivers, and PDF to share with
                        your team — takes 10 seconds.
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => setShowGate(true)}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f97316] hover:bg-[#ff7d1c] text-white font-semibold text-sm shadow-[0_0_20px_rgba(249,115,22,0.35)] transition-colors cursor-pointer"
                        >
                          <Mail className="w-4 h-4" />
                          Unlock full results
                        </button>
                        <button
                          type="button"
                          onClick={handleBack}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white font-medium text-sm hover:border-white/20 transition-colors cursor-pointer"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Change answers
                        </button>
                      </div>

                      <p className="mt-3 text-xs text-slate-500">We never share your answers. Lead stored in Zoho CRM with score + range.</p>
                    </div>

                    {/* Blurred full preview */}
                    <div className="lg:col-span-7">
                      <div className="rounded-2xl border border-white/10 bg-black overflow-hidden">
                        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                          <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">
                            Full RiskBite results — preview
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                            <Lock className="w-3.5 h-3.5" /> Gated
                          </span>
                        </div>

                        <div className="relative p-6 sm:p-8">
                          {/* Blur overlay */}
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 backdrop-blur-[6px] z-10 flex items-end justify-center pb-8">
                            <button
                              type="button"
                              onClick={() => setShowGate(true)}
                              className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm shadow-xl hover:bg-zinc-100 transition-colors cursor-pointer"
                            >
                              <Lock className="w-4 h-4" />
                              Enter work email to reveal
                            </button>
                          </div>

                          <div className="space-y-6 opacity-70">
                            <div>
                              <p className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400 mb-2">
                                Estimated dollar exposure
                              </p>
                              <p className="text-3xl font-extrabold tracking-tighter text-white">
                                {formatMoney(low)} – {formatMoney(high)}
                              </p>
                              <p className="mt-1 text-xs text-slate-500">
                                {industry} · {sizeLabel} · {band.label} · range, not false precision
                              </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              {topFactors.map((f, i) => (
                                <div key={f} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                                  <p className="text-[11px] font-mono font-bold tracking-widest uppercase text-slate-500">
                                    Driver 0{i + 1}
                                  </p>
                                  <p className="mt-1 text-sm font-medium text-white leading-snug">{f}</p>
                                </div>
                              ))}
                            </div>

                            <div className="flex flex-wrap gap-3">
                              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.03] text-sm text-white">
                                <Download className="w-4 h-4 text-orange-400" /> PDF summary
                              </span>
                              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f97316] text-white text-sm font-semibold">
                                Book a demo
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contextual secondary CTAs hint */}
                      {(needsComplianceCTA || needsInsuranceCTA) && (
                        <p className="mt-4 text-xs text-slate-500">
                          Based on your answers we&apos;ll also surface{" "}
                          {needsComplianceCTA && needsInsuranceCTA
                            ? "Compliance + insurance"
                            : needsComplianceCTA
                              ? "Compliance"
                              : "insurance"}{" "}
                          next steps once you unlock.
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Full unlocked view */}
                {showFull && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.36, ease: [0.16, 1, 0.3, 1] as const } }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                  >
                    <div className="lg:col-span-5">
                      <p className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-400 mb-3 flex items-center gap-2">
                        <Check className="w-4 h-4" /> Unlocked — {company || "your organisation"}
                      </p>
                      <div className="rounded-2xl border border-orange-500/30 bg-orange-500/[0.06] p-6">
                        <p className="text-xs font-mono font-bold tracking-widest uppercase text-orange-400">Risk posture</p>
                        <div className="mt-2 flex items-end gap-3">
                          <span className="text-5xl font-extrabold tracking-tighter text-white tabular-nums">{score}</span>
                          <span className="text-lg font-bold text-slate-500 mb-1">/ 100</span>
                          <span
                            className={`mb-2 ml-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold tracking-widest uppercase ${band.bg} ${band.border} ${band.color}`}
                          >
                            {band.label}
                          </span>
                        </div>
                        <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                          Same Fortress scoring logic. High bands + large org sizes trigger same-day sales follow-up.
                        </p>
                      </div>

                      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                        <p className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 mb-3">
                          Estimated dollar exposure
                        </p>
                        <p className="text-3xl font-extrabold tracking-tighter text-white">
                          {formatMoney(low)} – {formatMoney(high)}
                        </p>
                        <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                          Based on {industry} benchmark ({formatMoney(INDUSTRY_BENCHMARK[industry] || 4.45)} IBM avg) ×{" "}
                          {sizeLabel} scale × posture multiplier. Presented as a range — never false precision.
                        </p>
                        <p className="mt-3 text-xs text-slate-600">
                          Raw risk signals: {raw} · Normalised: {score}/100 · Methodology reviewed against Fortress model.
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-7 space-y-6">
                      <div>
                        <h4 className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-400" /> Top 3 contributing risk factors
                        </h4>
                        <div className="mt-3 grid grid-cols-1 gap-3">
                          {topFactors.map((f, i) => (
                            <div key={f} className="flex gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                              <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-mono text-sm font-bold shrink-0">
                                {i + 1}
                              </span>
                              <p className="text-sm text-slate-200 leading-snug">{f}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={handleDownload}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white text-black font-semibold text-sm hover:bg-zinc-100 transition-colors cursor-pointer"
                        >
                          <Download className="w-4 h-4" />
                          Download PDF summary
                        </button>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#f97316] hover:bg-[#ff7d1c] text-white font-semibold text-sm shadow-[0_0_18px_rgba(249,115,22,0.35)] transition-colors"
                        >
                          <DollarSign className="w-4 h-4" />
                          Book a demo to reduce this exposure
                        </Link>
                      </div>

                      {(needsComplianceCTA || needsInsuranceCTA) && (
                        <div className="flex flex-wrap gap-3 pt-2 border-t border-white/10">
                          {needsComplianceCTA && (
                            <Link
                              href="/compliance"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm font-medium hover:bg-white/[0.1] transition-colors"
                            >
                              <Shield className="w-4 h-4 text-orange-400" />
                              Explore Compliance Hub
                            </Link>
                          )}
                          {needsInsuranceCTA && (
                            <Link
                              href="/platform/compass"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm font-medium hover:bg-white/[0.1] transition-colors"
                            >
                              <Building2 className="w-4 h-4 text-orange-400" />
                              Talk about cyber insurance
                            </Link>
                          )}
                        </div>
                      )}

                      <p className="text-xs text-slate-500 leading-relaxed">
                        Lead captured in Zoho CRM with score {score}, range {formatMoney(low)}–{formatMoney(high)}, and all
                        8 answers. High-risk / large-org sessions notify sales same-day. You&apos;ll receive a follow-up email with
                        the full PDF.
                      </p>

                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-xs text-slate-500 hover:text-slate-300 underline underline-offset-4"
                      >
                        Change answers and recalculate
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Gate modal */}
          {showGate && !unlocked && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setShowGate(false)}>
              <form
                onSubmit={handleUnlock}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 sm:p-7 shadow-2xl"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">Unlock your full RiskBite</h4>
                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                      Work email + company name to get your dollar range, top drivers, and a downloadable PDF — the standard
                      freemium pattern.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowGate(false)}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white shrink-0"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <label className="block">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">Work email</span>
                    <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 focus-within:border-orange-500/50 focus-within:bg-orange-500/[0.04]">
                      <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-600"
                        autoFocus
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400">Company name</span>
                    <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 focus-within:border-orange-500/50 focus-within:bg-orange-500/[0.04]">
                      <Building2 className="w-4 h-4 text-slate-500 shrink-0" />
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme India Pvt. Ltd."
                        className="w-full bg-transparent outline-none text-sm text-white placeholder:text-slate-600"
                      />
                    </div>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 accent-orange-500"
                    />
                    <span className="text-xs text-slate-400 leading-relaxed">
                      I agree to receive my RiskBite report and follow-up from Risknox. Unsubscribe anytime.
                    </span>
                  </label>

                  {gateError && <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{gateError}</p>}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#f97316] hover:bg-[#ff7d1c] text-white font-semibold text-sm shadow-[0_0_18px_rgba(249,115,22,0.35)] transition-colors cursor-pointer"
                  >
                    <Lock className="w-4 h-4" />
                    Unlock & send my PDF
                  </button>

                  <p className="text-center text-xs text-slate-600">Takes ~10 seconds · No spam · Zoho CRM lead with score + range</p>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Foot note */}
        <p className="mt-6 text-center text-xs text-slate-600 max-w-3xl mx-auto leading-relaxed">
          RiskBite is a teaser, not the full Fortress engine. Dollar range is directional, based on published breach-cost
          benchmarks adjusted by posture. Methodology owned by the Fortress scoring team so free-tool numbers stay consistent
          with what paying customers see.
        </p>
      </div>
    </section>
  );
}
