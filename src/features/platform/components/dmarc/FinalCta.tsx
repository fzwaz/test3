"use client";

import { ArrowRight, CheckCircle2, ShieldCheck, Server, PenLine } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/reveal";

export default function FinalCta() {
  const [coords, setCoords] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: `${e.clientX - rect.left}px`,
      y: `${e.clientY - rect.top}px`,
    });
  };

  return (
    <section
      className="relative bg-[#080808] text-white min-h-[85vh] flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden border-t border-white/10 group/section"
      onMouseMove={handleMouseMove}
    >
      {/* 1. STATIC LIGHT-ORANGE DOT GRID (brightens on hover via layer 2) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80" style={{ backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23FF6B35' cx='10' cy='10' r='1.5' opacity='0.5'/%3E%3C/svg%3E\")" }} />
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23FF6B35' cx='10' cy='10' r='1.5'/%3E%3C/svg%3E\")",
          maskImage: `radial-gradient(400px circle at ${coords.x} ${coords.y}, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(400px circle at ${coords.x} ${coords.y}, black 0%, transparent 100%)`,
        }}
      />

      <div className="max-w-[1400px] mx-auto space-y-16 w-full relative z-10">

        {/* MAIN SECTION GRID (Left Copy vs Right Domain Mockup) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column */}
          <div className="lg:col-span-6">
            <Reveal className="space-y-8">

              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#FF6B35] shadow-[0_0_8px_#FF6B35]"></span>
                <span className="text-[#FF6B35] text-xs font-mono font-bold tracking-wider uppercase">Your domain has a reputation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.2]">
                Don&apos;t let attackers <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8C61]">use it against you.</span>
              </h2>

              <p className="text-white/70 text-base max-w-lg leading-relaxed">
                See who&apos;s sending email on behalf of your organisation and take control of your domain authentication.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="#senders"
                  className="group relative inline-flex items-center justify-center w-full sm:w-auto min-h-[52px] px-8 py-3.5 bg-[#FF6B35] text-white rounded-[16px] font-semibold text-[16px] overflow-hidden shadow-[0_0_20px_rgba(255,107,53,0.3)] active:scale-[0.98] transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  <span className="relative z-10 text-[#080808]">Explore DMARC Monitoring</span>
                  <ArrowRight className="relative z-10 ml-2 w-5 h-5 text-[#080808] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/contact?role=dmarc-check"
                  className="group inline-flex items-center justify-center w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-[16px] border border-white/15 hover:border-orange-400 text-slate-200 hover:text-white font-semibold text-[16px] transition-all active:scale-[0.98]"
                >
                  <span>Check Your Domain</span>
                </Link>
              </div>

            </Reveal>
          </div>

          {/* Right Column: Enforcement Mockup */}
          <div className="lg:col-span-6 relative w-full h-full flex items-center justify-center">
            <Reveal className="w-full flex items-center justify-center" delay={0.15}>

              <div className="w-full max-w-lg bg-[#1A1A1A] rounded-2xl border border-[#2A2A2A] overflow-hidden flex flex-col shadow-2xl">

                <div className="flex items-center justify-between px-5 py-4 border-b border-[#2A2A2A]">
                  <div className="text-white/80 font-medium text-sm">DMARC — Enforcement Path</div>
                  <div className="flex items-center gap-2">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </div>
                    <span className="text-green-500 text-xs font-semibold uppercase tracking-wider">Live</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-4">
                  {[
                    { label: "SPF · Verify who can send", value: "Active", Icon: Server },
                    { label: "DKIM · Verify the message", value: "Active", Icon: PenLine },
                    { label: "DMARC · p=reject enforced", value: "Protected", Icon: ShieldCheck },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between p-3 rounded-xl bg-[#222222] border border-[#2A2A2A]">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-[#FF6B35]/10 text-[#FF6B35]">
                          <s.Icon className="w-4 h-4 stroke-[1.5]" />
                        </div>
                        <span className="text-xs text-white/60 font-medium">{s.label}</span>
                      </div>
                      <span className="text-sm font-bold text-white tracking-tight">{s.value}</span>
                    </div>
                  ))}
                </div>

                <div className="px-5 py-4 border-t border-[#2A2A2A] bg-[#161616]">
                  <div className="flex flex-wrap gap-2">
                    {['p=none', 'p=quarantine', 'p=reject'].map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#222222] border border-[#2A2A2A]">
                        {i === 2 && <CheckCircle2 className="w-3 h-3 text-green-500" />}
                        <span className="text-[10px] font-mono font-semibold text-white/70 tracking-wide">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-5 pb-4 bg-[#161616] flex justify-end">
                  <span className="text-[10px] text-white/30 font-medium">Spoofed mail blocked automatically</span>
                </div>

              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
