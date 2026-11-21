"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(portfolioData.personal.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 border-b border-zinc-800/80">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-4 h-4 text-zinc-400" />
        <h2 className="text-base font-semibold text-zinc-100">Get in Touch</h2>
      </div>

      <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/70 hover:border-zinc-700/80 transition-all">
        <h3 className="text-sm font-semibold text-zinc-100 mb-2">
          Interested in working together or discussing systems & security?
        </h3>
        <p className="text-xs text-zinc-400 mb-6 max-w-lg leading-relaxed">
          I am actively exploring Summer 2027 cybersecurity internships and defensive systems roles.
          Drop a direct email or connect through LinkedIn.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${portfolioData.personal.socials.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-zinc-100 text-zinc-900 hover:bg-white transition-all shadow-sm"
          >
            <Send className="w-3.5 h-3.5 text-zinc-900" />
            <span>Send Email</span>
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                <span>{portfolioData.personal.socials.email}</span>
              </>
            )}
          </button>

          <a
            href={portfolioData.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>

          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
