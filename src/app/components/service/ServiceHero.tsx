"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Header from "../Header";
import TextReveal from "../shared/TextReveal";

export default function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-white px-2 md:px-4 pt-2 pb-0 md:pb-0 md:pt-4">
      <div className="relative mx-auto w-full overflow-hidden rounded-t-3xl">
        {/* Full-width hero background image */}
        <Image
          src="/serviceBanner.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1440px) 100vw, 1440px"
          className="object-cover"
        />
        {/* Soft white wash on the left so the heading stays legible over the image */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.72) 34%, rgba(255,255,255,0.15) 60%, rgba(255,255,255,0) 78%)",
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto">
          <Header />

          <div className="mx-auto flex h-auto w-full flex-col items-start gap-10 px-5 pb-16 pt-32 md:h-[calc(100vh+110px)] md:justify-center md:px-20 md:pb-0 md:pt-0">
            <div className="md:max-w-[620px]">
              <TextReveal
                as="h1"
                className="max-w-[620px] text-[44px] font-extrabold leading-[112%] text-[#342F3D] md:text-[72px] wide:text-[80px]"
              >
                We design result driven digital solution
              </TextReveal>

              <motion.a
                href="#"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-primary bg-primary px-8 py-5 text-base font-medium leading-[150%] text-white shadow-[0px_10px_30px_-8px_rgba(136,60,250,0.55)] transition-all hover:scale-[1.02] hover:bg-[#7a32e0] md:mt-10"
              >
                Book a Free Call
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
