import { Lightbulb, MapPin, Clock, DollarSign, Users } from "lucide-react";
import { SectionHeader, Prompt } from "./SectionHeader";
import { appliedProject } from "@/lib/data";
import { Reveal } from "./Reveal";

export function AppliedProject() {
  const p = appliedProject;
  return (
    <section
      id="aplicado"
      className="border-b border-border bg-surface/40 px-6 py-20 sm:px-10 lg:px-16"
    >
      <SectionHeader
        index="03"
        path="~/proyecto-aplicado"
        caption="Proyecto universitario aplicado a organización real — modalidad freelance pagada con cliente directo."
      />
      <Prompt>cat ./proyecto-aplicado/README.md</Prompt>

      <Reveal>
        <div className="mt-8 max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
            <div className="border border-accent-green/30 bg-surface/50">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-border px-5 py-3">
                <span className="flex items-center gap-1.5 border border-accent-green/50 px-2 py-0.5 text-[11px] uppercase tracking-wide text-accent-green">
                  <Lightbulb className="h-3.5 w-3.5" />
                  proyecto aplicado
                </span>
                <span className="flex items-center gap-1.5 border border-accent-purple/50 px-2 py-0.5 text-[11px] uppercase tracking-wide text-accent-purple">
                  <DollarSign className="h-3.5 w-3.5" />
                  proyecto pago
                </span>
                <span className="text-xs text-muted">{p.duration}</span>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-muted">
                  <MapPin className="h-3.5 w-3.5" />
                  {p.org}
                </span>
              </div>

              <div className="px-5 py-5">
                <h3 className="text-lg text-primary sm:text-xl">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                  <Clock className="h-4 w-4 text-accent-green-dim" />
                  {p.period}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {p.summary}
                </p>

                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {p.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm text-primary"
                    >
                      <span className="text-accent-green">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border border-border px-2 py-0.5 text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-border bg-surface/50 p-5">
              <h4 className="flex items-center gap-2 text-sm text-accent-purple uppercase tracking-wider">
                <Users className="h-4 w-4" />
                Modalidad
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <span className="text-accent-green">✓</span>
                  Cliente directo con reuniones semanales
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-green">✓</span>
                  Levantamiento de requisitos y validación iterativa
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-green">✓</span>
                  Entregas incrementales en producción
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent-green">✓</span>
                  Capacitación y documentación al equipo del cliente
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}