import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { StackBars } from "@/components/StackBars";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Sidebar />
      <main className="relative z-10 max-w-[1600px] lg:ml-80">
        <Hero />
        <About />
        <StackBars />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
