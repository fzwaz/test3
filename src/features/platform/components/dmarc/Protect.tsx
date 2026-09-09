"use client";

import React from "react";
import { ShieldCheck, Users, Send } from "lucide-react";
import Reveal from "@/components/reveal";

const CARDS = [
  {
    Icon: ShieldCheck,
    title: "Your Brand",
    description: "Reduce the risk of attackers impersonating your organisation.",
  },
  {
    Icon: Users,
    title: "Your Customers",
    description:
      "Help protect customers from fraudulent emails appearing to come from your domain.",
  },
  {
    Icon: Send,
    title: "Your Deliverability",
    description:
      "Maintain visibility into authentication and legitimate sending sources to support trusted email delivery.",
  },
];

export default function Protect() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 lg:px-16 bg-[#000000] border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="text-[#ff7d1c] text-xs font-mono font-bold tracking-[0.22em] uppercase mb-4">
              More than email security
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Protect the trust <span className="text-[#ff7d1c]">behind your domain.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center mb-5">
                  <c.Icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
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
