import React from "react";
import { SectionHeading } from "./SectionHeading";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { motion } from "motion/react";

export const GitHubActivity: React.FC = () => {
  return (
    <section 
      id="github" 
      className="py-16 sm:py-20 border-b border-[#E4DFD3]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Bold Green Line */}
        <SectionHeading title="GitHub Activity & Code" id="github" />

        {/* Structured GitHub Card */}
        <motion.div 
          id="github-profile-card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -2 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/60 dark:hover:border-[#4E7260] rounded-lg bg-white/80 dark:bg-[#20201D] p-6 sm:p-8 shadow-2xs hover:shadow-md transition-all duration-300 text-left"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-[#F3EEE3] dark:bg-[#2C2C28] text-[#2B2B28] dark:text-[#F5F3EC] group-hover:bg-[#2B2B28] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-[#171715] shrink-0 border border-[#E4DFD3] dark:border-[#383834] transition-colors duration-200">
                <Github className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-[#2B2B28] dark:text-[#F5F3EC]">
                    GitHub Profile &amp; Code Repositories
                  </h3>
                </div>
                <p className="text-sm font-semibold text-[#3F5D4E] dark:text-[#6EE7B7] mt-0.5">
                  @ibrahimkhan-data
                </p>
                <p 
                  className="text-sm text-[#6B6B63] dark:text-[#A6A49B] mt-2 max-w-xl leading-relaxed"
                  style={{ textAlign: "justify", textJustify: "inter-word" }}
                >
                  Explore public repositories, code commits, analytical scripts, and technical implementations maintained throughout academic study and self-directed practice.
                </p>
              </div>
            </div>

            <a
              id="github-profile-link"
              href="https://github.com/ibrahimkhan-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] text-sm font-semibold text-[#2B2B28] dark:text-[#F5F3EC] hover:text-[#3F5D4E] dark:hover:text-[#6EE7B7] hover:border-[#3F5D4E] hover:bg-[#F3EEE3] dark:hover:bg-[#2E2E2A] transition-all self-start sm:self-center shrink-0 shadow-2xs"
            >
              <Github className="w-4 h-4 group-hover/btn:rotate-6 transition-transform" />
              <span>View GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-[#6B6B63] dark:text-[#A6A49B] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="mt-6 pt-5 border-t border-[#E4DFD3] dark:border-[#383834] flex items-center gap-2 text-xs text-[#6B6B63] dark:text-[#A6A49B]">
            <Code2 className="w-4 h-4 text-[#3F5D4E] dark:text-[#6EE7B7]" />
            <span>Direct repository access and verified revision history on GitHub</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
