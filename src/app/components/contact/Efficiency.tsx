"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { ArrowRight } from "lucide-react";
import WordReveal from "../shared/WordReveal";

const steps = [
  { number: "01", title: "Onboard in <1 day", description: "Our team produces high-converting video ads that grab attention." },
  { number: "02", title: "Understand Scope & Strategy", description: "Our team produces high-converting video ads that grab attention." },
  { number: "03", title: "First designs in 4-5 days", description: "We run targeted campaigns with precision ad management." },
];

// Scroll-driven timeline item — mirrors the home page Principles component.
function TimelineItem({
  number,
  title,
  description,
  showLine,
  index,
  totalItems,
  scrollYProgress,
}: {
  number: string;
  title: string;
  description: string;
  showLine: boolean;
  index: number;
  totalItems: number;
  scrollYProgress: MotionValue<number>;
}) {
  const stepSize = 1 / totalItems;
  const start = index * stepSize;
  const dotEnd = start + stepSize * 0.2;
  const lineEnd = start + stepSize;
  const isLast = index === totalItems - 1;
  const textEnd = isLast ? dotEnd : lineEnd;

  const dotColor = useTransform(scrollYProgress, [start, dotEnd], ["#DEDCE0", "#A259FF"]);
  const lineScaleY = useTransform(scrollYProgress, [dotEnd, lineEnd], [0, 1]);
  const numberColor = useTransform(scrollYProgress, [start, textEnd], ["#9CA3AF", "#111827"]);
  const titleColor = useTransform(scrollYProgress, [start, textEnd], ["#9CA3AF", "#111827"]);
  const bodyColor = useTransform(scrollYProgress, [start, textEnd], ["#9CA3AF", "#374151"]);

  const head = title.split("<")[0];
  const rest = title.includes("<") ? "<" + title.split("<")[1] : "";

  return (
    <div className="flex gap-4 md:gap-6">
      <motion.span style={{ color: numberColor }} className="shrink-0 pt-1 text-2xl font-bold md:text-3xl">
        {number}
      </motion.span>

      <div className="flex shrink-0 flex-col items-center pt-1">
        <motion.div style={{ backgroundColor: dotColor }} className="size-6 shrink-0 rounded-full shadow-sm" />
        {showLine && (
          <div className="relative w-[2px] flex-1 bg-[#f1f1f1]">
            <motion.div
              style={{ scaleY: lineScaleY, transformOrigin: "top", backgroundColor: "#A259FF" }}
              className="absolute inset-0 h-full w-full"
            />
          </div>
        )}
      </div>

      <div className={isLast ? "pb-0" : "pb-10 md:pb-16"}>
        <motion.h3 style={{ color: titleColor }} className="text-xl font-bold md:text-2xl">
          {head}
          {rest && <span className="text-primary">{rest}</span>}
        </motion.h3>
        <motion.p style={{ color: bodyColor }} className="mt-3 text-base leading-relaxed md:text-lg">
          {description}
        </motion.p>
      </div>
    </div>
  );
}

export default function Efficiency() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.15em] text-primary md:mb-10">
          / We deliver
        </p>
        <WordReveal
          text="Efficiency you can trust measured in days, not months."
          className="mx-auto mb-16 max-w-4xl justify-center text-center text-[32px] font-bold leading-tight tracking-[-0.02em] text-ink md:mb-20 md:text-[56px]"
        />

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Testimonial */}
          <div className="rounded-[40px] border border-brand-100 bg-[#f9f5ff] p-8 shadow-sm md:p-12">
            <blockquote className="text-xl font-medium italic leading-relaxed text-ink md:text-2xl">
              &ldquo;Denvo Lab is a fantastic design team, with a healthy blend of UI and UX skills.
              Highly recommended&rdquo;
            </blockquote>
            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row">
              <div className="mr-auto flex items-center gap-4">
                <Image
                  src="/client.png"
                  alt="Sarah Lee"
                  width={56}
                  height={56}
                  className="size-14 rounded-full border-2 border-white object-cover shadow-md"
                />
                <div>
                  <p className="text-lg font-bold text-ink">Sarah Lee</p>
                  <p className="text-sm font-medium text-gray-500">Marketing Director, TechCo</p>
                </div>
              </div>
              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-bold text-white shadow-[0px_10px_30px_-8px_rgba(136,60,250,0.55)] transition-all hover:scale-[1.02] hover:bg-[#7a32e0] active:scale-[0.98] sm:w-auto">
                Book a call
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>

          {/* Timeline — Principles-style scroll animation */}
          <div ref={containerRef} className="flex flex-col pl-0 md:pl-8">
            {steps.map((step, i) => (
              <TimelineItem
                key={step.number}
                {...step}
                showLine={i < steps.length - 1}
                index={i}
                totalItems={steps.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
