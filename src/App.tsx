import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Objective from "./components/Objective";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import { BookMarked } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F172A] font-sans selection:bg-[#2563EB]/10 selection:text-[#2563EB] flex flex-col antialiased">
      {/* Dynamic Header Block */}
      <Header />

      {/* Main Single Page Sections */}
      <main className="flex-1">
        {/* Entrance Hero visual block */}
        <Hero />

        {/* Section 01: Hybrid Profile introduction */}
        <About />

        {/* Section 02: Careers Roadmap / Objective */}
        <Objective />

        {/* Section 03: Professional competency Skills */}
        <Skills />

        {/* Section 04: Projects & case study modal trigger */}
        <Projects />

        {/* Section 05 & 06: Certifications & VOS Extracurricular */}
        <Certificates />

        {/* Section 07: Philosophy Statement */}
        <section className="py-20 bg-[#FAF9F6] border-t border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-[11px] font-bold tracking-widest text-[#2563EB] uppercase block mb-6">
              06 · Châm Ngôn Làm Việc
            </span>
            <blockquote className="font-serif text-xl md:text-2xl font-semibold italic text-[#0F172A] leading-relaxed max-w-2xl mx-auto">
              “Khó khăn chỉ là phép thử cho lòng kiên trì. Nỗ lực hết mình trong mọi hoàn cảnh, bền bỉ vượt qua thử thách để hoàn thiện bản thân mỗi ngày.”
            </blockquote>
            <div className="w-12 h-0.5 bg-[#2563EB]/40 mx-auto mt-6"></div>
          </div>
        </section>

        {/* Section 08: Direct contact Coordinates & message dispatch */}
        <Contact />
      </main>
    </div>
  );
}
// Webhook trigger comment
