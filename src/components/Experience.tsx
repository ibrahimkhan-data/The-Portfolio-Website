import React from "react";
import { SectionHeading } from "./SectionHeading";
import { Briefcase, Calendar, Cpu, Layers } from "lucide-react";
import { motion } from "motion/react";

export const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-16 sm:py-20 border-b border-[#E4DFD3] dark:border-[#383834]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Bold Green Line */}
        <SectionHeading title="Experience" id="experience" />

        {/* Structured Experience Container */}
        <motion.div 
          id="experience-card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -2 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/60 dark:hover:border-[#4E7260] rounded-lg bg-white/80 dark:bg-[#20201D] p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all duration-300 text-left"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-[#E4DFD3] dark:border-[#383834]">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-md bg-[#F3EEE3] dark:bg-[#2C2C28] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] shrink-0 transition-colors duration-200">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2B2B28] dark:text-[#F5F3EC]">
                  IRABOT Robotics / Embedded Systems Intern
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#6B6B63] dark:text-[#A6A49B] mt-0.5">
                  <Layers className="w-3.5 h-3.5 text-[#3F5D4E] dark:text-[#6EE7B7]" />
                  <span>During Diploma in Automation &amp; Robotics</span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FAF7F0] dark:bg-[#2A2A26] border border-[#E4DFD3] dark:border-[#383834] group-hover:border-[#3F5D4E]/50 group-hover:bg-[#F3EEE3] dark:group-hover:bg-[#2F2F2B] text-xs font-semibold text-[#3F5D4E] dark:text-[#6EE7B7] self-start sm:self-center transition-colors">
              <Calendar className="w-3.5 h-3.5" />
              <span>Duration: 2 months</span>
            </div>
          </div>

          <div className="pt-4 flex items-start space-x-3">
            <Cpu className="w-4 h-4 text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:rotate-12 transition-transform duration-200 shrink-0 mt-1" />
            <p className="text-sm sm:text-base text-[#2B2B28] dark:text-[#F5F3EC] leading-relaxed">
              Hands-on hardware and embedded systems work with Arduino, ESP32, and Raspberry Pi for sensor integration and automation prototypes, providing a strong practical systems foundation that complements data science.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
