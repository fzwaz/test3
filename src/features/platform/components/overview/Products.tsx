"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

interface ProductData {
  id: string;
  name: string;
  tagline: string;
  audience: string;
  description: string;
  does: string[];
  flow: string;
  builtFor: string;
  href: string;
}

const PRODUCTS: ProductData[] = [
  {
    id: "01",
    name: "Pulse",
    tagline: "See everything. In real time.",
    audience: "For teams who need to see everything, in real time.",
    description:
      "Continuous security visibility across your environment — detect meaningful changes and focus on the signals that need attention.",
    does: ["24/7 security monitoring", "AI-driven anomaly detection", "Intelligent alerting", "Infrastructure visibility"],
    flow: "Monitor → Detect → Prioritise",
    builtFor: "Security & operations teams",
    href: "/platform/pulse",
  },
  {
    id: "02",
    name: "Fortress",
    tagline: "Risk in numbers.",
    audience: "For teams who need risk in numbers a board will act on.",
    description:
      "Translates technical cyber exposure into measurable business risk — understand potential impact and prioritise what matters most.",
    does: ["Quantifies cyber exposure", "Models business impact", "Maps threat intelligence", "Board-ready risk context"],
    flow: "Assess → Quantify → Prioritise",
    builtFor: "CISOs, risk leaders & executives",
    href: "/platform/fortress",
  },
  {
    id: "03",
    name: "Compass",
    tagline: "Intelligence for underwriting.",
    audience: "For insurers and brokers who need underwriting-grade risk data.",
    description:
      "Brings technical risk intelligence into underwriting — evaluate applicants and make more informed cyber insurance decisions.",
    does: ["Assesses applicant risk", "Builds exposure intelligence", "Supports underwriting decisions", "Ongoing risk visibility"],
    flow: "Assess → Evaluate → Underwrite",
    builtFor: "Insurers, underwriters, MGAs & brokers",
    href: "/platform/compass",
  },
  {
    id: "04",
    name: "Accord",
    tagline: "AI, governed.",
    audience: "For teams deploying AI who need to prove it's governed.",
    description:
      "Establish visibility, accountability, and structured governance across AI systems and use cases.",
    does: ["Maps AI systems & use cases", "EU AI Act alignment", "NIST AI RMF support", "Governance workflows"],
    flow: "Discover → Assess → Govern",
    builtFor: "AI, compliance, risk & tech teams",
    href: "/platform/accord",
  },
  {
    id: "05",
    name: "DMARC Monitoring",
    tagline: "Protect your domain.",
    audience: "For teams who need to stop their domain being spoofed.",
    description:
      "Understand who sends email as your domain, identify unauthorised sources, and strengthen authentication.",
    does: ["SPF monitoring", "DKIM monitoring", "DMARC monitoring", "Spoofing alerts & visibility"],
    flow: "Monitor → Identify → Enforce",
    builtFor: "Security, IT & email teams",
    href: "/platform/dmarc-monitoring",
  },
];

// ── Timeline segment lengths (mirrors homepage pipeline) ──
const SEG_HEADLINE = 1;
const SEG_PANEL_IN = 0.8;
const TRACK = 3;
const SEG_OUTRO = 0.5;
const CARDS_START = SEG_HEADLINE + SEG_PANEL_IN;
const TOTAL = CARDS_START + TRACK + SEG_OUTRO;

function ProductCardBody({ product, highlighted }: { product: ProductData; highlighted: boolean }) {
  const router = useRouter();
  const short = product.name === "DMARC Monitoring" ? "DMARC" : product.name;
  return (
    <div
      className={`group relative rounded-[24px] transition-all duration-500 overflow-hidden p-6 sm:p-8 lg:p-9 ${highlighted
        ? "bg-[#080808] shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(243,103,52,0.16)] ring-1 ring-white/[0.08]"
        : "bg-[#080808] shadow-[0_16px_45px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.05]"
        }`}
    >
      {/* Top eyebrow — like reference */}
      <p className="text-center text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#d98c5a] mb-7 sm:mb-9">
        {product.tagline}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Center: title, description & CTA */}
        <div className="lg:col-span-7 space-y-3.5 text-left">
          <h3 className="text-2xl sm:text-[28px] font-bold text-[#db7043] tracking-tight leading-none">
            {product.name}
          </h3>
          <p className="text-[14px] sm:text-[15px] text-[#a8adb7] leading-[1.65] max-w-[42ch]">
            {product.description}
          </p>
          <p className="text-[12px] font-mono text-[#6b7280] pt-1">
            {product.flow} <span className="text-white/20 mx-1">·</span> {product.builtFor}
          </p>
          <div className="pt-4">
            <LiquidMetalButton label={`Explore ${short}`} onClick={() => router.push(product.href)} />
          </div>
        </div>

        {/* Right: What it does */}
        <div className="lg:col-span-5 lg:pl-8 relative">
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-[#db7043]/30 -ml-4" aria-hidden />
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6b7280] mb-4">
            What it does
          </p>
          <ul className="space-y-3">
            {product.does.map((d) => (
              <li key={d} className="flex items-start gap-3 text-[14px] text-[#d1d5db] leading-snug">
                <span className="mt-[7px] w-2 h-2 rounded-full bg-[#e8a07a] shrink-0 shadow-[0_0_10px_rgba(232,160,122,0.9)]" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeId, setActiveId] = useState<string>("01");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
    if (!track || !win || track.children.length !== PRODUCTS.length) return;
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
    if (!tl || !st || m.centers.length !== PRODUCTS.length || m.winH === 0) return;
    const yStart = m.winH / 2 - m.centers[0];
    const yEnd = m.winH / 2 - m.centers[m.centers.length - 1];
    const yTarget = m.winH / 2 - m.centers[idx];
    const seg = Math.min(1, Math.max(0, (yStart - yTarget) / (yStart - yEnd || 1)));
    const targetTime = CARDS_START + seg * TRACK;
    const targetScroll = st.start + (targetTime / tl.duration()) * (st.end - st.start);
    gsap.to(window, { scrollTo: targetScroll, duration: 1.1, ease: "power2.inOut" });
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ── Desktop: pinned scroll story (same as homepage pipeline) ──
      mm.add("(min-width: 1024px)", () => {
        const headline = headlineRef.current;
        const storyUi = storyUiRef.current;
        const stage = cardsStageRef.current;
        const track = trackRef.current;
        const ghost = ghostRef.current;
        if (!headline || !storyUi || !stage || !track || !ghost) return;
        storyTl.current = null;
        activeIdxRef.current = 0;

        cacheCenters();
        const m0 = measureRef.current;
        if (m0.centers.length !== PRODUCTS.length || m0.winH === 0) return;

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
              if (t >= CARDS_START && m.centers.length === PRODUCTS.length && m.winH > 0) {
                seg = Math.min(1, Math.max(0, (t - CARDS_START) / TRACK));
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
                setActiveId(PRODUCTS[idx].id);
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

        tl.to(headline, {
          x: () => -(pinRef.current?.offsetWidth ?? window.innerWidth) * 0.27,
          scale: 0.88,
          duration: SEG_HEADLINE,
        });
        tl.to(storyUi, { opacity: 1, y: 0, duration: SEG_HEADLINE * 0.7 }, 0.25);
        tl.to(stage, { opacity: 1, x: 0, duration: SEG_PANEL_IN }, SEG_HEADLINE * 0.55);

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

        tl.fromTo(ghost, { y: 90 }, { y: -90, duration: TOTAL, ease: "none" }, 0);
        tl.to(headline, { y: -28, duration: TRACK + SEG_OUTRO, ease: "none" }, CARDS_START);

        tl.to({}, { duration: SEG_OUTRO });
      });

      // ── Mobile / tablet: normal flow, simple reveals ──
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
    PRODUCTS.findIndex((p) => p.id === (hoveredId || activeId)),
  );

  return (
    <section id="products" ref={sectionRef} className="w-full pt-20 md:pt-28 pb-12 md:pb-16 relative bg-black border-t border-white/[0.06] overflow-clip scroll-mt-20">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#f36734]/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#f36734]/[0.03] rounded-full blur-[180px] pointer-events-none" />

      {/* ══════════ PINNED SCROLL STORY (desktop) ══════════ */}
      <div ref={pinRef} className="hidden lg:block h-screen relative overflow-hidden">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center">
          {/* Ghost chapter numeral */}
          <div ref={ghostRef} className="pointer-events-none absolute right-0 xl:right-10 top-1/2 select-none will-change-transform">
            <div
              key={activeIdx}
              className="animate-heroSlideIn text-[13rem] xl:text-[17rem] font-extrabold leading-none tracking-tighter text-white/[0.045] tabular-nums"
            >
              {String(activeIdx + 1).padStart(2, "0")}
            </div>
          </div>
          {/* Headline: starts centered, slides left, stays sticky */}
          <div ref={headlineRef} className="relative z-10 w-full max-w-[880px] mx-auto text-center will-change-transform">
            <div className="w-10 h-1 bg-[#f36734] rounded-full shadow-[0_0_12px_rgba(243,103,52,0.8)] mx-auto" />

            <h2 className="mt-6 text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              <span className="block overflow-hidden">
                <span className="inline-block">Five specialised products.</span>
              </span>
              <span className="block overflow-hidden">
                <span className="inline-block text-[#f36734]">One connected approach.</span>
              </span>
            </h2>

            <p className="mt-5 text-base text-slate-400 font-normal leading-relaxed max-w-xl mx-auto">
              Each product solves a specific risk problem. Scroll to meet each one — then dive into its dedicated page.
            </p>

            {/* Sticky-left UI: navigator + progress */}
            <div ref={storyUiRef} className="mt-8 will-change-transform">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                Active Product
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {PRODUCTS.map((p, i) => {
                  const isActive = (hoveredId || activeId) === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => scrollToStep(i)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono transition-all flex items-center gap-1.5 cursor-pointer ${isActive
                        ? "bg-[#f36734]/20 text-[#f36734] border border-[#f36734]/50 shadow-[0_0_15px_rgba(243,103,52,0.25)] scale-105"
                        : "bg-white/[0.02] text-slate-500 border border-white/[0.05] hover:text-slate-300 hover:border-white/[0.12]"
                        }`}
                    >
                      <span>{p.id}</span>
                      <span>{p.name === "DMARC Monitoring" ? "DMARC" : p.name}</span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 max-w-sm mx-auto">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2">
                  <span>
                    {String(activeIdx + 1).padStart(2, "0")} / {String(PRODUCTS.length).padStart(2, "0")}
                  </span>
                  <span>{PRODUCTS[activeIdx]?.name}</span>
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

          {/* Vertical card window on the right */}
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
                Product {String(activeIdx + 1).padStart(2, "0")} — {PRODUCTS[activeIdx]?.name}
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
              {PRODUCTS.map((p) => {
                const isHighlighted = (hoveredId || activeId) === p.id;
                return (
                  <div
                    key={p.id}
                    onMouseEnter={() => setHoveredId(p.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <ProductCardBody product={p} highlighted={isHighlighted} />
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
            Five specialised products. <span className="text-[#f36734]">One connected approach.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed max-w-md mx-auto">
            Each product solves a specific risk problem. Scroll to meet each one — then dive into its dedicated page.
          </p>
        </div>
        <div className="space-y-8">
          {PRODUCTS.map((p) => {
            const isHighlighted = (hoveredId || activeId) === p.id;
            return (
              <div
                key={p.id}
                ref={(el) => {
                  const idx = PRODUCTS.findIndex((x) => x.id === p.id);
                  mobileCardRefs.current[idx] = el;
                }}
                className="will-change-transform"
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <ProductCardBody product={p} highlighted={isHighlighted} />
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
