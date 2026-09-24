import React from "react";
import { SectionHeading } from "./SectionHeading";
import { Target, CheckCircle2, Crosshair } from "lucide-react";
import { motion } from "motion/react";

export const CareerObjectives: React.FC = () => {
  const focusItems = [
    "Building practical skills",
    "Strengthening SQL",
    "Improving data analysis",
    "Learning EDA",
    "Learning machine learning",
    "Looking for opportunities to apply these skills",
  ];

  return (
    <section 
      id="career" 
      className="py-16 sm:py-20 border-b border-[#E4DFD3]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Bold Green Line */}
        <SectionHeading title="Career Objectives" id="career" />

        {/* Structured Content Container */}
        <motion.div 
          id="career-objectives-card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -2 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/60 dark:hover:border-[#4E7260] rounded-lg bg-white/80 dark:bg-[#20201D] p-6 sm:p-8 shadow-2xs hover:shadow-md transition-all duration-300 text-left"
        >
          {/* Target Internship Opportunities */}
          <div>
            <div className="flex items-center space-x-2.5 mb-3">
              <div className="p-2 rounded-md bg-[#F3EEE3] dark:bg-[#2C2C28] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] transition-colors duration-200">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#2B2B28] dark:text-[#F5F3EC]">
                Target Internship Opportunities
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-3 mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#FAF7F0] dark:bg-[#1E1E1C] border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/50 hover:bg-[#F3EEE3] dark:hover:bg-[#282824] text-sm font-bold text-[#2B2B28] dark:text-[#F5F3EC] transition-all cursor-default shadow-2xs">
                <Crosshair className="w-3.5 h-3.5 text-[#3F5D4E] dark:text-[#6EE7B7]" />
                <span>Data Science Internships</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#FAF7F0] dark:bg-[#1E1E1C] border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/50 hover:bg-[#F3EEE3] dark:hover:bg-[#282824] text-sm font-bold text-[#2B2B28] dark:text-[#F5F3EC] transition-all cursor-default shadow-2xs">
                <Crosshair className="w-3.5 h-3.5 text-[#3F5D4E] dark:text-[#6EE7B7]" />
                <span>Machine Learning Internships</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#F3EEE3] dark:bg-[#2A2A26] border border-[#3F5D4E]/25 text-xs font-semibold text-[#3F5D4E] dark:text-[#6EE7B7]">
                <span>Availability: Starting December 2026</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FAF7F0] dark:bg-[#1E1E1C] border border-[#E4DFD3] dark:border-[#383834] text-xs font-medium text-[#6B6B63] dark:text-[#A6A49B]">
                <span>Thane · Navi Mumbai · Mumbai (Hybrid / Remote)</span>
              </div>
            </div>

            <p 
              className="text-sm sm:text-base text-[#6B6B63] dark:text-[#A6A49B] leading-relaxed"
              style={{ textAlign: "justify", textJustify: "inter-word" }}
            >
              Seeking rigorous internship roles where academic knowledge in data querying, statistical exploration, and machine learning can be translated into reliable models, actionable business insights, and production-tested data workflows.
            </p>
          </div>

          {/* Separator Line */}
          <div 
            id="career-objectives-separator"
            className="border-t border-[#E4DFD3] dark:border-[#383834] my-6" 
            aria-hidden="true" 
          />

          {/* Current Objectives & Focus */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#3F5D4E] dark:text-[#6EE7B7] mb-4">
              Current Objectives &amp; Focus
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {focusItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="group/item flex items-center space-x-3 p-2.5 rounded-md bg-[#FAF7F0] dark:bg-[#1C1C19] border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/50 hover:bg-[#F3EEE3]/80 dark:hover:bg-[#262622] hover:translate-x-1 transition-all duration-150 cursor-default"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#3F5D4E] dark:text-[#6EE7B7] shrink-0 group-hover/item:scale-120 transition-transform" />
                  <span className="text-sm font-medium text-[#2B2B28] dark:text-[#F5F3EC]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
