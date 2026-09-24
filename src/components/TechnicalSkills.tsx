import React from "react";
import { SectionHeading } from "./SectionHeading";
import { Code2, BarChart2, Wrench, CheckCircle2, Compass } from "lucide-react";
import { motion } from "motion/react";

export const TechnicalSkills: React.FC = () => {
  const categories = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["Python", "SQL", "MySQL"],
    },
    {
      title: "Data Science & ML",
      icon: BarChart2,
      skills: ["Machine Learning", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    },
    {
      title: "Tools & BI",
      icon: Wrench,
      skills: ["Power BI", "Git & GitHub", "Jupyter Notebook", "VS Code"],
    },
  ];

  const roadmapSteps = [
    { num: "1", title: "SQL" },
    { num: "2", title: "Data Analysis Fundamentals" },
    { num: "3", title: "Exploratory Data Analysis" },
    { num: "4", title: "Machine Learning" },
  ];

  return (
    <section 
      id="skills" 
      className="py-16 sm:py-20 border-b border-[#E4DFD3] dark:border-[#383834]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtitle */}
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Core technologies and tools utilized throughout academic coursework, structured study, and practical exercises."
          id="skills" 
        />

        {/* Structured 3-Column Skills Grid with Subtle Box Lines */}
        <motion.div 
          id="skills-structured-grid"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 border border-[#E4DFD3] dark:border-[#383834] rounded-lg bg-white/80 dark:bg-[#20201D] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#E4DFD3] dark:divide-[#383834] shadow-2xs mb-8"
        >
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div 
                key={idx} 
                className="group p-6 text-left hover:bg-[#FAF7F0]/60 dark:hover:bg-[#252522]/50 transition-colors"
              >
                <div className="flex items-center space-x-2.5 pb-4 border-b border-[#E4DFD3] dark:border-[#383834]">
                  <Icon className="w-4 h-4 text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="text-base font-bold text-[#2B2B28] dark:text-[#F5F3EC]">
                    {cat.title}
                  </h3>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <li 
                      key={sIdx}
                      className="group/item text-sm font-medium text-[#2B2B28] dark:text-[#F5F3EC] flex items-center space-x-2 py-1 px-2 -mx-2 rounded-md hover:bg-[#F3EEE3]/80 dark:hover:bg-[#2C2C28] hover:translate-x-1 transition-all duration-150 cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3F5D4E] dark:bg-[#6EE7B7] group-hover/item:scale-125 transition-transform" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </motion.div>

        {/* Assessed Working Proficiency & Currently Learning in structured grid */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          
          {/* Assessed Working Proficiency */}
          <div 
            id="assessed-proficiency"
            className="border border-[#E4DFD3] dark:border-[#383834] rounded-lg bg-white/80 dark:bg-[#20201D] p-6 text-left shadow-2xs hover:border-[#3F5D4E]/40 transition-colors"
          >
            <div className="flex items-center space-x-2.5 pb-3 border-b border-[#E4DFD3] dark:border-[#383834] mb-4">
              <CheckCircle2 className="w-4 h-4 text-[#3F5D4E] dark:text-[#6EE7B7]" />
              <h3 className="text-base font-bold text-[#2B2B28] dark:text-[#F5F3EC]">
                Assessed Working Proficiency
              </h3>
            </div>

            <div className="space-y-3 mb-4">
              <div className="group flex items-center justify-between p-2.5 rounded-md bg-[#F3EEE3]/70 dark:bg-[#282824] border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/50 hover:bg-[#F3EEE3] dark:hover:bg-[#2F2F2B] hover:shadow-xs transition-all">
                <span className="font-bold text-sm text-[#2B2B28] dark:text-[#F5F3EC] group-hover:translate-x-0.5 transition-transform">Python</span>
                <span className="text-xs font-semibold text-[#3F5D4E] dark:text-[#6EE7B7] bg-white dark:bg-[#1E1E1C] px-2 py-0.5 rounded border border-[#E4DFD3] dark:border-[#383834] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] transition-colors">
                  Intermediate
                </span>
              </div>
              <div className="group flex items-center justify-between p-2.5 rounded-md bg-[#F3EEE3]/70 dark:bg-[#282824] border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/50 hover:bg-[#F3EEE3] dark:hover:bg-[#2F2F2B] hover:shadow-xs transition-all">
                <span className="font-bold text-sm text-[#2B2B28] dark:text-[#F5F3EC] group-hover:translate-x-0.5 transition-transform">SQL</span>
                <span className="text-xs font-semibold text-[#3F5D4E] dark:text-[#6EE7B7] bg-white dark:bg-[#1E1E1C] px-2 py-0.5 rounded border border-[#E4DFD3] dark:border-[#383834] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] transition-colors">
                  Intermediate
                </span>
              </div>
            </div>

            <p className="text-xs text-[#6B6B63] dark:text-[#A6A49B] leading-relaxed">
              Proficiency levels reflect demonstrated comfort with standard syntax, querying, and structured problem solving in academic coursework and personal practice.
            </p>
          </div>

          {/* Currently Learning */}
          <div 
            id="currently-learning"
            className="border border-[#E4DFD3] dark:border-[#383834] rounded-lg bg-white/80 dark:bg-[#20201D] p-6 text-left shadow-2xs hover:border-[#3F5D4E]/40 transition-colors"
          >
            <div className="flex items-center space-x-2.5 pb-3 border-b border-[#E4DFD3] dark:border-[#383834] mb-3">
              <Compass className="w-4 h-4 text-[#3F5D4E] dark:text-[#6EE7B7]" />
              <h3 className="text-base font-bold text-[#2B2B28] dark:text-[#F5F3EC]">
                Currently Learning
              </h3>
            </div>

            <p className="text-xs text-[#6B6B63] dark:text-[#A6A49B] leading-relaxed mb-4">
              A continuous, deliberate learning roadmap focused on solidifying foundational data workflows before advancing to complex modeling.
            </p>

            <div className="space-y-2">
              {roadmapSteps.map((step) => (
                <div 
                  key={step.num}
                  className="group flex items-center space-x-3 text-sm py-1.5 px-2.5 rounded-md bg-[#FAF7F0] dark:bg-[#1C1C19] border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/50 hover:bg-[#F3EEE3]/70 dark:hover:bg-[#262622] hover:translate-x-1 transition-all duration-200"
                >
                  <span className="font-bold text-xs text-[#3F5D4E] dark:text-[#6EE7B7] bg-[#F3EEE3] dark:bg-[#262622] w-5 h-5 rounded flex items-center justify-center border border-[#E4DFD3] dark:border-[#383834] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] transition-colors">
                    {step.num}
                  </span>
                  <span className="font-medium text-[#2B2B28] dark:text-[#F5F3EC]">
                    {step.title}
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
