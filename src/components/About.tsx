import { Coffee, MapPin, GraduationCap, FolderGit2 } from "lucide-react";
import { SectionHeader, Prompt } from "./SectionHeader";
import { Reveal } from "./Reveal";

const facts: [typeof Coffee, string, string][] = [
  [GraduationCap, "semestre", "8° · Ingeniería de Sistemas"],
  [FolderGit2, "repos_públicos", "13 en GitHub"],
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
            Estudiante de{" "}
            <span className="text-accent-green">Ingeniería de Sistemas</span>{" "}
            en la Universidad de Antioquia, trabajando actualmente como{" "}
            <span className="text-accent-purple">
              Auxiliar de Programación
            </span>{" "}
            en la Sede de Investigación Universitaria (SIU–UdeA). Me apasiona
            el desarrollo <span className="text-accent-green">backend</span>,
            la <span className="text-accent-green">automatización</span> de
            procesos y el análisis de{" "}
            <span className="text-accent-green">datos</span>.
          </p>
          <p className="mt-4 text-[17px] leading-[1.85] text-muted">
            Creo en el código limpio, las buenas prácticas de ingeniería y el
            aprendizaje constante. Cuando no estoy programando, estoy
            aprendiendo algo nuevo que pronto se convertirá en un proyecto.
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
