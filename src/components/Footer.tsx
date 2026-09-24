import React from "react";
import { Linkedin, Github, Code, Mail, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      id="footer"
      className="bg-[#EAE3D5] dark:bg-[#1C1C19] border-t border-[#E4DFD3] dark:border-[#383834] py-6 sm:py-7 text-[#2B2B28] dark:text-[#F5F3EC] transition-colors"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* LEFT: Compact Identity & Copyright */}
          <div className="text-left">
            <p className="text-base sm:text-lg">
              <span className="font-serif font-bold text-[#2B2B28] dark:text-[#F5F3EC]">
                Ibrahim Khan
              </span>
              {" — "}
              <span className="text-xs font-semibold text-[#3F5D4E] dark:text-[#6EE7B7]">
                Aspiring Data Scientist
              </span>
            </p>
            <p className="text-xs text-[#6B6B63] dark:text-[#A6A49B] mt-0.5 whitespace-pre">
              © 2026 Ibrahim Khan.  All rights reserved.
            </p>
          </div>

          {/* RIGHT: Compact Social Links & Back-to-Top button */}
          <div className="flex items-center space-x-2.5 self-start sm:self-center">
            <a
              href="https://github.com/ibrahimkhan-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#FAF7F0] dark:bg-[#252522] border border-[#E4DFD3] dark:border-[#383834] text-xs font-medium text-[#2B2B28] dark:text-[#F5F3EC] hover:text-[#3F5D4E] dark:hover:text-[#6EE7B7] hover:border-[#3F5D4E] transition-all shadow-2xs"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ibrahimkhan-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#FAF7F0] dark:bg-[#252522] border border-[#E4DFD3] dark:border-[#383834] text-xs font-medium text-[#2B2B28] dark:text-[#F5F3EC] hover:text-[#3F5D4E] dark:hover:text-[#6EE7B7] hover:border-[#3F5D4E] transition-all shadow-2xs"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">LinkedIn</span>
            </a>

            <a
              href="mailto:ibrahimcorelab@gmail.com"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#FAF7F0] dark:bg-[#252522] border border-[#E4DFD3] dark:border-[#383834] text-xs font-medium text-[#2B2B28] dark:text-[#F5F3EC] hover:text-[#3F5D4E] dark:hover:text-[#6EE7B7] hover:border-[#3F5D4E] transition-all shadow-2xs"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Email</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md bg-[#3F5D4E] text-white hover:bg-[#2F4739] transition-all shadow-xs ml-1 cursor-pointer"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
