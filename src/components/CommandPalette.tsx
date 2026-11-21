"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  FolderGit2,
  Briefcase,
  Wrench,
  GraduationCap,
  Music,
  Mail,
  FileText,
  Copy,
  Check,
  X,
  ExternalLink,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.socials.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const navigateTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const actions = [
    {
      group: "Navigation",
      items: [
        {
          id: "projects",
          label: "Projects",
          hint: "View built systems & ML classifiers",
          icon: FolderGit2,
          action: () => navigateTo("projects"),
        },
        {
          id: "experience",
          label: "Experience",
          hint: "TheAISignal & BashCraft Club",
          icon: Briefcase,
          action: () => navigateTo("experience"),
        },
        {
          id: "skills",
          label: "Skills & Tech",
          hint: "Languages, security tools, frameworks",
          icon: Wrench,
          action: () => navigateTo("skills"),
        },
        {
          id: "education",
          label: "Education",
          hint: "VIT Bhopal University coursework",
          icon: GraduationCap,
          action: () => navigateTo("education"),
        },
        {
          id: "music",
          label: "Music & Playlist",
          hint: "Curated Spotify heavy rotation",
          icon: Music,
          action: () => navigateTo("music"),
        },
      ],
    },
    {
      group: "Quick Actions & Socials",
      items: [
        {
          id: "copy-email",
          label: copied ? "Email Copied!" : "Copy Email",
          hint: portfolioData.personal.socials.email,
          icon: copied ? Check : Copy,
          action: handleCopyEmail,
        },
        {
          id: "github",
          label: "GitHub Profile",
          hint: `@${portfolioData.personal.socials.githubUsername}`,
          icon: GithubIcon,
          action: () => {
            window.open(portfolioData.personal.socials.github, "_blank");
            onClose();
          },
        },
        {
          id: "linkedin",
          label: "LinkedIn Profile",
          hint: "/in/vigneshmadineni",
          icon: LinkedinIcon,
          action: () => {
            window.open(portfolioData.personal.socials.linkedin, "_blank");
            onClose();
          },
        },
        {
          id: "resume",
          label: "View Résumé",
          hint: "PDF document",
          icon: FileText,
          action: () => {
            window.open(portfolioData.personal.socials.resume, "_blank");
            onClose();
          },
        },
      ],
    },
  ];

  const filteredGroups = actions
    .map((grp) => ({
      ...grp,
      items: grp.items.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.hint.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((grp) => grp.items.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/50">
          <Search className="w-4 h-4 text-zinc-400 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands, sections, or links..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-zinc-400 hover:text-zinc-200 rounded-md hover:bg-zinc-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-zinc-900">
          {filteredGroups.length === 0 ? (
            <div className="p-6 text-center text-xs text-zinc-500">
              No results found for &quot;{query}&quot;
            </div>
          ) : (
            filteredGroups.map((grp) => (
              <div key={grp.group} className="py-1.5">
                <div className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  {grp.group}
                </div>
                {grp.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center justify-between px-3 py-2 text-left rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-zinc-900/90 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200" />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-400">
                        {item.hint}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-zinc-900 bg-zinc-950/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-zinc-400" />
            <span>vignesh.portfolio</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Navigation:</span>
            <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
              ESC
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
