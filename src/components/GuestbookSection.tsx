"use client";

import React, { useState, useEffect } from "react";
import { MessageSquareQuote, Send, Star, Check, MessageCircle, PenLine, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { GuestbookEntry, portfolioData } from "@/data/portfolio";

export default function GuestbookSection() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Load user-submitted notes from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio_user_guestbook");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setEntries(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const colors = ["bg-emerald-500", "bg-blue-500", "bg-purple-500", "bg-amber-500", "bg-cyan-500"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      handle: `@${name.trim().toLowerCase().replace(/\s+/g, "")}`,
      message: message.trim(),
      date: "Just now",
      avatarColor: randomColor,
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);

    try {
      localStorage.setItem("portfolio_user_guestbook", JSON.stringify(updated));
    } catch {
      // ignore
    }

    setName("");
    setMessage("");
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="guestbook" className="py-12 border-b border-zinc-800/80">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <MessageSquareQuote className="w-4 h-4 text-zinc-400" />
            <h2 className="text-base font-semibold text-zinc-100">Guestbook & Community Notes</h2>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Leave a note in the local preview or post publicly on GitHub Discussions.
          </p>
        </div>

        <a
          href="https://github.com/Vignesh606/Vignesh606/discussions"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 transition-colors self-start sm:self-auto"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Public Discussions</span>
          <ExternalLink className="w-3 h-3 text-zinc-500" />
        </a>
      </div>

      {/* Interactive Comment / Sign Form */}
      <div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/80 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sign the Guestbook</span>
          </span>
          {submitted && (
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 animate-in fade-in">
              <Check className="w-3.5 h-3.5" /> Note saved locally!
            </span>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name or handle..."
              required
              className="px-3 py-2 rounded-lg bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
            />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave a note or message..."
              required
              className="sm:col-span-2 px-3 py-2 rounded-lg bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
            <span className="text-[11px] font-mono text-zinc-500">
              * Local browser preview. Use GitHub Discussions for permanent public posts.
            </span>
            <button
              type="submit"
              disabled={isSubmitting || !name.trim() || !message.trim()}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-white text-zinc-900 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-sm self-end sm:self-auto"
            >
              <Send className="w-3 h-3 text-zinc-900" />
              <span>Post Note</span>
            </button>
          </div>
        </form>
      </div>

      {/* List of Community Notes or Empty State */}
      {entries.length === 0 ? (
        <div className="p-8 rounded-xl bg-zinc-900/10 border border-dashed border-zinc-800/80 text-center mb-8">
          <PenLine className="w-6 h-6 text-zinc-600 mx-auto mb-2" />
          <p className="text-xs font-mono text-zinc-400">
            No notes yet. Be the first to leave a message or sign via GitHub Discussions!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="p-4 rounded-xl bg-zinc-900/20 border border-zinc-800/60 hover:border-zinc-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-5 h-5 rounded-full ${entry.avatarColor} text-[10px] font-bold text-white flex items-center justify-center uppercase`}
                    >
                      {entry.name.charAt(0)}
                    </div>
                    <span className="text-xs font-semibold text-zinc-200 truncate max-w-[120px]">
                      {entry.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 flex-shrink-0">
                    {entry.date}
                  </span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed italic">
                  &ldquo;{entry.message}&rdquo;
                </p>
              </div>
              {entry.handle && (
                <div className="text-[10px] font-mono text-zinc-500 mt-2.5 pt-1.5 border-t border-zinc-800/40">
                  {entry.handle}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Quote & Star Section */}
      <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/70 text-center max-w-xl mx-auto space-y-4">
        <div>
          <p className="text-sm italic font-serif text-zinc-300 leading-relaxed">
            &ldquo;A ship in harbor is safe, but that is not what ships are built for.&rdquo;
          </p>
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-1 block">
            — John A. Shedd
          </span>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 transition-all shadow-sm"
          >
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Star on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
