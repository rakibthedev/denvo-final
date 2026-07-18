"use client";

import Image from "next/image";
import { motion } from "motion/react";

const cards = [
  {
    icon: "/mission-icon.png",
    title: "Our Mission",
    lead: "A global partner for meaningful digital products",
    body: "To become a global design partner for businesses that want to build meaningful and impactful digital products that stand the test of time.",
  },
  {
    icon: "/vision-icon.png",
    title: "Our Vision",
    lead: "Simplifying complexity into experiences users love",
    body: "To simplify complex ideas into intuitive digital experiences that users love and businesses grow from—making great design accessible to every ambitious team.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-6 px-5 md:grid-cols-2 md:gap-8 md:px-20">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            className="rounded-[28px] border border-[#EEE0FF] bg-[#f9f5ff] p-6 md:p-8"
          >
            <div className="flex size-[88px] items-center justify-center rounded-[22px] bg-[#eee0ff] md:size-[104px]">
              <Image
                src={c.icon}
                alt=""
                width={72}
                height={72}
                className="size-11 object-contain md:size-[56px]"
              />
            </div>

            <h3 className="mt-8 text-[36px] font-medium leading-none text-ink md:text-[48px]">
              {c.title}
            </h3>
            <p className="mt-5 text-lg font-semibold text-ink md:text-[22px]">{c.lead}</p>
            <p className="mt-3 max-w-[560px] text-base leading-relaxed text-grey-700">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
