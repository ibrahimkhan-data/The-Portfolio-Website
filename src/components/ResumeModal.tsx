import React, { useEffect } from "react";
import { X, Download, ExternalLink, FileText, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useResumeDownload } from "../utils/downloadResume";
import { ResumeDocument } from "./ResumeDocument";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { downloadStatus, handleDownload } = useResumeDownload();

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-4xl bg-white dark:bg-[#1E1E1B] rounded-2xl shadow-2xl border border-[#E4DFD3] dark:border-[#383834] overflow-hidden flex flex-col max-h-[92vh] z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-[#FAF7F0] dark:bg-[#171715] border-b border-[#E4DFD3] dark:border-[#383834] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-lg bg-[#3F5D4E]/10 dark:bg-[#6EE7B7]/10 text-[#3F5D4E] dark:text-[#6EE7B7]">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <h3 id="resume-modal-title" className="font-bold text-sm sm:text-base text-[#2B2B28] dark:text-[#F5F3EC] truncate">
                    Khan Mohammad Ibrahim Shadab &mdash; Resume
                  </h3>
                  <p className="text-xs text-[#6B6B63] dark:text-[#A6A49B]">
                    Aspiring Data Scientist
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* Direct New Tab Link */}
                <a
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#2B2B28] dark:text-[#F5F3EC] bg-white dark:bg-[#252522] border border-[#E4DFD3] dark:border-[#383834] hover:bg-[#F3EEE3] dark:hover:bg-[#2F2F2B] rounded-lg transition-colors"
                  title="Open original resume in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Tab</span>
                </a>

                {/* Instant Download Button */}
                <button
                  onClick={handleDownload}
                  disabled={downloadStatus === "loading"}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#3F5D4E] hover:bg-[#2F4739] dark:bg-[#6EE7B7] dark:text-[#111A14] dark:hover:bg-[#5cd4a5] rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  {downloadStatus === "success" ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Downloaded!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </>
                  )}
                </button>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-[#6B6B63] hover:text-[#2B2B28] dark:text-[#A6A49B] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  aria-label="Close resume preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded Resume Viewer */}
            <div className="flex-1 overflow-y-auto bg-[#F4F1EA] dark:bg-[#121210] p-3 sm:p-6 flex justify-center items-start">
              <ResumeDocument />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
