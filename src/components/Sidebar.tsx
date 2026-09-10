import {
  User,
  Cpu,
  FolderGit2,
  Briefcase,
  Mail,
  TerminalSquare,
  GitBranch,
  Link2,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import { links } from "@/lib/data";
import { PhotoFrame } from "./PhotoFrame";

const sections = [
  { href: "#top", index: "00", label: "whoami", icon: TerminalSquare },
  { href: "#about", index: "01", label: "about", icon: User },
  { href: "#experience", index: "02", label: "experience", icon: Briefcase },
  { href: "#aplicado", index: "03", label: "applied", icon: Lightbulb },
  { href: "#proyectos", index: "04", label: "projects", icon: FolderGit2 },
  { href: "#stack", index: "05", label: "stack", icon: Cpu },
  { href: "#education", index: "06", label: "education", icon: GraduationCap },
  { href: "#contacto", index: "07", label: "contact", icon: Mail },
];

export function Sidebar() {
  return (
    <>
      {/* mobile top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-base/90 backdrop-blur-sm lg:hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <a href="#top" className="text-sm text-primary">
            <span className="text-accent-green">samuel</span>
            <span className="text-muted">@</span>
            <span>udea</span>
            <span className="text-muted">:~$</span>
          </a>
          <a
            href={`mailto:${links.email}`}
            className="border border-border px-3 py-1 text-xs text-primary hover:border-accent-green hover:text-accent-green transition-colors"
          >
            contactar
          </a>
        </div>
        <nav
          aria-label="Secciones"
          className="flex gap-4 overflow-x-auto border-t border-border px-5 py-2 text-xs text-muted [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="shrink-0 hover:text-accent-green transition-colors"
            >
              <span className="text-accent-green-dim">[{s.index}]</span>{" "}
              {s.label}
            </a>
          ))}
        </nav>
      </header>

      {/* desktop fixed sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-80 flex-col justify-between border-r border-border bg-base px-10 py-14 lg:flex">
        <div>
          <PhotoFrame size="sm" />

          <a href="#top" className="mt-5 block text-base">
            <span className="text-accent-green">samuel</span>
            <span className="text-muted">@</span>
            <span className="text-primary">udea</span>
            <span className="text-muted">:~$</span>
            <span className="cursor-block" />
          </a>
          <h2 className="mt-2.5 text-sm leading-relaxed text-muted">
            Software Developer
            <br />
            backend · APIs · automatización
          </h2>

          <div className="mt-4 flex items-center gap-2 text-xs text-accent-green">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
            </span>
            abierto a oportunidades · prácticas profesionales
          </div>

          <nav aria-label="Secciones" className="mt-14 flex flex-col gap-1">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.href}
                  href={s.href}
                  className="group flex items-center gap-3 border-l-2 border-transparent py-2 pl-3 text-sm text-muted hover:border-accent-green hover:text-accent-green transition-colors"
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent-green-dim group-hover:text-accent-green" />
                  <span className="text-accent-green-dim group-hover:text-accent-green">
                    [{s.index}]
                  </span>
                  <span>{s.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex flex-col gap-3 text-sm text-muted">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 hover:text-accent-purple transition-colors"
          >
            <GitBranch className="h-4 w-4" />
            github/SamuelPuerta
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 hover:text-accent-purple transition-colors"
          >
            <Link2 className="h-4 w-4" />
            linkedin/samuel-puerta
          </a>
          <a
            href={`mailto:${links.email}`}
            className="flex items-center gap-2.5 hover:text-accent-purple transition-colors"
          >
            <Mail className="h-4 w-4" />
            {links.email}
          </a>
          <p className="mt-3 text-xs text-border">Medellín, CO</p>
        </div>
      </aside>
    </>
  );
}
