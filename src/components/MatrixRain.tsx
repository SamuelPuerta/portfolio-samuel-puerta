"use client";

import { useEffect, useRef } from "react";

const CHARS = "01アイウエオカキクケコサシスセソ$#/><{}λ";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops = new Array(columns).fill(0).map(() => Math.random() * -40);

    let frame = 0;
    let raf = 0;

    function draw() {
      if (!ctx) return;
      frame++;
      if (frame % 2 !== 0) {
        raf = requestAnimationFrame(draw);
        return;
      }
      ctx.fillStyle = "rgba(5, 7, 5, 0.16)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px var(--font-mono), monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const isPurple = Math.random() < 0.12;
        ctx.fillStyle = isPurple
          ? "rgba(180, 144, 242, 0.55)"
          : "rgba(67, 227, 122, 0.55)";
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.55;
      }
      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);

    function handleResize() {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -40);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]"
    />
  );
}
