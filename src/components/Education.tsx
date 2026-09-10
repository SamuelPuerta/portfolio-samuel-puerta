import { GraduationCap, Award, BookOpen } from "lucide-react";
import { SectionHeader, Prompt } from "./SectionHeader";
import { education, ExperienceItem } from "@/lib/data";
import { Reveal } from "./Reveal";

const eduIcons: Record<string, typeof GraduationCap> = {
  "Ingeniería de Sistemas (9° semestre)": GraduationCap,
  "Técnico en Sistemas de Información": Award,
  "Bachiller Técnico en Sistemas": BookOpen,
};

export function Education() {
  return (
    <section id="education" className="border-b border-border px-6 py-20 sm:px-10 lg:px-16">
      <SectionHeader
        index="06"
        path="~/education"
        caption="Formación académica."
      />
      <Prompt>cat diploma/*.txt</Prompt>

      <div className="mt-8 max-w-5xl space-y-6">
        {education.map((item: ExperienceItem, i) => (
          <Reveal key={item.role + item.org} delay={i * 80}>
            <article className="group relative border border-border bg-surface/40 transition-colors hover:border-accent-purple/50">
              <div className="absolute -left-6 top-4 hidden lg:block flex h-2.5 w-2.5">
                {item.current && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent-purple opacity-50" />
                )}
                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                    item.current ? "bg-accent-purple" : "bg-border"
                  } border border-base`}
                />
              </div>
              <div className="p-5 lg:pl-8">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="text-[11px] uppercase tracking-widest text-muted">
                    {item.current ? "en curso" : "finalizado"}
                  </span>
                  <time className="text-xs text-muted font-mono ml-auto">
                    {item.period}
                  </time>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  {(() => {
                    const Icon = eduIcons[item.role] ?? GraduationCap;
                    return (
                      <span
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-accent-purple/30 bg-accent-purple/10 text-accent-purple"
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                    );
                  })()}
                  <div>
                    <h3 className="text-lg text-primary group-hover:text-accent-purple transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm text-muted">{item.org}</p>
                  </div>
                </div>

                {item.role === "Ingeniería de Sistemas (9° semestre)" && (
                  <ul className="mt-4 space-y-1.5 text-sm text-muted border-l border-border pl-4">
                    <li className="flex items-center gap-2">
                      <span className="text-accent-purple">→</span>
                      9.º semestre — énfasis en desarrollo de software y sistemas
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-purple">→</span>
                      Proyecto aplicado CENTIR del Sur (2026-1)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-purple">→</span>
                      CodeFactory UdeA: CITASalud (microservicios, CI/CD)
                    </li>
                  </ul>
                )}

                {item.role === "Técnico en Sistemas de Información" && (
                  <ul className="mt-4 space-y-1.5 text-sm text-muted border-l border-border pl-4">
                    <li className="flex items-center gap-2">
                      <span className="text-accent-purple">→</span>
                      Programación, bases de datos, redes y soporte técnico
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-accent-purple">→</span>
                      Proyecto final: sistema de gestión académica
                    </li>
                  </ul>
                )}

                {item.role === "Bachiller Técnico en Sistemas" && (
                  <ul className="mt-4 space-y-1.5 text-sm text-muted border-l border-border pl-4">
                    <li className="flex items-center gap-2">
                      <span className="text-accent-purple">→</span>
                      Fundamentos de programación, hardware y ofimática
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