"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import Header from "../Header";
import TextReveal from "../shared/TextReveal";
import TrustStrip from "./TrustStrip";

const shots = [
  "/project1.png",
  "/project3.png",
  "/saas.png",
  "/project5.png",
  "/image10.png",
  "/project2.png",
  "/image14.png",
  "/project4.png",
  "/cs3-4.png",
  "/project6.png",
];

export default function DetailHero() {
  return (
    <section className="relative overflow-hidden bg-white px-2 pt-2 md:px-4 md:pt-4">
      <div className="relative mx-auto w-full overflow-hidden rounded-t-3xl bg-[#f6f0ff]">
        {/* Brand gradient wash — light at the top, gradually darkening to deep purple at the bottom */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 60% at 85% 6%, rgba(136,60,250,0.16) 0%, rgba(136,60,250,0) 50%), linear-gradient(180deg,#faf7ff 0%,#faf7ff 46%,#ece1fb 58%,#8a67c0 70%,#3a2066 84%,#150a2e 100%)",
          }}
        />
        {/* Holographic accent (top) */}
        <div className="pointer-events-none absolute -right-16 -top-10 hidden size-64 rotate-12 rounded-3xl bg-[conic-gradient(from_120deg,#c496ff,#883cfa,#b377ff,#eee0ff,#c496ff)] opacity-30 blur-2xl md:block" />
        {/* Soft brand glow rising from the bottom */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[460px]"
          style={{
            background:
              "radial-gradient(65% 100% at 50% 100%, rgba(136,60,250,0.4) 0%, rgba(136,60,250,0) 72%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1440px]">
          <Header />

          <div className="mx-auto flex flex-col items-center gap-6 px-5 pb-14 pt-36 text-center md:px-20 md:pb-16 md:pt-44">
            <TextReveal
              as="h1"
              className="max-w-[900px] justify-center text-[40px] font-extrabold leading-[108%] tracking-[-0.02em] text-ink md:text-[68px] wide:text-[76px]"
            >
              UI/UX Design Services for
            </TextReveal>
            <h2 className="-mt-2 max-w-[900px] text-[40px] font-extrabold leading-[108%] tracking-[-0.02em] text-primary md:-mt-4 md:text-[68px] wide:text-[76px]">
              Enterprises, Startups &amp; Scaling Brands
            </h2>

            <motion.p
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-[620px] text-base leading-relaxed text-subtext md:text-lg"
            >
              We design digital experiences that feel effortless, combining user flows, design
              systems, and deep user research to drive real business growth.
            </motion.p>

            <motion.a
              href="/contact"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-primary bg-primary px-8 py-5 text-base font-medium text-white shadow-[0px_10px_30px_-8px_rgba(136,60,250,0.55)] transition-all hover:scale-[1.02] hover:bg-[#7a32e0]"
            >
              <MessageCircle className="size-5" />
              Book a Call
            </motion.a>
          </div>

          {/* Infinite image slider — inside hero, on the same background */}
          <div className="relative z-10 overflow-hidden pb-6 md:pb-8">
            <div
              className="flex w-max animate-marquee-left gap-5 md:gap-7 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
              style={{ animationDuration: "70s" }}
            >
              {[...shots, ...shots].map((s, i) => (
                <div
                  key={i}
                  className="w-[280px] shrink-0 overflow-hidden rounded-[26px] border border-white/60 bg-white/70 p-2 shadow-[0px_24px_60px_-30px_rgba(136,60,250,0.4)] backdrop-blur-sm md:w-[360px]"
                >
                  <div className="overflow-hidden rounded-[18px]">
                    <Image
                      src={s}
                      alt=""
                      width={720}
                      height={460}
                      className="h-[190px] w-full object-cover md:h-[230px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trusted-by brand logos — inside the hero, on the same background */}
          <TrustStrip />
        </div>
      </div>
    </section>
  );
}
