"use client";

import { motion } from "motion/react";
import { FaStar } from "react-icons/fa";
import Header from "../Header";
import TextReveal from "../shared/TextReveal";
import FlipServiceItem from "../shared/FlipServiceItem";
import ContactFormCard from "./ContactFormCard";

const serviceTags = [
  { label: "UI/UX Design", image: "/project1.png", offset: "md:mr-8" },
  { label: "Web Development", image: "/project2.png", offset: "md:mr-12" },
  { label: "Brand Design", image: "/project5.png", offset: "mr-0" },
  { label: "Figma", image: "/project3.png", offset: "md:mr-24" },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white rounded-3xl mx-2 md:mx-4 mt-2 mb-0 md:mb-0 md:mt-4"
      style={{ background: "linear-gradient(#f7f1ff, #ffffff)" }}
    >
      <div
        className="relative mx-auto max-w-[1440px] overflow-hidden px-5 pb-16 md:px-12 md:pb-24 lg:px-[53px]"
        
      >
        <Header />

        <div className="md:h-[calc(100vh-110px)] h-auto py-20 md:py-[140px] mt-16 flex flex-col items-center justify-between gap-12 md:mt-24 lg:flex-row">
          {/* Left: heading + rating */}
          <div className="w-full lg:w-7/12">
            <TextReveal
              as="h1"
              className="text-4xl font-extrabold leading-tight text-[#342F3D] md:text-6xl lg:text-[72px]"
            >
              /Let&apos;s work on what you care about
            </TextReveal>

            <div className="mt-8 flex items-center gap-4 md:mt-10">
              <svg width="31" height="35" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-14 md:w-12">
                <path d="M29.6431 6.29001C27.3273 3.66597 24.2556 1.82356 20.8502 1.01601C17.4449 0.20845 13.873 0.475383 10.6255 1.78012C7.37797 3.08485 4.61425 5.36335 2.71416 8.30245C0.814073 11.2415 -0.129118 14.697 0.0142194 18.1939C0.157556 21.6907 1.38039 25.0574 3.51464 27.8311C5.6489 30.6048 8.58982 32.6495 11.9332 33.6841C15.2766 34.7186 18.8584 34.6924 22.1862 33.6088C25.5141 32.5252 28.4247 30.4376 30.518 27.6329L24.718 23.3042C23.519 24.9108 21.8518 26.1066 19.9456 26.7272C18.0394 27.3479 15.9877 27.363 14.0726 26.7704C12.1575 26.1777 10.4729 25.0065 9.25037 23.4177C8.02785 21.8289 7.3274 19.9005 7.2453 17.8975C7.1632 15.8944 7.70346 13.9151 8.79185 12.2316C9.88023 10.548 11.4633 9.24291 13.3235 8.49555C15.1837 7.74819 17.2297 7.59529 19.1803 8.05786C21.1309 8.52044 22.8904 9.57578 24.2169 11.0788L29.6431 6.29001Z" fill="#13252D" />
                <circle cx="16.9414" cy="17.5" r="5.84178" fill="#DD0A12" />
              </svg>
              <div>
                <div className="flex items-center gap-2 text-lg font-medium md:text-xl">
                  <span>5.0</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} color="#DD0A12" className="h-4 w-4" />
                    ))}
                  </div>
                </div>
                <p className="mt-1 text-xs font-light uppercase tracking-wider text-gray-500 md:text-sm">
                  Based on 28 Clutch reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right: floating services (flip on hover) */}
          <div className="flex w-full flex-col gap-4 lg:w-5/12 lg:items-end">
            {serviceTags.map((tag, i) => (
              <motion.div
                key={tag.label}
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.12 * i, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`relative z-0 hover:z-50 ${tag.offset}`}
              >
                <FlipServiceItem label={tag.label} image={tag.image} className="lg:justify-end" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div className="py-12 flex items-center justify-center md:py-16">
          <ContactFormCard />
        </div>
      </div>
    </section>
  );
}
