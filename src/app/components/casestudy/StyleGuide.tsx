"use client";

import Image from "next/image";
import { motion } from "motion/react";
import WordReveal from "../shared/WordReveal";

const weights = ["Regular", "Medium", "SemiBold", "Bold"];
const colors = [
  { hex: "#B2F828", label: "B2F828" },
  { hex: "#FF5900", label: "FF5900" },
  { hex: "#3CC72C", label: "3CC72C" },
  { hex: "#FE3333", label: "FE3333" },
];

export default function StyleGuide() {
  return (
    <section className="bg-[#f7f7fb] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 md:px-20">
        <div className="text-center">
          <WordReveal
            text="Style Guide"
            className="justify-center text-[36px] font-bold leading-[120%] text-ink md:text-[56px]"
          />
          <p className="mx-auto mt-5 max-w-[820px] text-sm leading-relaxed text-grey-700 md:text-base">
            Noto Sans Bengali is a clean and friendly sans-serif typeface with soft, rounded edges
            that feel approachable and modern. Its high readability and balanced structure make it
            ideal for a government service app like Prottoyon, ensuring clear communication,
            accessibility, and a comfortable reading experience for users of all ages.
          </p>
        </div>

        {/* Typography */}
        <div className="mt-14 grid grid-cols-1 items-center gap-8 md:mt-16 md:grid-cols-[1fr_1.4fr]">
          <div className="flex items-center justify-center">
            <span className="select-none text-[220px] font-bold leading-none text-[#2f6bff] md:text-[300px]">A</span>
          </div>

          <div>
            <h3 className="text-[28px] font-semibold text-ink md:text-[36px]">Open Source</h3>
            <p className="mt-4 text-lg tracking-[0.12em] text-grey-800 md:text-2xl">
              A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
            </p>
            <p className="mt-3 text-lg tracking-[0.12em] text-grey-800 md:text-2xl">
              a b c d e f g h i j k l m n o p q r s t u v w x y z
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {weights.map((w) => (
                <span
                  key={w}
                  className="rounded-lg border border-[#cfe0ff] bg-[#eef4ff] px-5 py-2.5 text-sm text-[#2f6bff]"
                >
                  {w}
                </span>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl bg-[#eaf1ff]">
              <Image
                src="/visual2.png"
                alt="Job Sea app icon"
                width={611}
                height={432}
                className="h-[260px] w-full object-cover object-top md:h-[300px]"
              />
            </div>
          </div>
        </div>

        {/* Color palette */}
        <div className="mt-12 grid grid-cols-2 gap-5 md:mt-16 md:grid-cols-4">
          {colors.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl"
            >
              <div className="h-[220px] w-full md:h-[260px]" style={{ backgroundColor: c.hex }} />
              <p className="py-4 text-center text-lg font-medium text-ink">{c.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
