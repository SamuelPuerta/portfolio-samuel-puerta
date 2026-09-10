import { Briefcase, Code2, Terminal } from "lucide-react";
import { SectionHeader, Prompt } from "./SectionHeader";
import { experience, ExperienceItem } from "@/lib/data";
import { Reveal } from "./Reveal";

const roleIcons: Record<string, typeof Briefcase> = {
  "Auxiliar de Programación": Briefcase,
  "Desarrollador Backend (Freelance)": Code2,
  "Técnico de Sistemas / Soporte IT": Terminal,
};

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border px-6 py-20 sm:px-10 lg:px-16"
    >
      <SectionHeader
        index="02"
        path="~/experience"
        caption="Experiencia laboral y freelance."
      />
      <Prompt>git log --author=samuel --pretty=format:%h %s</Prompt>

      <div className="mt-8 max-w-5xl space-y-6">
        {experience.map((item: ExperienceItem, i) => (
          <Reveal key={item.role + item.org} delay={i * 80}>
            <article className="group relative border border-border bg-surface/40 transition-colors hover:border-accent-green/50">
              <div className="absolute -left-6 top-4 hidden lg:block flex h-2.5 w-2.5">
                {item.current && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent-green opacity-50" />
                )}
                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                    item.current ? "bg-accent-green" : "bg-border"
                  } border border-base`}
                />
              </div>
              <div className="p-5 lg:pl-8">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-widest text-muted">
                      {item.current ? "actualidad" : "finalizado"}
                    </span>
                  </div>
                  <time className="text-xs text-muted font-mono ml-auto">
                    {item.period}
                  </time>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  {(() => {
                    const Icon = roleIcons[item.role] ?? Briefcase;
                    return (
                      <span
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-accent-green/30 bg-accent-green/10 text-accent-green"
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                    );
                  })()}
                  <div>
                    <h3 className="text-lg text-primary group-hover:text-accent-green transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm text-muted">{item.org}</p>
                  </div>
                </div>

                {item.role === "Auxiliar de Programación" && (
                  <ul className="mt-4 space-y-2 text-sm text-muted border-l border-border pl-4">
                    <li className="flex items-center gap-2">
                      <span className="text-accent-green">→</span>
                      Desarrollo y mantenimiento de microservicios Java/Spring Boot
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-green">→</span>
                      APIs REST, PostgreSQL, Docker, CI/CD con GitHub Actions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-green">→</span>
                      Testing automatizado y análisis de calidad con SonarCloud
                    </li>
                  </ul>
                )}

                {item.role === "Desarrollador Backend (Freelance)" && (
                  <ul className="mt-4 space-y-2 text-sm text-muted border-l border-border pl-4">
                    <li className="flex items-center gap-2">
                      <span className="text-accent-green">→</span>
                      Proyecto aplicado universitario bajo modalidad freelance pagada
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-green">→</span>
                      Backend, panel admin, automatización WhatsApp con n8n
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-green">→</span>
                      Reuniones semanales con cliente, entregas iterativas en producción
                    </li>
                  </ul>
                )}

                {item.role === "Técnico de Sistemas / Soporte IT" && (
                  <ul className="mt-4 space-y-2 text-sm text-muted border-l border-border pl-4">
                    <li className="flex items-center gap-2">
                      <span className="text-accent-green">→</span>
                      Soporte técnico, infraestructura y redes (4 años)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-green">→</span>
                      Automatización de tareas con Bash/Python
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-green">→</span>
                      Gestión de servidores Linux y virtualización
                    </li>
                  </ul>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}