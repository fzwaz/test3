"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/reveal";

const PAIRS = [
  { old: "Find vulnerability", next: "Discover exposure" },
  { old: "Generate alert", next: "Understand risk" },
  { old: "Assign severity", next: "Quantify impact" },
  { old: "What does it mean for the business?", next: "Know what to do next" },
];

export default function GapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const spineFillRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Spine draws itself as you scroll through the pairs
      gsap.fromTo(
        spineFillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: bodyRef.current,
            start: "top 75%",
            end: "bottom 55%",
            scrub: 1,
          },
        },
      );
      // Each pair rises in; its node pops onto the spine
      rowsRef.current.forEach((row) => {
        if (!row) return;
        gsap.fromTo(
          row,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
        const node = row.querySelector(".gap-node");
        if (node) {
          gsap.fromTo(
            node,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.5,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-5 md:py-8 px-4 sm:px-6 lg:px-8 bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200">
      {/* Outer chamfered container — same shell as the rest of the page */}
      <div className="relative max-w-[1240px] mx-auto p-[1px] bg-[#1e1e22] [clip-path:polygon(0_28px,28px_0,calc(100%-28px)_0,100%_28px,100%_calc(100%-28px),calc(100%-28px)_100%,28px_100%,0_calc(100%-28px))] shadow-[0_0_60px_rgba(0,0,0,0.95)]">
        <div className="relative w-full bg-[#000000] [clip-path:polygon(0_28px,28px_0,calc(100%-28px)_0,100%_28px,100%_calc(100%-28px),calc(100%-28px)_100%,28px_100%,0_calc(100%-28px))] p-4 sm:p-6 md:p-7 lg:p-8 overflow-hidden">

          {/* Dot field — top right, like sibling sections */}
          <div
            className="absolute top-0 right-0 w-72 h-56 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #4b5563 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
              maskImage:
                "linear-gradient(to bottom left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 45%, transparent 80%)",
              WebkitMaskImage:
                "linear-gradient(to bottom left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 45%, transparent 80%)",
            }}
          />

          {/* ── Header ── */}
          <Reveal>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 pb-5 md:pb-6">
              <div className="flex-1 max-w-xl">
                <span className="block text-[#ff5500] font-bold text-[12px] sm:text-[13px] tracking-[0.18em] uppercase mb-2.5 font-sans">
                  THE GAP
                </span>
                <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold text-white tracking-tight leading-[1.18]">
                  <span className="block">Every dead end has</span>
                  <span className="block mt-0.5">
                    an <span className="text-[#ff5500]">answer.</span>
                  </span>
                </h2>
              </div>

              <div className="hidden md:block w-[1px] h-14 bg-[#27272a] shrink-0 self-center" />

              <div className="flex-1 max-w-sm text-sm sm:text-[15px] text-[#a1a1aa] font-normal leading-relaxed">
                <p>
                  Traditional tools stop at identifying issues.{" "}
                  <span className="text-[#d4d4d8]">
                    Follow the line — each old step meets its Risknox answer.
                  </span>
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── Gap bridge ── */}
          <div ref={bodyRef} className="relative z-10 max-w-3xl mx-auto pt-2 pb-2">
            {/* Spine */}
            <div className="absolute top-3 bottom-3 left-[15px] md:left-1/2 md:-translate-x-1/2 w-px bg-[#222226] pointer-events-none">
              <div
                ref={spineFillRef}
                className="absolute inset-0 origin-top bg-gradient-to-b from-[#ff5500] to-[#ff7733] shadow-[0_0_12px_rgba(255,85,0,0.7)] will-change-transform"
              />
            </div>

            {PAIRS.map((pair, i) => (
              <div
                key={pair.old}
                ref={(el) => {
                  rowsRef.current[i] = el;
                }}
                className="relative grid md:grid-cols-2 gap-3 md:gap-14 pl-10 md:pl-0 pb-8 last:pb-0 will-change-transform"
              >
                {/* Node on the spine */}
                <span className="gap-node absolute left-[15px] md:left-1/2 top-5 -translate-x-1/2 flex items-center justify-center w-3.5 h-3.5 rounded-full bg-black border border-[#ff5500] shadow-[0_0_10px_rgba(255,85,0,0.8)] will-change-transform">
                  <span className="w-1 h-1 rounded-full bg-[#ff5500]" />
                </span>

                {/* LEFT: the old way */}
                <div className="flex items-center gap-3 md:flex-row-reverse md:text-right">
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-[#52525b] shrink-0" />
                  <span
                    className={`text-sm sm:text-[15px] ${
                      i === PAIRS.length - 1 ? "text-[#63636b] italic" : "text-[#71717a]"
                    }`}
                  >
                    {pair.old}
                  </span>
                </div>

                {/* RIGHT: the Risknox answer */}
                <div className="relative p-[1px] bg-[#3a1c0d] [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]">
                  <div className="flex items-center gap-3 bg-[#0c0705] [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] px-4 py-3.5">
                    <span className="text-xs font-mono font-bold text-[#ff5500] shrink-0 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm sm:text-[15px] font-medium text-white">
                      {pair.next}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom strip ── */}
          <Reveal delay={0.1}>
            <div className="relative z-10 mt-6 flex items-center justify-center gap-3 pt-4 border-t border-[#1a1a1e]">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#ff5500] shrink-0 shadow-[0_0_8px_rgba(255,85,0,0.8)]" />
              <p className="text-xs sm:text-[13px] text-[#a1a1aa] text-center">
                Four dead ends.{" "}
                <span className="text-white font-medium">Four answers. One line between them.</span>
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
