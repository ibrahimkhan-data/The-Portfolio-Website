import React from "react";
import { Github, ArrowRight, FileText } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {

  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center py-8 sm:py-10 border-b border-[#E4DFD3] dark:border-[#383834] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="flex flex-col items-start text-left">
          
          {/* Availability Label */}
          <motion.div 
            id="hero-availability-label"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EEE3] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] text-xs font-medium text-[#3F5D4E] dark:text-[#6EE7B7] mb-4 shadow-2xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3F5D4E] dark:bg-[#6EE7B7] animate-pulse" />
            <span>Open to Data Science &amp; ML Internships</span>
          </motion.div>

          {/* Name - Large Serif Bold Dark/Black */}
          <motion.h1 
            id="hero-name"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.06, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2B2B28] dark:text-[#F5F3EC] mb-2"
          >
            Ibrahim Khan
          </motion.h1>

          {/* Subtitle - Reduced font size to ~14-15px with small delicate dot */}
          <motion.h2 
            id="hero-subtitle"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}
            className="inline-flex flex-wrap items-center gap-2 text-sm sm:text-[15px] font-semibold text-[#3F5D4E] dark:text-[#6EE7B7] tracking-tight mb-3"
          >
            <span>Data Scientist</span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#3F5D4E]/60 dark:bg-[#6EE7B7]/70" />
            <span>Final Year AI &amp; Data Science Student</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            id="hero-description"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.18, ease: "easeOut" }}
            className="text-sm sm:text-base text-[#6B6B63] dark:text-[#A6A49B] max-w-2xl leading-relaxed mb-5 text-left"
          >
            Exploring data, building practical skills, and learning through real-world projects.
          </motion.p>

          {/* Buttons & Navigation Link */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.24, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-0.5"
          >
            {/* Instant In-App Preview Button */}
            {onOpenResume && (
              <motion.button
                id="hero-btn-preview-resume"
                onClick={onOpenResume}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-xs sm:text-sm text-white bg-[#3F5D4E] hover:bg-[#2F4739] dark:bg-[#6EE7B7] dark:text-[#111A14] dark:hover:bg-[#5cd4a5] hover:shadow-md transition-all active:scale-[0.99] cursor-pointer group shadow-xs"
              >
                <FileText className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>View Resume</span>
              </motion.button>
            )}

            <motion.a
              id="hero-btn-view-github"
              href="https://github.com/ibrahimkhan-data/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg font-medium text-xs sm:text-sm text-[#2B2B28] dark:text-[#F5F3EC] bg-white dark:bg-[#22221F] border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E] hover:bg-[#F3EEE3] dark:hover:bg-[#2A2A26] hover:shadow-md transition-all active:scale-[0.99] group"
            >
              <Github className="w-4 h-4 text-[#2B2B28] dark:text-[#F5F3EC] group-hover:rotate-6 transition-transform duration-200" />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              id="hero-link-learn-more"
              href="#about"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-[#3F5D4E] dark:text-[#6EE7B7] hover:text-[#2F4739] dark:hover:text-[#A7F3D0] transition-colors ml-1 group cursor-pointer"
            >
              <span>Learn more about me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </motion.a>
          </motion.div>

          {/* KEY STATS BAR */}
          <motion.div 
            id="hero-key-stats-bar"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="w-full mt-6 sm:mt-8 pt-5 border-t border-[#3F5D4E] dark:border-[#6EE7B7]"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
              {[
                {
                  value: "8.4",
                  label: "B.Tech CGPA",
                  subtext: "AI & Data Science (2024–27)",
                },
                {
                  value: "86.91%",
                  label: "Diploma Score",
                  subtext: "Automation & Robotics",
                },
                {
                  value: "3+",
                  label: "Certifications",
                  subtext: "Oracle AI, AWS & Python",
                },
                {
                  value: "IRABOT",
                  label: "Internship",
                  subtext: "Robotics & Automation",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group p-3 sm:p-3.5 rounded-lg bg-[#FAF7F0] dark:bg-[#20201D] border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/60 dark:hover:border-[#6EE7B7]/60 hover:shadow-xs transition-all duration-200 text-left"
                >
                  <div className="text-xl sm:text-2xl font-bold font-serif text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:translate-x-0.5 transition-transform duration-150">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-[12.5px] font-bold text-[#2B2B28] dark:text-[#F5F3EC] mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10.5px] text-[#6B6B63] dark:text-[#A6A49B] mt-0.5 leading-tight">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
