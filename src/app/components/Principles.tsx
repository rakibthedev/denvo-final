"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import WordReveal from "./shared/WordReveal";

const principles = [
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
}: {
  n: string;
  title: string;
  body: string;
  showLine: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.3"],
  });
  const color = useTransform(scrollYProgress, [0.2, 0.5], ["#DDC2FF", "#A259FF"]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5], [1, 1.1]);

  return (
    <div ref={ref} className="flex gap-4 md:gap-6">
      <span className="shrink-0 pt-1 text-2xl text-ink">{n}</span>
      <div className="flex shrink-0 flex-col items-center pt-2">
        <motion.div
          style={{ backgroundColor: color, scale }}
          className="size-6 shrink-0 rounded-full shadow-sm"
        />
        {showLine && (
          <div className="relative w-[2px] flex-1 bg-[#f1f1f1]">
            <motion.div
              style={{
                scaleY: scrollYProgress,
                transformOrigin: "top",
                backgroundColor: color,
              }}
              className="absolute inset-0 h-full w-full"
            />
          </div>
        )}
      </div>
      {/* Updated to pb-6 for all devices */}
      <div className="pb-0">
        <h3 className="text-lg font-semibold text-ink md:text-xl">{title}</h3>
        <p className="mt-2 text-base leading-relaxed text-grey-700">{body}</p>
      </div>
    </div>
  );
}

export default function Principles() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="mb-10 text-center md:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            /We Are Stick
          </p>
          <WordReveal
            text="We stick to our principles"
            className="mt-4 justify-center text-center text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-[56px]"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 items-center">
          {/* Changed wrapper from h-fit to h-full */}
          <div className="relative h-auto">
            <Image
              src="/principle.png"
              alt="Our work"
              width={500}
              height={400}
              // Replaced fixed heights and sticky with h-full
              className="h-full md:h-[420px] w-full rounded-3xl object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            {principles.map((p, i) => (
              <PrincipleItem
                key={p.n}
                {...p}
                showLine={i < principles.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}