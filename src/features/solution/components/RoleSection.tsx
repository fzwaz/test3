"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SpecularCardBorder from "@/components/SpecularCard";

type RoleCard = {
  id: string;
  title: string;
  description: string;
  badges: string[];
  cta: string;
  href: string;
};

const ROLE_CARDS: RoleCard[] = [
  {
    id: "security-teams",
    title: "Enterprise Security Teams",
    description:
      "Monitor your attack surface, quantify cyber risk, and prioritize what matters most.",
    badges: ["PULSE", "FORTRESS"],
    cta: "Explore Security Teams",
    href: "/contact?role=security-teams",
  },
  {
    id: "insurers-brokers",
    title: "Insurers & Brokers",
    description:
      "Use continuous risk intelligence to understand exposure and improve underwriting decisions.",
    badges: ["COMPASS"],
    cta: "Become a Partner",
    href: "/contact?role=insurers-brokers",
  },
  {
    id: "auditors-msps",
    title: "Auditors & MSPs",
    description:
      "Centralize risk intelligence, compliance posture, and exposure across the organizations you support.",
    badges: ["PULSE", "FORTRESS", "ACCORD"],
    cta: "Explore Auditors & MSPs",
    href: "/contact?role=auditors-msps",
  },
  {
    id: "ai-compliance",
    title: "AI & Compliance Teams",
    description:
      "Connect AI governance, regulatory requirements, and organizational risk into one continuous view.",
    badges: ["ACCORD", "AI RISK INTELLIGENCE"],
    cta: "Explore AI & Compliance",
    href: "/contact?role=ai-compliance",
  },
];

export default function RoleSection() {
  return (
    <section
      id="explore-by-role"
      className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#000000] text-slate-100 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* 1. Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs sm:text-[13px] font-mono font-semibold uppercase tracking-wider text-[#ff7936] mb-3">
              01 / EXPLORE BY ROLE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.12]">
              Solutions built around <br className="hidden sm:inline" />
              how you make risk decisions.
            </h2>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-sm">
            Select your role to explore how Risknox helps you monitor, quantify,
            and act on cyber risk with confidence.
          </p>
        </div>

        {/* 2. 2x2 Grid of Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {ROLE_CARDS.map((card) => (
            <div key={card.id} className="relative group">
            <div
              className="relative p-[1px] bg-white/10 hover:bg-white/25 shadow-[0_0_20px_rgba(255,121,54,0.05)] hover:shadow-[0_0_30px_rgba(255,121,54,0.15)] transition-all duration-300"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
              }}
            >
              <div
                className="bg-[#07080a] p-5 sm:p-6 flex flex-col justify-between h-full relative overflow-hidden"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
                }}
              >
                {/* Subtle Ambient Orange Glow */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#ff7936]/[0.05] group-hover:bg-[#ff7936]/[0.12] rounded-full blur-2xl pointer-events-none transition-all duration-500" />

                <div className="relative z-10">
                  {/* Card Title in Orange */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#ff7936] tracking-tight mb-2 pr-8">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-3.5">
                    {card.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-2.5 py-1 bg-[#0e1015] border border-white/15 text-zinc-400 hover:text-[#ff7936] hover:border-[#ff7936]/60 hover:bg-[#ff7936]/10 text-[10px] sm:text-[11px] font-mono font-medium tracking-wide rounded-sm transition-colors duration-200 cursor-pointer"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="border-t border-dashed border-white/15 pt-3.5 mt-auto relative z-10">
                  <Link
                    href={card.href}
                    className="group/cta inline-flex items-center justify-between w-full text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="text-xs sm:text-sm font-medium text-zinc-300 group-hover/cta:text-[#ff7936] group-hover/cta:underline underline-offset-4 transition-colors">
                      {card.cta}
                    </span>

                    {/* Chamfered Dual-Corner Action Button */}
                    <div
                      className="relative p-[1px] bg-white/20 group-hover/cta:bg-[#ff7936] group-hover/cta:shadow-[0_0_12px_rgba(255,121,54,0.35)] transition-all duration-200 flex-shrink-0"
                      style={{
                        clipPath:
                          "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                      }}
                    >
                      <div
                        className="w-8 h-8 sm:w-9 sm:h-9 bg-[#0d0f14] group-hover/cta:bg-[#16120e] flex items-center justify-center transition-colors duration-200"
                        style={{
                          clipPath:
                            "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                        }}
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-300 group-hover/cta:text-[#ff7936] group-hover/cta:translate-x-0.5 transition-all duration-200" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <SpecularCardBorder />
            </div>
          ))}
        </div>

        {/* 3. Bottom Banner */}
        <div className="mt-6 border border-white/10 bg-[#07080a] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* 3x3 Orange Dot Matrix */}
            <div className="grid grid-cols-3 gap-1 w-4 h-4 flex-shrink-0">
              {[...Array(9)].map((_, i) => (
                <span
                  key={i}
                  className="w-1 h-1 bg-[#ff9336] rounded-[0.5px]"
                />
              ))}
            </div>

            <div className="h-6 w-px bg-white/10 hidden sm:block mx-1" />

            <div>
              <div className="text-white text-sm font-medium">
                One platform. Multiple paths.
              </div>
              <div className="text-zinc-400 text-xs sm:text-[13px]">
                Risknox connects intelligence to decisions that drive resilience.
              </div>
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex items-center w-full sm:w-auto justify-end">
            <div className="h-6 w-px bg-white/10 hidden sm:block mr-5" />
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-4 py-2 border border-white/20 hover:border-orange-500 bg-[#0b0d11] text-zinc-300 text-xs sm:text-sm font-medium hover:text-[#f97316] transition-colors w-full sm:w-auto justify-between sm:justify-start"
            >
              <span>Talk to Risknox</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#f97316] group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
