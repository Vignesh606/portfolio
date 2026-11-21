"use client";

import React from "react";
import { Briefcase, Building, Calendar, MapPin, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 border-b border-zinc-800/80">
      {/* Real Experience & Leadership */}
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="w-4 h-4 text-zinc-400" />
        <h2 className="text-base font-semibold text-zinc-100">Experience & Leadership</h2>
      </div>

      <div className="space-y-4 mb-10">
        {portfolioData.experiences.map((exp) => (
          <div
            key={exp.id}
            className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/70 hover:border-zinc-700/80 transition-all hover:bg-zinc-900/50"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div>
                <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
                  <span>{exp.role}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/60">
                    {exp.type}
                  </span>
                </h3>
                <div className="text-xs font-medium text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <Building className="w-3.5 h-3.5" />
                  <span>{exp.company}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-300 mt-2 mb-3 leading-relaxed">
              {exp.description}
            </p>

            <ul className="space-y-1.5 mb-4">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="text-xs text-zinc-400 flex items-start gap-2">
                  <span className="text-zinc-600 mt-1 select-none">↳</span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/50">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-400 border border-zinc-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Virtual Job Simulations */}
      <div id="simulations" className="pt-6 border-t border-dashed border-zinc-800/80">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-4 h-4 text-zinc-400" />
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Virtual Job Simulations & Practical Case Studies
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {portfolioData.jobSimulations.map((sim) => (
            <div
              key={sim.company}
              className="p-4 rounded-xl bg-zinc-900/20 border border-zinc-800/60 hover:border-zinc-700/80 transition-all hover:bg-zinc-900/40"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-zinc-200">{sim.company}</span>
                <span className="text-[10px] font-mono text-zinc-500">{sim.issuer}</span>
              </div>
              <h4 className="text-xs font-semibold text-emerald-400/90 mb-1.5">
                {sim.title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                {sim.description}
              </p>
              <div className="flex flex-wrap gap-1 pt-2 border-t border-zinc-800/40">
                {sim.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800/50 text-zinc-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
