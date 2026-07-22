"use client";

import Image from "next/image";
import { motion } from "motion/react";
import AboutText from "../shared/AboutText";
import WordReveal from "../shared/WordReveal";

const INTRO =
  "A hyper-local recruitment platform designed to help job seekers find employment within their immediate community and empower local businesses to find the right staff quickly.";

const solutions = [
  {
    title: "Hyper-Local Focus",
    body: "Map-based job discovery within customizable radius, prioritizing walkable and commutable opportunities for local communities.",
    img: "/jobsea/project2.png",
  },
  {
    title: "Accessibility",
    body: "WCAG 2.1 compliant design with screen reader support, high contrast modes, and simplified navigation for all users.",
    img: "/jobsea/project2.png",
  },
  {
    title: "Rapid Hiring",
    body: "One-tap application system and instant employer notifications to reduce time-to-hire and improve candidate engagement.",
    img: "/jobsea/project2.png",
  },
];

export default function Overview() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="mx-auto max-w-[1064px]">
          <AboutText
            txt={INTRO}
            className="text-[26px] font-extrabold leading-[130%] md:text-[40px]"
          />
        </div>

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-3xl md:mt-16"
        >
          <Image
            src="/jobsea/project2.png"
            alt="Job Sea interface"
            width={1280}
            height={620}
            className="h-[240px] w-full object-cover md:h-[560px]"
          />
        </motion.div>

        {/* The Challenge */}
        <div className="mt-14 max-w-[1064px] md:mt-20">
          <WordReveal
            text="The Challenge"
            className="text-[26px] font-bold leading-[120%] text-ink md:text-[40px]"
          />
          <p className="mt-4 text-base leading-relaxed text-grey-700 md:text-lg">
            Most major job portals focus on corporate, high-level positions, often overlooking the
            needs of small local businesses and blue-collar workers. Job seekers frequently struggle
            to find roles that are within a commutable distance, while local employers find it
            difficult to reach neighborhood talent through traditional digital channels.
          </p>
        </div>

        {/* The Solution */}
        <div className="mt-14 md:mt-20">
          <div className="max-w-[1064px]">
            <WordReveal
              text="The Solution"
              className="text-[26px] font-bold leading-[120%] text-ink md:text-[40px]"
            />
            <p className="mt-4 text-base leading-relaxed text-grey-700 md:text-lg">
              Job Sea provides a location-centric interface that prioritizes proximity. By
              integrating interactive maps and simplified application flows, we created a platform
              where &ldquo;finding a job&rdquo; feels as easy as &ldquo;ordering food.&rdquo;
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                className="rounded-3xl border border-[#EEE0FF] bg-[#faf7ff] p-6"
              >
                <h4 className="text-lg font-bold text-ink md:text-xl">{s.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-grey-700 md:text-base">{s.body}</p>
                <div className="mt-6 overflow-hidden rounded-2xl">
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={291}
                    height={263}
                    className="h-[200px] w-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
