import React from "react";

export default function MethodologySection() {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      subtitle: "Identify your digital assets, exposures, and external signals.",
      bullets: [
        "Continuous asset discovery",
        "External attack surface mapping",
        "Third-party and internet intel",
      ],
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff5500"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "ANALYZE",
      subtitle: "Connect signals using AI and contextual intelligence.",
      bullets: [
        "AI-powered correlation",
        "Behavior and anomaly detection",
        "Risk context and prioritization",
      ],
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff5500"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="6" r="2.2" />
          <circle cx="18" cy="6" r="2.2" />
          <circle cx="6" cy="18" r="2.2" />
          <circle cx="18" cy="18" r="2.2" />
          <circle cx="12" cy="12" r="1.8" fill="#ff5500" />
          <line x1="7.8" y1="7.8" x2="10.5" y2="10.5" />
          <line x1="16.2" y1="7.8" x2="13.5" y2="10.5" />
          <line x1="7.8" y1="16.2" x2="10.5" y2="13.5" />
          <line x1="16.2" y1="16.2" x2="13.5" y2="13.5" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "QUANTIFY",
      subtitle: "Translate cyber risk into business and financial impact.",
      bullets: [
        "Risk scoring and quantification",
        "Financial impact estimation",
        "Insurance relevance mapping",
      ],
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff5500"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12A9 9 0 1 1 12 3v9z" />
          <path d="M21 12A9 9 0 0 0 12 3" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "ACT",
      subtitle: "Prioritize the right actions that reduce meaningful risk.",
      bullets: [
        "Actionable recommendations",
        "Decision support for teams",
        "Track and measure improvement",
      ],
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff5500"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="8 7 17 7 17 16" />
        </svg>
      ),
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
            {/* Left: METHODOLOGY + Headline */}
            <div className="flex-1 max-w-xl">
              <span className="block text-[#ff5500] font-bold text-[12px] sm:text-[13px] tracking-[0.18em] uppercase mb-2.5 font-sans">
                METHODOLOGY
              </span>
              <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold text-white tracking-tight leading-[1.18]">
                <span className="block">From technical exposure</span>
                <span className="block mt-0.5">
                  to <span className="text-[#ff5500]">business action.</span>
                </span>
              </h2>
            </div>

            {/* Center Vertical Divider Line */}
            <div className="hidden md:block w-[1px] h-14 bg-[#27272a] shrink-0 self-center" />

            {/* Right: Subtitle explanation */}
            <div className="flex-1 max-w-sm text-sm sm:text-[15px] text-[#a1a1aa] font-normal leading-relaxed">
              <p>
                Our proven methodology turns continuous signals into measurable
                risk and clear decisions.
              </p>
            </div>
          </div>

          {/* 4 Cards Row */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:gap-3 items-stretch mb-4">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative flex items-center">
                {/* Individual Card with top-right & bottom-left chamfer */}
                <div className="relative w-full h-full p-[1px] bg-[#222226] [clip-path:polygon(0_16px,16px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-16px),calc(100%-16px)_100%,20px_100%,0_calc(100%-20px))]">
                  <div className="relative w-full h-full bg-[#09090b] [clip-path:polygon(0_16px,16px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-16px),calc(100%-16px)_100%,20px_100%,0_calc(100%-20px))] p-4 sm:p-5 flex flex-col justify-between">
                    
                    <div>
                      {/* Card Top: Number & Icon Box */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl sm:text-2xl font-bold text-[#d4d4d8] font-sans">
                          {step.num}
                        </span>
                        <div className="w-10 h-10 rounded-lg border border-[#27272a] bg-[#111114] flex items-center justify-center shrink-0">
                          {step.icon}
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-wide uppercase mb-1.5 font-sans">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#a1a1aa] leading-snug mb-4">
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Bullets */}
                    <div className="border-t border-[#1a1a1e] pt-3.5 mt-auto">
                      <ul className="space-y-2">
                        {step.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-xs sm:text-[13px] text-[#c4c4c8] leading-tight"
                          >
                            <span className="mt-[2px] shrink-0 w-[13px] h-[13px] rounded-[2px] border border-[#3f3f46] bg-[#111115] flex items-center justify-center">
                              <span className="w-[4px] h-[4px] rounded-[0.5px] bg-[#71717a]" />
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Arrow connecting cards (on desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2.5 z-20 items-center justify-center pointer-events-none text-[#52525b]">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Continuous by Design Callout Card */}
          <div className="relative z-10 w-full p-[1px] bg-[#222226] rounded-xl overflow-hidden mt-3">
            <div className="relative w-full bg-[#09090b] rounded-xl p-3.5 sm:p-4 md:px-5 flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Left text with orange diamond */}
              <div className="flex items-center gap-3.5 max-w-2xl">
                {/* Diamond icon box */}
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
                  <span className="text-[#ff5500] font-semibold">Continuous by design.</span>{" "}
                  Risknox never stops listening. As your environment changes, so does your risk picture —
                  keeping your decisions accurate, relevant, and always up to date.
                </p>
              </div>

              {/* Right Chart graphic with dots & curve */}
              <div className="shrink-0 w-full md:w-56 h-10 flex items-center justify-end">
                <svg
                  width="180"
                  height="36"
                  viewBox="0 0 180 36"
                  fill="none"
                  className="overflow-visible"
                >
                  {/* Subtle background grid dots */}
                  <g opacity="0.2">
                    <circle cx="10" cy="18" r="1" fill="#71717a" />
                    <circle cx="50" cy="18" r="1" fill="#71717a" />
                    <circle cx="90" cy="18" r="1" fill="#71717a" />
                    <circle cx="130" cy="18" r="1" fill="#71717a" />
                    <circle cx="170" cy="18" r="1" fill="#71717a" />
                    <circle cx="10" cy="8" r="1" fill="#71717a" />
                    <circle cx="50" cy="8" r="1" fill="#71717a" />
                    <circle cx="90" cy="8" r="1" fill="#71717a" />
                    <circle cx="130" cy="8" r="1" fill="#71717a" />
                    <circle cx="170" cy="8" r="1" fill="#71717a" />
                    <circle cx="10" cy="28" r="1" fill="#71717a" />
                    <circle cx="50" cy="28" r="1" fill="#71717a" />
                    <circle cx="90" cy="28" r="1" fill="#71717a" />
                    <circle cx="130" cy="28" r="1" fill="#71717a" />
                    <circle cx="170" cy="28" r="1" fill="#71717a" />
                  </g>

                  {/* Trend line */}
                  <path
                    d="M10 28 C 40 28, 60 16, 90 16 C 120 16, 140 8, 170 8"
                    fill="none"
                    stroke="#ff5500"
                    strokeWidth="1.5"
                    strokeOpacity="0.8"
                  />

                  {/* Nodes along the curve */}
                  <circle cx="10" cy="28" r="3.5" fill="#09090b" stroke="#ff5500" strokeWidth="1.5" />
                  <circle cx="90" cy="16" r="3.5" fill="#09090b" stroke="#ff5500" strokeWidth="1.5" />
                  <circle cx="130" cy="16" r="3.5" fill="#09090b" stroke="#ff5500" strokeWidth="1.5" />
                  <circle cx="170" cy="8" r="3.5" fill="#ff5500" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
