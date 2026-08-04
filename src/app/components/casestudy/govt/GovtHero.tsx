"use client";

import { motion } from "motion/react";
import Header from "../../Header";
import TextReveal from "../../shared/TextReveal";
import FlipServiceItem from "../../shared/FlipServiceItem";

const tags = ["Web Design", "Mobile App Design"];
const serviceTags = [
  { label: "UI/UX Design", offset: "md:pr-6", image: "/project1.png" },
  { label: "Web Development", offset: "md:pr-12", image: "/project2.png" },
  { label: "Brand Design", offset: "md:pr-0", image: "/project5.png" },
  { label: "Figma", offset: "md:pr-20", image: "/project3.png" },
];

export default function GovtHero() {
  return (
    <section
      className="relative overflow-hidden bg-white mx-2 md:mx-4 mt-2 mb-0 md:mb-0 md:mt-4 rounded-t-3xl"
      style={{ background: "linear-gradient(#f7f1ff, #ffffff)" }}
    >
      <div className="relative mx-auto flex max-w-[1440px] flex-col overflow-hidden md:min-h-[100vh] md:py-[140px] py-20">
        <Header />

        <div className="mx-auto flex w-full flex-1 flex-col justify-center gap-6 px-5 pb-16 pt-28 md:px-20 md:py-0">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            {/* Left: tags + title */}
            <div className="flex flex-col items-start gap-6">
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-lg font-medium text-grey-700 md:text-xl"
              >
                {tags.map((t, i) => (
                  <span key={t} className="flex items-center gap-3">
                    {i > 0 && <span className="size-2 rounded-full bg-brand-500" />}
                    <span>{t}</span>
                  </span>
                ))}
              </motion.div>

              <TextReveal
                as="h1"
                className="max-w-[820px] text-[44px] font-extrabold leading-[110%] text-[#342F3D] md:text-[80px] wide:text-[88px]"
              >
                Govt. Certificate Application
              </TextReveal>
            </div>
            {/* Right: floating services (flip on hover) — desktop only */}
            <div className="hidden flex-col gap-6 md:flex">              
              {serviceTags.map((tag, i) => (
                <motion.div
                  key={tag.label}
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 * i, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative z-0 hover:z-50"
                >
                  <FlipServiceItem label={tag.label} image={tag.image} className={tag.offset} />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.a
            href="#"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-2 inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-2xl border border-primary bg-primary px-8 py-4 text-base font-medium leading-[150%] text-white shadow-[0px_10px_30px_-8px_rgba(136,60,250,0.55)] transition-all hover:scale-[1.02] hover:bg-[#7a32e0]"
          >
            Book a Free Consultation
          </motion.a>
        </div>
      </div>
    </section>
  );
}
