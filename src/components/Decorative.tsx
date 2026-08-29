export function MountainSkyline({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 220"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M0 220 L140 90 L230 160 L340 40 L430 140 L520 70 L610 200 L700 60 L790 150 L880 20 L980 130 L1080 80 L1200 180 L1200 220 Z"
        fill="none"
        stroke="#2a9c55"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M0 220 L180 130 L300 190 L420 100 L560 200 L680 110 L820 195 L950 100 L1080 170 L1200 130 L1200 220 Z"
        fill="none"
        stroke="#8465b8"
        strokeWidth="1.5"
        opacity="0.35"
      />
      <circle cx="880" cy="20" r="3" fill="#43e37a" opacity="0.6" />
    </svg>
  );
}

export function CoffeeGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M10 20h22v10a11 11 0 0 1-11 11h0A11 11 0 0 1 10 30V20Z" />
      <path d="M32 22h3a5 5 0 0 1 0 10h-3" />
      <path d="M15 20c-1-3 1-4 0-7" opacity="0.6" />
      <path d="M22 20c-1-3 1-4 0-7" opacity="0.6" />
      <path d="M29 20c-1-3 1-4 0-7" opacity="0.6" />
      <line x1="6" y1="43" x2="34" y2="43" />
    </svg>
  );
}
