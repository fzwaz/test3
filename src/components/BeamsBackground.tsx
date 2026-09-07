"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";

const Beams = dynamic(() => import("@/components/Beams"), { ssr: false });

const OUT = "cubic-bezier(0.16,1,0.3,1)";

export default function BeamsBackground({ mounted }: { mounted: boolean }) {
  const beamCount = useMemo(() => {
    if (!mounted) return 0;
    return 12;
  }, [mounted]);

  return (
    <>
      {/* Beams */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          opacity: mounted ? 0.6 : 0,
          transform: mounted ? "scale(1) rotate(0deg)" : "scale(1.35) rotate(3deg)",
          transition: `opacity 1200ms ${OUT} 100ms, transform 1800ms ${OUT} 100ms`,
          willChange: "opacity, transform",
        }}
      >
        <Beams
          beamWidth={2}
          beamHeight={22}
          beamNumber={beamCount}
          lightColor="#ffa500"
          beamColor="#1a0a00"
          backgroundColor="#000000"
          speed={2}
          noiseIntensity={1.65}
          scale={0.22}
          rotation={18}
        />
      </div>

      {/* Flash burst */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255,165,0,0.65) 0%, rgba(255,100,0,0.25) 25%, transparent 55%)",
          opacity: mounted ? 0 : 1,
          transition: "opacity 800ms ease-out",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,165,0,0.1) 0%, transparent 60%)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 1200ms ease-out 1200ms",
          animation: mounted ? "beamPulse 4s ease-in-out infinite 2s" : "none",
        }}
      />

      {/* Text-legibility overlays */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-b from-black/30 via-black/10 to-black/75" />
      <div className="absolute inset-0 z-[2] pointer-events-none bg-[radial-gradient(ellipse_85%_65%_at_50%_45%,transparent_35%,rgba(0,0,0,0.55)_78%,#000000_92%)]" />
    </>
  );
}
