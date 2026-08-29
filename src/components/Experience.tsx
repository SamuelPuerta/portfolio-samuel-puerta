import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeader, Prompt } from "./SectionHeader";
import { experience, education, ExperienceItem } from "@/lib/data";
import { Reveal } from "./Reveal";

function Log({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: ExperienceItem[];
  icon: typeof Briefcase;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent-purple">
        <Icon className="h-4 w-4" />
        {title}
      </div>
      <ul className="mt-5 space-y-6 border-l border-border pl-5">
        {items.map((item, i) => (
          <Reveal key={item.role + item.org} delay={i * 100}>
            <li className="relative">
              <span className="absolute -left-[23px] top-1.5 flex h-2.5 w-2.5">
                {item.current && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-50" />
                )}
                <span
                  className={`relative inline-flex h-2.5 w-2.5 ${
                    item.current ? "bg-accent-green" : "bg-border"
                  }`}
                />
              </span>
              <p className="text-xs text-muted">{item.period}</p>
              <p className="mt-1 text-base text-primary">{item.role}</p>
              <p className="text-sm text-muted">{item.org}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experiencia"
      className="border-b border-border px-6 py-20 sm:px-10 lg:px-16"
    >
      <SectionHeader
        index="04"
        path="~/experiencia"
        caption="Trayectoria laboral y académica."
      />
      <Prompt>git log --graph --all</Prompt>
      <div className="mt-8 grid max-w-5xl gap-12 sm:grid-cols-2">
        <Log title="Experiencia" items={experience} icon={Briefcase} />
        <Log title="Educación" items={education} icon={GraduationCap} />
      </div>
    </section>
  );
}
