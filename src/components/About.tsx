import { Coffee, MapPin, GraduationCap } from "lucide-react";
import { SectionHeader, Prompt } from "./SectionHeader";
import { Reveal } from "./Reveal";

const facts: [typeof Coffee, string, string][] = [
  [GraduationCap, "carrera", "Ingeniería de Sistemas · 9.º sem."],
  [MapPin, "ubicación", "Medellín, Colombia"],
  [Coffee, "combustible", "café, todos los días"],
];

export function About() {
  return (
    <section
      id="about"
      className="border-b border-border px-6 py-20 sm:px-10 lg:px-16"
    >
      <SectionHeader
        index="01"
        path="~/about"
        caption="Quién soy y qué me mueve a programar."
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
        <Reveal className="max-w-2xl">
          <Prompt>cat about.md</Prompt>
          <p className="mt-5 text-[17px] leading-[1.85] text-primary">
            <span className="text-accent-green">Software developer</span> en
            formación, cursando el 9.º semestre de{" "}
            <span className="text-accent-green">Ingeniería de Sistemas</span>{" "}
            en la Universidad de Antioquia. Trabajo como{" "}
            <span className="text-accent-purple">
              Auxiliar de Programación
            </span>{" "}
            en la Sede de Investigación Universitaria (SIU–UdeA) desde julio
            de 2025.
          </p>
          <p className="mt-4 text-[17px] leading-[1.85] text-muted">
            Me enfoco en desarrollo{" "}
            <span className="text-accent-green">backend</span> y APIs, con
            experiencia práctica en automatización, testing y una base sólida
            en bases de datos, CI/CD y sistemas. Busco oportunidades de{" "}
            <span className="text-accent-green">prácticas profesionales</span>{" "}
            en desarrollo de software.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="border border-border">
            <div className="border-b border-border bg-surface px-4 py-2.5 text-xs text-muted">
              ~/about/facts.json
            </div>
            <dl className="divide-y divide-border">
              {facts.map(([Icon, key, value]) => (
                <div
                  key={key}
                  className="flex items-center gap-3 px-4 py-3.5 text-sm"
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent-purple" />
                  <dt className="text-muted">{key}:</dt>
                  <dd className="ml-auto text-right text-primary">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
