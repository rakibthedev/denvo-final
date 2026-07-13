"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import WordReveal from "./shared/WordReveal";
import TextReveal from "./shared/TextReveal";

const DESC =
  "We create visually stunning, user-friendly designs that enhance engagement and deliver a smooth digital experience.";

const services = [
  { title: "UI/UX Design", img: "service1", tags: ["UI/UX Design", "App Design", "Wireframing & Prototyping", "Website Design", "Dashboard Design", "Product Design"] },
  { title: "Web Development", img: "service2", tags: ["Full Stack Development", "E-Commerce Solutions", "SAAS Application Development"] },
  { title: "Mobile App Development", img: "service1", tags: ["iOS & Android App", "Native & Hybrid Development", "App UI/UX Optimization", "App Store Deployment"] },
  { title: "Low-Code/No-Code Solutions", img: "service2", tags: ["Webflow", "Shopify", "WordPress", "WIX", "Framer", "Sales Funnel"] },
  { title: "Branding & Visual Identity", img: "service1", tags: ["Graphic & Motion Design", "Logo & Brand Design", "Style Guides & Design Systems"] },
];

function ServiceCard({
  title, img, tags, index, total, progress,
}: {
  title: string; img: string; tags: string[];
  index: number; total: number; progress: MotionValue<number>;
}) {
  const isLast = index === total - 1;
  const start = index / total;
  const targetScale = isLast ? 1 : 1 - (total - index) * 0.04;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);

  return (
    <motion.article
      style={{ scale, top: `calc(96px + ${index * 24}px)` }}
      className="sticky flex flex-col-reverse items-stretch gap-4 overflow-hidden rounded-3xl border border-[#E9D7FE] bg-[#f7f4fc] shadow-sm transform-gpu md:flex-row md:items-center md:gap-6"
    >
      <div className="flex flex-col justify-center p-6 md:w-1/2 md:p-8">
        <h3 className="text-[24px] font-semibold text-ink md:text-[28px]">{title}</h3>
        <p className="mt-3 hidden text-base leading-relaxed text-grey-700 md:block">{DESC}</p>
        <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[#eee0ff] px-3 py-1.5 text-xs font-medium text-ink md:text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center px-4 pt-4 md:w-1/2 md:p-6">
        <Image
          src={`/${img}.png`}
          alt={title}
          width={500}
          height={400}
          className="h-auto max-h-[220px] w-full object-contain md:max-h-full"
        />
      </div>
    </motion.article>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 py-14 md:flex-row md:gap-20 md:px-20 md:py-32"
    >
      <div className="h-fit space-y-4 md:sticky md:top-24 md:w-1/3">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">/Services</p>
        <WordReveal
          text="The services we offer"
          className="text-[36px] font-bold leading-[120%] tracking-[-0.02em] text-ink md:text-[56px]"
        />
        <TextReveal as="p" className="mt-4 max-w-sm text-base text-grey-700 md:text-lg" delay={0.2}>
          Discover how our creative expertise can transform your business with our comprehensive suite of digital services.
        </TextReveal>
      </div>

      <div className="flex flex-col gap-6 md:w-2/3">
        {services.map((s, i) => (
          <ServiceCard key={s.title} {...s} index={i} total={services.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
