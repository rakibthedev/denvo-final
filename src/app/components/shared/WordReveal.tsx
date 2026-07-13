"use client";

import React from "react";
import { motion } from "motion/react";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
  style?: React.CSSProperties;
}

export default function WordReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.1,
  as = "div",
  style,
}: WordRevealProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: delay, staggerChildren: stagger },
    },
  };

  const wordVariants = {
    hidden: { y: "20px", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

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
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex flex-wrap ${className}`}
      style={style}
    >
      <motion.span variants={wordVariants} className="block">
        {text}
      </motion.span>
    </MotionComponent>
  );
}
