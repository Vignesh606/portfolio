"use client";

import React from "react";
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle2, Trophy, Shield } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function EducationSection() {
  return (
    <section id="education" className="py-12 border-b border-zinc-800/80">
      {/* 1. Academic Education */}
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="w-4 h-4 text-zinc-400" />
        <h2 className="text-base font-semibold text-zinc-100">Education</h2>
      </div>

      <div className="space-y-4">
        {portfolioData.education.map((edu, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/70 hover:border-zinc-700/80 transition-all hover:bg-zinc-900/50"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div>
                <h3 className="text-sm font-semibold text-zinc-100">{edu.institution}</h3>
                <p className="text-xs text-zinc-300 mt-0.5">{edu.degree}</p>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                    Specialization: {edu.specialization}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-300 border border-zinc-700/60">
                    CGPA: {edu.cgpa}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 mt-2 sm:mt-0">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {edu.location}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/50">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3 h-3" />
                <span>Coursework</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-400 border border-zinc-800"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Professional Certifications */}
      <div className="mt-10">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-4 h-4 text-zinc-400" />
          <h3 className="text-sm font-semibold text-zinc-200">Certifications</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {portfolioData.certifications.map((cert, i) => (
            <div
              key={i}
              className="p-3.5 rounded-lg bg-zinc-900/30 border border-zinc-800/70 hover:border-zinc-700/80 transition-all flex items-start justify-between gap-3"
            >
              <div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-zinc-200 leading-snug">
                    {cert.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1 pl-5">
                  <span className="text-[11px] text-zinc-400">{cert.issuer}</span>
                  {cert.credentialId && (
                    <span className="text-[10px] font-mono text-zinc-500 bg-zinc-800/70 px-1.5 py-0.2 rounded">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-[11px] font-mono text-zinc-500">{cert.date}</span>
                {cert.badge && (
                  <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                    {cert.badge}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Honors & Competitions */}
      <div className="mt-10">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-4 h-4 text-amber-400" />
          <h3 className="text-sm font-semibold text-zinc-200">Honors & Activities</h3>
        </div>

        <div className="space-y-2.5">
          {portfolioData.honors.map((item, i) => (
            <div
              key={i}
              className="p-3.5 rounded-lg bg-zinc-900/30 border border-zinc-800/70 hover:border-zinc-700/80 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="text-xs font-medium text-zinc-100">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    • {item.organization}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">{item.date}</span>
              </div>
              <p className="text-xs text-zinc-400 pl-5.5 leading-relaxed mt-0.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
