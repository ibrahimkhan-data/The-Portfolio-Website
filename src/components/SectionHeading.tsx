import React from "react";
import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, id }) => {
  return (
    <div id={id ? `${id}-heading` : undefined} className="mb-8">
      <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#2B2B28] dark:text-[#F5F3EC]">
        {title}
      </h2>
      {/* Short, bold green horizontal line: length 100px, thickness 4.5px, color #3F5D4E */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="w-[100px] h-[4.5px] bg-[#3F5D4E] mt-3.5 rounded-full origin-left" 
        aria-hidden="true" 
      />
      {subtitle && (
        <p className="mt-3.5 text-sm sm:text-base text-[#6B6B63] dark:text-[#A6A49B] max-w-2xl leading-relaxed text-left">
          {subtitle}
        </p>
      )}
    </div>
  );
};
