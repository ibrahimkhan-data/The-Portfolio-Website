import React from "react";
import { SectionHeading } from "./SectionHeading";
import { 
  GraduationCap, 
  Clock, 
  Target, 
  MapPin 
} from "lucide-react";
import { motion } from "motion/react";

export const AboutMe: React.FC = () => {
  const quickFacts = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "AI & Data Science",
    },
    {
      icon: Clock,
      label: "Current Stage",
      value: "Final Year",
    },
    {
      icon: Target,
      label: "Goal",
      value: "Data Science / ML Internship",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai / Navi Mumbai / Thane",
    },
  ];

  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 border-b border-[#E4DFD3] dark:border-[#383834]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Layout: Left Content & Right Quick Facts Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-9 text-left">
          
          {/* LEFT SIDE: Heading, Intro, Core Areas, Second Paragraph */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 text-left"
          >
            {/* Section Heading with Bold Green Line */}
            <SectionHeading title="About Me" id="about" />

            {/* Intro Paragraph - Justified */}
            <div className="mb-6 text-left">
              <p 
                id="about-bio-paragraph-1"
                className="text-base sm:text-[17px] text-[#2B2B28] dark:text-[#F5F3EC] leading-relaxed text-justify"
                style={{ textAlign: "justify" }}
              >
                I am a final-year Artificial Intelligence &amp; Data Science undergraduate student focused on practical data fundamentals and structured problem solving. My academic journey combines foundational computer science principles with hands-on coursework in data processing, database management, and machine learning.
              </p>
            </div>

            {/* Core Areas of Focus & Interest - 2-Column (3 Left, 2 Right) Layout */}
            <div className="mb-6 text-left">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#3F5D4E] dark:text-[#6EE7B7] mb-3 text-left">
                Core Areas of Focus &amp; Interest
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-2 text-sm sm:text-[15px] font-medium text-[#2B2B28] dark:text-[#F5F3EC] text-left">
                {/* LEFT COLUMN — 3 items vertically */}
                <div className="space-y-1.5 text-left">
                  <div className="group/area flex items-center space-x-2 py-0.5 px-1.5 -mx-1.5 rounded hover:bg-[#F3EEE3]/60 dark:hover:bg-[#282824]/50 hover:translate-x-1 transition-all duration-150 cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3F5D4E] dark:bg-[#6EE7B7] shrink-0 group-hover/area:scale-125 transition-transform" aria-hidden="true" />
                    <span>Data Science</span>
                  </div>
                  <div className="group/area flex items-center space-x-2 py-0.5 px-1.5 -mx-1.5 rounded hover:bg-[#F3EEE3]/60 dark:hover:bg-[#282824]/50 hover:translate-x-1 transition-all duration-150 cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3F5D4E] dark:bg-[#6EE7B7] shrink-0 group-hover/area:scale-125 transition-transform" aria-hidden="true" />
                    <span>Data Analysis</span>
                  </div>
                  <div className="group/area flex items-center space-x-2 py-0.5 px-1.5 -mx-1.5 rounded hover:bg-[#F3EEE3]/60 dark:hover:bg-[#282824]/50 hover:translate-x-1 transition-all duration-150 cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3F5D4E] dark:bg-[#6EE7B7] shrink-0 group-hover/area:scale-125 transition-transform" aria-hidden="true" />
                    <span>Machine Learning</span>
                  </div>
                </div>

                {/* RIGHT COLUMN — 2 items vertically */}
                <div className="space-y-1.5 text-left">
                  <div className="group/area flex items-center space-x-2 py-0.5 px-1.5 -mx-1.5 rounded hover:bg-[#F3EEE3]/60 dark:hover:bg-[#282824]/50 hover:translate-x-1 transition-all duration-150 cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3F5D4E] dark:bg-[#6EE7B7] shrink-0 group-hover/area:scale-125 transition-transform" aria-hidden="true" />
                    <span>Practical problem solving</span>
                  </div>
                  <div className="group/area flex items-center space-x-2 py-0.5 px-1.5 -mx-1.5 rounded hover:bg-[#F3EEE3]/60 dark:hover:bg-[#282824]/50 hover:translate-x-1 transition-all duration-150 cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3F5D4E] dark:bg-[#6EE7B7] shrink-0 group-hover/area:scale-125 transition-transform" aria-hidden="true" />
                    <span>Continuous learning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Paragraph - Justified */}
            <div className="text-left">
              <p 
                id="about-bio-paragraph-2"
                className="text-base sm:text-[17px] text-[#2B2B28] dark:text-[#F5F3EC] leading-relaxed text-justify"
                style={{ textAlign: "justify" }}
              >
                I prioritize data hygiene, analytical thinking, and clean, reproducible SQL and Python code while developing practical expertise through end-to-end exploratory analysis and preparing for industry internship opportunities.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Quick Facts Box - Proportionally Balanced */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 text-left"
          >
            <div id="quick-facts" className="text-left">
              <h3 className="text-xs uppercase tracking-wider font-bold text-[#3F5D4E] dark:text-[#6EE7B7] mb-3 text-left">
                Quick Facts
              </h3>
              
              <div 
                id="quick-facts-box"
                className="bg-white/95 dark:bg-[#20201D] border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/50 rounded-lg p-6 sm:p-7.5 shadow-2xs divide-y divide-[#E4DFD3] dark:divide-[#383834] transition-colors"
              >
                {quickFacts.map((fact, idx) => {
                  const IconComponent = fact.icon;
                  return (
                    <div 
                      key={idx}
                      id={`quick-fact-${idx}`}
                      className="group/fact py-4 sm:py-4.5 first:pt-0 last:pb-0 flex items-start space-x-3.5 text-left -mx-2 px-2 rounded-md hover:bg-[#F3EEE3]/40 dark:hover:bg-[#282824]/50 hover:translate-x-1 transition-all duration-200 cursor-default"
                    >
                      <div className="p-2.5 rounded-md bg-[#F3EEE3] dark:bg-[#2C2C28] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover/fact:bg-[#3F5D4E] group-hover/fact:text-white dark:group-hover/fact:bg-[#6EE7B7] dark:group-hover/fact:text-[#171715] shrink-0 mt-0.5 border border-[#E4DFD3] dark:border-[#383834] transition-colors duration-200">
                        <IconComponent className="w-4.5 h-4.5" />
                      </div>
                      <div className="min-w-0 text-left">
                        <div className="text-xs font-bold text-[#6B6B63] dark:text-[#A6A49B]">
                          {fact.label}
                        </div>
                        <div className="text-sm sm:text-base font-semibold text-[#2B2B28] dark:text-[#F5F3EC] mt-0.5">
                          {fact.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
