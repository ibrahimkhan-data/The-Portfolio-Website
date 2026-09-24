import React from "react";
import { SectionHeading } from "./SectionHeading";
import { 
  Cloud, 
  ExternalLink, 
  Award, 
  Presentation, 
  Clock, 
  CalendarCheck,
  CheckCircle 
} from "lucide-react";
import { motion } from "motion/react";

export const CertificationsTraining: React.FC = () => {
  return (
    <section 
      id="certifications" 
      className="py-16 sm:py-20 border-b border-[#E4DFD3] dark:border-[#383834]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtitle */}
        <SectionHeading 
          title="Certifications & Training" 
          subtitle="Verified credentials and structured technical workshops completed to complement academic coursework."
          id="certifications" 
        />

        {/* Group 1: Professional Certifications & Foundational Credentials */}
        <div className="mb-8 text-left">
          <h3 className="text-xs uppercase tracking-wider font-bold text-[#3F5D4E] dark:text-[#6EE7B7] mb-4">
            Professional Certifications &amp; Foundational Credentials
          </h3>

          <div className="space-y-4">
            
            {/* Oracle Agentic AI */}
            <motion.div 
              id="cert-oracle"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/60 dark:hover:border-[#4E7260] rounded-lg bg-white/85 dark:bg-[#20201D] p-6 shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-md bg-[#F3EEE3] dark:bg-[#2C2C28] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] shrink-0 mt-0.5 transition-colors duration-200">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#6B6B63] dark:text-[#A6A49B] uppercase tracking-wide">
                      Oracle
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#2B2B28] dark:text-[#F5F3EC] mt-0.5">
                      Agentic AI Certified Foundations Associate
                    </h4>
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#6B6B63] dark:text-[#A6A49B] mt-2.5">
                      <span className="flex items-center gap-1">
                        <CalendarCheck className="w-3.5 h-3.5 text-[#3F5D4E] dark:text-[#6EE7B7]" />
                        <span>Issued: August 29, 2026</span>
                      </span>
                      <span className="flex items-center gap-1 text-[#3F5D4E] dark:text-[#6EE7B7] font-medium">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Certified Foundations Associate</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Python Basics - Unstop */}
            <motion.div 
              id="cert-python-unstop"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.25, delay: 0.04, ease: "easeOut" }}
              className="group border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/60 dark:hover:border-[#4E7260] rounded-lg bg-white/85 dark:bg-[#20201D] p-6 shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-md bg-[#FAF7F0] dark:bg-[#2C2C28] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] shrink-0 mt-0.5 border border-[#E4DFD3] dark:border-[#383834] transition-colors duration-200">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#6B6B63] dark:text-[#A6A49B] uppercase tracking-wide">
                      Unstop
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#2B2B28] dark:text-[#F5F3EC] mt-0.5">
                      Python Basics Certification
                    </h4>
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#6B6B63] dark:text-[#A6A49B] mt-2.5">
                      <span className="flex items-center gap-1">
                        <CalendarCheck className="w-3.5 h-3.5 text-[#3F5D4E] dark:text-[#6EE7B7]" />
                        <span>Issued: August 03, 2026</span>
                      </span>
                      <span className="flex items-center gap-1 text-[#3F5D4E] dark:text-[#6EE7B7] font-medium">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Verified Assessment</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AWS Academy */}
            <motion.div 
              id="cert-aws"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.25, delay: 0.08, ease: "easeOut" }}
              className="group border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/60 dark:hover:border-[#4E7260] rounded-lg bg-white/85 dark:bg-[#20201D] p-6 shadow-2xs hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-md bg-[#F3EEE3] dark:bg-[#2C2C28] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] shrink-0 mt-0.5 transition-colors duration-200">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#6B6B63] dark:text-[#A6A49B] uppercase tracking-wide">
                      AWS Academy
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#2B2B28] dark:text-[#F5F3EC] mt-0.5">
                      AWS Academy Graduate &ndash; Cloud Foundations
                    </h4>
                    
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-[#6B6B63] dark:text-[#A6A49B] mt-2.5">
                      <span className="flex items-center gap-1">
                        <CalendarCheck className="w-3.5 h-3.5 text-[#3F5D4E] dark:text-[#6EE7B7]" />
                        <span>Completed: March 21, 2026</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#3F5D4E] dark:text-[#6EE7B7]" />
                        <span>Duration: 20 hours</span>
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.credly.com/go/7lVqqR33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#FAF7F0] dark:bg-[#2A2A26] border border-[#E4DFD3] dark:border-[#383834] text-xs font-semibold text-[#3F5D4E] dark:text-[#6EE7B7] hover:text-[#2F4739] hover:border-[#3F5D4E] hover:bg-[#F3EEE3] dark:hover:bg-[#32322E] transition-all self-start sm:self-auto shrink-0 shadow-2xs"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Group 2: Workshop Participation */}
        <div className="text-left">
          <h3 className="text-xs uppercase tracking-wider font-bold text-[#3F5D4E] dark:text-[#6EE7B7] mb-4">
            Workshop Participation
          </h3>

          <motion.div 
            id="workshop-ai-academia"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.25, delay: 0.08, ease: "easeOut" }}
            className="group border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/60 dark:hover:border-[#4E7260] rounded-lg bg-white/85 dark:bg-[#20201D] p-6 shadow-2xs hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start space-x-3.5">
              <div className="p-2.5 rounded-md bg-[#FAF7F0] dark:bg-[#2C2C28] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] shrink-0 mt-0.5 border border-[#E4DFD3] dark:border-[#383834] transition-colors duration-200">
                <Presentation className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#6B6B63] dark:text-[#A6A49B] uppercase tracking-wide">
                  AI Academia Workshop
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#2B2B28] dark:text-[#F5F3EC] mt-0.5">
                  AI for Careers and Productivity
                </h4>
                <div className="text-xs text-[#6B6B63] dark:text-[#A6A49B] mt-1.5">
                  Structured technical workshop participation
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
