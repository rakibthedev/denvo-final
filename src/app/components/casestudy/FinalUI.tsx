"use client";

import Image from "next/image";
import { motion } from "motion/react";
import WordReveal from "../shared/WordReveal";

const shots = ["/jobsea/project2.png", "/jobsea/image1.png"];

export default function FinalUI() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="mx-auto max-w-[1064px] text-center">
          <WordReveal
            text="Visual Excellence: The Final UI"
            className="justify-center text-[30px] font-bold leading-[120%] text-ink md:text-[52px]"
          />
          <p className="mx-auto mt-5 max-w-[900px] text-sm leading-relaxed text-grey-700 md:text-base">
            Discover the polished interface of JobSea, where aesthetics meet functionality. We&apos;ve
            transformed wireframes into a vibrant, user-centric digital experience designed to
            connect talent with opportunity seamlessly.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {shots.map((src, i) => (
            <motion.div
              key={src}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              className="overflow-hidden rounded-3xl bg-[#f2fbe3]"
            >
              <Image
                src={src}
                alt="JobSea final UI"
                width={508}
                height={640}
                className="h-[360px] w-full object-cover object-top md:h-[560px]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
