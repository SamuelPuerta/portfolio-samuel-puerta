"use client";

import {
  Server,
  ShieldCheck,
  BrainCircuit,
  Boxes,
  Cpu,
  Database,
  Braces,
  Container,
  FlaskConical,
  Workflow,
  FileCode2,
  GraduationCap,
  Bug,
  Layers,
  GitBranch,
  Table2,
  CircuitBoard,
  Radio,
} from "lucide-react";
import { SectionHeader, Prompt } from "./SectionHeader";
import { skillGroups } from "@/lib/data";
import { Reveal } from "./Reveal";

const groupIcons = [Server, ShieldCheck, BrainCircuit, Boxes, Cpu, Database];

const techIcons: Record<string, typeof Braces> = {
  Java: Braces,
  "Spring Boot": FileCode2,
  REST: Radio,
  JWT: ShieldCheck,
  Maven: Boxes,
  "JUnit 5": FlaskConical,
  Mockito: Bug,
  Cucumber: GraduationCap,
  "Serenity BDD": Bug,
  Selenium: Workflow,
  Python: FileCode2,
  pandas: Table2,
  XGBoost: BrainCircuit,
  "scikit-learn": BrainCircuit,
  Docker: Container,
  "GitHub Actions": GitBranch,
  "CI/CD": Workflow,
  SonarQube: ShieldCheck,
  SonarCloud: ShieldCheck,
  Snyk: ShieldCheck,
  C: Braces,
  Go: Braces,
  Linux: Cpu,
  pthreads: CircuitBoard,
  sockets: CircuitBoard,
  PostgreSQL: Database,
  MySQL: Database,
  MongoDB: Database,
  SQL: Database,
  Flyway: Layers,
};

export function StackBars() {
  return (
    <section
      id="stack"
      className="border-b border-border bg-surface/30 px-6 py-20 sm:px-10 lg:px-16"
    >
      <SectionHeader
        index="05"
        path="~/stack"
        caption="Herramientas con las que trabajo a diario."
      />
      <Prompt>ls -la ~/stack</Prompt>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, i) => {
          const GroupIcon = groupIcons[i % groupIcons.length];
          return (
            <Reveal key={group.label} delay={i * 60}>
              <div className="group flex h-full flex-col border border-border bg-surface/40 transition-colors hover:border-accent-green/60">
                <div className="flex items-center gap-2.5 border-b border-border px-4 py-3">
                  <GroupIcon className="h-4 w-4 text-accent-green-dim transition-colors group-hover:text-accent-green" />
                  <span className="text-[15px] text-primary">{group.label}</span>
                </div>

                <ul className="grid grid-cols-2 gap-2 p-4">
                  {group.items.map((tech) => {
                    const TechIcon = techIcons[tech] ?? Braces;
                    return (
                      <li
                        key={tech}
                        className="flex items-center gap-2 border border-border px-3 py-2 text-xs text-muted transition-colors hover:border-accent-green/50 hover:text-primary"
                      >
                        <TechIcon className="h-4 w-4 shrink-0 text-accent-green-dim" />
                        <span className="truncate">{tech}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}