import React from "react";
import { SectionHeading } from "./SectionHeading";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Code, 
  MapPin, 
  ExternalLink, 
  Send
} from "lucide-react";
import { motion } from "motion/react";

export const LetsConnect: React.FC = () => {
  return (
    <section 
      id="connect" 
      className="py-16 sm:py-20 border-b border-[#E4DFD3]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading: strictly "Let's Connect" + Bold Green Line */}
        <SectionHeading title="Let's Connect" id="connect" />

        {/* Intro / Get in Touch */}
        <div className="text-left mb-8">
          <h3 className="text-lg font-bold text-[#2B2B28] mb-2">
            Get in Touch
          </h3>
          <p className="text-base text-[#6B6B63] max-w-2xl leading-relaxed">
            I am actively looking for Data Science and Machine Learning internship opportunities. Feel free to reach out directly via email or connect on professional platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          
          {/* Direct Communication Column - flex-col justify-between for top and bottom alignment */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col justify-between h-full"
          >
            <div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#3F5D4E] dark:text-[#6EE7B7] mb-1.5">
                  Direct Communication
                </h4>
                <p className="text-xs text-[#6B6B63] dark:text-[#A6A49B] mb-4">
                  Available for remote, hybrid, or on-site opportunities in Mumbai, Navi Mumbai, and Thane.
                </p>
              </div>

              {/* Merged Email + Phone Outer Container */}
              <div 
                id="contact-direct-merged-box"
                className="bg-white dark:bg-[#20201D] border-2 border-[#3F5D4E] dark:border-[#4E7260] rounded-[14px] p-3 sm:p-3.5 space-y-3 shadow-2xs"
              >
                {/* Email Sub-Box - Asymmetric subtle rounded opposite corners */}
                <div 
                  id="contact-email-subbox"
                  className="group bg-[#FAF7F0] dark:bg-[#252420] border border-[#3F5D4E]/30 dark:border-[#3F5D4E]/50 hover:border-[#3F5D4E] rounded-tl-[12px] rounded-br-[12px] rounded-tr-[3px] rounded-bl-[3px] p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs hover:shadow-xs transition-all duration-200"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-md bg-white dark:bg-[#20201D] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] shrink-0 mt-0.5 border border-[#E4DFD3] dark:border-[#383834] transition-colors duration-200">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-[#2B2B28] dark:text-[#F5F3EC]">Email</div>
                      <a 
                        href="mailto:ibrahimcorelab@gmail.com"
                        className="text-xs sm:text-sm font-semibold text-[#2B2B28] dark:text-[#F5F3EC] hover:text-[#3F5D4E] dark:hover:text-[#6EE7B7] transition-colors whitespace-nowrap"
                      >
                        ibrahimcorelab@gmail.com
                      </a>
                    </div>
                  </div>

                  <a
                    id="btn-email-me"
                    href="mailto:ibrahimcorelab@gmail.com"
                    className="group/btn inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#3F5D4E] hover:bg-[#2F4739] text-white text-xs font-semibold transition-all self-start sm:self-auto shrink-0 shadow-xs hover:shadow-sm active:scale-95"
                  >
                    <Send className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    <span>Email Me</span>
                  </a>
                </div>

                {/* Phone Sub-Box - Asymmetric subtle rounded opposite corners */}
                <div 
                  id="contact-phone-subbox"
                  className="group bg-[#FAF7F0] dark:bg-[#252420] border border-[#3F5D4E]/30 dark:border-[#3F5D4E]/50 hover:border-[#3F5D4E] rounded-tl-[12px] rounded-br-[12px] rounded-tr-[3px] rounded-bl-[3px] p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-2xs hover:shadow-xs transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-md bg-white dark:bg-[#20201D] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] shrink-0 border border-[#E4DFD3] dark:border-[#383834] transition-colors duration-200">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#2B2B28] dark:text-[#F5F3EC]">Phone</div>
                      <a 
                        href="tel:7208757380"
                        className="text-sm font-semibold text-[#2B2B28] dark:text-[#F5F3EC] hover:text-[#3F5D4E] dark:hover:text-[#6EE7B7] transition-colors"
                      >
                        7208757380
                      </a>
                    </div>
                  </div>

                  <a
                    href="tel:7208757380"
                    className="text-xs font-semibold text-[#3F5D4E] dark:text-[#6EE7B7] hover:underline"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>

            {/* Location Notice - OUTSIDE merged box, strictly on LEFT side, vertically aligned with bottom of right column */}
            <div className="pt-4 sm:pt-6 flex items-center space-x-2 text-xs font-medium text-[#6B6B63] dark:text-[#A6A49B]">
              <MapPin className="w-4 h-4 text-[#3F5D4E] dark:text-[#6EE7B7] shrink-0" />
              <span>Location: Mumbai / Navi Mumbai / Thane, India</span>
            </div>
          </motion.div>

          {/* Online Profiles Column */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="space-y-4"
          >
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#3F5D4E] dark:text-[#6EE7B7] mb-1.5">
                Online Profiles
              </h4>
              <p className="text-xs text-[#6B6B63] dark:text-[#A6A49B] mb-4">
                Connect and inspect verified profiles across development and career networks.
              </p>

              {/* Profiles List */}
              <div className="space-y-3">
                
                {/* LinkedIn */}
                <a
                  id="profile-linkedin"
                  href="https://www.linkedin.com/in/ibrahimkhan-data/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-[12px] bg-white/80 dark:bg-[#20201D] border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E] hover:-translate-y-0.5 hover:bg-[#FAF7F0] dark:hover:bg-[#262623] transition-all duration-200 shadow-2xs hover:shadow-md"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-md bg-[#F3EEE3] dark:bg-[#2C2C28] text-[#3F5D4E] group-hover:bg-[#3F5D4E] group-hover:text-white transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#2B2B28] dark:text-[#F5F3EC]">LinkedIn</div>
                      <div className="text-xs text-[#6B6B63] dark:text-[#A6A49B]">ibrahimkhan-data</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#6B6B63] group-hover:text-[#3F5D4E] dark:group-hover:text-[#6EE7B7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* GitHub */}
                <a
                  id="profile-github"
                  href="https://github.com/ibrahimkhan-data/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-[12px] bg-white/80 dark:bg-[#20201D] border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E] hover:-translate-y-0.5 hover:bg-[#FAF7F0] dark:hover:bg-[#262623] transition-all duration-200 shadow-2xs hover:shadow-md"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-md bg-[#F3EEE3] dark:bg-[#2C2C28] text-[#2B2B28] dark:text-[#EAE3D5] group-hover:bg-[#2B2B28] group-hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#2B2B28] dark:text-[#F5F3EC]">GitHub</div>
                      <div className="text-xs text-[#6B6B63] dark:text-[#A6A49B]">ibrahimkhan-data</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#6B6B63] group-hover:text-[#3F5D4E] dark:group-hover:text-[#6EE7B7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* HackerRank */}
                <a
                  id="profile-hackerrank"
                  href="https://www.hackerrank.com/profile/mohammadibrahi29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-[12px] bg-white/80 dark:bg-[#20201D] border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E] hover:-translate-y-0.5 hover:bg-[#FAF7F0] dark:hover:bg-[#262623] transition-all duration-200 shadow-2xs hover:shadow-md"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-md bg-[#F3EEE3] dark:bg-[#2C2C28] text-[#3F5D4E] group-hover:bg-[#3F5D4E] group-hover:text-white transition-colors">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#2B2B28] dark:text-[#F5F3EC]">HackerRank</div>
                      <div className="text-xs text-[#6B6B63] dark:text-[#A6A49B]">mohammadibrahi29</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#6B6B63] group-hover:text-[#3F5D4E] dark:group-hover:text-[#6EE7B7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
