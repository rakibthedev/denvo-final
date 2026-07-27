"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import SectionBadge from "./SectionBadge";

type Week = {
  week: string;
  title: string;
  body: string;
  label: string;
  tasks: string[];
  img: string;
};

const weeks: Week[] = [
  {
    week: "Week 1",
    title: "Research",
    body: "Ahead of the website kick off we'll immerse ourselves in your brief, company, and scope of work. We'll carry out competitor and industry analysis, a brand audit and start formulating a first draft of a sitemap.",
    label: "Tasks Involved",
    tasks: ["Research", "Competitor Analysis", "Industry Analysis", "Sitemap Creation", "Formulate Team"],
    img: "/process/week1.avif",
  },
  {
    week: "Week 2",
    title: "Ideation & Strategy",
    body: "We gather insights through interviews, competitor research, and journey mapping, then brainstorm and create wireframes while defining project challenges and user satisfaction benchmarks to guide the design process.",
    label: "Work Involved",
    tasks: [
      "User Interviews",
      "Competitor Analysis",
      "Journey Mapping",
      "Challenges & Goals",
      "Sketching & Wireframes",
    ],
    img: "/process/week2.avif",
  },
  {
    week: "Week 3",
    title: "Style Guide & UI Planning",
    body: "We define the brand's visual identity with a style guide covering typography and color palette. At the same time, we plan for initial UI designs to ensure a consistent, modern, and user-friendly experience.",
    label: "Tasks Involved",
    tasks: ["Typography Selection", "Color Palette Creation", "Icon Set Design", "Ui Planning"],
    img: "/process/week3.avif",
  },
  {
    week: "Week 4",
    title: "Final Testing & Refinements",
    body: "In the final phase, we validate the design through user testing, A/B tests, and feedback. These strategies help us refine the prototype to optimize usability and ensure a smooth & engaging user experience.",
    label: "Tasks Involved",
    tasks: ["A/B Testing", "Reviews & Feedback", "Final Refinement", "Quality Assurance"],
    img: "/process/week4.avif",
  },
];

function ProcessIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" fill="none" className="size-full">
      <rect width="56" height="56" rx="28" fill="#883CFA" />
      <path
        d="M40.1069 22.2459C39.5176 20.8202 38.6519 19.5265 37.5636 18.4383C36.4754 17.3501 35.1793 16.4819 33.7536 15.8926C32.3304 15.3032 30.8044 15 29.2613 15H27.8332C24.8399 15 21.9689 16.1885 19.8512 18.3063C17.7334 20.424 16.5449 23.2926 16.5449 26.2858V38.2612C16.5449 38.5767 16.6721 38.8799 16.8946 39.1049C17.1196 39.3274 17.4228 39.4546 17.7383 39.4546H29.7137C31.1957 39.4546 32.6629 39.1611 34.0324 38.5938C35.4019 38.0264 36.6466 37.1974 37.6957 36.1483C38.7424 35.0992 39.5738 33.8569 40.1412 32.4875C40.7085 31.118 40.9995 29.6483 40.9995 28.1664V26.7382C40.9995 25.1951 40.6963 23.6692 40.1069 22.2459ZM34.8443 30.2108C33.1031 31.7367 31.0098 32.5413 28.7893 32.5413C26.5689 32.5413 24.4731 31.7367 22.7344 30.2108C22.326 29.8562 22.2869 29.2375 22.6415 28.8315C22.9985 28.4231 23.6147 28.384 24.0231 28.7386C25.3999 29.9466 27.0482 30.5849 28.7893 30.5849C30.5305 30.5849 32.1763 29.9466 33.5555 28.7386C33.9615 28.384 34.5802 28.4256 34.9348 28.8315C35.2918 29.2375 35.2502 29.8562 34.8443 30.2108Z"
        fill="#fff"
      />
    </svg>
  );
}

/* Week card — Services-style sticky stacking scale (no hover) */
function WeekCard({
  week,
  title,
  body,
  label,
  tasks,
  img,
  index,
  total,
  progress,
}: Week & { index: number; total: number; progress: MotionValue<number> }) {
  const isLast = index === total - 1;
  const start = index / total;
  const targetScale = isLast ? 1 : 1 - (total - index) * 0.04;
  const scale = useTransform(progress, [start, 1], [1, targetScale]);

  return (
    <motion.article
      style={{ scale, top: `calc(112px + ${index * 22}px)` }}
      className="sticky origin-top overflow-hidden rounded-3xl border border-[#ececec] bg-white p-6 shadow-[0px_24px_60px_-40px_rgba(0,0,0,0.25)] transform-gpu md:p-9"
    >
      <div className="relative z-10 md:pr-[220px]">
        <span className="inline-flex rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white">
          {week}
        </span>
        <h3 className="mt-5 text-2xl font-bold text-[#272629] md:text-[32px]">{title}</h3>
        <p className="mt-3 max-w-[620px] text-base leading-relaxed text-[#6b6b6b] md:text-lg">{body}</p>
        <p className="mt-6 text-base font-semibold text-[#272629]">{label}</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {tasks.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-[#ececec] bg-[#f6f6f6] px-3.5 py-2 text-sm font-medium text-[#3d3d3d]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* 3D graphic on the right of every card */}
      <Image
        src={img}
        alt=""
        width={200}
        height={201}
        className="pointer-events-none absolute right-8 top-1/2 hidden w-[150px] -translate-y-1/2 md:block lg:w-[190px]"
      />
    </motion.article>
  );
}

export default function Timeline30Days() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  // line reaches the bottom a little before the section releases, then holds full
  // for the last stretch of scroll before the page continues to the next section
  const lineScaleY = useTransform(scrollYProgress, [0, 0.82], [0, 1]);

  return (
    <section className="bg-[#f5f5f6] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="flex flex-col items-center text-center">
          <SectionBadge label="Our Process" />
          <h2 className="mt-6 max-w-[820px] text-[32px] font-extrabold leading-[112%] tracking-[-0.02em] text-[#272629] md:text-[52px]">
            We Make the <span className="text-primary">Complex Simple</span> in 30 Days
          </h2>
        </div>

        <div
          ref={containerRef}
          className="mt-14 grid gap-6 md:mt-20 md:grid-cols-[56px_1fr] md:gap-10"
        >
          {/* Left rail — single line with one icon at top; grey track fills with primary on scroll */}
          <div className="hidden md:block">
            <div className="sticky top-28 h-[460px]">
              {/* icon */}
              <div className="absolute left-1/2 top-0 z-10 size-14 -translate-x-1/2">
                <ProcessIcon />
              </div>
              {/* line: light-grey track + primary fill — starts under the icon (no gap) */}
              <div className="absolute left-1/2 top-[46px] h-[calc(100%-46px)] w-[4px] -translate-x-1/2 overflow-hidden rounded-full bg-[#e4e2e6]">
                <motion.div
                  style={{ scaleY: lineScaleY, transformOrigin: "top" }}
                  className="absolute inset-0 rounded-full bg-primary"
                />
              </div>
            </div>
          </div>

          {/* Sticky-stacking cards */}
          <div className="flex flex-col gap-5">
            {weeks.map((w, i) => (
              <WeekCard
                key={w.week}
                {...w}
                index={i}
                total={weeks.length}
                progress={scrollYProgress}
              />
            ))}
            {/* trailing scroll room: the last card stays pinned and the line holds full
                for a moment before the page scrolls on to the next section */}
            <div className="hidden h-[22vh] md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
