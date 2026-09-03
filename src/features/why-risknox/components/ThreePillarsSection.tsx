import React from "react";

/* ─── Illustration: Radar / Orbital rings (Pillar 01 – Visibility) ─── */
function RadarIllustration() {
  return (
    <svg
      width="130"
      height="90"
      viewBox="0 0 160 120"
      fill="none"
      className="mx-auto"
    >
      {/* Outer rings */}
      <circle cx="80" cy="60" r="52" stroke="#27272a" strokeWidth="1" />
      <circle cx="80" cy="60" r="38" stroke="#27272a" strokeWidth="1" />
      <circle cx="80" cy="60" r="24" stroke="#3f3f46" strokeWidth="1" />
      <circle cx="80" cy="60" r="10" stroke="#3f3f46" strokeWidth="1" />
      {/* Center dot */}
      <circle cx="80" cy="60" r="4" fill="#ff5500" />
      {/* Cross hairs */}
      <line x1="80" y1="4" x2="80" y2="116" stroke="#222226" strokeWidth="0.8" />
      <line x1="24" y1="60" x2="136" y2="60" stroke="#222226" strokeWidth="0.8" />
      {/* Diagonal subtle lines */}
      <line x1="43" y1="23" x2="117" y2="97" stroke="#1e1e22" strokeWidth="0.6" />
      <line x1="117" y1="23" x2="43" y2="97" stroke="#1e1e22" strokeWidth="0.6" />
      {/* Scattered node dots */}
      <circle cx="52" cy="36" r="2.5" fill="#3f3f46" />
      <circle cx="116" cy="44" r="2" fill="#3f3f46" />
      <circle cx="40" cy="75" r="1.8" fill="#52525b" />
      <circle cx="110" cy="80" r="2" fill="#3f3f46" />
      <circle cx="68" cy="26" r="1.5" fill="#52525b" />
      <circle cx="95" cy="92" r="1.8" fill="#3f3f46" />
      {/* Small label marks */}
      <rect x="29" y="57" width="6" height="1.5" rx="0.5" fill="#3f3f46" />
      <rect x="124" y="57" width="6" height="1.5" rx="0.5" fill="#3f3f46" />
      <rect x="77" y="9" width="6" height="1.5" rx="0.5" fill="#3f3f46" />
    </svg>
  );
}

/* ─── Illustration: AI Chip with flow (Pillar 02 – AI Detection) ─── */
function AiIllustration() {
  return (
    <svg
      width="180"
      height="85"
      viewBox="0 0 200 110"
      fill="none"
      className="mx-auto"
    >
      {/* Left input nodes */}
      <rect x="4" y="14" width="9" height="9" rx="1.5" stroke="#3f3f46" strokeWidth="1" />
      <polygon points="8.5,35 4,43 13,43" stroke="#3f3f46" strokeWidth="1" fill="none" />
      <polygon points="8.5,55 4,63 13,63" stroke="#ff5500" strokeWidth="1" fill="none" opacity="0.8" />
      <circle cx="8.5" cy="79" r="4.5" stroke="#3f3f46" strokeWidth="1" />
      <circle cx="8.5" cy="99" r="4.5" stroke="#3f3f46" strokeWidth="1" />
      <line x1="14" y1="19" x2="62" y2="40" stroke="#333338" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="14" y1="39" x2="62" y2="48" stroke="#333338" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="14" y1="59" x2="62" y2="56" stroke="#ff5500" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.8" />
      <line x1="14" y1="79" x2="62" y2="64" stroke="#333338" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="14" y1="99" x2="62" y2="72" stroke="#333338" strokeWidth="1" strokeDasharray="3 2" />
      {/* Central AI chip */}
      <rect x="62" y="28" width="56" height="56" rx="6" fill="#1a0900" stroke="#ff5500" strokeWidth="1.5" />
      <rect x="68" y="34" width="44" height="44" rx="4" fill="#0d0500" />
      {/* AI label */}
      <text x="90" y="62" fill="#ff5500" fontSize="14" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">AI</text>
      {/* Chip pins top/bottom */}
      <line x1="78" y1="28" x2="78" y2="22" stroke="#ff5500" strokeWidth="1.2" />
      <line x1="90" y1="28" x2="90" y2="22" stroke="#ff5500" strokeWidth="1.2" />
      <line x1="102" y1="28" x2="102" y2="22" stroke="#ff5500" strokeWidth="1.2" />
      <line x1="78" y1="84" x2="78" y2="90" stroke="#ff5500" strokeWidth="1.2" />
      <line x1="90" y1="84" x2="90" y2="90" stroke="#ff5500" strokeWidth="1.2" />
      <line x1="102" y1="84" x2="102" y2="90" stroke="#ff5500" strokeWidth="1.2" />
      {/* Connection lines chip → right bars */}
      <line x1="118" y1="40" x2="140" y2="36" stroke="#333338" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="118" y1="50" x2="140" y2="50" stroke="#ff5500" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.8" />
      <line x1="118" y1="60" x2="140" y2="64" stroke="#333338" strokeWidth="1" strokeDasharray="3 2" />
      <line x1="118" y1="70" x2="140" y2="78" stroke="#333338" strokeWidth="1" strokeDasharray="3 2" />
      {/* Right output bars */}
      <rect x="140" y="30" width="40" height="8" rx="2" fill="#27272a" />
      <rect x="140" y="30" width="22" height="8" rx="2" fill="#3f3f46" />
      <rect x="140" y="44" width="40" height="8" rx="2" fill="#27272a" />
      <rect x="140" y="44" width="34" height="8" rx="2" fill="#ff5500" opacity="0.7" />
      <rect x="140" y="58" width="40" height="8" rx="2" fill="#27272a" />
      <rect x="140" y="58" width="18" height="8" rx="2" fill="#3f3f46" />
      <rect x="140" y="72" width="40" height="8" rx="2" fill="#27272a" />
      <rect x="140" y="72" width="28" height="8" rx="2" fill="#3f3f46" />
    </svg>
  );
}

/* ─── Illustration: Insurance icons (Pillar 03 – Insurance Integration) ─── */
function InsuranceIllustration() {
  return (
    <svg
      width="180"
      height="85"
      viewBox="0 0 200 110"
      fill="none"
      className="mx-auto"
    >
      {/* Dashed connector line across */}
      <line x1="26" y1="55" x2="174" y2="55" stroke="#2d2d33" strokeWidth="1" strokeDasharray="5 4" />
      {/* Left icon: Building/bank */}
      <rect x="8" y="38" width="36" height="34" rx="4" fill="#111115" stroke="#27272a" strokeWidth="1" />
      {/* building columns */}
      <rect x="14" y="50" width="4" height="16" rx="1" fill="#3f3f46" />
      <rect x="21" y="50" width="4" height="16" rx="1" fill="#3f3f46" />
      <rect x="28" y="50" width="4" height="16" rx="1" fill="#3f3f46" />
      <rect x="12" y="47" width="22" height="3" rx="1" fill="#52525b" />
      <rect x="15" y="44" width="16" height="3" rx="1" fill="#52525b" />
      {/* person icon top left */}
      <circle cx="8" cy="20" r="5" fill="#111115" stroke="#27272a" strokeWidth="1" />
      <line x1="8" y1="25" x2="8" y2="35" stroke="#27272a" strokeWidth="1" />
      {/* graph icon top right */}
      <rect x="156" y="8" width="36" height="30" rx="4" fill="#111115" stroke="#27272a" strokeWidth="1" />
      <polyline points="162,30 170,20 178,25 186,14" stroke="#3f3f46" strokeWidth="1.2" strokeLinecap="round" />
      {/* Center shield */}
      <path d="M88 18 L112 18 L112 58 Q100 68 88 58 Z" fill="#1a0900" stroke="#ff5500" strokeWidth="1.5" />
      {/* shield checkmark */}
      <polyline points="94,40 99,46 108,33" stroke="#ff5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Dollar icon bottom right */}
      <rect x="156" y="72" width="36" height="30" rx="4" fill="#111115" stroke="#27272a" strokeWidth="1" />
      <text x="174" y="93" fill="#3f3f46" fontSize="14" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">$</text>
      {/* Shield icon small bottom left */}
      <rect x="8" y="72" width="36" height="30" rx="4" fill="#111115" stroke="#27272a" strokeWidth="1" />
      <path d="M18 78 L34 78 L34 95 Q26 100 18 95 Z" fill="#111115" stroke="#3f3f46" strokeWidth="1" />
      <polyline points="22,88 25,91 32,83" stroke="#3f3f46" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Main Component ─── */
export default function ThreePillarsSection() {
  const pillars = [
    {
      num: "01",
      title: "Visibility",
      subtitle: "See what others miss.",
      description:
        "Get a continuously updated view of your external attack surface and digital exposure.",
      bullets: [
        "Continuous exposure monitoring",
        "External attack surface discovery",
        "Asset and dependency intelligence",
      ],
      illustration: <RadarIllustration />,
    },
    {
      num: "02",
      title: "AI Detection",
      subtitle: "Turn signals into intelligence.",
      description:
        "Our AI connects the right signals, identifies meaningful patterns, and prioritizes what matters.",
      bullets: [
        "AI-powered risk analysis",
        "Pattern and anomaly detection",
        "Contextual risk prioritization",
      ],
      illustration: <AiIllustration />,
    },
    {
      num: "03",
      title: "Insurance Integration",
      subtitle: "Connect risk to financial decisions.",
      description:
        "Translate cyber risk into insurance context to improve insurability and underwriting outcomes.",
      bullets: [
        "Risk intelligence for underwriting",
        "Continuous applicant assessment",
        "Stronger decisions for insurers & brokers",
      ],
      illustration: <InsuranceIllustration />,
    },
  ];

  return (
    <section className="relative w-full py-5 md:py-8 px-4 sm:px-6 lg:px-8 bg-[#000000] text-slate-100">
      {/* Outer chamfered HUD container */}
      <div className="relative max-w-[1240px] mx-auto p-[1px] bg-[#1e1e22] [clip-path:polygon(0_28px,28px_0,calc(100%-28px)_0,100%_28px,100%_calc(100%-28px),calc(100%-28px)_100%,28px_100%,0_calc(100%-28px))] shadow-[0_0_60px_rgba(0,0,0,0.95)]">
        <div className="relative w-full bg-[#000000] [clip-path:polygon(0_28px,28px_0,calc(100%-28px)_0,100%_28px,100%_calc(100%-28px),calc(100%-28px)_100%,28px_100%,0_calc(100%-28px))] overflow-hidden">

          {/* Dot field – top right */}
          <div
            className="absolute top-0 right-0 w-64 h-48 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #4b5563 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
              maskImage: "linear-gradient(to bottom left, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 45%, transparent 80%)",
              WebkitMaskImage: "linear-gradient(to bottom left, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 45%, transparent 80%)",
            }}
          />

          {/* ── Header ── */}
          <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-4 md:gap-8 px-6 sm:px-8 md:px-9 lg:px-10 pt-6 md:pt-7 pb-5 md:pb-6">
            {/* Left: tag + headline */}
            <div className="flex-1 max-w-xl">
              <span className="block text-[#ff5500] font-bold text-[12px] tracking-[0.18em] uppercase mb-3 font-sans">
                THREE PILLARS
              </span>
              <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] font-bold text-white tracking-tight leading-[1.2]">
                <span className="block">Three pillars. One mission:</span>
                <span className="block mt-0.5">
                  turn cyber risk into{" "}
                  <span className="text-[#ff5500]">better decisions.</span>
                </span>
              </h2>
            </div>

            {/* Vertical divider */}
            <div className="hidden md:block w-[1px] h-14 bg-[#27272a] shrink-0 self-center" />

            {/* Right: subtitle */}
            <div className="flex-1 max-w-sm text-sm sm:text-[15px] text-[#a1a1aa] leading-relaxed">
              <p>
                Risknox combines continuous visibility, AI-powered detection,
                and insurance integration to help you understand what matters —
                and act with confidence.
              </p>
            </div>
          </div>

          {/* ── Three Cards ── */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#1a1a1e] px-6 sm:px-8 md:px-9 lg:px-10 pb-0">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.num}
                className={`relative flex flex-col p-4 sm:p-5 ${
                  i < 2 ? "md:border-r border-[#1a1a1e]" : ""
                } ${i > 0 ? "border-t md:border-t-0 border-[#1a1a1e]" : ""}`}
              >
                {/* Number */}
                <span className="block text-[#ff5500] font-bold text-[13px] tracking-wider font-sans mb-3">
                  {pillar.num}
                </span>

                {/* Illustration */}
                <div className="mb-3 flex items-center justify-start">
                  {pillar.illustration}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-0.5">
                  {pillar.title}
                </h3>

                {/* Subtitle */}
                <p className="text-[#a1a1aa] text-sm mb-2.5">{pillar.subtitle}</p>

                {/* Horizontal divider */}
                <div className="w-full h-px bg-[#1e1e22] mb-2.5" />

                {/* Description */}
                <p className="text-[#71717a] text-sm leading-relaxed mb-3">
                  {pillar.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-1.5">
                  {pillar.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-[#c4c4c8]">
                      <span className="mt-[3px] shrink-0 w-[14px] h-[14px] rounded-[3px] border border-[#3f3f46] bg-[#111115] flex items-center justify-center">
                        <span className="w-[5px] h-[5px] rounded-[1px] bg-[#52525b]" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Bottom callout bar ── */}
          <div className="relative z-10 flex items-center gap-3 px-6 sm:px-8 md:px-9 lg:px-10 py-3 border-t border-[#1a1a1e] bg-[#060608]">
            {/* Orange diamond icon */}
            <div className="shrink-0 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect
                  x="9"
                  y="1.5"
                  width="10"
                  height="10"
                  rx="1.5"
                  transform="rotate(45 9 1.5)"
                  fill="none"
                  stroke="#ff5500"
                  strokeWidth="1.4"
                />
                <rect
                  x="9"
                  y="5"
                  width="4"
                  height="4"
                  rx="0.8"
                  transform="rotate(45 9 5)"
                  fill="#ff5500"
                />
              </svg>
            </div>
            <p className="text-[#a1a1aa] text-sm">
              Built for insurers, brokers, and security teams who need more than
              alerts —{" "}
              <span className="font-semibold text-white">
                they need clarity.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
