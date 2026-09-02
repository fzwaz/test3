"use client";

import React, { useEffect, useRef } from "react";
import { ShieldCheck, Compass, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PartnerHero() {
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

    // Particle dust field matching the solution hero's floating glowing orange embers/stars
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
        {/* Partner Badge: 6-dot matrix icon + PARTNERS text */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181109]/90 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_0_20px_rgba(249,115,22,0.2)] backdrop-blur-md mb-8 hover:border-orange-500/60 transition-colors">
          <div className="grid grid-cols-3 gap-1 w-3.5 h-2.5 items-center justify-center">
            <span className="w-1 h-1 rounded-[1px] bg-orange-400"></span>
            <span className="w-1 h-1 rounded-[1px] bg-orange-400"></span>
            <span className="w-1 h-1 rounded-[1px] bg-orange-400"></span>
            <span className="w-1 h-1 rounded-[1px] bg-orange-400"></span>
            <span className="w-1 h-1 rounded-[1px] bg-orange-400"></span>
            <span className="w-1 h-1 rounded-[1px] bg-orange-400"></span>
          </div>
          <span>PARTNERS</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.08] select-none">
          <span className="block">Better underwriting starts</span>
          <span className="block mt-1">
            with <span className="text-[#ff7936]">better intelligence.</span>
          </span>
        </h1>

        {/* Subtitle description */}
        <p className="mt-8 max-w-2xl text-base sm:text-lg md:text-[19px] text-slate-300 font-normal leading-relaxed">
          Whether you&apos;re ready to integrate Compass into your underwriting workflow or want to explore it firsthand, choose the path that works for you.
        </p>

        {/* Dual Action Cards / CTA Buttons */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl">
          {/* Left CTA: Become an Insurance Partner */}
          <Link
            href="/contact?role=insurers-brokers"
            className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#0e0e11]/80 hover:bg-[#1a1714] border border-orange-500/25 hover:border-orange-500 text-white font-medium text-base shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(249,115,22,0.12)] hover:shadow-[0_0_25px_rgba(249,115,22,0.35)] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer text-center"
          >
            <ShieldCheck className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="font-semibold text-white group-hover:text-orange-100 transition-colors text-sm sm:text-base">
              Become an Insurance Partner
            </span>
            <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Link>

          {/* Right CTA: Try Compass */}
          <Link
            href="/platform/compass"
            className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#0e0e11]/80 hover:bg-[#1a1714] border border-orange-500/25 hover:border-orange-500 text-white font-medium text-base shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(249,115,22,0.12)] hover:shadow-[0_0_25px_rgba(249,115,22,0.35)] transition-all duration-200 active:scale-[0.98] backdrop-blur-xl cursor-pointer text-center"
          >
            <Compass className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="font-semibold text-white group-hover:text-orange-100 transition-colors text-sm sm:text-base">
              Try Compass
            </span>
            <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
