"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Copy,
  Check,
  FileText,
  ArrowUpRight,
  ShieldCheck,
  Database,
  Layers,
  MapPin,
  Calendar,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import DustText from "./DustText";
import LiveClock from "./LiveClock";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-4 pb-12 sm:pb-16 border-b border-zinc-800/80">
      {/* 1. Wide Painted Sunset Meadow Banner */}
      <div className="relative w-full h-48 sm:h-60 md:h-72 rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-2xl">
        <Image
          src="/images/banner_meadow.jpg"
          alt="Sunset Wildflower Meadow Banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* 2. Overlapping Avatar & Header Metadata */}
      <div className="relative px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-14 sm:-mt-16 mb-2 sm:mb-3">
          {/* Avatar with Dark Border */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-[#0a0a0a] shadow-2xl bg-zinc-900 flex-shrink-0">
            <Image
              src="/images/avatar.jpg"
              alt={portfolioData.personal.name}
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          {/* Status badge & Location Pill */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{portfolioData.personal.statusText}</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-900/60 border border-zinc-800 px-2.5 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              <span>{portfolioData.personal.location}</span>
            </div>
          </div>
        </div>

        {/* 3. Hero Name with Refined Dust Particle Canvas Effect */}
        <div className="relative overflow-visible">
          <DustText text={portfolioData.personal.name} />
        </div>

        {/* 4. Pitch & Bio - tightly aligned below the name */}
        <div className="mt-1 space-y-2 max-w-2xl">
          <p className="text-base sm:text-lg text-zinc-100 leading-normal font-normal">
            {portfolioData.personal.pitch}
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {portfolioData.personal.bio[0]}{" "}
            <span className="text-zinc-300">{portfolioData.personal.bio[1]}</span>
          </p>
        </div>

        {/* 5. Direct Action CTA Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${portfolioData.personal.socials.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-zinc-100 text-zinc-900 hover:bg-white transition-all shadow-sm font-sans"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-900" />
            <span>Send an email</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-all cursor-pointer shadow-sm group"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-mono">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-200" />
                <span className="font-mono">{portfolioData.personal.socials.email}</span>
              </>
            )}
          </button>
        </div>

        {/* 6. Social Pills Bar with Horizontal Divider Line */}
        <div className="mt-8 pt-6 border-t border-zinc-800/80">
          <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-3">
            <span>Here are my socials</span>
            <div className="h-px flex-1 bg-zinc-800/80" />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={portfolioData.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800/80 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href={portfolioData.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800/80 transition-all"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <a
              href={portfolioData.personal.socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800/80 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>Résumé</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </div>

        {/* 7. Key Technical Milestones Bento Cards */}
        <div className="mt-8 pt-6 border-t border-dashed border-zinc-800/80">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-2">
            <span>Key Technical Milestones</span>
            <div className="h-px flex-1 bg-zinc-900" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {portfolioData.heroHighlights.map((hl) => {
              const icons = [ShieldCheck, Database, Layers];
              const Icon = icons[parseInt(hl.index, 10) - 1] || ShieldCheck;

              return (
                <div
                  key={hl.index}
                  className="relative group p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/70 hover:border-zinc-700/80 transition-all hover:bg-zinc-900/50"
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-mono text-xs text-zinc-500 font-medium">
                      {hl.index}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                      {hl.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="w-4 h-4 text-zinc-300" />
                    <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                      {hl.title}
                    </h3>
                  </div>

                  <div className="text-xs font-mono font-bold text-emerald-400 mb-2">
                    {hl.metric}
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {hl.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
