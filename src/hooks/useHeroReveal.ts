"use client";

import { useState, useEffect, useCallback } from "react";

const OUT = "cubic-bezier(0.16,1,0.3,1)";
const QUART = "cubic-bezier(0.25,1,0.5,1)";

export function useHeroReveal() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const textStyle = useCallback(
    (delay: number): React.CSSProperties => ({
      opacity: mounted ? 1 : 0,
      transform: mounted ? "translateY(0) blur(0px)" : "translateY(40px) blur(8px)",
      transition: `opacity 700ms ${OUT} ${delay}ms, transform 1000ms ${QUART} ${delay}ms`,
    }),
    [mounted],
  );

  return { mounted, textStyle };
}
