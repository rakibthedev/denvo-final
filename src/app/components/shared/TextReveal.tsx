"use client";

import React, { ReactNode } from "react";
import WordReveal from "./WordReveal";
import ScrollReveal from "./ScrollReveal";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
  style?: React.CSSProperties;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0.1,
  as = "div",
  style,
}: TextRevealProps) {
  if (typeof children === "string") {
    return (
      <WordReveal
        text={children}
        className={className}
        delay={delay}
        stagger={stagger}
        as={as}
        style={style}
      />
    );
  }

  return (
    <ScrollReveal className={className} delay={delay} as={as} style={style}>
      {children}
    </ScrollReveal>
  );
}
