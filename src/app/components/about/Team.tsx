"use client";

import Image from "next/image";
import { motion } from "motion/react";
import WordReveal from "../shared/WordReveal";

const members = [
  { name: "John Doe", role: "UI/UX Designer", photo: "/client.png" },
  { name: "John Doe", role: "UI/UX Designer", photo: "/client.png" },
  { name: "John Doe", role: "UI/UX Designer", photo: "/client.png" },
];

export default function Team() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
          /Meet Our Team
        </p>
        <WordReveal
          text="Our strength is our unity. The minds behind the magic."
          className="mt-3 max-w-[720px] text-[22px] font-medium leading-[140%] text-grey-700 md:text-[26px]"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
          {members.map((m, i) => (
            <motion.article
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              whileHover="hover"
              className="cursor-pointer rounded-3xl border border-[#EEE0FF] bg-[#f9f5ff] p-4"
            >
              <div className="overflow-hidden rounded-2xl">
                <motion.div variants={{ hover: { scale: 1.04 } }} transition={{ duration: 0.4, ease: "easeOut" }}>
                  <Image
                    src={m.photo}
                    alt={m.name}
                    width={420}
                    height={360}
                    className="h-[300px] w-full object-cover md:h-[340px]"
                  />
                </motion.div>
              </div>
              <div className="px-2 pb-2 pt-5">
                <p className="text-lg font-bold text-ink">{m.name}</p>
                <p className="mt-1 text-sm text-subtext">{m.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
