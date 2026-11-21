"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FolderGit2, ExternalLink, ArrowUpRight, CheckCircle2, Hammer, Activity, SearchCheck } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData, Project } from "@/data/portfolio";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Malware & AI",
    "Reverse Engineering",
    "Web & Security",
    "Distributed Systems",
    "Systems Programming",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "Completed":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/50 text-emerald-400 border border-emerald-800/50">
            <CheckCircle2 className="w-2.5 h-2.5" />
            {status}
          </span>
        );
      case "Building":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/50 text-amber-400 border border-amber-800/50">
            <Hammer className="w-2.5 h-2.5" />
            {status}
          </span>
        );
      case "Active":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/50 text-cyan-400 border border-cyan-800/50">
            <Activity className="w-2.5 h-2.5" />
            {status}
          </span>
        );
      case "Research":
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/50 text-purple-400 border border-purple-800/50">
            <SearchCheck className="w-2.5 h-2.5" />
            {status}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-12 border-b border-zinc-800/80">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <FolderGit2 className="w-4 h-4 text-zinc-400" />
          <h2 className="text-base font-semibold text-zinc-100">Featured Technical Projects</h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-2.5 py-1 rounded-md transition-colors cursor-pointer font-mono ${
                selectedCategory === cat
                  ? "bg-zinc-100 text-zinc-900 font-semibold"
                  : "bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/70 hover:border-zinc-700/80 transition-all hover:bg-zinc-900/50 flex flex-col justify-between"
          >
            <div>
              {/* Optional Visual Banner */}
              {project.image && (
                <div className="mb-4 rounded-lg overflow-hidden border border-zinc-800/80 bg-zinc-950/80 aspect-video relative group-hover:border-zinc-700 transition-colors">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                </div>
              )}

              {/* Header: Status & Category */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  {project.category}
                </span>
                {getStatusBadge(project.status)}
              </div>

              {/* Title & Stats */}
              <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors flex items-center justify-between">
                <span>{project.title}</span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-300 transition-colors p-1"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </h3>

              {project.stats && (
                <div className="text-[11px] font-mono text-emerald-400/90 mt-0.5 mb-2">
                  {project.stats}
                </div>
              )}

              {/* Description */}
              <p className="text-xs text-zinc-400 leading-relaxed mt-2 mb-4">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-3 border-t border-zinc-800/50 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-400 border border-zinc-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
