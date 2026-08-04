"use client";

import React from "react";
import { motion, Variants } from "framer-motion"; // Import Variants here

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
  stagger = 0.03,
  as: Component = "div",
  style,
}: WordRevealProps) {
  
  if (!text || typeof text !== "string") {
    return null; 
  }

  const words = text.split(" ");

  // Explicitly assign the Variants type
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  // Explicitly assign the Variants type
  const wordVariants: Variants = {
    hidden: {
      y: "110%",
      rotateZ: 2,
      opacity: 0,
    },
    visible: {
      y: "0%",
      rotateZ: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Component className={`flex flex-wrap ${className}`} style={style}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="inline-flex flex-wrap"
      >
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-flex overflow-hidden pb-1"
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