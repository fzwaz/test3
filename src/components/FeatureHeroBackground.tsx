"use client";

import { useMemo } from "react";
import type { CSSProperties } from "react";

const OUT = "cubic-bezier(0.16,1,0.3,1)";

export function FeatureHeroBackground({ mounted }: { mounted: boolean }) {
  const heroBars = useMemo(() => {
    const numBars = 20;
    return Array.from({ length: numBars }).map((_, i) => {
      const position = i / (numBars - 1);
      const center = 0.5;
      const distanceFromCenter = Math.abs(position - center);
      // Bars are tallest at edges, shortest at center (matches reference image)
      const heightPercentage = Math.pow(distanceFromCenter * 2, 1.4);
      // Range: center bars ~20% tall, edge bars ~90% tall
      const height = 20 + (90 - 20) * heightPercentage;
      // Edge bars pulse faster, center bars slower
      const duration = 2.5 + distanceFromCenter * 1.5;

      return {
        height,
        // Negative delay = pre-phased mid-cycle on mount, so no left-to-right
        // sweep when the component remounts on refresh / client navigation.
        delay: -(i * 0.37),
        duration,
        width: 100 / numBars,
        // Edge bars are brighter orange; center bars are dimmer
        opacity: 0.5 + distanceFromCenter * 1,
      };
    });
  }, []);

  return (
    <>
      {/* Bar container — anchored to bottom so bars grow upward.
          Same intro as the other pages' BeamsBackground: fade + settle
          from a slightly zoomed state on mount. */}
      <div
        className="absolute inset-x-0 bottom-0 h-full z-0 flex px-0 pointer-events-none overflow-hidden"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "scale(1)" : "scale(1.12)",
          transition: `opacity 1200ms ${OUT} 100ms, transform 1800ms ${OUT} 100ms`,
          willChange: "opacity, transform",
        }}
      >
        {heroBars.map((bar, i) => (
          <div
            key={i}
            className="hero-bar-anim"
            style={{
              "--base-scale": bar.height / 100,
              animationDelay: `${bar.delay}s`,
              animationDuration: `${bar.duration}s`,
              height: "100%",
              flex: `1 0 ${bar.width}%`,
              maxWidth: `${bar.width}%`,
              opacity: bar.opacity,
              // Bright orange glow: solid at bottom, fades to transparent at top (keeps top dark)
              background:
                `linear-gradient(to top,
                  rgba(200, 45, 0, 1) 0%,
                  rgba(220, 70, 0, 1) 18%,
                  rgba(255, 120, 0, 1) 42%,
                  rgba(220, 75, 0, 0.85) 68%,
                  rgba(0, 0, 0, 0.0) 100%
                )`,
              boxShadow: `0 0 18px 4px rgba(255, 90, 0, 0.25)`,
              transformOrigin: "bottom",
              boxSizing: "border-box",
            } as CSSProperties}
          />
        ))}
      </div>

      {/* Top-heavy fade — keeps upper portion very dark */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #000000 0%, #000000 20%, rgba(0,0,0,0.5) 60%, transparent 100%)",
        }}
      />

      {/* Bottom ground fade — merges bars into floor */}

    </>
  );
}
