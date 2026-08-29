"use client";

import { useEffect, useState } from "react";

export function AnimatedPercent({
  value,
  active,
  delay = 0,
}: {
  value: number;
  active: boolean;
  delay?: number;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const timeout = setTimeout(() => {
      const duration = 700;
      const start = performance.now();
      let raf = 0;
      function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        setDisplay(Math.round(progress * value));
        if (progress < 1) raf = requestAnimationFrame(tick);
      }
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, delay);
    return () => clearTimeout(timeout);
  }, [active, value, delay]);

  return <span>{display}%</span>;
}
