"use client";

import Image from "next/image";
import { motion } from "motion/react";
import WordReveal from "../shared/WordReveal";

const items = [
  {
    icon: "/wwd-1.png",
    title: "UI/UX Design for Web & Mobile",
    body: "End-to-end interface design for web applications, mobile apps, and responsive experiences that users love.",
  },
  {
    icon: "/wwd-2.png",
    title: "Product Strategy & Research",
    body: "Deep user research, competitive analysis, and strategic roadmaps that align with your business goals.",
  },
  {
    icon: "/wwd-3.png",
    title: "Design Systems & Prototyping",
    body: "Scalable component libraries and high-fidelity prototypes that accelerate development and maintain consistency.",
  },
  {
    icon: "/wwd-4.png",
    title: "SaaS & Dashboard Experiences",
    body: "Complex data-driven interfaces simplified into intuitive, powerful dashboards that help users make decisions faster.",
  },
  {
    icon: "/wwd-5.png",
    title: "Conversion-focused UX",
    body: "Strategic UX optimization that turns visitor intent into action—improving funnels, onboarding, and retention.",
  },
  {
    icon: "/wwd-6.png",
    title: "Your Idea, Realized",
    body: "Have something unique in mind? Let's explore it together and build something extraordinary.",
    highlight: true,
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-[#272629]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 md:px-20 md:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
          /What We Do
        </p>
        <WordReveal
          text="We don't just design screens— we design outcomes"
          className="mt-4 max-w-[820px] text-[32px] font-bold leading-[1.12] tracking-[-0.02em] text-white md:text-[56px]"
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.1 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              className={`flex flex-col rounded-3xl p-6 md:p-8 transition-colors ${
                it.highlight
                  ? "border border-primary bg-[#332d40]"
                  : "border border-transparent bg-[#302b38] hover:border-[#4b4256]"
              }`}
            >
              <div className="flex size-16 items-center justify-center rounded-2xl bg-[#4a3a63] md:size-[72px]">
                <Image
                  src={it.icon}
                  alt=""
                  width={72}
                  height={72}
                  className="size-8 object-contain md:size-10"
                />
              </div>
              <h3 className="mt-16 text-xl font-semibold text-white md:mt-20 md:text-[22px]">
                {it.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#b3aebd] md:text-base">
                {it.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
