import { ReactNode } from "react";

export function SectionHeader({
  index,
  path,
  caption,
}: {
  index: string;
  path: string;
  caption?: string;
}) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline gap-3">
        <span className="text-xs text-accent-green-dim">[{index}]</span>
        <h2 className="text-xs uppercase tracking-widest text-muted">
          {path}
        </h2>
        <span className="h-px flex-1 bg-border" />
      </div>
      {caption && (
        <p className="mt-2 text-sm text-muted sm:pl-8">{caption}</p>
      )}
    </div>
  );
}

export function Prompt({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm text-accent-green">
      <span className="text-muted">$</span> {children}
    </p>
  );
}
