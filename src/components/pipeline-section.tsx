"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

interface StepData {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  stageName: string;
  kicker: string;
  renderGraphic: () => React.ReactNode;
  renderIcon: () => React.ReactNode;
}

const pipelineSteps: StepData[] = [
  {
    id: "01",
    stepNumber: "",
    stageName: "Pulse",
    kicker: "See everything, as it happens",
    title: "Monitor — Pulse",
    description:
      "Continuous AI monitoring, anomaly detection, and actionable alerts across your cyber environment.",
    ctaText: "Explore Pulse",
    ctaLink: "#pulse",
    renderIcon: () => (
      <svg viewBox="0 0 32 32" className="w-6 h-6 drop-shadow-[0_0_8px_rgba(243,103,52,0.8)]" fill="none">
        <rect x="7" y="5" width="2.5" height="2.5" rx="0.5" fill="#ffffff" />
        <rect x="14.5" y="8" width="2.5" height="2.5" rx="0.5" fill="#f36734" />
        <rect x="22" y="5" width="2.5" height="2.5" rx="0.5" fill="#ffffff" />
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
    kicker: "From signals to dollar impact",
    title: "Quantify — Fortress",
    description:
      "Translate cyber exposure into dollar impact your leadership and board can act on.",
    ctaText: "Explore Fortress",
    ctaLink: "#fortress",
    renderIcon: () => (
      <svg viewBox="0 0 40 40" className="w-7 h-7 drop-shadow-[0_0_8px_rgba(243,103,52,0.8)]" fill="none">
        <path d="M10 16 V10 H16" stroke="#f36734" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M30 16 V10 H24" stroke="#f36734" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M10 24 V30 H16" stroke="#f36734" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M30 24 V30 H24" stroke="#f36734" strokeWidth="2.4" strokeLinecap="round" />
        <rect x="17" y="17" width="6" height="6" rx="1" fill="#f36734" />
      </svg>
    ),
    renderGraphic: () => (
      <svg viewBox="0 0 240 200" className="w-full max-w-[210px] sm:max-w-[240px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]" fill="none">
        <path d="M120 120 L195 155 L120 190 L45 155 Z" fill="#0f1117" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <path d="M45 155 L120 190 V198 L45 163 Z" fill="#090a0d" />
        <path d="M195 155 L120 190 V198 L195 163 Z" fill="#07080a" />
        <path d="M75 140 L120 125 L165 140" stroke="#f36734" strokeWidth="1.8" strokeDasharray="3 3" />
        <path d="M120 125 L120 90" stroke="#f36734" strokeWidth="2" />
        <path d="M65 135 L75 130 L85 135 L75 140 Z" fill="#2d3139" />
        <path d="M65 135 L75 140 V148 L65 143 Z" fill="#1b1d22" />
        <path d="M85 135 L75 140 V148 L85 143 Z" fill="#15171b" />
        <path d="M155 135 L165 130 L175 135 L165 140 Z" fill="#2d3139" />
        <path d="M155 135 L165 140 V148 L155 143 Z" fill="#1b1d22" />
        <path d="M175 135 L165 140 V148 L175 143 Z" fill="#15171b" />
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
    kicker: "Underwrite with confidence",
    title: "Underwrite — Compass",
    description:
      "Turn technical risk signals into underwriting-grade intelligence for faster premium decisions.",
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
        <path d="M120 120 L195 155 L120 190 L45 155 Z" fill="#0f1117" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <path d="M45 155 L120 190 V198 L45 163 Z" fill="#090a0d" />
        <path d="M195 155 L120 190 V198 L195 163 Z" fill="#07080a" />
        <path d="M90 60 L160 30 L160 120 L90 150 Z" fill="#13151c" stroke="#f36734" strokeWidth="1.5" strokeOpacity="0.7" />
        <text x="96" y="95" fill="#f36734" fontSize="15" fontWeight="bold" fontFamily="monospace" transform="skewY(-18)">
          $2.45M
        </text>
        <rect x="96" y="112" width="6" height="18" rx="1" fill="#f36734" transform="skewY(-18)" />
        <rect x="106" y="106" width="6" height="24" rx="1" fill="#ff8559" transform="skewY(-18)" />
        <rect x="116" y="98" width="6" height="32" rx="1" fill="#ffffff" transform="skewY(-18)" />
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
    kicker: "Govern what you deploy",
    title: "Govern — Accord",
    description:
      "Unify AI governance, compliance, and insurability with automated workflows.",
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
        <path d="M120 120 L195 155 L120 190 L45 155 Z" fill="#0f1117" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <path d="M45 155 L120 190 V198 L45 163 Z" fill="#07080a" />
        <path d="M195 155 L120 190 V198 L195 163 Z" fill="#07080a" />
        <path d="M80 65 L130 40 L130 130 L80 155 Z" fill="#1a1d26" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
        <text x="86" y="85" fill="#e2e8f0" fontSize="10" fontWeight="bold" transform="skewY(-18)">
          ISO 27001
        </text>
        <text x="86" y="105" fill="#94a3b8" fontSize="9" transform="skewY(-18)">
          SEBI-CSCRF
        </text>
        <g>
          <circle cx="160" cy="135" r="18" fill="#0c0d12" stroke="#f36734" strokeWidth="2" />
          <path d="M152 135 L157 140 L168 129" stroke="#f36734" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    ),
  },
  {
    id: "05",
    stepNumber: "",
    stageName: "DMARC",
    kicker: "Stop domain spoofing",
    title: "Monitor — DMARC",
    description:
      "Continuous SPF/DKIM/DMARC monitoring and domain spoofing alerts.",
    ctaText: "Explore DMARC",
    ctaLink: "#dmarc",
    renderIcon: () => (
      <svg viewBox="0 0 40 40" className="w-7 h-7 drop-shadow-[0_0_8px_rgba(243,103,52,0.8)]" fill="none">
        <circle cx="20" cy="20" r="12" stroke="#f36734" strokeWidth="2.4" fill="none" />
        <path d="M20 12 L26 20 L20 28 L14 20 Z" fill="#f36734" opacity="0.3" />
        <path d="M20 16 L24 20 L20 24 L16 20 Z" fill="#f36734" />
      </svg>
    ),
    renderGraphic: () => (
      <svg viewBox="0 0 240 200" className="w-full max-w-[180px] sm:max-w-[200px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]" fill="none">
        {/* Isometric base platform */}
        <path d="M120 130 L185 160 L120 190 L55 160 Z" fill="#0f1117" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <path d="M55 160 L120 190 V196 L55 166 Z" fill="#090a0d" />
        <path d="M185 160 L120 190 V196 L185 166 Z" fill="#07080a" />
        {/* Envelope body — isometric front face */}
        <path d="M88 75 L88 128 L152 128 L152 75 Z" fill="#13151c" stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" />
        {/* Envelope flap */}
        <path d="M88 75 L120 100 L152 75 Z" fill="#1a1d28" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Envelope V-crease lines */}
        <path d="M88 128 L120 105 L152 128" stroke="#f36734" strokeWidth="1.4" strokeOpacity="0.6" />
        {/* SPF / DKIM / DMARC labels */}
        <rect x="96" y="108" width="18" height="10" rx="2" fill="#f36734" fillOpacity="0.15" stroke="#f36734" strokeWidth="1" strokeOpacity="0.7" />
        <text x="105" y="116" fill="#f36734" fontSize="5.5" fontWeight="bold" textAnchor="middle">SPF</text>
        <rect x="117" y="108" width="22" height="10" rx="2" fill="#f36734" fillOpacity="0.15" stroke="#f36734" strokeWidth="1" strokeOpacity="0.7" />
        <text x="128" y="116" fill="#f36734" fontSize="5.5" fontWeight="bold" textAnchor="middle">DKIM</text>
        <rect x="142" y="108" width="24" height="10" rx="2" fill="#f36734" fillOpacity="0.15" stroke="#f36734" strokeWidth="1" strokeOpacity="0.7" />
        <text x="154" y="116" fill="#f36734" fontSize="5.5" fontWeight="bold" textAnchor="middle">DMARC</text>
        {/* Shield badge — bottom right */}
        <circle cx="168" cy="142" r="15" fill="#0c0d12" stroke="#f36734" strokeWidth="1.8" />
        <path d="M168 134 L175 137 V144 C175 149 171.5 152 168 154 C164.5 152 161 149 161 144 V137 Z" fill="rgba(243,103,52,0.15)" stroke="#f36734" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M164 143 L167 146 L173 140" stroke="#f36734" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

// ── Timeline segment lengths (seconds in scrub timeline) ──
const SEG_HEADLINE = 1; // Stage 2: center → left
const SEG_PANEL_IN = 0.8; // Stage 2: cards window reveals
const TRACK = 3; // Stage 3: vertical card track travel
const SEG_OUTRO = 0.5; // Stage 4: hold before release
const CARDS_START = SEG_HEADLINE + SEG_PANEL_IN;
const TOTAL = CARDS_START + TRACK + SEG_OUTRO;

function StepCardBody({ step, highlighted }: { step: StepData; highlighted: boolean }) {
  const [verb, name] = step.title.includes(" — ")
    ? step.title.split(" — ")
    : [step.title, ""];
  return (
    <div
      className={`group relative rounded-[24px] transition-all duration-500 overflow-hidden p-6 sm:p-8 ${highlighted
        ? "bg-black shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(243,103,52,0.16)] ring-1 ring-white/[0.06]"
        : "bg-black shadow-[0_12px_35px_rgba(0,0,0,0.7)] ring-1 ring-white/[0.04]"
        }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-4 items-center">
          {/* Left: Radar Icon Badge + Step Number */}
          <div className="sm:col-span-3 flex flex-col items-center sm:items-start justify-center gap-4 sm:gap-6 flex-shrink-0">
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
          <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#f36734] tracking-tight leading-none">
            {step.id}
          </span>
        </div>

                          {/* Center: Title, Description & CTA Button */}
                          <div className="sm:col-span-5 space-y-3.5 text-left">
                            <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.18em] text-[#f36734]/90 whitespace-nowrap">
                              {step.kicker}
                            </p>
                            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-orange-100 transition-colors">
            {verb}
            {name ? <span className="text-[#f36734]"> — {name}</span> : null}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal">
            {step.description}
          </p>
          <div className="pt-1.5" onClick={(e) => e.stopPropagation()}>
            <LiquidMetalButton
              label={step.ctaText}
              onClick={() => {
                window.location.hash = step.ctaLink;
              }}
            />
          </div>
        </div>

        {/* Right: Graphic */}
        <div className="sm:col-span-4 flex items-center justify-center sm:justify-end">
          {step.renderGraphic()}
        </div>
      </div>
    </div>
  );
}

export default function PipelineSection() {
  const [activeStep, setActiveStep] = useState<string>("01");
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  // GSAP refs
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const storyUiRef = useRef<HTMLDivElement>(null);
  const cardsStageRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const spineFillRef = useRef<HTMLDivElement>(null);
  const spineDotRef = useRef<HTMLDivElement>(null);
  const mobileHeadlineRef = useRef<HTMLDivElement>(null);

  const trackRef = useRef<HTMLDivElement>(null);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const storyTl = useRef<gsap.core.Timeline | null>(null);
  const activeIdxRef = useRef(0);
  const measureRef = useRef<{ centers: number[]; winH: number }>({ centers: [], winH: 0 });

  const cacheCenters = () => {
    const track = trackRef.current;
    const win = cardsStageRef.current;
    if (!track || !win || track.children.length !== pipelineSteps.length) return;
    const kids = Array.from(track.children) as HTMLElement[];
    measureRef.current = {
      centers: kids.map((k) => k.offsetTop + k.offsetHeight / 2),
      winH: win.clientHeight,
    };
  };

  const scrollToStep = (idx: number) => {
    const tl = storyTl.current;
    const st = tl?.scrollTrigger;
    const m = measureRef.current;
    if (!tl || !st || m.centers.length !== pipelineSteps.length || m.winH === 0) return;
    const yStart = m.winH / 2 - m.centers[0];
    const yEnd = m.winH / 2 - m.centers[m.centers.length - 1];
    const yTarget = m.winH / 2 - m.centers[idx];
    const seg = Math.min(1, Math.max(0, (yStart - yTarget) / (yStart - yEnd || 1)));
    const targetTime = CARDS_START + seg * TRACK;
    const targetScroll = st.start + (targetTime / tl.duration()) * (st.end - st.start);
    gsap.to(window, { scrollTo: targetScroll, duration: 1.1, ease: "power2.inOut" });
  };

  // GSAP Scroll storytelling
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ── Desktop: pinned 4-stage scroll story ──
      mm.add("(min-width: 1024px)", () => {
        const headline = headlineRef.current;
        const storyUi = storyUiRef.current;
        const stage = cardsStageRef.current;
        const track = trackRef.current;
        const ghost = ghostRef.current;
        if (!headline || !storyUi || !stage || !track || !ghost) return;
        storyTl.current = null;
        activeIdxRef.current = 0;

        // Measure card centers so the track can travel exactly first → last
        cacheCenters();
        const m0 = measureRef.current;
        if (m0.centers.length !== pipelineSteps.length || m0.winH === 0) return;

        // Base states
        gsap.set(headline, { x: 0, scale: 1.04, transformOrigin: "center center" });
        gsap.set(storyUi, { opacity: 0, y: 24 });
        gsap.set(stage, { opacity: 0, x: 120 });
        gsap.set(track, { y: m0.winH / 2 - m0.centers[0] });
        gsap.set(ghost, { yPercent: -50 });

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: "+=500%",
            pin: true,
            scrub: 1.5,
            anticipatePin: 1,
            onUpdate: (self) => {
              const t = self.progress * TOTAL;
              const m = measureRef.current;
              let idx = 0;
              let seg = 0;
              if (t >= CARDS_START && m.centers.length === pipelineSteps.length && m.winH > 0) {
                seg = Math.min(1, Math.max(0, (t - CARDS_START) / TRACK));
                // Viewport center expressed in track coordinates
                const yStart = m.winH / 2 - m.centers[0];
                const yEnd = m.winH / 2 - m.centers[m.centers.length - 1];
                const center = m.winH / 2 - (yStart + seg * (yEnd - yStart));
                let best = Infinity;
                m.centers.forEach((c, i) => {
                  const d = Math.abs(c - center);
                  if (d < best) {
                    best = d;
                    idx = i;
                  }
                });
              }
              if (idx !== activeIdxRef.current) {
                activeIdxRef.current = idx;
                setActiveStep(pipelineSteps[idx].id);
              }
              if (progressFillRef.current) {
                progressFillRef.current.style.transform = `scaleX(${seg})`;
              }
              if (spineFillRef.current) {
                spineFillRef.current.style.transform = `scaleY(${seg})`;
              }
              if (spineDotRef.current) {
                spineDotRef.current.style.top = `${seg * 100}%`;
              }
            },
          },
        });
        storyTl.current = tl;

        // Stage 2 — headline: center → left, settle + shrink
        tl.to(headline, {
          x: () => -(pinRef.current?.offsetWidth ?? window.innerWidth) * 0.27,
          scale: 0.88,
          duration: SEG_HEADLINE,
        });
        // Stage 2 — sticky-left UI (pills / progress / counter) fades in
        tl.to(storyUi, { opacity: 1, y: 0, duration: SEG_HEADLINE * 0.7 }, 0.25);
        // Stage 2 — cards panel reveals from the right
        tl.to(stage, { opacity: 1, x: 0, duration: SEG_PANEL_IN }, SEG_HEADLINE * 0.55);

        // Stage 3 — storytelling: card track travels vertically (like normal
        // downward scrolling) while the headline stays stuck on the left
        tl.to(
          track,
          {
            y: () => {
              const m = measureRef.current;
              return m.winH / 2 - m.centers[m.centers.length - 1];
            },
            duration: TRACK,
            ease: "none",
          },
          CARDS_START,
        );

        // Cinematic depth: ghost numeral + headline drift across the whole story
        tl.fromTo(ghost, { y: 90 }, { y: -90, duration: TOTAL, ease: "none" }, 0);
        tl.to(headline, { y: -28, duration: TRACK + SEG_OUTRO, ease: "none" }, CARDS_START);

        // Stage 4 — hold; pin releases and the page continues normally
        tl.to({}, { duration: SEG_OUTRO });
      });

      // ── Mobile / tablet: headline + cards flow normally, simple reveals ──
      mm.add("(max-width: 1023px)", () => {
        if (mobileHeadlineRef.current) {
          gsap.fromTo(
            mobileHeadlineRef.current,
            { y: 34, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: mobileHeadlineRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
        mobileCardRefs.current.forEach((card) => {
          if (!card) return;
          gsap.fromTo(
            card,
            { y: 42, opacity: 0, scale: 0.98 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      });

      // refresh
      ScrollTrigger.refresh();
    }, sectionRef);

    const remeasure = () => {
      cacheCenters();
      ScrollTrigger.refresh();
    };
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(remeasure, 200);
    };
    window.addEventListener("load", remeasure);
    window.addEventListener("resize", onResize);
    if (document.fonts) {
      document.fonts.ready.then(() => remeasure()).catch(() => {});
    }

    return () => {
      window.removeEventListener("load", remeasure);
      window.removeEventListener("resize", onResize);
      if (resizeTimer) clearTimeout(resizeTimer);
      ctx.revert();
    };
  }, []);

  const activeIdx = Math.max(
    0,
    pipelineSteps.findIndex((s) => s.id === (hoveredStep || activeStep)),
  );

  return (
    <section ref={sectionRef} className="w-full pt-20 md:pt-28 pb-12 md:pb-16 relative bg-black border-t border-white/[0.06] overflow-clip">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#f36734]/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#f36734]/[0.03] rounded-full blur-[180px] pointer-events-none" />

      {/* ══════════ PINNED SCROLL STORY (desktop) ══════════ */}
      <div ref={pinRef} className="hidden lg:block h-screen relative overflow-hidden">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center">
          {/* Ghost chapter numeral (slow parallax layer) */}
          <div ref={ghostRef} className="pointer-events-none absolute right-0 xl:right-10 top-1/2 select-none will-change-transform">
            <div
              key={activeIdx}
              className="animate-heroSlideIn text-[13rem] xl:text-[17rem] font-extrabold leading-none tracking-tighter text-white/[0.045] tabular-nums"
            >
              {String(activeIdx + 1).padStart(2, "0")}
            </div>
          </div>
          {/* Stage 1 → 2 → 3: headline starts centered, slides left, stays sticky */}
          <div ref={headlineRef} className="relative z-10 w-full max-w-[880px] mx-auto text-center will-change-transform">
            {/* Top orange dash indicator */}
            <div className="w-10 h-1 bg-[#f36734] rounded-full shadow-[0_0_12px_rgba(243,103,52,0.8)] mx-auto" />

            {/* Main Headline */}
            <h2 className="mt-6 text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              <span className="block overflow-hidden">
                <span className="inline-block">From Raw Data to</span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block text-[#f36734]">Risk Intelligence</span>
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-5 text-base text-slate-400 font-normal leading-relaxed max-w-xl mx-auto">
              Risknox unifies telemetry, context, and analytics to deliver measurable cyber risk outcomes across your organization.
            </p>

            {/* Sticky-left UI: navigator + progress (reveals in Stage 2) */}
            <div ref={storyUiRef} className="mt-8 will-change-transform">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                Active Pipeline Stage
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {pipelineSteps.map((step, i) => {
                  const isActive = (hoveredStep || activeStep) === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => scrollToStep(i)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono transition-all flex items-center gap-1.5 cursor-pointer ${isActive
                        ? "bg-[#f36734]/20 text-[#f36734] border border-[#f36734]/50 shadow-[0_0_15px_rgba(243,103,52,0.25)] scale-105"
                        : "bg-white/[0.02] text-slate-500 border border-white/[0.05] hover:text-slate-300 hover:border-white/[0.12]"
                        }`}
                    >
                      <span>{step.id}</span>
                      <span>{step.stageName}</span>
                    </button>
                  );
                })}
              </div>
              {/* Progress: step counter + bar */}
              <div className="mt-5 max-w-sm mx-auto">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2">
                  <span>
                    {String(activeIdx + 1).padStart(2, "0")} / {String(pipelineSteps.length).padStart(2, "0")}
                  </span>
                  <span>{pipelineSteps[activeIdx]?.stageName}</span>
                </div>
                <div className="h-[3px] rounded-full bg-white/[0.08] overflow-hidden">
                  <div
                    ref={progressFillRef}
                    className="h-full w-full rounded-full bg-gradient-to-r from-[#f36734] to-[#ffb37a] shadow-[0_0_12px_rgba(243,103,52,0.8)] origin-left"
                    style={{ transform: "scaleX(0)" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stage 2 → 3: vertical card window on the right — cards travel
              downward through it like normal page scroll */}
          <div
            ref={cardsStageRef}
            className="absolute top-1/2 right-4 xl:right-8 w-[min(560px,46%)] h-[72vh] overflow-hidden will-change-transform"
            style={{ transform: "translateY(-50%)" }}
          >
            {/* Chapter label */}
            <div className="absolute -top-10 left-0 right-0 z-20 flex items-center gap-3 pointer-events-none">
              <span
                key={activeIdx}
                className="animate-heroSlideIn text-[11px] font-mono font-semibold uppercase tracking-[0.22em] text-[#f36734] whitespace-nowrap"
              >
                Chapter {String(activeIdx + 1).padStart(2, "0")} — {pipelineSteps[activeIdx]?.stageName}
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-[#f36734]/50 to-transparent" />
            </div>
            {/* Soft edge fades */}
            <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
            {/* Connecting progress spine */}
            <div className="absolute left-2 top-3 bottom-3 w-px bg-white/10 z-20 pointer-events-none">
              <div
                ref={spineFillRef}
                className="absolute inset-0 origin-top bg-gradient-to-b from-[#f36734] to-[#ffb37a] shadow-[0_0_12px_rgba(243,103,52,0.8)]"
                style={{ transform: "scaleY(0)" }}
              />
              <div
                ref={spineDotRef}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f36734] shadow-[0_0_10px_#f36734]"
                style={{ top: "0%" }}
              />
            </div>
            <div ref={trackRef} className="flex flex-col gap-[16vh] px-2 py-2 will-change-transform">
              {pipelineSteps.map((step) => {
                const isHighlighted = (hoveredStep || activeStep) === step.id;
                return (
                  <div
                    key={step.id}
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <StepCardBody step={step} highlighted={isHighlighted} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════ MOBILE / TABLET FALLBACK (no pin) ══════════ */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div ref={mobileHeadlineRef} className="text-center space-y-5 will-change-transform">
          <div className="w-10 h-1 bg-[#f36734] rounded-full shadow-[0_0_12px_rgba(243,103,52,0.8)] mx-auto" />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.08]">
            From Raw Data to <span className="text-[#f36734]">Risk Intelligence</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-md mx-auto">
            Risknox unifies telemetry, context, and analytics to deliver measurable cyber risk outcomes across your organization.
          </p>
        </div>
        <div className="space-y-8">
          {pipelineSteps.map((step) => {
            const isHighlighted = (hoveredStep || activeStep) === step.id;
            return (
              <div
                key={step.id}
                ref={(el) => {
                  const idx = pipelineSteps.findIndex((s) => s.id === step.id);
                  mobileCardRefs.current[idx] = el;
                }}
                className="will-change-transform"
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <StepCardBody step={step} highlighted={isHighlighted} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      </div>
    </section>
  );
}
