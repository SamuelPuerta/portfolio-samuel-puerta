import { MatrixRain } from "./MatrixRain";
import { PhotoFrame } from "./PhotoFrame";
import { links } from "@/lib/data";

const stats: [string, string][] = [
  ["role", "Software Developer · Backend"],
  ["degree", "Ingeniería de Sistemas — 9° sem. · UdeA"],
  ["work", "Auxiliar de Programación · SIU-UdeA"],
  ["locale", "es_CO — Medellín, Colombia"],
];

export function Hero() {
  return (
    <div
      id="top"
      className="relative overflow-hidden border-b border-border px-6 pb-14 pt-14 sm:px-10 lg:px-16 lg:pb-16 lg:pt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <MatrixRain />
      </div>

      <div className="relative flex flex-col gap-10 lg:grid lg:grid-cols-[280px_1fr] lg:items-center lg:gap-14">
        <PhotoFrame size="lg" className="order-1 mx-auto lg:mx-0" />

        <div className="order-2 min-w-0">
          <p className="boot-line text-sm text-accent-green [animation-delay:0ms]">
            <span className="text-muted">$</span> whoami
          </p>

          <h1
            className="boot-line glow-green mt-3 flex flex-wrap items-center gap-x-4 gap-y-3 text-4xl font-medium leading-tight text-primary sm:text-5xl"
            style={{ animationDelay: "90ms" }}
          >
            Samuel Puerta
            <span className="inline-flex items-center gap-2 border border-orange-500/70 bg-orange-500/10 px-3 py-1 font-mono text-sm font-normal tracking-widest text-orange-400 shadow-[0_0_18px_rgba(255,153,0,0.25)]">
              ▲ AWS AMPLIFY Deploy
            </span>
          </h1>

          <p
            className="boot-line mt-3 text-xl text-accent-green sm:text-2xl"
            style={{ animationDelay: "180ms" }}
          >
            Software Developer · Backend
          </p>

          <p
            className="boot-line mt-2 text-sm text-muted"
            style={{ animationDelay: "260ms" }}
          >
            Estudiante de Ingeniería de Sistemas — UdeA · 9.º semestre
          </p>

          <dl className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {stats.map(([key, value], i) => (
              <div
                key={key}
                className="boot-line flex flex-wrap gap-x-3 text-[15px]"
                style={{ animationDelay: `${(i + 3) * 80}ms` }}
              >
                <dt className="w-16 shrink-0 text-accent-purple">{key}:</dt>
                <dd className="text-muted">{value}</dd>
              </div>
            ))}
          </dl>

          <p
            className="boot-line mt-6 max-w-xl text-base leading-relaxed text-primary sm:text-lg"
            style={{ animationDelay: "620ms" }}
          >
            Desarrollo software backend con Java/Spring Boot y Python, con
            experiencia práctica en automatización, testing y desarrollo de APIs.
          </p>

          <div
            className="boot-line mt-7 flex flex-wrap gap-3 text-sm"
            style={{ animationDelay: "760ms" }}
          >
            <a
              href="#proyectos"
              className="border border-accent-green px-5 py-2.5 text-accent-green hover:bg-accent-green hover:text-base transition-colors"
            >
              ver proyectos
            </a>
            <a
              href="#contacto"
              className="border border-accent-purple px-5 py-2.5 text-accent-purple hover:bg-accent-purple hover:text-base transition-colors"
            >
              contactarme
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-border px-5 py-2.5 text-primary hover:border-accent-green hover:text-accent-green transition-colors"
            >
              github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
