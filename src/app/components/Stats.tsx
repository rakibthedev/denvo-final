"use client";

import Image from "next/image";
import { motion } from "motion/react";
import WordReveal from "./shared/WordReveal";

const stats = [
  { img: "achievement1", value: "5+", label: "Years of Experience", from: -80 },
  { img: "achievement2", value: "10+", label: "Service in Countries", from: -80 },
  { img: "achievement3", value: "120+", label: "Projects Delivered", from: 80 },
  { img: "achievement4", value: "20+", label: "Team Members", from: 80 },
];

export default function Stats() {
  return (
    <section className="bg-[#272629]">
      <div className="mx-auto w-full max-w-[1440px] space-y-8 px-5 py-14 md:space-y-16 md:px-20 md:py-32">
        <WordReveal
          text="We Strive Into Innovate"
          className="text-[48px] font-extrabold uppercase italic leading-[100%] text-[#b6b4b8]/50 md:text-[120px]"
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map(({ img, value, label, from }) => (
            <motion.div
              key={label}
              initial={{ x: from, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col rounded-3xl bg-[#443b52] p-6 md:p-8"
            >
              <Image
                src={`/${img}.png`}
                alt=""
                width={40}
                height={40}
                className="size-8 object-contain md:size-9"
              />
              <p className="mt-16 text-[40px] font-bold leading-none text-white md:mt-24 md:text-[56px]">
                {value}
              </p>
              <p className="mt-3 text-sm text-[#b3aebd] md:mt-4 md:text-base">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
