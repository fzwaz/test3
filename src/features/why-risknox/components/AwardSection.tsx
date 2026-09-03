import React from "react";
import Link from "next/link";
import { Globe, ShieldCheck, Users, Star, ArrowUpRight } from "lucide-react";

export default function AwardSection() {
  const awards = [
    {
      num: "01",
      title: "BEST INNOVATIVE SOLUTION",
      badge: "2025",
      badgeHighlight: false,
      description:
        "Won at the GISEC Global North Star Startup Competition in Dubai, where it competed against a global pool of startups for its specialized cybersecurity technology.",
      footerIcon: <Globe className="w-3.5 h-3.5 text-[#71717a]" />,
      footerText: "GISEC GLOBAL",
    },
    {
      num: "02",
      title: "BEST INSURTECH PLAYER OF THE YEAR",
      badge: "SPECIAL JURY AWARD · 2025",
      badgeHighlight: true,
      description:
        "Awarded at the India InsurTech Summit Awards, presented by the consulting firm The Digital Fifth.",
      footerIcon: <ShieldCheck className="w-3.5 h-3.5 text-[#71717a]" />,
      footerText: "INDIA INSURTECH",
    },
    {
      num: "03",
      title: "AI INNOVATION IN INSURANCE SERVICES",
      badge: "2025",
      badgeHighlight: false,
      description:
        "Honored at the India Insurtech Association (IIA) Annual Awards for its platform capabilities in quantifying monetary risks to aid smarter cyber insurance underwriting.",
      footerIcon: <Users className="w-3.5 h-3.5 text-[#71717a]" />,
      footerText: "IIA ANNUAL AWARDS",
    },
    {
      num: "04",
      title: "BEST INNOVATIVE PRODUCT",
      badge: "GLOBAL RECOGNITION",
      badgeHighlight: true,
      description:
        "Celebrated across various global technology expos for its ability to streamline insurance access and accurately measure the financial impacts of potential cyber attacks.",
      footerIcon: <Star className="w-3.5 h-3.5 text-[#71717a]" />,
      footerText: "CYBER RISK INNOVATION",
    },
  ];

  return (
    <section className="relative w-full py-5 md:py-8 px-4 sm:px-6 lg:px-8 bg-[#000000] text-slate-100 selection:bg-orange-500/30 selection:text-orange-200">
      {/* Outer Main Cyber Chamfered Container (All 4 corners chamfered) */}
      <div className="relative max-w-[1240px] mx-auto p-[1px] bg-[#1e1e22] [clip-path:polygon(0_28px,28px_0,calc(100%-28px)_0,100%_28px,100%_calc(100%-28px),calc(100%-28px)_100%,28px_100%,0_calc(100%-28px))] shadow-[0_0_60px_rgba(0,0,0,0.95)]">
        <div className="relative w-full bg-[#000000] [clip-path:polygon(0_28px,28px_0,calc(100%-28px)_0,100%_28px,100%_calc(100%-28px),calc(100%-28px)_100%,28px_100%,0_calc(100%-28px))] p-4 sm:p-6 md:p-7 lg:p-8 overflow-hidden">
          
          {/* Closely packed dot field in the top-right corner */}
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

          {/* Top Header Row */}
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 pb-5 md:pb-6">
            {/* Left: RECOGNIZED EXCELLENCE + Headline */}
            <div className="flex-1 max-w-xl">
              <span className="block text-[#ff5500] font-bold text-[12px] sm:text-[13px] tracking-[0.18em] uppercase mb-2.5 font-sans">
                RECOGNIZED EXCELLENCE
              </span>
              <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold text-white tracking-tight leading-[1.18]">
                <span className="block">Recognized for building</span>
                <span className="block mt-0.5">
                  what&apos;s <span className="text-[#ff5500]">next.</span>
                </span>
              </h2>
            </div>

            {/* Center Vertical Divider Line */}
            <div className="hidden md:block w-[1px] h-14 bg-[#27272a] shrink-0 self-center" />

            {/* Right: Subtitle explanation */}
            <div className="flex-1 max-w-sm text-sm sm:text-[15px] text-[#a1a1aa] font-normal leading-relaxed">
              <p>
                Honored by leading organizations for innovation, impact, and
                excellence in cyber risk intelligence and insurance technology.
              </p>
            </div>
          </div>

          {/* 4 Award Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:gap-3 items-stretch mb-4">
            {awards.map((award) => (
              <div
                key={award.num}
                className="relative w-full h-full p-[1px] bg-[#222226] [clip-path:polygon(0_16px,16px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-16px),calc(100%-16px)_100%,20px_100%,0_calc(100%-20px))]"
              >
                <div className="relative w-full h-full bg-[#09090b] [clip-path:polygon(0_16px,16px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-16px),calc(100%-16px)_100%,20px_100%,0_calc(100%-20px))] p-4 sm:p-5 flex flex-col justify-between">
                  
                  <div>
                    {/* Top Row: Number & Orange Laurel Wreath Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xl sm:text-2xl font-bold text-[#d4d4d8] font-sans">
                        {award.num}
                      </span>
                      
                      {/* Orange Laurel Wreath Star SVG */}
                      <div className="flex items-center justify-center text-[#ff5500]">
                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
                          {/* Center star */}
                          <polygon
                            points="16,7 18,12 23,12 19,15 21,20 16,17 11,20 13,15 9,12 14,12"
                            fill="none"
                            stroke="#ff5500"
                            strokeWidth="1.2"
                            strokeLinejoin="round"
                          />
                          {/* Left laurel branch */}
                          <path
                            d="M9 22 C 6 18, 5 13, 8 8"
                            stroke="#ff5500"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            fill="none"
                          />
                          <path d="M7 10 Q 5 11 4 9" stroke="#ff5500" strokeWidth="1.2" strokeLinecap="round" />
                          <path d="M6 14 Q 4 15 3 13" stroke="#ff5500" strokeWidth="1.2" strokeLinecap="round" />
                          <path d="M6 18 Q 4 19 3 17" stroke="#ff5500" strokeWidth="1.2" strokeLinecap="round" />
                          <path d="M8 21 Q 6 23 5 21" stroke="#ff5500" strokeWidth="1.2" strokeLinecap="round" />
                          
                          {/* Right laurel branch */}
                          <path
                            d="M23 22 C 26 18, 27 13, 24 8"
                            stroke="#ff5500"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            fill="none"
                          />
                          <path d="M25 10 Q 27 11 28 9" stroke="#ff5500" strokeWidth="1.2" strokeLinecap="round" />
                          <path d="M26 14 Q 28 15 29 13" stroke="#ff5500" strokeWidth="1.2" strokeLinecap="round" />
                          <path d="M26 18 Q 28 19 29 17" stroke="#ff5500" strokeWidth="1.2" strokeLinecap="round" />
                          <path d="M24 21 Q 26 23 27 21" stroke="#ff5500" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Award Title */}
                    <h3 className="text-sm sm:text-[15px] font-bold text-white tracking-wide uppercase mb-1.5 font-sans leading-snug">
                      {award.title}
                    </h3>

                    {/* Badge / Year */}
                    <span
                      className={`inline-block text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 ${
                        award.badgeHighlight ? "text-[#ff5500]" : "text-[#71717a]"
                      }`}
                    >
                      {award.badge}
                    </span>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#a1a1aa] leading-relaxed mb-4">
                      {award.description}
                    </p>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="border-t border-[#1a1a1e] pt-3.5 mt-auto flex items-center gap-2 text-[#71717a]">
                    {award.footerIcon}
                    <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase font-sans">
                      {award.footerText}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner with Link */}
          <div className="relative z-10 w-full p-[1px] bg-[#222226] rounded-xl overflow-hidden mt-3">
            <div className="relative w-full bg-[#09090b] rounded-xl p-3.5 sm:p-4 md:px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Left text with orange diamond */}
              <div className="flex items-center gap-3.5 max-w-2xl">
                <div className="w-9 h-9 rounded-lg border border-[#3f2010] bg-[#160c05] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect
                      x="9"
                      y="1.5"
                      width="9"
                      height="9"
                      rx="1.5"
                      transform="rotate(45 9 1.5)"
                      fill="none"
                      stroke="#ff5500"
                      strokeWidth="1.4"
                    />
                    <rect
                      x="9"
                      y="4.5"
                      width="3.5"
                      height="3.5"
                      rx="0.5"
                      transform="rotate(45 9 4.5)"
                      fill="#ff5500"
                    />
                  </svg>
                </div>

                <p className="text-xs sm:text-[13px] text-[#a1a1aa] leading-relaxed">
                  These recognitions reflect our commitment to pushing the boundaries of cyber risk intelligence
                  and delivering real-world impact for insurers, brokers, and enterprises.
                </p>
              </div>

              {/* Right CTA Button */}
              <Link
                href="/resources"
                className="shrink-0 flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#ff5500] hover:text-[#ff7733] transition-colors"
              >
                <span>View all recognitions</span>
                <div className="w-7 h-7 rounded-md border border-[#ff5500]/40 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-[#ff5500]" />
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
