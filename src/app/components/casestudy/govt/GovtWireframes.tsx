"use client";

import Image from "next/image";
import { motion } from "motion/react";
import WordReveal from "../../shared/WordReveal";
import AboutText from "../../shared/AboutText";

export default function GovtWireframes() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="mx-auto max-w-[1064px] text-center">
          <WordReveal
            text="Wireframes & Iterations"
            className="justify-center text-[32px] font-bold leading-[120%] text-ink md:text-[56px]"
          />
          <div className="mx-auto mt-5 max-w-[960px]">
            <AboutText
              txt="Our initial ideas for Prottoyon developed into high-quality wireframes, which then seamlessly evolved into a comprehensive mobile blueprint. This structured approach allowed us to focus on simplifying complex government application flows and information hierarchy — ensuring clear service access and real-time tracking — before moving into the final AI-integrated visual design."
              className="justify-center text-[18px] font-semibold leading-[140%] md:text-[26px]"
            />
          </div>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-6% 0px" }}
          className="mt-10 overflow-hidden rounded-3xl md:mt-16"
        >
          <Image
            src="/govt-certificate-app/wireframes.png"
            alt="Prottoyon wireframes — 98+ screens"
            width={1160}
            height={1560}
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
