"use client";

import React, { useEffect, useState } from "react";

interface SectionItem {
  id: string;
  label: string;
}

const sections: SectionItem[] = [
  { id: "hero", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "simulations", label: "Simulations" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "music", label: "Music" },
  { id: "guestbook", label: "Guestbook" },
  { id: "contact", label: "Contact" },
];

export default function StickyIndex() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Table of contents"
      className="hidden xl:block fixed top-24 right-6 2xl:right-16 w-36 z-30 select-none animate-in fade-in duration-300"
    >
      <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-3 px-2">
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
        <span>Index</span>
      </div>

      <div className="relative pl-3 border-l border-zinc-800/80 space-y-1">
        {sections.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`block text-left text-xs font-mono py-1 px-1 transition-all rounded cursor-pointer ${
                isActive
                  ? "text-zinc-100 font-semibold translate-x-1"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <span className="relative flex items-center gap-1.5">
                {isActive && (
                  <span className="absolute -left-[17px] w-1.5 h-1.5 rounded-full bg-emerald-400 ring-2 ring-emerald-500/20" />
                )}
                <span>{item.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
