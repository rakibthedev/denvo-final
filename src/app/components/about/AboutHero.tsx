"use client";

import { motion } from "motion/react";
import Header from "../Header";
import TextReveal from "../shared/TextReveal";
import FlipServiceItem from "../shared/FlipServiceItem";

// Right-floating hero services (same flip-on-hover component as the home hero).
const serviceTags = [
  { label: "Good design", image: "/project1.png" },
  { label: "Good conversion", image: "/project2.png" },
  { label: "Bold design", image: "/project3.png" },
  { label: "billion-dollar proof", image: "/project5.png" },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] p-5">
      {/* Soft lavender wash, matching the airy hero backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"        
      />

      <div className="relative mx-auto max-w-[1440px] rounded-3xl"
      style={{
          background:
            "radial-gradient(120% 90% at 80% 0%, #f3ebff 0%, #faf8ff 45%, #ffffff 100%)",
        }}
        >
        <Header />

        <div className="md:translate-y-[60px] mx-auto flex h-auto w-full flex-col items-start gap-10 px-5 pb-16 pt-32 md:h-[calc(100vh-40px)] md:flex-row md:items-center md:gap-10 md:px-20 md:pb-0 md:pt-0">
          {/* Left: heading + subtext + CTA */}
          <div className=" md:w-[60%]">
            <TextReveal
              as="h1"
              className="max-w-[760px] text-[44px] font-extrabold leading-[112%] text-[#342F3D] md:text-[80px] wide:text-[88px]"
            >
              /We Design Experiences That Drive Real Growth
            </TextReveal>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
              viewport={{ once: true }}
              className="mt-6 max-w-[560px] text-base text-extrabold leading-[160%] text-subtext md:text-lg"
            >
              We are a results-driven UI/UX design agency focused on building
              digital products that are not only beautiful—but actually perform.
            </motion.p>

            <motion.a
              href="#"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
              viewport={{ once: true }}
              className="mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-primary bg-primary px-8 py-5 text-base font-medium leading-[150%] text-white shadow-[0px_10px_30px_-8px_rgba(136,60,250,0.55)] transition-all hover:scale-[1.02] hover:bg-[#7a32e0] md:mt-10"
            >
              Book a Free Call
            </motion.a>
          </div>

          {/* Right: floating services (flip on hover) — desktop only */}
          <div className="flex w-full shrink-0 flex-col items-start gap-6 md:w-[40%] md:items-end">
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
                  <FlipServiceItem label={tag.label} image={tag.image} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
