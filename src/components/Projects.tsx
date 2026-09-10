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
  ArrowUpRight,
  Tag,
} from "lucide-react";
import { SectionHeader, Prompt } from "./SectionHeader";
import { projects, categoryLabels, type Project } from "@/lib/data";
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
};

function ProjectCard({ project }: { project: Project }) {
  const Icon = icons[project.slug] ?? ServerCog;
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col border border-border bg-surface/40 transition-colors hover:border-accent-green/60 hover:bg-surface"
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${dotColor[project.status]}`} />
          <span
            className={`border px-1.5 py-0.5 text-[10px] uppercase tracking-wide ${statusColor[project.status]}`}
          >
            {project.status}
          </span>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-accent-green" />
      </div>

      <div className="flex flex-1 flex-col px-4 py-4">
        <div className="flex items-start justify-between gap-3">
          <Icon className="h-5 w-5 text-accent-green-dim" />
          <span className="flex items-center gap-1 text-[10px] uppercase tracking-wide text-muted">
            <Tag className="h-3 w-3" />
            {categoryLabels[project.category]}
          </span>
        </div>
        <h3 className="mt-3 text-[15px] text-primary group-hover:text-accent-green">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.detail}
        </p>
        {project.metric && (
          <p className="mt-3 text-sm text-accent-green">{project.metric}</p>
        )}
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
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="proyectos"
      className="border-b border-border px-6 py-20 sm:px-10 lg:px-16"
    >
      <SectionHeader
        index="04"
        path="~/proyectos"
        caption="Proyectos académicos y personales — el código está en GitHub."
      />
      <Prompt>ls -la ~/proyectos</Prompt>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 60}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-14">
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="uppercase tracking-widest">otros proyectos</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {others.map((project, i) => (
              <Reveal key={project.slug} delay={i * 40}>
                <li>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-3 border border-border px-4 py-3 transition-colors hover:border-accent-green/50 hover:bg-surface"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm text-primary group-hover:text-accent-green">
                        {project.name}
                      </p>
                      <p className="mt-0.5 truncate text-xs text-muted">
                        {project.stack.slice(0, 3).join(" · ")}
                      </p>
                    </div>
                    <GitFork className="h-4 w-4 shrink-0 text-muted group-hover:text-accent-green" />
                  </a>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}