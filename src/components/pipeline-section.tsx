"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface StepData {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  stageName: string;
  renderGraphic: () => React.ReactNode;
  renderIcon: () => React.ReactNode;
}

const pipelineSteps: StepData[] = [
  {
    id: "01",
    stepNumber: "",
    stageName: "Pulse",
    title: "Monitor — Pulse",
    description:
      "See your cyber environment in real time with continuous AI-powered monitoring, anomaly detection, and actionable alerts.",
    ctaText: "Explore Pulse",
    ctaLink: "#pulse",
    renderIcon: () => (
      <svg viewBox="0 0 32 32" className="w-6 h-6 drop-shadow-[0_0_8px_rgba(243,103,52,0.8)]" fill="none">
        {/* Floating telemetry dots above funnel */}
        <rect x="7" y="5" width="2.5" height="2.5" rx="0.5" fill="#ffffff" />
        <rect x="14.5" y="8" width="2.5" height="2.5" rx="0.5" fill="#f36734" />
        <rect x="22" y="5" width="2.5" height="2.5" rx="0.5" fill="#ffffff" />
        {/* Funnel */}
        <path d="M6 13 H26 L17.5 21 V27 L14.5 27 V21 Z" stroke="#f36734" strokeWidth="2.2" strokeLinejoin="round" fill="rgba(243,103,52,0.1)" />
      </svg>
    ),
    renderGraphic: () => (
      <div className="relative w-[200px] sm:w-[230px] aspect-square flex items-center justify-center">
        <Image
          src="/funnel.png"
          alt="Monitor — Pulse Funnel"
          fill
          sizes="(max-width: 640px) 200px, 230px"
          className="object-contain"
          priority
        />
      </div>
    ),
  },
  {
    id: "02",
    stepNumber: "",
    stageName: "Fortress",
    title: "Quantify — Fortress",
    description:
      "Turn cyber exposure into financial impact with risk intelligence your leadership and board can understand and act on.",
    ctaText: "Explore Fortress",
    ctaLink: "#fortress",
    renderIcon: () => (
      <svg viewBox="0 0 40 40" className="w-7 h-7 drop-shadow-[0_0_8px_rgba(243,103,52,0.8)]" fill="none">
        {/* Targeting square bracket with center node */}
        <path d="M10 16 V10 H16" stroke="#f36734" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M30 16 V10 H24" stroke="#f36734" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M10 24 V30 H16" stroke="#f36734" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M30 24 V30 H24" stroke="#f36734" strokeWidth="2.4" strokeLinecap="round" />
        <rect x="17" y="17" width="6" height="6" rx="1" fill="#f36734" />
      </svg>
    ),
    renderGraphic: () => (
      <svg viewBox="0 0 240 200" className="w-full max-w-[210px] sm:max-w-[240px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]" fill="none">
        {/* Isometric dark base */}
        <path d="M120 120 L195 155 L120 190 L45 155 Z" fill="#0f1117" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <path d="M45 155 L120 190 V198 L45 163 Z" fill="#090a0d" />
        <path d="M195 155 L120 190 V198 L195 163 Z" fill="#07080a" />

        {/* Network connection lines on floor */}
        <path d="M75 140 L120 125 L165 140" stroke="#f36734" strokeWidth="1.8" strokeDasharray="3 3" />
        <path d="M120 125 L120 90" stroke="#f36734" strokeWidth="2" />

        {/* Connected Node Cubes */}
        <path d="M65 135 L75 130 L85 135 L75 140 Z" fill="#2d3139" />
        <path d="M65 135 L75 140 V148 L65 143 Z" fill="#1b1d22" />
        <path d="M85 135 L75 140 V148 L85 143 Z" fill="#15171b" />

        <path d="M155 135 L165 130 L175 135 L165 140 Z" fill="#2d3139" />
        <path d="M155 135 L165 140 V148 L155 143 Z" fill="#1b1d22" />
        <path d="M175 135 L165 140 V148 L175 143 Z" fill="#15171b" />

        {/* Center Illuminated Crown Jewel Cube */}
        <g>
          <path d="M100 80 L120 68 L140 80 L120 92 Z" fill="#ff9066" />
          <path d="M100 80 L120 92 V112 L100 100 Z" fill="#f36734" />
          <path d="M140 80 L120 92 V112 L140 100 Z" fill="#c44618" />
        </g>
      </svg>
    ),
  },
  {
    id: "03",
    stepNumber: "",
    stageName: "Compass",
    title: "Underwrite — Compass",
    description:
      "Transform technical risk signals into underwriting-grade intelligence for faster, smarter risk assessment and premium decisions.",
    ctaText: "Explore Compass",
    ctaLink: "#compass",
    renderIcon: () => (
      <svg viewBox="0 0 40 40" className="w-7 h-7 drop-shadow-[0_0_8px_rgba(243,103,52,0.8)]" fill="none">
        <path d="M20 8 V32" stroke="#f36734" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M26 14 C26 11.5 23.5 10 20 10 C16.5 10 14 11.5 14 14.5 C14 19 26 18 26 23 C26 26.5 23.5 28 20 28 C16.5 28 14 26 14 23.5" stroke="#f36734" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
    renderGraphic: () => (
      <svg viewBox="0 0 240 200" className="w-full max-w-[210px] sm:max-w-[240px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]" fill="none">
        {/* Isometric dark base */}
        <path d="M120 120 L195 155 L120 190 L45 155 Z" fill="#0f1117" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <path d="M45 155 L120 190 V198 L45 163 Z" fill="#090a0d" />
        <path d="M195 155 L120 190 V198 L195 163 Z" fill="#07080a" />

        {/* Standing Glassmorphic ROI Tablet with $2.45M Value */}
        <path d="M90 60 L160 30 L160 120 L90 150 Z" fill="#13151c" stroke="#f36734" strokeWidth="1.5" strokeOpacity="0.7" />
        <text x="96" y="95" fill="#f36734" fontSize="15" fontWeight="bold" fontFamily="monospace" transform="skewY(-18)">
          $2.45M
        </text>

        {/* Small trend bars */}
        <rect x="96" y="112" width="6" height="18" rx="1" fill="#f36734" transform="skewY(-18)" />
        <rect x="106" y="106" width="6" height="24" rx="1" fill="#ff8559" transform="skewY(-18)" />
        <rect x="116" y="98" width="6" height="32" rx="1" fill="#ffffff" transform="skewY(-18)" />

        {/* Glowing VaR Pillar in front */}
        <path d="M150 120 L165 112 L180 120 L165 128 Z" fill="#ff9066" />
        <path d="M150 120 L165 128 V150 L150 142 Z" fill="#f36734" />
        <path d="M180 120 L165 128 V150 L180 142 Z" fill="#c44618" />
      </svg>
    ),
  },
  {
    id: "04",
    stepNumber: "",
    stageName: "Accord",
    title: "Govern — Accord",
    description:
      "Bring AI governance, compliance, and insurability into one framework with automated workflows aligned to leading standards.",
    ctaText: "Explore Accord",
    ctaLink: "#accord",
    renderIcon: () => (
      <svg viewBox="0 0 40 40" className="w-7 h-7 drop-shadow-[0_0_8px_rgba(243,103,52,0.8)]" fill="none">
        <path d="M20 8 L32 13 V22 C32 29 27 34 20 36 C13 34 8 29 8 22 V13 Z" stroke="#f36734" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M15 22 L18 25 L25 18" stroke="#f36734" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    renderGraphic: () => (
      <svg viewBox="0 0 240 200" className="w-full max-w-[210px] sm:max-w-[240px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]" fill="none">
        {/* Isometric dark base */}
        <path d="M120 120 L195 155 L120 190 L45 155 Z" fill="#0f1117" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <path d="M45 155 L120 190 V198 L45 163 Z" fill="#090a0d" />
        <path d="M195 155 L120 190 V198 L195 163 Z" fill="#07080a" />

        {/* Isometric Audit Tablets (ISO 27001, SEBI-CSCRF) */}
        <path d="M80 65 L130 40 L130 130 L80 155 Z" fill="#1a1d26" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
        <text x="86" y="85" fill="#e2e8f0" fontSize="10" fontWeight="bold" transform="skewY(-18)">
          ISO 27001
        </text>
        <text x="86" y="105" fill="#94a3b8" fontSize="9" transform="skewY(-18)">
          SEBI-CSCRF
        </text>

        {/* Front Check Shield Emblem */}
        <g>
          <circle cx="160" cy="135" r="18" fill="#0c0d12" stroke="#f36734" strokeWidth="2" />
          <path d="M152 135 L157 140 L168 129" stroke="#f36734" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    ),
  },
];

export default function PipelineSection() {
  const [activeStep, setActiveStep] = useState<string>("01");
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);
  const isManualScrolling = useRef<boolean>(false);

  // Automatically detect which pipeline step card is in the middle of the viewport on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrolling.current) return;

      const middleThreshold = window.innerHeight * 0.45;
      let closestStep = pipelineSteps[0].id;
      let minDistance = Infinity;

      pipelineSteps.forEach((step) => {
        const el = document.getElementById(`pipeline-step-${step.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const distance = Math.abs(cardCenter - middleThreshold);
          if (distance < minDistance) {
            minDistance = distance;
            closestStep = step.id;
          }
        }
      });

      setActiveStep(closestStep);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial evaluation on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStep = (id: string) => {
    setActiveStep(id);
    const el = document.getElementById(`pipeline-step-${id}`);
    if (el) {
      isManualScrolling.current = true;
      const offset = 160;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        isManualScrolling.current = false;
      }, 700);
    }
  };

  return (
    <section className="w-full py-20 md:py-28 relative bg-black border-t border-white/[0.06]">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#f36734]/[0.04] rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#f36734]/[0.03] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* ───────── Top Part: 2-Column (Sticky Left + Dynamic Cards Right) ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ───────── Left Column: Static / Sticky Headline & Copy ───────── */}
          <div className="lg:col-span-5 sticky top-28 lg:top-32 self-start space-y-6 text-left pt-2 z-20">
            {/* Top orange dash indicator */}
            <div className="w-10 h-1 bg-[#f36734] rounded-full shadow-[0_0_12px_rgba(243,103,52,0.8)]" />

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.35rem] font-extrabold tracking-tight text-white leading-[1.1]">
              From Raw Data to <br />
              <span className="text-[#f36734]">Risk Intelligence</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-md">
              Risknox unifies telemetry, context, and analytics to deliver measurable cyber risk outcomes across your organization.
            </p>

            {/* Interactive Step Navigator (4 Steps) */}
            <div className="hidden lg:flex flex-col gap-2 pt-6 border-t border-white/[0.08]">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">
                Active Pipeline Stage
              </div>
              <div className="flex flex-wrap gap-2">
                {pipelineSteps.map((step) => {
                  const isActive = (hoveredStep || activeStep) === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => scrollToStep(step.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono transition-all flex items-center gap-1.5 cursor-pointer ${isActive
                        ? "bg-[#f36734]/20 text-[#f36734] border border-[#f36734]/50 shadow-[0_0_15px_rgba(243,103,52,0.25)] scale-105"
                        : "bg-white/[0.02] text-slate-500 border border-white/[0.05] hover:text-slate-300 hover:border-white/[0.12]"
                        }`}
                    >
                      <span>{step.stepNumber}</span>
                      <span>{step.stageName}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ───────── Right Column: Pipeline Step Cards ───────── */}
          <div className="lg:col-span-7 relative">

            {/* ── Prominent Left Timeline Track reaching down to Feedback Loop card ── */}
            {/* Full-height glowing vertical line extending to the feedback loop card */}
            <div className="absolute left-0 top-0 -bottom-14 sm:-bottom-20 w-px z-0">
              {/* Line */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f36734]/70 to-[#f36734]" />
              {/* Bright centre glow */}
              <div className="absolute inset-0 blur-[2px] bg-gradient-to-b from-transparent via-[#f36734]/50 to-[#f36734]" />

              {/* Downward Arrowhead at the bottom of the timeline line */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 z-20">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="drop-shadow-[0_0_8px_#f36734]">
                  <path d="M1 1 L5 6 L9 1" stroke="#f36734" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Cards offset right so the timeline sits visibly to their left */}
            <div className="pl-8 sm:pl-10 space-y-16 sm:space-y-24 relative z-10">
              {pipelineSteps.map((step) => {
                const isHighlighted = (hoveredStep || activeStep) === step.id;

                return (
                  <div key={step.id} id={`pipeline-step-${step.id}`} className="relative">

                    {/* ── Timeline Node Dot (sits on the line, centred vertically to the card) ── */}
                    <div className="absolute -left-[2.25rem] sm:-left-10 top-1/2 -translate-y-1/2 flex items-center justify-center z-20">
                      {/* Outer pulse ring */}
                      <div
                        className={`absolute rounded-full transition-all duration-500 ${isHighlighted
                          ? "w-6 h-6 bg-[#f36734]/25 animate-ping"
                          : "w-0 h-0 opacity-0"
                          }`}
                      />
                      {/* Inner solid dot */}
                      <div
                        className={`rounded-full border-2 transition-all duration-300 ${isHighlighted
                          ? "w-3.5 h-3.5 bg-[#f36734] border-[#f36734] shadow-[0_0_14px_#f36734,0_0_28px_rgba(243,103,52,0.6)] scale-125"
                          : "w-2.5 h-2.5 bg-[#1a0a00] border-[#f36734]/50 shadow-[0_0_6px_rgba(243,103,52,0.3)] scale-100"
                          }`}
                      />
                    </div>

                    {/* ── Card (No border) ── */}
                    <div
                      onMouseEnter={() => setHoveredStep(step.id)}
                      onMouseLeave={() => setHoveredStep(null)}
                      onClick={() => scrollToStep(step.id)}
                      className={`group relative rounded-[24px] transition-all duration-500 cursor-pointer overflow-hidden p-6 sm:p-8 ${isHighlighted
                        ? "bg-black shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(243,103,52,0.18)] -translate-y-1 opacity-100"
                        : "bg-black/90 shadow-[0_12px_35px_rgba(0,0,0,0.7)] opacity-65 hover:opacity-100"
                        }`}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-4 items-center">

                        {/* Left: Step Number + Radar Icon Badge */}
                        <div className="sm:col-span-3 flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-center gap-4 sm:gap-6 flex-shrink-0">
                          <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#f36734] tracking-tight leading-none">
                            {step.stepNumber}
                          </span>

                          {/* Concentric Radar Badge */}
                          <div className="relative flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full border border-[#f36734]/25 flex items-center justify-center relative bg-[#0a0800] shadow-[0_0_18px_rgba(243,103,52,0.2)]">
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#f36734]/80" />
                              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 rounded-full bg-[#f36734]/80" />
                              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f36734] shadow-[0_0_6px_#f36734]" />
                              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#f36734]/80" />
                              <div className="w-11 h-11 rounded-full border border-[#f36734]/50 flex items-center justify-center bg-[#0e0c00]/90 shadow-[0_0_14px_rgba(243,103,52,0.35)]">
                                {step.renderIcon()}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Center: Title, Description & CTA Button */}
                        <div className="sm:col-span-5 space-y-3.5 text-left">
                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-orange-100 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal">
                            {step.description}
                          </p>

                          {/* CTA Button */}
                          <div className="pt-1.5">
                            <Link
                              href={step.ctaLink}
                              onClick={(e) => e.stopPropagation()}
                              className="group/btn relative inline-flex items-center justify-center px-4 py-2 bg-[#f36734] text-[#080808] rounded-[12px] sm:rounded-[14px] font-semibold text-xs sm:text-[13px] overflow-hidden shadow-[0_0_16px_rgba(243,103,52,0.3)] hover:shadow-[0_0_24px_rgba(243,103,52,0.5)] active:scale-[0.98] transition-all cursor-pointer"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out" />
                              <span className="relative z-10 font-bold">{step.ctaText}</span>
                              <ArrowRight className="relative z-10 ml-1.5 w-3.5 h-3.5 text-[#080808] group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>

                        {/* Right: 3D Graphic */}
                        <div className="sm:col-span-4 flex items-center justify-center sm:justify-end">
                          {step.renderGraphic()}
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ───────── Bottom Scaled: Continuous Feedback Loop Card ───────── */}
        <div className="w-full flex justify-center pt-14 sm:pt-20">
          <div className="relative w-full max-w-[1080px] rounded-2xl md:rounded-[24px] bg-black border-t border-[#f36734]/30 pl-6 sm:pl-10 lg:pl-12 pr-0 pt-6 sm:pt-8 lg:pt-10 pb-0 shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-all duration-300 overflow-hidden">

            {/* Far-left timeline node dot */}
            <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#f36734] shadow-[0_0_10px_#f36734]" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative z-10">

              {/* Left side: Concentric Infinity Radar + Text */}
              <div className="flex items-center gap-5 sm:gap-7 flex-shrink-0 py-6 lg:py-8 pr-6 sm:pr-8 lg:pr-0">

                {/* Glowing Concentric Infinity Loop Icon */}
                <div className="relative flex-shrink-0 flex items-center justify-center">
                  {/* Outer orbit circle with tick marks */}
                  <div className="w-24 h-24 sm:w-26 sm:h-26 rounded-full border border-[#f36734]/30 flex items-center justify-center relative bg-black">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f36734]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f36734]" />
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f36734] shadow-[0_0_8px_#f36734]" />
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f36734]" />

                    {/* Middle glowing orange ring */}
                    <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full border border-[#f36734]/60 flex items-center justify-center shadow-[0_0_18px_rgba(243,103,52,0.4)] bg-black">
                      {/* Infinity mark */}
                      <svg
                        viewBox="0 0 100 60"
                        className="w-11 h-6 sm:w-12 sm:h-7 drop-shadow-[0_0_9px_rgba(243,103,52,0.95)] bg-black"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30 14 C18 14 11 21 11 30 C11 39 18 46 30 46 C42 46 49 35 50 30 C51 25 58 14 70 14 C82 14 89 21 89 30 C89 39 82 46 70 46 C58 46 51 35 50 30 C49 25 42 14 30 14 Z"
                          stroke="#f36734"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Title & Copy — shifted up slightly */}
                <div className="space-y-3 max-w-[380px] sm:max-w-[440px] -translate-y-2 sm:-translate-y-3">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight">
                    Continuous Feedback Loop
                  </h3>
                  <p className="text-base sm:text-lg text-slate-300 font-normal leading-[1.6]">
                    Outcomes and telemetry feed back into Risknox to refine risk scores, improve accuracy, and drive continuous risk reduction.
                  </p>
                </div>

              </div>

              {/* Right side: feedbackloop.png with exact native 3:2 proportions, seamlessly blending into black background */}
              <div className="w-full lg:w-auto flex-1 flex items-end justify-end min-w-0 self-end m-0 p-0">
                <div className="relative w-full max-w-[620px] lg:max-w-[660px] aspect-[3/2] m-0 p-0">
                  <Image
                    src="/feedbackloop.png"
                    alt="Risknox Continuous Feedback Loop — Refined Risk Scores and Continuous Risk Reduction"
                    fill
                    sizes="(max-width: 1024px) 100vw, 660px"
                    className="object-contain object-right-bottom m-0 p-0"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
