import React from "react";
import { Download, ArrowLeft, Printer, Check, Loader2 } from "lucide-react";
import { ResumeDocument } from "./ResumeDocument";
import { useResumeDownload } from "../utils/downloadResume";

export const ResumePage: React.FC = () => {
  const { downloadStatus, handleDownload } = useResumeDownload();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#2B2B28] flex flex-col font-sans print:bg-white print:p-0">
      {/* Top Action Bar (Hidden when printed) */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E4DFD3] shadow-xs px-4 sm:px-8 py-3 flex items-center justify-between gap-4 print:hidden">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-[#2B2B28] hover:text-[#3F5D4E] hover:bg-[#F3EEE3] rounded-md transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Portfolio</span>
          </a>
          <span className="hidden sm:inline-block text-[#D5CFBF]">|</span>
          <span className="hidden sm:inline-block text-xs font-semibold text-[#6B6B63]">
            Khan Mohammad Ibrahim Shadab &mdash; Resume
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Print / Save to PDF */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#2B2B28] bg-white border border-[#D5CFBF] hover:bg-[#F3EEE3] rounded-md transition-colors cursor-pointer shadow-2xs"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5 text-[#3F5D4E]" />
            <span>Print / Save PDF</span>
          </button>

          {/* Download PDF button */}
          <button
            onClick={handleDownload}
            disabled={downloadStatus === "loading"}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#3F5D4E] hover:bg-[#2F4739] rounded-md transition-colors cursor-pointer shadow-xs"
          >
            {downloadStatus === "loading" ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Downloading...</span>
              </>
            ) : downloadStatus === "success" ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex justify-center items-start p-3 sm:p-8 print:p-0 print:m-0">
        <ResumeDocument />
      </main>

      <style>{`
        @media print {
          @page {
            size: letter portrait;
            margin: 0.45in 0.45in 0.45in 0.45in;
          }
          body {
            background-color: #ffffff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
};
