"use client";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import StudyLogSection from "@/components/StudyLogSection";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <StudyLogSection />
    </div>
  );
}
