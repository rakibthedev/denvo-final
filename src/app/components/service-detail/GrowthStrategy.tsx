"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import SectionBadge from "./SectionBadge";

const items = [
  {
    title: "Human-Centered Approach",
    body: "We start with the people who use your product — mapping real user flows, needs and friction points so every screen earns its place and feels effortless to navigate.",
  },
  {
    title: "Research-Driven Strategy",
    body: "Competitor audits, interviews and journey mapping turn assumptions into evidence, so design decisions are grounded in what actually moves your business metrics.",
  },
  {
    title: "AI-Powered Design",
    body: "We blend modern AI tooling into our workflow to explore more directions faster, validate ideas early and ship polished, production-ready interfaces on time.",
  },
  {
    title: "Seamless Developer Handoff",
    body: "Clean design systems, tokens and documented components mean engineers build faster with zero guesswork — pixel-perfect from Figma to production.",
  },
];

export default function GrowthStrategy() {
  const [open, setOpen] = useState(-1);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20 flex flex-col items-center">
        <h2 className="mt-6 mb-6 max-w-[760px] text-[32px] font-extrabold leading-[112%] tracking-[-0.02em] text-ink md:text-[52px]">
          Because <span className="text-primary">Good Design</span> Is a{" "}
          <span className="text-primary">Business Growth</span> Strategy
        </h2>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 md:mt-16 md:grid-cols-2 md:gap-16">
          <div className="overflow-hidden rounded-3xl bg-[#f9f5ff] p-5 md:p-8">
            <Image
              src="/cta-dashboard.png"
              alt="Product dashboard design"
              width={640}
              height={460}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>

          <div>
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={it.title} className="border-b border-[#EAE4F2]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={`text-lg font-semibold transition-colors md:text-xl ${
                        isOpen ? "text-primary" : "text-ink"
                      }`}
                    >
                      {it.title}
                    </span>
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isOpen
                          ? "border-primary bg-primary text-white"
                          : "border-brand-100 text-grey-700"
                      }`}
                    >
                      <ChevronDown
                        className={`size-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-base leading-relaxed text-subtext">
                          {it.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
