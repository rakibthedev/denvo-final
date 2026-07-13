"use client";

import { motion } from "motion/react";
import { Plus } from "lucide-react";

/** Rotating conic-gradient "lighting" border button (from denvo-web). */
export default function AnimatedBorderButton({
  label,
  href = "#",
  className = "",
}: {
  label: string;
  href?: string;
  className?: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <a
        href={href}
        className={`group relative inline-block cursor-pointer overflow-hidden rounded-[13px] p-[2px] ${className}`}
      >
        {/* Glow */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,#883CFA,#6D28D9,#883CFA)] opacity-0 blur-[8px] transition-opacity duration-300 group-hover:opacity-100"
        />
        {/* Rotating border */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent,transparent,#883CFA,#883CFA,transparent,transparent)]"
        />
        {/* Content */}
        <div className="relative flex items-center justify-center gap-2 rounded-[11.5px] bg-white px-8 py-[14px] text-base font-medium text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
          <Plus className="size-[18px]" strokeWidth={2.2} />
          {label}
        </div>
      </a>
    </motion.div>
  );
}
