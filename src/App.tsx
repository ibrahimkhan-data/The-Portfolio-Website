import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { TechnicalSkills } from "./components/TechnicalSkills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { CertificationsTraining } from "./components/CertificationsTraining";
import { Projects } from "./components/Projects";
import { CareerObjectives } from "./components/CareerObjectives";
import { GitHubActivity } from "./components/GitHubActivity";
import { LetsConnect } from "./components/LetsConnect";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ChatBot } from "./components/ChatBot";
import { ResumeModal } from "./components/ResumeModal";
import { ResumePage } from "./components/ResumePage";

export default function App() {
  const isResumePage = typeof window !== "undefined" && (window.location.pathname === "/resume" || window.location.pathname === "/resume/");

  if (isResumePage) {
    return <ResumePage />;
  }

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio-theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  }, [isDark]);

  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen text-[#2B2B28] dark:text-[#F5F3EC] flex flex-col font-sans selection:bg-[#6EE7B7]/40 selection:text-[#2F4739] transition-colors">
      {/* Sticky Subtle Navigation Header with Dark/Light Toggle & LinkedIn icon */}
      <Navbar isDark={isDark} toggleDark={toggleDark} onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections - Strictly Ordered with Continuous Grid Background */}
      <main className="flex-1 w-full portfolio-grid-bg transition-colors">
        {/* 1. Hero */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* 2. About Me */}
        <AboutMe />

        {/* 3. Technical Skills */}
        <TechnicalSkills />

        {/* 4. Experience */}
        <Experience />

        {/* 5. Education */}
        <Education />

        {/* 6. Certifications & Training */}
        <CertificationsTraining />

        {/* 7. Projects */}
        <Projects />

        {/* 8. Career Objectives */}
        <CareerObjectives />

        {/* 9. GitHub Activity & Code */}
        <GitHubActivity />

        {/* 10. Let's Connect */}
        <LetsConnect />
      </main>

      {/* 11. Footer - Compact, slightly darker warm cream (#EAE3D5) */}
      <Footer />

      {/* Floating Scroll to Top button */}
      <ScrollToTop />

      {/* Floating Gemini AI Chat Assistant */}
      <ChatBot />

      {/* Instant Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
