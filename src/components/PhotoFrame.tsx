"use client";

import { useState } from "react";

export function PhotoFrame({
  size = "lg",
  className = "",
}: {
  size?: "sm" | "lg" | "xl";
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const src = failed ? "/avatar-placeholder.svg" : "/profile.jpg";

  if (size === "sm") {
    return (
      <div
        className={`h-16 w-16 shrink-0 overflow-hidden border border-border ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="Samuel Puerta Patiño"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover grayscale-[15%] contrast-110"
        />
      </div>
    );
  }

  const maxWidth = size === "xl" ? "max-w-[340px]" : "max-w-[280px]";
  const label = size === "xl" ? "webcam0 — 1280×960" : "webcam0 — 640×480";

  return (
    <div
      className={`group w-full ${maxWidth} border border-border transition-colors hover:border-accent-green/70 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
        <span className="text-[11px] text-muted">{label}</span>
      </div>
      <div className="relative aspect-square overflow-hidden bg-surface">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="Samuel Puerta Patiño"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover grayscale-[15%] contrast-110 transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent-green/15 via-transparent to-accent-purple/10 mix-blend-overlay"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 shadow-[inset_0_0_40px_rgba(67,227,122,0.35)] transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}
