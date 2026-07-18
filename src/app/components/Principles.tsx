"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import WordReveal from "./shared/WordReveal";

type Principle = { n: string; title: string; body: string };

const defaultPrinciples: Principle[] = [
  {
    n: "01",
    title: "Users don't come first. Business comes",
    body: "This doesn't mean ignoring the users. Every business will benefit from understanding its users better and making the product better for them. Being user-centered is a good things. But it's a good things because it's good for the business.",
  },
  {
    n: "02",
    title: "Structure is key, but good UI matters.",
    body: "Well-thought information architecture and navigation make complex apps easy to use. Beautiful interfaces make those apps emotionally appealing.",
  },
  {
    n: "03",
    title: "Design is a process, not an event",
    body: "There's no place for overnight success. We work in short iterations, moving to the result bit by bit, and expect your consistent feedback.",
  },
];

function PrincipleItem({
  n,
  title,
  body,
  showLine,
  index,
  totalItems,
  scrollYProgress,
}: {
  n: string;
  title: string;
  body: string;
  showLine: boolean;
  index: number;
  totalItems: number;
  scrollYProgress: MotionValue<number>;
}) {
  const stepSize = 1 / totalItems;
  const start = index * stepSize;
  const dotEnd = start + stepSize * 0.2; // First 20% of the step for the dot
  const lineEnd = start + stepSize; // The full 100% of the step

  const isLastItem = index === totalItems - 1;
  const textEnd = isLastItem ? dotEnd : lineEnd;

  // Dot color transition (keeps the light #DEDCE0 starting point)
  const color = useTransform(
    scrollYProgress,
    [start, dotEnd],
    ["#DEDCE0", "#A259FF"]
  );

  // Line growth transition
  const lineScaleY = useTransform(scrollYProgress, [dotEnd, lineEnd], [0, 1]);

  // Text color transitions - Changed initial color to a darker gray (#9CA3AF)
  const numberColor = useTransform(
    scrollYProgress,
    [start, textEnd], 
    ["#9CA3AF", "#111827"] 
  );

  const titleColor = useTransform(
    scrollYProgress,
    [start, textEnd], 
    ["#9CA3AF", "#111827"] 
  );
  
  const bodyColor = useTransform(
    scrollYProgress,
    [start, textEnd],
    ["#9CA3AF", "#374151"] 
  );

  return (
    <div className="flex gap-4 md:gap-6">
      <motion.span 
        style={{ color: numberColor }}
        className="shrink-0 pt-1 text-2xl font-medium"
      >
        {n}
      </motion.span>
      <div className="flex shrink-0 flex-col items-center pt-0">
        <motion.div
          style={{ backgroundColor: color }}
          className="size-6 shrink-0 rounded-full shadow-sm"
        />
        {showLine && (
          <div className="relative w-[2px] flex-1 bg-[#f1f1f1]">
            <motion.div
              style={{
                scaleY: lineScaleY,
                transformOrigin: "top",
                backgroundColor: "#A259FF",
              }}
              className="absolute inset-0 h-full w-full"
            />
          </div>
        )}
      </div>
      <div className={isLastItem ? "pb-0" : "pb-6"}>
        <motion.h3
          style={{ color: titleColor }}
          className="text-lg font-semibold md:text-xl"
        >
          {title}
        </motion.h3>
        <motion.p
          style={{ color: bodyColor }}
          className="mt-2 text-base leading-relaxed"
        >
          {body}
        </motion.p>
      </div>
    </div>
  );
}

export default function Principles({
  eyebrow = "/We Are Stick",
  heading = "We stick to our principles",
  image = "/principle.png",
  items = defaultPrinciples,
}: {
  eyebrow?: string;
  heading?: string;
  image?: string;
  items?: Principle[];
} = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  return (
    <section className="bg-white py-14 md:py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="mb-10 text-center md:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            {eyebrow}
          </p>
          <WordReveal
            text={heading}
            className="mt-4 justify-center text-center text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-[56px]"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-start">
          <div className="relative h-auto sticky top-24">
            <Image
              src={image}
              alt="Our work"
              width={500}
              height={400}
              className="h-full md:h-[420px] w-full rounded-3xl object-cover"
            />
          </div>

          <div className="flex flex-col" ref={containerRef}>
            {items.map((p, i) => (
              <PrincipleItem
                key={p.n}
                {...p}
                showLine={i < items.length - 1}
                index={i}
                totalItems={items.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}