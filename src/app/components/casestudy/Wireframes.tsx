"use client";

import Image from "next/image";
import { motion } from "motion/react";
import WordReveal from "../shared/WordReveal";

export default function Wireframes() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="mx-auto max-w-[1064px] text-center">
          <WordReveal
            text="Wireframes & Iterations"
            className="justify-center text-[32px] font-bold leading-[120%] text-ink md:text-[56px]"
          />
          <p className="mx-auto mt-5 max-w-[900px] text-sm leading-relaxed text-grey-700 md:text-base">
            Our initial ideas for JobSea developed into high-quality wireframes, which then
            seamlessly evolved into a comprehensive web blueprint. This structured approach allowed
            us to focus on layout and information hierarchy before moving into the final visual
            design.
          </p>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-6% 0px" }}
          className="mt-10 overflow-hidden rounded-3xl md:mt-16"
        >
          <Image
            src="/cs-1.png"
            alt="JobSea wireframes — 68+ screens"
            width={1160}
            height={1474}
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
