"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Terminal className="w-3.5 h-3.5 text-zinc-400" />
        <span>
          © {year} {portfolioData.personal.name}. All rights reserved.
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span>Designed & built with Next.js</span>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 hover:text-zinc-300 transition-colors cursor-pointer"
        >
          <span>Top</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
}
