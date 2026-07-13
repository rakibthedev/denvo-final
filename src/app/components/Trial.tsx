"use client";

import { motion } from "motion/react";
import WordReveal from "./shared/WordReveal";
import PrimaryBtn from "./shared/PrimaryBtn";

const steps = [
  { n: "01", text: "Pick a small part of your existing product." },
  { n: "02", text: "See our process in acton and test if you enjoy it." },
  { n: "03", text: "Get 1-2 screens designed for you during the trial period." },
  { n: "04", text: "Decide if you're ready for a subscription." },
];

// Static connector line: solid grey / dashed purple / solid grey (matches the design).
const segments = [
  { dashed: false },
  { dashed: true },
  { dashed: false },
];

export default function Trial() {
  return (
    <section className="bg-[#f9f5ff] py-16 md:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="mb-10 flex flex-col items-start md:mb-16 md:items-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            Get 3-Days Free Trial
          </p>
          <WordReveal
            text="Test our design expertise with a free 3-days trial"
            className="mt-4 max-w-[820px] justify-start text-left text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-ink md:justify-center md:text-center md:text-[48px]"
          />
        </div>

        <div className="relative mx-auto mb-10 w-full max-w-5xl md:mb-16">
          {/* Connector line fades in once on view (numbers + text stay static) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pointer-events-none absolute inset-x-0 top-[33px] z-0 hidden md:block"
          >
            {segments.map((seg, i) => (
              <span
                key={i}
                className={`absolute top-0 h-0 border-t-2 ${
                  seg.dashed ? "border-dashed border-[#883CFA]" : "border-[#DEDCE0]"
                }`}
                style={{ left: `calc(${12.5 + i * 25}% + 34px)`, width: "calc(25% - 68px)" }}
              />
            ))}
          </motion.div>

          {/* Steps are static */}
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4 md:gap-y-0">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="relative flex flex-row items-center gap-5 text-left md:flex-col md:gap-0 md:text-center"
              >
                {/* mobile vertical connector */}
                {i < steps.length - 1 && (
                  <span
                    className={`absolute -bottom-8 left-[33px] top-[68px] z-0 w-0 border-l-2 md:hidden ${
                      i === 1 ? "border-dashed border-[#883CFA]" : "border-[#DEDCE0]"
                    }`}
                  />
                )}
                <span className="relative z-10 flex size-[68px] shrink-0 items-center justify-center rounded-2xl border-[1.5px] border-primary bg-[#f9f5ff] text-2xl font-bold text-ink md:mb-6">
                  {s.n}
                </span>
                <p className="max-w-[280px] text-sm text-grey-700 md:max-w-[200px] md:text-base">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <PrimaryBtn txt="Contact to sale" arrow />
        </div>
      </div>
    </section>
  );
}
