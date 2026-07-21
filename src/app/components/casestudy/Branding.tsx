"use client";

import Image from "next/image";
import { motion } from "motion/react";
import WordReveal from "../shared/WordReveal";

// Masonry gallery items — mix of image tiles + one highlighted text card.
const items: ({ type: "img"; src: string; h: number } | { type: "text" })[] = [
  { type: "img", src: "/visual1.png", h: 300 },
  { type: "text" },
  { type: "img", src: "/work1.png", h: 360 },
  { type: "img", src: "/visual2.png", h: 320 },
  { type: "img", src: "/visual3.png", h: 260 },
  { type: "img", src: "/project1.png", h: 240 },
  { type: "img", src: "/visual5.png", h: 300 },
];

export default function Branding() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <WordReveal
          text="Branding"
          className="justify-center text-center text-[36px] font-bold leading-[120%] text-ink md:text-[56px]"
        />

        <div className="mt-10 gap-5 [column-fill:_balance] md:mt-14 md:columns-3">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.08 }}
              viewport={{ once: true, margin: "-6% 0px" }}
              className="mb-5 break-inside-avoid"
            >
              {it.type === "text" ? (
                <div className="flex flex-col justify-center rounded-3xl bg-[#f3e8ff] p-6 md:p-8">
                  <div className="mb-4 h-1.5 w-10 rounded-full bg-brand-500" />
                  <p className="text-lg font-semibold leading-snug text-ink md:text-xl">
                    Navigate your career like a sea — JobSea keeps on you job opportunity
                  </p>
                </div>
              ) : (
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src={it.src}
                    alt=""
                    width={420}
                    height={it.h}
                    className="w-full object-cover"
                    style={{ height: it.h }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
