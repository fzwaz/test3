"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InsurersSection from "./InsurersSection";
import EvaluationSection from "./EvaluationSection";

export default function PartnerStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const insurersWrapRef = useRef<HTMLDivElement>(null);
  const evaluationWrapRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const insurersCard = insurersWrapRef.current?.querySelector<HTMLElement>("[data-stack-card]");
      const evaluationCard = evaluationWrapRef.current?.querySelector<HTMLElement>("[data-stack-card]");
      if (!insurersCard || !evaluationWrapRef.current) return;

      // Insurers card: subtle scale + dim + lift as Evaluation scrolls over it
      gsap.fromTo(
        insurersCard,
        { scale: 1, y: 0, filter: "brightness(1)" },
        {
          scale: 0.96,
          y: -10,
          filter: "brightness(0.62)",
          ease: "none",
          scrollTrigger: {
            trigger: evaluationWrapRef.current,
            start: "top 92%",
            end: "top 42%",
            scrub: 0.8,
          },
        },
      );

      // Evaluation card: rise from below with soft fade
      if (evaluationCard) {
        gsap.fromTo(
          evaluationCard,
          { y: 56, opacity: 0.92 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: evaluationWrapRef.current,
              start: "top 92%",
              end: "top 58%",
              scrub: 0.8,
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Stack #1 — sticks to top while user scrolls */}
      <div
        ref={insurersWrapRef}
        className="sticky top-[72px] md:top-[88px] z-10 will-change-transform"
        style={{ contain: "layout style" }}
      >
        {/* inner tag so GSAP targets only the chamfered card, not the section padding */}
        <div data-stack-card className="will-change-transform">
          <InsurersSection />
        </div>
      </div>

      {/* Stack #2 — scrolls up and covers #1 */}
      <div
        ref={evaluationWrapRef}
        className="sticky top-[72px] md:top-[88px] z-20 will-change-transform"
      >
        <div data-stack-card className="will-change-transform shadow-[0_-20px_60px_rgba(0,0,0,0.9)]">
          <EvaluationSection />
        </div>
      </div>
    </div>
  );
}
