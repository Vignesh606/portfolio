"use client";

import React from "react";
import { Music, Disc3, ExternalLink, Headphones, Flame } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function MusicSection() {
  return (
    <section id="music" className="py-12 border-b border-zinc-800/80">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div className="flex items-center gap-2">
          <Music className="w-4 h-4 text-zinc-400" />
          <h2 className="text-base font-semibold text-zinc-100">Music & Heavy Rotation</h2>
        </div>

        <a
          href={portfolioData.music.playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          <Headphones className="w-3.5 h-3.5 text-emerald-400" />
          <span>Open Full Playlist</span>
          <ExternalLink className="w-3 h-3 text-zinc-500" />
        </a>
      </div>

      {/* Curation Philosophy & Stats */}
      <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/70 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
            Curation Philosophy
          </span>
          <p className="text-sm font-medium text-zinc-200 italic mt-0.5">
            &ldquo;{portfolioData.music.tagline}&rdquo;
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Disc3 className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: "6s" }} />
            <span>{portfolioData.music.stats.tracks} tracks</span>
          </div>
          <span className="text-zinc-600">•</span>
          <span>{portfolioData.music.stats.artists} artists</span>
        </div>
      </div>

      {/* On Repeat Highlight Track Player */}
      <div className="mb-5 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 mt-0.5">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                On Repeat Right Now
              </span>
            </div>
            <h3 className="text-sm font-semibold text-zinc-100">
              {portfolioData.music.onRepeat.title}
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              {portfolioData.music.onRepeat.artist} • <span className="text-zinc-500">{portfolioData.music.onRepeat.album}</span>
            </p>
          </div>
        </div>

        <div className="w-full md:w-80">
          <iframe
            style={{ borderRadius: "10px" }}
            src={portfolioData.music.onRepeat.embedUrl}
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="On Repeat - m y . l i f e by J. Cole"
          />
        </div>
      </div>

      {/* Main Spotify Embed Player */}
      <div className="w-full rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-950 shadow-lg mb-6">
        <iframe
          style={{ borderRadius: "12px" }}
          src={portfolioData.music.embedUrl}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify Player - The Playlist"
        />
      </div>

      {/* Artists on Rotation - Clean Uniform Aesthetic */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
            Artists on Rotation
          </span>
          <span className="text-[11px] font-mono text-zinc-500">
            +{portfolioData.music.remainingArtistsCount} more on Spotify
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {portfolioData.music.topArtists.map((artist) => (
            <span
              key={artist}
              className="text-xs px-2.5 py-1 rounded-md font-mono bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 border border-zinc-800 transition-colors"
            >
              {artist}
            </span>
          ))}
          <span className="text-xs px-2.5 py-1 rounded-md font-mono bg-zinc-900/30 text-zinc-500 border border-dashed border-zinc-800">
            +{portfolioData.music.remainingArtistsCount} more
          </span>
        </div>
      </div>
    </section>
  );
}
