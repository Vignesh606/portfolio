"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import StickyIndex from "@/components/StickyIndex";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/Experience";
import ProjectsSection from "@/components/Projects";
import SkillsSection from "@/components/Skills";
import EducationSection from "@/components/Education";
import MusicSection from "@/components/MusicSection";
import GuestbookSection from "@/components/GuestbookSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col relative selection:bg-zinc-800 selection:text-white">
      {/* Sticky Table of Contents on Right (Desktop) */}
      <StickyIndex />

      {/* Top Navbar */}
      <Navbar onOpenCommand={() => setIsCommandOpen(true)} />

      {/* Main Content Container */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <MusicSection />
        <GuestbookSection />
        <ContactSection />
        <Footer />
      </main>

      {/* ⌘K Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
      />
    </div>
  );
}
