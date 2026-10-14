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
  const src = failed ? "/avatar-placeholder.svg" : "/profile.jpeg";

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
      className={`group w-full ${maxWidth} border-2 border-blue-500 shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-colors hover:border-blue-400 hover:shadow-[0_0_32px_rgba(59,130,246,0.45)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-blue-500/40 bg-surface px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
        <span className="text-[11px] text-muted">{label}</span>
      </div>
      <div className="relative overflow-hidden bg-surface" style={{ aspectRatio: "1066 / 1599" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="Samuel Puerta Patiño"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover grayscale-[15%] contrast-110 transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-accent-purple/10 mix-blend-overlay"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 shadow-[inset_0_0_40px_rgba(59,130,246,0.4)] transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}
