"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function WhyRisknoxHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle dust field — floating glowing orange embers/stars
    const particleCount = 140;
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      twinkleSpeed: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.6,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw floating glowing orange particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += Math.sin(Date.now() * p.twinkleSpeed) * 0.01;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const clampedOpacity = Math.max(0.1, Math.min(0.95, p.opacity));
        ctx.fillStyle = `rgba(249, 115, 22, ${clampedOpacity * 0.85})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra glow for larger particles
        if (p.size > 1.8) {
          ctx.fillStyle = `rgba(255, 140, 0, ${clampedOpacity * 0.3})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 overflow-hidden bg-[#000000]">
      {/* 1. Canvas Dynamic Background (Glowing Stardust Particles) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* 2. Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Page Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181109]/90 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_0_20px_rgba(249,115,22,0.2)] backdrop-blur-md mb-8 hover:border-orange-500/60 transition-colors">
          <div className="grid grid-cols-3 gap-1 w-3.5 h-2.5 items-center justify-center">
            <span className="w-1 h-1 rounded-[1px] bg-orange-400"></span>
            <span className="w-1 h-1 rounded-[1px] bg-orange-400"></span>
            <span className="w-1 h-1 rounded-[1px] bg-orange-400"></span>
            <span className="w-1 h-1 rounded-[1px] bg-orange-400"></span>
            <span className="w-1 h-1 rounded-[1px] bg-orange-400"></span>
            <span className="w-1 h-1 rounded-[1px] bg-orange-400"></span>
          </div>
          <span>WHY RISKNOX</span>
        </div>

        {/* Main Headline */}
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="w-full text-2xl sm:text-4xl md:text-5xl lg:text-[62px] xl:text-[68px] font-bold text-white tracking-tight leading-[1.1] text-center select-none">
            <span className="block sm:whitespace-nowrap">
              Most tools tell you what&apos;s wrong.
            </span>
            <span className="block mt-2 sm:whitespace-nowrap">
              Risknox tells you <span className="text-[#f97316]">what it costs.</span>
            </span>
          </h1>
        </div>

        {/* Supporting Text */}
        <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-[19px] text-slate-300 font-normal leading-relaxed text-center">
          Risknox connects cyber visibility, AI-powered intelligence, and
          insurance insight to turn technical exposure into informed decisions.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-xl">
          {/* Primary CTA: Explore the platform */}
          <Link
            href="/platform"
            className="group w-full sm:w-auto flex-1 inline-flex items-center justify-between sm:justify-center gap-4 px-6 py-4 rounded-xl bg-[#0e0e11]/80 hover:bg-[#1a1714] border border-orange-500/25 hover:border-orange-500 text-white font-medium text-base shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(249,115,22,0.12)] hover:shadow-[0_0_25px_rgba(249,115,22,0.35)] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
          >
            <span className="font-semibold text-white group-hover:text-orange-100 transition-colors">
              Explore the platform
            </span>
            <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Link>

          {/* Secondary CTA: See how it works */}
          <Link
            href="#how-it-works"
            className="group w-full sm:w-auto flex-1 inline-flex items-center justify-between sm:justify-center gap-3 px-6 py-4 rounded-xl bg-[#0e0e11]/80 hover:bg-[#1a1714] border border-orange-500/25 hover:border-orange-500 text-white font-medium text-base shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(249,115,22,0.12)] hover:shadow-[0_0_25px_rgba(249,115,22,0.35)] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center group-hover:bg-orange-500/25 transition-colors flex-shrink-0">
                <Play className="w-3 h-3 text-orange-400 translate-x-0.5" />
              </span>
              <span className="font-semibold text-white group-hover:text-orange-100 transition-colors">
                See how it works
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
