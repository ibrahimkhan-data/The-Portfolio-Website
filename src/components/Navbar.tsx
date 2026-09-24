import React, { useState } from "react";
import { Download, Github, Linkedin, Menu, X, Sun, Moon, Loader2, Check } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useResumeDownload } from "../utils/downloadResume";

interface NavbarProps {
  isDark?: boolean;
  toggleDark?: () => void;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark = false, toggleDark, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { downloadStatus, handleDownload } = useResumeDownload();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Projects", href: "#projects" },
    { label: "Career", href: "#career" },
    { label: "Connect", href: "#connect" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F0]/90 dark:bg-[#1A1A18]/90 backdrop-blur-sm border-b border-[#E4DFD3] dark:border-[#383834] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a 
            href="#hero" 
            className="font-serif font-bold text-lg sm:text-xl text-[#2B2B28] dark:text-[#F5F3EC] hover:text-[#3F5D4E] dark:hover:text-[#6EE7B7] transition-colors mr-8 lg:mr-10 xl:mr-12 shrink-0"
          >
            Ibrahim Khan
          </a>

          {/* Desktop Nav - Comfortable Tab Spacing with Bold Earthy Green Underline on Hover */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-sm font-medium text-[#6B6B63] dark:text-[#A6A49B]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1.5 text-[#6B6B63] dark:text-[#A6A49B] hover:text-[#2B2B28] dark:hover:text-[#F5F3EC] transition-colors group"
              >
                <span>{link.label}</span>
                {/* Short bold underline: #3F5D4E, no glow, smooth subtle transition */}
                <span 
                  className="absolute left-0 bottom-0 w-full h-[2.5px] bg-[#3F5D4E] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-center"
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden sm:flex items-center space-x-2.5">
          {/* Dark / Light Mode Toggle Button */}
          {toggleDark && (
            <button
              onClick={toggleDark}
              className="p-2 rounded-md text-[#2B2B28] dark:text-[#F5F3EC] hover:bg-[#F3EEE3] dark:hover:bg-[#282824] transition-colors cursor-pointer mr-1"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-[#F59E0B]" /> : <Moon className="w-4 h-4 text-[#2B2B28]" />}
            </button>
          )}

          {/* LinkedIn Icon immediately to the left of GitHub icon */}
          <a
            href="https://www.linkedin.com/in/ibrahimkhan-data/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#2B2B28] dark:text-[#F5F3EC] hover:text-[#3F5D4E] dark:hover:text-[#6EE7B7] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* Existing GitHub Icon */}
          <a
            href="https://github.com/ibrahimkhan-data/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#2B2B28] dark:text-[#F5F3EC] hover:text-[#3F5D4E] dark:hover:text-[#6EE7B7] transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* Resume download button */}
          <motion.a
            id="nav-btn-resume"
            href="/resume/Khan-Mohammad-Ibrahim-Shadab-Resume.pdf"
            download="Khan-Mohammad-Ibrahim-Shadab-Resume.pdf"
            onClick={handleDownload}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#3F5D4E] hover:bg-[#2F4739] hover:shadow-sm rounded-md transition-all shadow-xs cursor-pointer group"
          >
            {downloadStatus === "loading" ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                <span>Downloading...</span>
              </>
            ) : downloadStatus === "success" ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-200" />
                <span>Resume</span>
              </>
            )}
          </motion.a>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center space-x-1.5">
          {toggleDark && (
            <button
              onClick={toggleDark}
              className="p-2 rounded-md text-[#2B2B28] dark:text-[#F5F3EC] hover:bg-[#F3EEE3] dark:hover:bg-[#282824] transition-colors cursor-pointer"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-[#F59E0B]" /> : <Moon className="w-4 h-4 text-[#2B2B28]" />}
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2B2B28] dark:text-[#F5F3EC] rounded-md hover:bg-[#F3EEE3] dark:hover:bg-[#282824] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E4DFD3] dark:border-[#383834] bg-[#FAF7F0] dark:bg-[#1A1A18] px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-sm font-medium text-[#6B6B63] dark:text-[#A6A49B] hover:text-[#3F5D4E] dark:hover:text-[#6EE7B7]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E4DFD3] dark:border-[#383834] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <a
                href="https://www.linkedin.com/in/ibrahimkhan-data/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[#2B2B28] dark:text-[#F5F3EC] font-medium"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/ibrahimkhan-data/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[#2B2B28] dark:text-[#F5F3EC] font-medium"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
            <a
              id="mobile-nav-btn-resume"
              href="/resume/Khan-Mohammad-Ibrahim-Shadab-Resume.pdf"
              download="Khan-Mohammad-Ibrahim-Shadab-Resume.pdf"
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownload();
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#3F5D4E] hover:bg-[#2F4739] rounded-md cursor-pointer transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <motion.div
        id="navbar-scroll-progress"
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#3F5D4E] dark:bg-[#6EE7B7] origin-left pointer-events-none z-50"
        style={{ scaleX }}
      />
    </header>
  );
};
