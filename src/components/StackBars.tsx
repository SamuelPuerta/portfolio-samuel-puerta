"use client";

import { useEffect, useRef, useState } from "react";
import { Server, ShieldCheck, BrainCircuit, Boxes, Cpu, Database } from "lucide-react";
import { SectionHeader, Prompt } from "./SectionHeader";
import { skillGroups } from "@/lib/data";
import { AnimatedPercent } from "./AnimatedPercent";

const TICKS = 24;

const icons = [Server, ShieldCheck, BrainCircuit, Boxes, Cpu, Database];

export function StackBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stack"
      ref={ref}
      className="border-b border-border bg-surface/30 px-6 py-20 sm:px-10 lg:px-16"
    >
      <SectionHeader
        index="02"
        path="~/stack"
        caption="Herramientas con las que trabajo a diario."
      />
      <Prompt>htop --filter=stack</Prompt>

      <div className="mt-8 grid gap-x-12 gap-y-7 lg:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={group.label}
              className="group border-l-2 border-transparent pl-4 transition-colors hover:border-accent-green/60"
            >
              <div className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 text-accent-green-dim transition-colors group-hover:text-accent-green" />
                <span className="text-[15px] text-primary">
                  {group.label}
                </span>
                <span className="ml-auto text-sm text-muted">
                  <AnimatedPercent
                    value={group.level}
                    active={visible}
                    delay={i * 90}
                  />
                </span>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-accent-green-dim">[</span>
                <span className="relative inline-block h-3.5 flex-1 overflow-hidden align-middle font-mono text-sm leading-3 tracking-[0.14em] text-accent-green-dim">
                  <span aria-hidden="true">{"░".repeat(TICKS)}</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap text-accent-green transition-[width] duration-700 ease-out"
                    style={{
                      width: visible ? `${group.level}%` : "0%",
                      transitionDelay: `${i * 90}ms`,
                    }}
                  >
                    {"|".repeat(TICKS)}
                  </span>
                </span>
                <span className="text-accent-green-dim">]</span>
              </div>

              <p className="mt-2 text-sm text-muted">
                {group.items.join(" · ")}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
