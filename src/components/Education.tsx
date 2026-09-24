import React from "react";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap, Building2, Calendar, Award, BookOpen, Trophy } from "lucide-react";
import { motion } from "motion/react";

export const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      className="py-16 sm:py-20 border-b border-[#E4DFD3] dark:border-[#383834]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Bold Green Line */}
        <SectionHeading title="Education" id="education" />

        <div className="space-y-6 text-left">
          
          {/* Bachelor's Degree - Prominent Visual Hierarchy */}
          <motion.div 
            id="education-bachelors"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="group border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/60 dark:hover:border-[#4E7260] rounded-lg bg-white/95 dark:bg-[#20201D] p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex items-start space-x-3.5">
                <div className="p-3 rounded-lg bg-[#F3EEE3] dark:bg-[#2C2C28] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] shrink-0 mt-1 transition-colors duration-200">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#3F5D4E] dark:text-[#6EE7B7] mb-1">
                    Undergraduate Degree &bull; 2024 &ndash; 2027
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#2B2B28] dark:text-[#F5F3EC]">
                    B.Tech, AI &amp; Data Science
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-[#6B6B63] dark:text-[#A6A49B] mt-2">
                    <Building2 className="w-4 h-4 text-[#3F5D4E] dark:text-[#6EE7B7]" />
                    <span>Datta Meghe College of Engineering</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] group-hover:border-[#3F5D4E]/40 text-xs font-bold text-[#3F5D4E] dark:text-[#6EE7B7] transition-colors">
                  <Award className="w-3.5 h-3.5" />
                  <span>Grade: 8.4</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F3EEE3] dark:bg-[#2C2C28] border border-[#E4DFD3] dark:border-[#383834] group-hover:border-[#3F5D4E]/40 text-xs font-bold text-[#3F5D4E] dark:text-[#6EE7B7] transition-colors">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2024 &ndash; 2027</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Diploma */}
          <motion.div 
            id="education-diploma"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.25, delay: 0.05, ease: "easeOut" }}
            className="group border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/60 dark:hover:border-[#4E7260] rounded-lg bg-white/75 dark:bg-[#20201D] p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-md bg-[#FAF7F0] dark:bg-[#2C2C28] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] shrink-0 mt-0.5 border border-[#E4DFD3] dark:border-[#383834] transition-colors duration-200">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#6B6B63] dark:text-[#A6A49B] mb-0.5">
                    Foundational Technical Diploma &bull; 2021 &ndash; 2024
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#2B2B28] dark:text-[#F5F3EC]">
                    Diploma, Automation &amp; Robotics
                  </h4>
                  <div className="flex items-center gap-2 text-sm font-medium text-[#6B6B63] dark:text-[#A6A49B] mt-1.5">
                    <Building2 className="w-4 h-4 text-[#3F5D4E] dark:text-[#6EE7B7]" />
                    <span>Abdul Razzak Kalsekar Polytechnic</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto shrink-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] group-hover:border-[#3F5D4E]/40 text-xs font-bold text-[#3F5D4E] dark:text-[#6EE7B7] transition-colors">
                  <Trophy className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>2&times; Topper</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] group-hover:border-[#3F5D4E]/40 text-xs font-bold text-[#3F5D4E] dark:text-[#6EE7B7] transition-colors">
                  <Award className="w-3.5 h-3.5" />
                  <span>Grade: 86.91%</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F3EEE3] dark:bg-[#2C2C28] border border-[#E4DFD3] dark:border-[#383834] group-hover:border-[#3F5D4E]/40 text-xs font-bold text-[#6B6B63] dark:text-[#A6A49B] transition-colors">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2021 &ndash; 2024</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SSC */}
          <motion.div 
            id="education-ssc"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.25, delay: 0.1, ease: "easeOut" }}
            className="group border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/60 dark:hover:border-[#4E7260] rounded-lg bg-white/75 dark:bg-[#20201D] p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-md bg-[#FAF7F0] dark:bg-[#2C2C28] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] shrink-0 mt-0.5 border border-[#E4DFD3] dark:border-[#383834] transition-colors duration-200">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#6B6B63] dark:text-[#A6A49B] mb-0.5">
                    Secondary School Certificate (SSC) &bull; 2008 &ndash; 2021
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-[#2B2B28] dark:text-[#F5F3EC]">
                    SSC
                  </h4>
                  <div className="flex items-center gap-2 text-sm font-medium text-[#6B6B63] dark:text-[#A6A49B] mt-1.5">
                    <Building2 className="w-4 h-4 text-[#3F5D4E] dark:text-[#6EE7B7]" />
                    <span>Angel&apos;s Paradise English School</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto shrink-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] group-hover:border-[#3F5D4E]/40 text-xs font-bold text-[#3F5D4E] dark:text-[#6EE7B7] transition-colors">
                  <Award className="w-3.5 h-3.5" />
                  <span>Grade: 64.00%</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F3EEE3] dark:bg-[#2C2C28] border border-[#E4DFD3] dark:border-[#383834] group-hover:border-[#3F5D4E]/40 text-xs font-bold text-[#6B6B63] dark:text-[#A6A49B] transition-colors">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2008 &ndash; 2021</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
