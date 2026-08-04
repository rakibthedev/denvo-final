"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Component = "div",
  style,
}: ScrollRevealProps) {
  return (
    <Component className={`overflow-hidden ${className}`} style={style}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </Component>
  );
}