"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import WordReveal from "../shared/WordReveal";

const meta = [
  { label: "Industry", value: "Local Job Portal", bg: "#f3e8ff" },
  { label: "Services", value: "UI/UX Case Study", bg: "#eefcd6" },
  { label: "Timeline", value: "4 Months", bg: "#e5f0ff" },
];

export default function ProjectIntro() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-16">
          {/* Left: copy */}
          <div className="w-full md:w-[32%]">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              /Where Comfort Meets Luxury
            </p>
            <WordReveal
              text="Bridging the Gap Between Local Talent and Nearby Opportunities."
              className="mt-4 text-[26px] font-bold leading-[125%] tracking-[-0.02em] text-ink md:text-[32px]"
            />
            <motion.a
              href="#"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-medium text-white transition-all hover:scale-[1.02] hover:bg-[#7a32e0]"
            >
              Visit Behance <ArrowRight className="size-4" />
            </motion.a>
          </div>

          {/* Right: hero image */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-full overflow-hidden rounded-3xl md:w-[68%]"
          >
            <Image
              src="/project1.png"
              alt="Job Sea website preview"
              width={847}
              height={612}
              className="h-[260px] w-full object-cover md:h-[500px]"
            />
          </motion.div>
        </div>

        {/* Meta cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
          {meta.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl p-6 md:p-8"
              style={{ backgroundColor: m.bg }}
            >
              <p className="text-2xl font-bold text-ink md:text-[32px]">{m.label}</p>
              <p className="mt-6 text-base text-grey-800 md:text-lg">{m.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
