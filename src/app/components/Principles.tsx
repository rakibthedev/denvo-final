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
    line: "md:min-h-[240px]",
  },
  {
    n: "02",
    title: "Structure is key, but good UI matters.",
    body: "Well-thought information architecture and navigation make complex apps easy to use. Beautiful interfaces make those apps emotionally appealing.",
    line: "md:min-h-[180px]",
  },
  {
    n: "03",
    title: "Design is a process, not an event",
    body: "There's no place for overnight success. We work in short iterations, moving to the result bit by bit, and expect your consistent feedback.",
    line: "md:min-h-[120px]",
  },
];

function PrincipleItem({
  n, title, body, line, showLine,
}: { n: string; title: string; body: string; line: string; showLine: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.3"] });
  const color = useTransform(scrollYProgress, [0.2, 0.5], ["#DDC2FF", "#A259FF"]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5], [1, 1.1]);

  return (
    <div ref={ref} className="flex items-start gap-4 md:gap-6">
      <span className="pt-1 text-2xl text-ink">{n}</span>
      <div className="flex flex-col items-center pt-2">
        <motion.div style={{ backgroundColor: color, scale }} className="size-6 rounded-full shadow-sm" />
        {showLine && (
          <div className={`relative w-[2px] min-h-[140px] ${line} bg-[#f1f1f1]`}>
            <motion.div
              style={{ scaleY: scrollYProgress, transformOrigin: "top", backgroundColor: color }}
              className="absolute inset-0 h-full w-full"
            />
          </div>
        )}
      </div>
      <div className="pb-8">
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
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">/We Are Stick</p>
          <WordReveal
            text="We stick to our principles"
            className="mt-4 justify-center text-center text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-[56px]"
          />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative h-fit">
            <Image
              src="/principle.png"
              alt="Our work"
              width={616}
              height={740}
              className="sticky top-24 h-[360px] w-full rounded-3xl object-cover md:h-[640px]"
            />
          </div>

          <div>
            {principles.map((p, i) => (
              <PrincipleItem key={p.n} {...p} showLine={i < principles.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
