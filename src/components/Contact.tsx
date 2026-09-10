import { Mail, GitBranch, Link2, FileText } from "lucide-react";
import { SectionHeader, Prompt } from "./SectionHeader";
import { links } from "@/lib/data";
import { MountainSkyline } from "./Decorative";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-surface/30 px-6 py-20 sm:px-10 lg:px-16"
    >
      <SectionHeader
        index="05"
        path="~/contacto"
        caption="Hablemos — respondo rápido."
      />
      <Reveal>
        <Prompt>echo $CONTACTO</Prompt>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary">
          Si tienes un proyecto interesante, una oportunidad laboral o una
          idea genial — escríbeme.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a
            href={`mailto:${links.email}`}
            className="flex items-center gap-2 border border-accent-green px-5 py-3 text-accent-green hover:bg-accent-green hover:text-base transition-colors"
          >
            <Mail className="h-4 w-4" />
            {links.email}
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-border px-5 py-3 text-primary hover:border-accent-purple hover:text-accent-purple transition-colors"
          >
            <Link2 className="h-4 w-4" />
            linkedin/in/samuel-puerta
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-border px-5 py-3 text-primary hover:border-accent-purple hover:text-accent-purple transition-colors"
          >
            <GitBranch className="h-4 w-4" />
            github/SamuelPuerta
          </a>
          <a
            href={links.cv}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-accent-purple px-5 py-3 text-accent-purple hover:bg-accent-purple hover:text-base transition-colors"
          >
            <FileText className="h-4 w-4" />
            descargar cv ↓
          </a>
        </div>
      </Reveal>

      <footer className="relative z-10 mt-24 flex flex-col gap-1 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Medellín, Colombia · exit 0</p>
        <p>© {new Date().getFullYear()} Samuel Puerta Patiño</p>
      </footer>

      <MountainSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full opacity-70 sm:h-36" />
    </section>
  );
}
