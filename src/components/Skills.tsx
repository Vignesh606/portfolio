"use client";

import React from "react";
import { Wrench, Code2, ShieldAlert, BrainCircuit, Server, Cloud } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function SkillsSection() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return Code2;
      case 1:
        return ShieldAlert;
      case 2:
        return BrainCircuit;
      case 3:
        return Server;
      default:
        return Cloud;
    }
  };

  return (
    <section id="skills" className="py-12 border-b border-zinc-800/80">
      <div className="flex items-center gap-2 mb-6">
        <Wrench className="w-4 h-4 text-zinc-400" />
        <h2 className="text-base font-semibold text-zinc-100">Skills & Tooling</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolioData.skills.map((categoryGroup, idx) => {
          const Icon = getCategoryIcon(idx);
          return (
            <div
              key={categoryGroup.category}
              className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/70 hover:border-zinc-700/80 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4 text-zinc-400" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-medium">
                  {categoryGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {categoryGroup.items.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs px-2.5 py-1 rounded-md font-mono transition-colors ${
                      skill.highlight
                        ? "bg-zinc-800/90 text-zinc-100 border border-zinc-700 font-medium"
                        : "bg-zinc-900/60 text-zinc-400 border border-zinc-800/80"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
