import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Giới thiệu", href: "#about" },
    { name: "Mục tiêu", href: "#objective" },
    { name: "Kỹ năng", href: "#skills" },
    { name: "Dự án", href: "#projects" },
    { name: "Chứng chỉ & CLB", href: "#certificates" },
    { name: "Liên hệ", href: "#contact" },
  ];

  return (
    <header
      id="header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF9F6]/85 backdrop-blur-md shadow-sm border-b border-[#E2E8F0]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand Brand */}
        <a href="#" className="flex items-center gap-1 group">
          <span className="font-serif text-xl font-bold tracking-tight text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
            Bùi Tiến Dũng
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#475569] hover:text-[#2563EB] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#2563EB] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="CV_DungBuiTien.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#0F172A] text-sm font-semibold text-[#0F172A] hover:bg-[#0F172A] hover:text-[#FAF9F6] transition-all hover:-translate-y-0.5"
            id="download-cv-btn"
          >
            <FileText className="w-4 h-4" />
            Tải CV (PDF)
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 -mr-2 text-[#0F172A] hover:text-[#2563EB] transition-colors md:hidden"
          aria-label="Toggle menu"
          id="menu-toggle-btn"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-[#E2E8F0] bg-[#FAF9F6] md:hidden overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-[#475569] hover:text-[#2563EB] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-[#E2E8F0] my-1" />
              <a
                href="CV_DungBuiTien.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0F172A] text-[#FAF9F6] text-sm font-semibold hover:bg-[#2563EB] transition-colors"
              >
                <FileText className="w-4 h-4" />
                Tải CV (PDF)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
