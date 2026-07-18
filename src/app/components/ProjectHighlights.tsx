"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import WordReveal from "./shared/WordReveal";

const projects = [
  { img: "/project1.png", tag: ["UI/UX Design", "Dashboard Design"], title: "Job Sea – Local Job Portal" },
  { img: "/project2.png", tag: ["Web Design", "eCommerce Website"], title: "A1One Botanicals eCommerce" },
  { img: "/project3.png", tag: ["UI/UX Design", "Mobile App Design"], title: "Hotel Management" },
  { img: "/project4.png", tag: ["UI/UX Design", "Web Design"], title: "Nara AI – Travel Plan Builder Agency" },
  { img: "/project5.png", tag: ["UI/UX Design", "SaaS Application Design"], title: "Property Schedule Management" },
  { img: "/project6.png", tag: ["Web Design", "Mobile App Design"], title: "Govt. Certificate Application" },
];

function ProjectCard({ img, tag, title }: (typeof projects)[number]) {
  return (
    <motion.article initial="rest" whileHover="hover" animate="rest" className="w-full cursor-pointer">
      <motion.div
        variants={{ rest: { scale: 1 }, hover: { scale: 0.97 } }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden rounded-2xl"
      >
        <Image
          src={img}
          alt={title}
          width={608}
          height={450}
          className="h-[240px] w-full object-cover md:h-[420px]"
        />
      </motion.div>

      <p className="mt-4 text-sm md:text-[24px] text-[#524566] md:mt-5 leading-[140%]">{tag.join(" • ")}</p>

      <div className="relative mt-3 flex items-start">
        <motion.span
          variants={{ rest: { opacity: 0, scale: 0.6, x: -8 }, hover: { opacity: 1, scale: 1, x: 0 } }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute left-0 z-10 hidden rounded-xl bg-brand-500 p-2.5 md:block"
          aria-hidden
        >
          <ArrowUpRight className="size-5 text-white" />
        </motion.span>
        <motion.h3
          variants={{ rest: { x: 0, color: "#272629" }, hover: { x: 54, color: "#883cfa" } }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-xl font-semibold md:text-[36px] leading-[132%] mt-[-3px]"
        >
          {title}
        </motion.h3>
      </div>
    </motion.article>
  );
}

export default function ProjectHighlights() {
  return (
    <section className="bg-[#f3ffe3]">
      <div className="mx-auto w-full max-w-[1440px] py-14 md:py-[160px]">
        <div className="px-5 pb-6 md:pb-20 w-auto mx-auto flex flex-col items-center">
  <div className="w-auto">
    <WordReveal
      text="Project"
      className="text-start text-[42px] font-semibold leading-[120%] tracking-[-0.02em] text-ink md:text-[180px]"
    />
    <div className="flex">
      {/* 
        1. Changed 19% to 15vw (15% of screen width) 
        2. Added shrink-0 so flexbox doesn't crush it to 0px
      */}
      <div className="hidden md:block md:w-[15vw] shrink-0"></div>
      <WordReveal
        text="Highlights"
        stagger={0.2}
        className="text-[42px] font-semibold leading-[120%] tracking-[-0.02em] text-ink md:text-[180px]"
      />             
    </div>
  </div>
</div>

        <div className="px-5 md:px-20">
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 md:gap-y-14">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
