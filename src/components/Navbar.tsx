"use client";

import React from "react";
import { Command, MapPin, FileText, ArrowUpRight } from "lucide-react";
import LiveClock from "./LiveClock";
import { portfolioData } from "@/data/portfolio";

interface NavbarProps {
  onOpenCommand: () => void;
}

export default function Navbar({ onOpenCommand }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Left: Brand & Location */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="font-mono text-sm font-semibold tracking-tight text-zinc-100 hover:text-white transition-colors"
          >
            {portfolioData.personal.handle}
            <span className="text-zinc-500">.is-a.dev</span>
          </a>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900/40 border border-zinc-800/60 px-2 py-0.5 rounded-md">
            <MapPin className="w-3 h-3 text-zinc-500" />
            <span>Anantapur, IN</span>
          </div>
        </div>

        {/* Center: Live Clock */}
        <div className="hidden md:block">
          <LiveClock />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommand}
            className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800 px-2.5 py-1 rounded-md transition-all cursor-pointer shadow-sm"
            title="Open Command Palette (Cmd + K)"
          >
            <Command className="w-3.5 h-3.5 text-zinc-400" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline-block px-1 py-0.2 text-[10px] bg-zinc-800 rounded border border-zinc-700/60 text-zinc-400">
              ⌘K
            </kbd>
          </button>

          {/* Résumé link */}
          <a
            href={portfolioData.personal.socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-zinc-300 hover:text-white px-2.5 py-1 rounded-md hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-400" />
            <span>CV</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
        </div>
      </div>
    </header>
  );
}
