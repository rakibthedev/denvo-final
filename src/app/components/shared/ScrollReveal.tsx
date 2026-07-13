"use client";

import React, { ReactNode } from "react";
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: string | number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 1.0,
  y = "100%",
  as = "div",
  style,
}: ScrollRevealProps) {
  const MotionComponent =
    as === "h1"
      ? motion.h1
      : as === "h2"
        ? motion.h2
        : as === "h3"
          ? motion.h3
          : as === "h4"
            ? motion.h4
            : as === "h5"
              ? motion.h5
              : as === "h6"
                ? motion.h6
                : as === "p"
                  ? motion.p
                  : as === "span"
                    ? motion.span
                    : motion.div;

  return (
    <span className="block overflow-hidden">
      <MotionComponent
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        }}
        className={className}
        style={style}
      >
        {children}
      </MotionComponent>
    </span>
  );
}
