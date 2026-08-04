"use client";

import React from "react";
import { motion } from "framer-motion";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export default function WordReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.03, // Tighter stagger for fluid animation
  as: Component = "div",
  style,
}: WordRevealProps) {
  // Safety check: prevents ".split is not a function" error on undefined data
  if (!text || typeof text !== "string") {
    return null; 
  }

  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: "110%", // Pushed down outside the overflow mask
      rotateZ: 2, // Slight rotation for a premium feel
      opacity: 0,
    },
    visible: {
      y: "0%",
      rotateZ: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for snappy deceleration
      },
    },
  };

  return (
    <Component className={`flex flex-wrap ${className}`} style={style}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }} // Triggers slightly before full view
        className="inline-flex flex-wrap"
      >
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-flex overflow-hidden pb-1" // pb-1 prevents clipping descenders like 'g'
          >
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}