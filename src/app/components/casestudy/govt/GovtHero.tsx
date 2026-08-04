"use client";

import { motion } from "motion/react";
import Header from "../../Header";
import TextReveal from "../../shared/TextReveal";

const tags = ["Web Design", "Mobile App Design"];
const stack = ["UI/UX Design", "Web Development", "Brand Design", "Figma"];

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

            {/* Right: stack list */}
            <motion.ul
              initial={{ x: 16, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-5 md:items-end md:pt-2"
            >
              {stack.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 text-lg font-medium text-[#342F3D] md:text-xl"
                >
                  <span className="text-grey-700">{"{ + }"}</span>
                  <span>{s}</span>
                </li>
              ))}
            </motion.ul>
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
