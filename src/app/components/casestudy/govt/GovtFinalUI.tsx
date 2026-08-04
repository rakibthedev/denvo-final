"use client";

import Image from "next/image";
import { motion } from "motion/react";
import WordReveal from "../../shared/WordReveal";
import AboutText from "../../shared/AboutText";

const base = "/govt-certificate-app";
const shots = [
  `${base}/brand-orange.png`,
  `${base}/brand-green.png`,
  `${base}/brand-home-black.png`,
];

export default function GovtFinalUI() {
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
              txt="Our initial ideas for Prottoyon developed into high-quality wireframes, which then seamlessly evolved into a comprehensive web blueprint. This structured approach allowed us to focus on layout and information hierarchy before moving into the final visual design."
              className="justify-center text-[18px] font-semibold leading-[140%] md:text-[26px]"
            />
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl bg-[#f5f5f7] p-6 md:mt-16 md:p-12">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h3 className="text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink md:text-[96px]">
                Total 98+
                <br />
                Screen
              </h3>
            </div>

            <div className="order-1 grid grid-cols-3 gap-3 md:order-2 md:gap-5">
              {shots.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-30px_rgba(20,20,40,0.5)]"
                  style={{ transform: `rotate(${(i - 1) * 4}deg)` }}
                >
                  <Image
                    src={src}
                    alt="Prottoyon final UI"
                    width={260}
                    height={420}
                    className="h-[220px] w-full object-cover md:h-[420px]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
