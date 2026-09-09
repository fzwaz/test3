"use client";

import React from "react";
import { Server, PenLine, Gavel } from "lucide-react";
import Reveal from "@/components/reveal";

const CARDS = [
  {
    Icon: Server,
    abbr: "SPF",
    title: "Verify who can send.",
    description:
      "Monitor the authorised servers and services permitted to send email for your domain.",
  },
  {
    Icon: PenLine,
    abbr: "DKIM",
    title: "Verify the message.",
    description:
      "Track email authentication signatures to help validate legitimate sending sources.",
  },
  {
    Icon: Gavel,
    abbr: "DMARC",
    title: "Control what happens next.",
    description:
      "Monitor authentication results, identify failures, and safely progress toward stronger enforcement.",
  },
];

export default function AuthCards() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              One domain. Complete visibility.
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Know what&apos;s authentic. <span className="text-[#ff7d1c]">Spot what isn&apos;t.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((c, i) => (
            <Reveal key={c.abbr} delay={i * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-orange-500/20 bg-gradient-to-b from-orange-500/[0.06] to-transparent p-6 sm:p-8 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center">
                    <c.Icon className="w-7 h-7 text-orange-400" />
                  </div>
                  <span className="text-2xl font-black tracking-tight text-orange-500/90">{c.abbr}</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
