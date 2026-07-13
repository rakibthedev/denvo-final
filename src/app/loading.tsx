"use client";

import { motion } from "motion/react";
import Logo from "./components/shared/Logo";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1, 0.95] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Logo className="w-[100px] md:w-[129px] h-auto" />
        </motion.div>

        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-[#A259FF]/20" />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-t-[#A259FF] border-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}
