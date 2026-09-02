"use client";

import { useMemo } from "react";
import type { CSSProperties } from "react";

export function FeatureHeroBackground() {
  const heroBars = useMemo(() => {
    const numBars = 15;
    return Array.from({ length: numBars }).map((_, i) => {
      const position = i / (numBars - 1);
      const center = 0.5;
      const distanceFromCenter = Math.abs(position - center);
      const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);
      const height = 25 + (65 - 25) * heightPercentage;

      return {
        height,
        delay: i * 0.1,
        width: 100 / numBars,
      };
    });
  }, []);

  return (
    <>
      <div className="absolute top-[9rem] inset-x-0 h-full z-0 flex px-0 pointer-events-none overflow-hidden">
        {heroBars.map((bar, i) => (
          <div
            key={i}
            className="flex-1 hero-bar-anim"
            style={{
              "--base-scale": bar.height / 100,
              animationDelay: `${bar.delay}s`,
              height: "100%",
              flex: `1 0 ${bar.width}%`,
              maxWidth: `${bar.width}%`,
              background:
                `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(200,65,0,0.85) 30%, rgba(255,110,0,0.95) 55%, rgba(200,65,0,0.6) 80%, rgba(0,0,0,0) 100%)`,
              transformOrigin: "bottom",
              transform: `scaleY(${bar.height / 100})`,
              outline: "1px solid rgba(0, 0, 0, 0)",
              boxSizing: "border-box",
            } as CSSProperties}
          />
        ))}
      </div>
      {/* Top fade: black -> transparent so bars emerge from darkness */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black via-black/30 to-transparent pointer-events-none" />
      {/* Bottom fade: transparent -> black */}
      <div className="absolute bottom-0 inset-x-0 h-1/2 z-[1] bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
      {/* Left/right edge vignette */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_40%,black_100%)] pointer-events-none" />
    </>
  );
}
