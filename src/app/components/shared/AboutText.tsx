"use client";

import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "motion/react";

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, ["#a99fbb", "#272629"]);
  return (
    <motion.span style={{ opacity, color }} className="mr-2 inline-block md:mr-3">
      {word}
    </motion.span>
  );
}

export default function AboutText({ txt, className = "" }: { txt: string; className?: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const words = useMemo(() => txt.trim().split(/\s+/), [txt]);

  return (
    <p className={`flex flex-wrap ${className}`}>
      <span ref={containerRef} className="flex flex-wrap">
        {words.map((word, i) => {
          const step = 1 / words.length;
          const start = i * step;
          const end = Math.min(start + step * 1.2, 1);
          return <Word key={i} word={word} progress={smooth} range={[start, end]} />;
        })}
      </span>
    </p>
  );
}
