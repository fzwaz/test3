"use client";

import React, { useEffect, useRef } from "react";
import { Mail, Phone, ArrowUpRight, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
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

    const particleCount = 140;
    const particles: {
      x: number; y: number; size: number;
      speedX: number; speedY: number;
      opacity: number; twinkleSpeed: number;
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
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181109]/90 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_0_20px_rgba(249,115,22,0.2)] backdrop-blur-md mb-8 hover:border-orange-500/60 transition-colors">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CONTACT US</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.08] select-none">
          <span className="block">Let&apos;s build a stronger</span>
          <span className="block mt-1">security posture, <span className="text-[#ff7936]">together.</span></span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-2xl text-base sm:text-lg md:text-[19px] text-slate-300 font-normal leading-relaxed">
          Have a question, need a product demo, or want to explore our custom GRC solutions? We&apos;d love to hear from you.
        </p>

        {/* Quick contact cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
          <a
            href="mailto:info@risknox.ai"
            className="group relative bg-[#090b10]/90 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-xl hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] hover:border-orange-500/50 backdrop-blur-xl transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#1d120c] border border-[#3e2216] flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <span className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">EMAIL US</span>
                <span className="block text-sm font-bold text-white group-hover:text-orange-400 transition-colors">info@risknox.ai</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-orange-400 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          <a
            href="tel:+919947513687"
            className="group relative bg-[#090b10]/90 rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-xl hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] hover:border-orange-500/50 backdrop-blur-xl transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#1d120c] border border-[#3e2216] flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <span className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">CALL US</span>
                <span className="block text-sm font-bold text-white group-hover:text-orange-400 transition-colors">+91 9947513687</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-orange-400 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;