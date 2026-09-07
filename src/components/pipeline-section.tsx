"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    title: "Quantify — Fortress",
    description:
      "Turn cyber exposure into financial impact with risk intelligence your leadership and board can understand and act on.",
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
        <path d="M120 120 L195 155 L120 190 L45 155 Z" fill="#0f1117" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <path d="M45 155 L120 190 V198 L45 163 Z" fill="#090a0d" />
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
];

export default function PipelineSection() {
  const [activeStep, setActiveStep] = useState<string>("01");
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);
  const isManualScrolling = useRef<boolean>(false);

  // GSAP refs
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const graphicRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Active step via scroll (fallback, GSAP also updates)
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
      // also consider feedback loop
      const feedbackEl = feedbackRef.current;
      if (feedbackEl) {
        const rect = feedbackEl.getBoundingClientRect();
        const c = rect.top + rect.height / 2;
        const d = Math.abs(c - middleThreshold);
        if (d < minDistance) {
          // keep last step highlighted when feedback in view
          closestStep = pipelineSteps[pipelineSteps.length - 1].id;
        }
      }
      setActiveStep(closestStep);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Scroll storytelling
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ——— Intro: left sticky storytelling header ———
      // indicator dash
      if (indicatorRef.current) {
        gsap.fromTo(
          indicatorRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leftRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // headline word by word reveal
      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll(".gsap-line");
        gsap.fromTo(
          lines,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leftRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
        // subtle orange accent glow pulse on last line
        const accent = headlineRef.current.querySelector(".gsap-accent");
        if (accent) {
          gsap.fromTo(
            accent,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: 0.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: leftRef.current,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftRef.current,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (navRef.current) {
        const navLabel = navRef.current.querySelector(".gsap-nav-label");
        const navPills = navRef.current.querySelectorAll(".gsap-nav-pill");
        if (navLabel) {
          gsap.fromTo(
            navLabel,
            { opacity: 0, y: 8 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              scrollTrigger: {
                trigger: navRef.current,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
        gsap.fromTo(
          navPills,
          { y: 12, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.07,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: navRef.current,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ——— Timeline progress: draw line as you scroll through cards ———
      if (progressRef.current && cardsContainerRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 70%",
              end: "bottom 45%",
              scrub: 0.6,
            },
          }
        );
      }

      // ——— Each pipeline card: scroll-based story beat ———
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const dot = dotRefs.current[i];
        const graphic = graphicRefs.current[i];

        // Card entrance: parallax reveal + slight rotation
        gsap.fromTo(
          card,
          { y: 42, opacity: 0, rotateX: 4, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 58%",
              scrub: 0.7,
            },
          }
        );

        // Text cascade inside card
        const title = card.querySelectorAll(".gsap-card-title .gsap-word");
        const desc = card.querySelector(".gsap-card-desc");
        const cta = card.querySelector(".gsap-card-cta");
        const badge = card.querySelector(".gsap-card-badge");
        const stepNum = card.querySelector(".gsap-card-step");

        if (title.length) {
          gsap.fromTo(
            title,
            { yPercent: 110, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
        if (desc) {
          gsap.fromTo(
            desc,
            { y: 14, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
        if (cta) {
          gsap.fromTo(
            cta,
            { y: 12, opacity: 0, scale: 0.96 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.5,
              delay: 0.28,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
        if (badge) {
          gsap.fromTo(
            badge,
            { scale: 0.8, opacity: 0, rotate: -4 },
            {
              scale: 1,
              opacity: 1,
              rotate: 0,
              duration: 0.6,
              ease: "back.out(1.6)",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
        if (stepNum) {
          gsap.fromTo(
            stepNum,
            { x: -12, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Graphic parallax + subtle scale
        if (graphic) {
          gsap.fromTo(
            graphic,
            { y: 18, scale: 0.96, opacity: 0.85 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            }
          );
          // gentle float scrub as you scroll past
          gsap.to(graphic, {
            y: -10,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 60%",
              end: "bottom 30%",
              scrub: 1.2,
            },
          });
        }

        // Dot pulse + scale when card becomes active
        if (dot) {
          const pulse = dot.querySelector(".gsap-dot-pulse");
          const core = dot.querySelector(".gsap-dot-core");
          // entrance scale
          gsap.fromTo(
            dot,
            { scale: 0.6, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
          // active state scrub: when card is nearcenter, enlarge + glow
          ScrollTrigger.create({
            trigger: card,
            start: "top 65%",
            end: "bottom 45%",
            onEnter: () => {
              if (pulse) gsap.to(pulse, { scale: 1.6, opacity: 0.22, duration: 0.35, ease: "power2.out" });
              if (core) gsap.to(core, { scale: 1.25, boxShadow: "0 0 18px #f36734, 0 0 36px rgba(243,103,52,0.6)", duration: 0.35 });
              setActiveStep(pipelineSteps[i].id);
            },
            onEnterBack: () => {
              if (pulse) gsap.to(pulse, { scale: 1.6, opacity: 0.22, duration: 0.35 });
              if (core) gsap.to(core, { scale: 1.25, duration: 0.35 });
              setActiveStep(pipelineSteps[i].id);
            },
            onLeave: () => {
              if (pulse) gsap.to(pulse, { scale: 1, opacity: 0, duration: 0.35 });
              if (core) gsap.to(core, { scale: 1, boxShadow: "0 0 6px rgba(243,103,52,0.3)", duration: 0.35 });
            },
            onLeaveBack: () => {
              if (pulse) gsap.to(pulse, { scale: 1, opacity: 0, duration: 0.35 });
              if (core) gsap.to(core, { scale: 1, duration: 0.35 });
            },
          });
        }
      });

      // ——— Feedback loop card storytelling ———
      if (feedbackRef.current) {
        const fb = feedbackRef.current;
        const fbIcon = fb.querySelector(".gsap-fb-icon");
        const fbTitle = fb.querySelectorAll(".gsap-fb-title .gsap-word");
        const fbDesc = fb.querySelector(".gsap-fb-desc");
        const fbImage = fb.querySelector(".gsap-fb-image");

        gsap.fromTo(
          fb,
          { y: 30, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: fb,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
        if (fbIcon) {
          gsap.fromTo(
            fbIcon,
            { scale: 0.7, rotate: -12, opacity: 0 },
            {
              scale: 1,
              rotate: 0,
              opacity: 1,
              duration: 0.7,
              ease: "back.out(1.4)",
              scrollTrigger: { trigger: fb, start: "top 82%", toggleActions: "play none none reverse" },
            }
          );
          // slow orbit rotation scrub
          gsap.to(fbIcon, {
            rotate: 360,
            ease: "none",
            scrollTrigger: { trigger: fb, start: "top 80%", end: "bottom 20%", scrub: 1.5 },
          });
        }
        if (fbTitle.length) {
          gsap.fromTo(
            fbTitle,
            { yPercent: 110, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: { trigger: fb, start: "top 78%", toggleActions: "play none none reverse" },
            }
          );
        }
        if (fbDesc) {
          gsap.fromTo(
            fbDesc,
            { y: 14, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: 0.15,
              scrollTrigger: { trigger: fb, start: "top 75%", toggleActions: "play none none reverse" },
            }
          );
        }
        if (fbImage) {
          gsap.fromTo(
            fbImage,
            { x: 30, opacity: 0, scale: 0.98 },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: fb, start: "top 78%", toggleActions: "play none none reverse" },
            }
          );
          gsap.to(fbImage, {
            y: -8,
            ease: "none",
            scrollTrigger: { trigger: fb, start: "top 70%", end: "bottom 30%", scrub: 1 },
          });
        }

        // dot for feedback if present
        const fbDot = fb.querySelector(".gsap-fb-dot");
        if (fbDot) {
          gsap.fromTo(
            fbDot,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: "back.out(1.7)",
              scrollTrigger: { trigger: fb, start: "top 85%", toggleActions: "play none none reverse" },
            }
          );
        }
      }

      // refresh
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
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
      }, 900);
    }
  };

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-28 relative bg-black border-t border-white/[0.06] overflow-clip">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#f36734]/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#f36734]/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* ───────── Top Part: 2-Column (Sticky Left + Dynamic Cards Right) ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ───────── Left Column: Static / Sticky Headline & Copy ───────── */}
          <div ref={leftRef} className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6 text-left pt-2 z-20">
            {/* Top orange dash indicator */}
            <div ref={indicatorRef} className="w-10 h-1 bg-[#f36734] rounded-full shadow-[0_0_12px_rgba(243,103,52,0.8)] will-change-transform" />

            {/* Main Headline */}
            <h2 ref={headlineRef} className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.35rem] font-extrabold tracking-tight text-white leading-[1.08]">
              <span className="block overflow-hidden">
                <span className="gsap-line inline-block will-change-transform">From Raw Data to</span>
              </span>
              <span className="block overflow-hidden">
                <span className="gsap-line gsap-accent inline-block text-[#f36734] will-change-transform">Risk Intelligence</span>
              </span>
            </h2>

            {/* Subtitle */}
            <p ref={subtitleRef} className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-md will-change-transform">
              Risknox unifies telemetry, context, and analytics to deliver measurable cyber risk outcomes across your organization.
            </p>

            {/* Interactive Step Navigator (4 Steps) */}
            <div ref={navRef} className="hidden lg:flex flex-col gap-2 pt-6 border-t border-white/[0.08]">
              <div className="gsap-nav-label text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">
                Active Pipeline Stage
              </div>
              <div className="flex flex-wrap gap-2">
                {pipelineSteps.map((step) => {
                  const isActive = (hoveredStep || activeStep) === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => scrollToStep(step.id)}
                      className={`gsap-nav-pill px-3 py-1.5 rounded-lg text-xs font-medium font-mono transition-all flex items-center gap-1.5 cursor-pointer will-change-transform ${isActive
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
              <p className="text-[11px] text-slate-500 font-mono mt-2 hidden xl:block">Scroll to explore each stage → pipeline animates with you</p>
            </div>
          </div>

          {/* ───────── Right Column: Pipeline Step Cards ───────── */}
          <div className="lg:col-span-7 relative">
            {/* Timeline wrapper */}
            <div ref={cardsContainerRef} className="relative">
              {/* Background track */}
              <div className="absolute left-[16px] sm:left-[20px] top-[14px] bottom-[14px] w-px bg-white/[0.08] hidden sm:block" />
              {/* Glowing progress line — draws as you scroll */}
              <div
                ref={progressRef}
                className="absolute left-[16px] sm:left-[20px] top-[14px] bottom-[14px] w-px bg-gradient-to-b from-[#f36734]/0 via-[#f36734]/80 to-[#f36734] origin-top hidden sm:block will-change-transform"
                style={{ transformOrigin: "top center", transform: "scaleY(0)" }}
              />
              {/* Arrowhead at bottom of timeline */}
              <div className="absolute left-[16px] sm:left-[20px] bottom-0 -translate-x-1/2 translate-y-1 hidden sm:block z-20">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="drop-shadow-[0_0_8px_#f36734]">
                  <path d="M1 1 L5 6 L9 1" stroke="#f36734" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Cards */}
              <div className="space-y-12 sm:space-y-16 relative z-10">
                {pipelineSteps.map((step, idx) => {
                  const isHighlighted = (hoveredStep || activeStep) === step.id;

                  return (
                    <div key={step.id} id={`pipeline-step-${step.id}`} className="relative">
                      {/* ── Timeline Node Dot — perfectly centered on the line ── */}
                      <div
                        ref={(el) => {
                          dotRefs.current[idx] = el;
                        }}
                        className="absolute left-[16px] sm:left-[20px] top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center z-20 w-6 h-6 pointer-events-none will-change-transform"
                      >
                        {/* Outer pulse ring */}
                        <div
                          className={`gsap-dot-pulse absolute rounded-full transition-colors duration-300 ${isHighlighted ? "w-6 h-6 bg-[#f36734]/20" : "w-6 h-6 bg-transparent"
                            }`}
                          style={{ opacity: isHighlighted ? 0.18 : 0 }}
                        />
                        {/* Inner solid dot */}
                        <div
                          className={`gsap-dot-core rounded-full border-2 transition-all duration-300 ${isHighlighted
                            ? "w-[14px] h-[14px] bg-[#f36734] border-[#f36734] shadow-[0_0_14px_#f36734,0_0_28px_rgba(243,103,52,0.6)]"
                            : "w-[10px] h-[10px] bg-[#1a0a00] border-[#f36734]/60 shadow-[0_0_6px_rgba(243,103,52,0.3)]"
                            }`}
                        />
                      </div>

                      {/* ── Card ── */}
                      <div
                        ref={(el) => {
                          cardRefs.current[idx] = el;
                        }}
                        onMouseEnter={() => setHoveredStep(step.id)}
                        onMouseLeave={() => setHoveredStep(null)}
                        onClick={() => scrollToStep(step.id)}
                        className={`group relative ml-[36px] sm:ml-[48px] rounded-[24px] transition-all duration-500 cursor-pointer overflow-hidden p-6 sm:p-8 will-change-transform ${isHighlighted
                          ? "bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(243,103,52,0.16)] -translate-y-1 ring-1 ring-white/[0.06]"
                          : "bg-[#0a0a0a]/90 shadow-[0_12px_35px_rgba(0,0,0,0.7)] opacity-[0.9] hover:opacity-100 ring-1 ring-white/[0.04] hover:ring-white/[0.08]"
                          }`}
                        style={{ perspective: "800px" }}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-4 items-center">
                          {/* Left: Step Number + Radar Icon Badge */}
                          <div className="sm:col-span-3 flex flex-row sm:flex-col items-center sm:items-start justify-between sm:justify-center gap-4 sm:gap-6 flex-shrink-0">
                            <span className="gsap-card-step font-mono text-3xl sm:text-4xl font-extrabold text-[#f36734] tracking-tight leading-none will-change-transform">
                              {step.stepNumber}
                            </span>

                            {/* Concentric Radar Badge */}
                            <div ref={(el) => { graphicRefs.current[idx] = el; }} className="gsap-card-badge relative flex items-center justify-center will-change-transform">
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
                            <h3 className="gsap-card-title text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-orange-100 transition-colors overflow-hidden">
                              <span className="gsap-word inline-block overflow-hidden">
                                <span className="inline-block will-change-transform">{step.title.split(" — ")[0]}</span>
                              </span>
                              {step.title.includes(" — ") && (
                                <>
                                  <span className="gsap-word inline-block overflow-hidden">
                                    <span className="inline-block will-change-transform"> — {step.title.split(" — ")[1]}</span>
                                  </span>
                                </>
                              )}
                            </h3>
                            <p className="gsap-card-desc text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal will-change-transform">
                              {step.description}
                            </p>

                            {/* CTA Button */}
                            <div className="gsap-card-cta pt-1.5 will-change-transform">
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
                            <div className="gsap-graphic will-change-transform">
                              {step.renderGraphic()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ───────── Bottom: Continuous Feedback Loop Card — now part of the same timeline story ───────── */}
        <div ref={feedbackRef} className="w-full flex justify-center pt-10 sm:pt-14 relative">
          {/* Connector line from last dot to feedback card — draws on scroll */}
          <div className="absolute left-[16px] sm:left-[20px] lg:left-[calc((100%_/_12_*_5)_+_16px)] sm:lg:left-[calc((100%_/_12_*_5)_+_20px)] top-0 bottom-1/2 w-px bg-gradient-to-b from-[#f36734]/60 to-transparent hidden sm:block lg:hidden" />
          <div className="relative w-full max-w-[1080px] rounded-2xl md:rounded-[24px] bg-[#0a0a0a] border border-white/[0.06] pl-6 sm:pl-10 lg:pl-12 pr-0 pt-6 sm:pt-8 lg:pt-10 pb-0 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden ring-1 ring-[#f36734]/10 will-change-transform">
            {/* Left dot for feedback — aligned to same timeline X on mobile, centered on desktop via absolute */}
            <div className="gsap-fb-dot absolute left-[-6px] sm:left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#f36734] shadow-[0_0_10px_#f36734] hidden sm:flex will-change-transform" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative z-10">
              {/* Left side: Concentric Infinity Radar + Text */}
              <div className="flex items-center gap-5 sm:gap-7 flex-shrink-0 py-6 lg:py-8 pr-6 sm:pr-8 lg:pr-0">
                {/* Glowing Concentric Infinity Loop Icon */}
                <div className="gsap-fb-icon relative flex-shrink-0 flex items-center justify-center will-change-transform">
                  <div className="w-24 h-24 sm:w-[104px] sm:h-[104px] rounded-full border border-[#f36734]/30 flex items-center justify-center relative bg-black">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f36734]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f36734]" />
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#f36734] shadow-[0_0_8px_#f36734]" />
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#f36734]" />

                    <div className="w-[72px] h-[72px] sm:w-20 sm:h-20 rounded-full border border-[#f36734]/60 flex items-center justify-center shadow-[0_0_18px_rgba(243,103,52,0.4)] bg-black">
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

                {/* Title & Copy */}
                <div className="space-y-3 max-w-[380px] sm:max-w-[440px]">
                  <h3 className="gsap-fb-title text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight overflow-hidden">
                    <span className="gsap-word inline-block overflow-hidden">
                      <span className="inline-block will-change-transform">Continuous Feedback</span>
                    </span>{" "}
                    <span className="gsap-word inline-block overflow-hidden">
                      <span className="inline-block will-change-transform">Loop</span>
                    </span>
                  </h3>
                  <p className="gsap-fb-desc text-base sm:text-lg text-slate-300 font-normal leading-[1.6] will-change-transform">
                    Outcomes and telemetry feed back into Risknox to refine risk scores, improve accuracy, and drive continuous risk reduction.
                  </p>
                </div>
              </div>

              {/* Right side: feedbackloop image */}
              <div className="gsap-fb-image w-full lg:w-auto flex-1 flex items-end justify-end min-w-0 self-end m-0 p-0 will-change-transform">
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

        {/* Scroll hint */}
        <div className="flex justify-center pt-2 opacity-60">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-slate-500 uppercase">
            <span className="w-6 h-px bg-slate-600" />
            <span>Scroll to follow the pipeline</span>
            <span className="w-6 h-px bg-slate-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
