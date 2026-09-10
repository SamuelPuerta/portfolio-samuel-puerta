import { MatrixRain } from "./MatrixRain";
import { PhotoFrame } from "./PhotoFrame";
import { links } from "@/lib/data";

const stats: [string, string][] = [
  ["role", "Desarrollador Backend & QA"],
  ["DEG", "Ingeniería de Sistemas — 9° sem. (UdeA)"],
  ["Kernel", "backend · automatización · datos"],
  ["Shell", "Java · Spring Boot · Python · Go"],
  ["DE", "Auxiliar de Programación @ SIU-UdeA"],
  ["Locale", "es_CO — Medellín, Colombia"],
];

export function Hero() {
  return (
    <div
      id="top"
      className="relative overflow-hidden border-b border-border px-6 pb-16 pt-16 sm:px-10 lg:px-16 lg:pb-20 lg:pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <MatrixRain />
      </div>

      <div className="relative flex flex-col gap-12 lg:grid lg:grid-cols-[340px_1fr] lg:items-center lg:gap-16">
        <PhotoFrame size="xl" className="order-1 mx-auto lg:mx-0" />

        <div className="order-2 min-w-0">
          <p className="boot-line text-sm text-accent-green [animation-delay:0ms]">
            <span className="text-muted">$</span> neofetch
          </p>

          <h1
            className="boot-line glow-green mt-4 text-4xl font-medium leading-tight text-primary sm:text-5xl"
            style={{ animationDelay: "90ms" }}
          >
            Samuel Puerta Patiño
          </h1>
          <p
            className="boot-line mt-2 text-base text-accent-purple sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Desarrollador Backend · QA Automation · Análisis de Datos
          </p>

          <dl className="mt-7 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {stats.map(([key, value], i) => (
              <div
                key={key}
                className="boot-line flex flex-wrap gap-x-3 text-[15px]"
                style={{ animationDelay: `${(i + 2) * 90}ms` }}
              >
                <dt className="w-16 shrink-0 text-accent-purple">{key}:</dt>
                <dd className="text-muted">{value}</dd>
              </div>
            ))}
          </dl>

          <p
            className="boot-line cursor-block mt-8 max-w-xl text-lg leading-relaxed text-primary sm:text-xl"
            style={{ animationDelay: "780ms" }}
          >
            Construyo software con código limpio, buenas prácticas de
            ingeniería y aprendizaje constante.
          </p>

          <div
            className="boot-line mt-9 flex flex-wrap gap-3 text-sm"
            style={{ animationDelay: "900ms" }}
          >
            <a
              href="#proyectos"
              className="border border-accent-green px-5 py-3 text-accent-green hover:bg-accent-green hover:text-base transition-colors"
            >
              ./ver-proyectos.sh
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="border border-border px-5 py-3 text-primary hover:border-accent-purple hover:text-accent-purple transition-colors"
            >
              git clone samuel
            </a>
            <a
              href={links.cv}
              target="_blank"
              rel="noreferrer"
              className="border border-accent-purple px-5 py-3 text-accent-purple hover:bg-accent-purple hover:text-base transition-colors"
            >
              descargar cv ↓
            </a>
            <a
              href={`mailto:${links.email}`}
              className="border border-border px-5 py-3 text-primary hover:border-accent-purple hover:text-accent-purple transition-colors"
            >
              mail --compose
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
