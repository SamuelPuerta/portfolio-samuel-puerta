import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { AppliedProject } from "@/components/AppliedProject";
import { Projects } from "@/components/Projects";
import { StackBars } from "@/components/StackBars";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Sidebar />
      <main className="relative z-10 max-w-[1600px] lg:ml-80">
        <Hero />
        <About />
        <Experience />
        <AppliedProject />
        <Projects />
        <StackBars />
        <Education />
        <Contact />
      </main>
    </div>
  );
}