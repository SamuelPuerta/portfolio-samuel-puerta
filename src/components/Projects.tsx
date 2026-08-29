import {
  ServerCog,
  BrainCircuit,
  ShieldCheck,
  Landmark,
  FileAudio,
  ActivitySquare,
  Network,
  GitFork,
  Grid3x3,
  Video,
  Terminal,
  UtensilsCrossed,
  ArrowUpRight,
  Folder,
} from "lucide-react";
import { SectionHeader, Prompt } from "./SectionHeader";
import { projects, categoryLabels, type Category } from "@/lib/data";
import { Reveal } from "./Reveal";

const statusColor: Record<string, string> = {
  activo: "text-accent-green border-accent-green/40",
  estable: "text-accent-purple border-accent-purple/40",
  archivado: "text-muted border-border",
};

const dotColor: Record<string, string> = {
  activo: "bg-accent-green",
  estable: "bg-accent-purple",
  archivado: "bg-border",
};

const icons: Record<string, typeof ServerCog> = {
  citasalud: ServerCog,
  "saber-pro": BrainCircuit,
  "paycore-screenplay": ShieldCheck,
  "screenplay-bank": Landmark,
  "transcription-service": FileAudio,
  sysmonitor: ActivitySquare,
  "concurrency-webserver": Network,
  "synchronization-mechanisms": GitFork,
  "matrix-multiplication": Grid3x3,
  "cctv-sockets": Video,
  "calculadora-vida": Terminal,
  "alas-locas": UtensilsCrossed,
};

const categoryOrder: Category[] = ["backend", "qa", "sistemas", "otros"];

export function Projects() {
  return (
    <section
      id="proyectos"
      className="border-b border-border px-6 py-20 sm:px-10 lg:px-16"
    >
      <SectionHeader
        index="03"
        path="~/proyectos"
        caption="Proyectos académicos y personales — el código está en GitHub."
      />
      <Prompt>ls -la ~/proyectos</Prompt>

      <div className="mt-8 space-y-12">
        {categoryOrder.map((category) => {
          const items = projects.filter((p) => p.category === category);
          if (items.length === 0) return null;
          return (
            <div key={category}>
              <div className="flex items-center gap-2 text-xs text-muted">
                <Folder className="h-3.5 w-3.5 text-accent-green-dim" />
                <span className="uppercase tracking-widest">
                  {categoryLabels[category]}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>

              <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {items.map((project, i) => {
                  const Icon = icons[project.slug] ?? Terminal;
                  return (
                    <Reveal key={project.slug} delay={i * 60}>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex h-full flex-col border border-border bg-surface/40 transition-colors hover:border-accent-green/60 hover:bg-surface"
                      >
                        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                          <div className="flex items-center gap-2">
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${dotColor[project.status]}`}
                            />
                            <span
                              className={`border px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${statusColor[project.status]}`}
                            >
                              {project.status}
                            </span>
                          </div>
                          <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-accent-green" />
                        </div>

                        <div className="flex flex-1 flex-col px-4 py-4">
                          <Icon className="h-5 w-5 text-accent-green-dim" />
                          <h3 className="mt-3 text-[15px] text-primary group-hover:text-accent-green">
                            {project.name}
                          </h3>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                            {project.detail}
                          </p>
                          <ul className="mt-4 flex flex-wrap gap-1.5">
                            {project.stack.map((tech) => (
                              <li
                                key={tech}
                                className="border border-border px-2 py-0.5 text-xs text-muted"
                              >
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </a>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
