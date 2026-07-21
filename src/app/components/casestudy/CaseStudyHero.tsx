"use client";

import { motion } from "motion/react";
import Header from "../Header";
import TextReveal from "../shared/TextReveal";

export default function CaseStudyHero() {
  return (
    <section className="relative overflow-hidden bg-white md:pt-3">
      <div
        className="relative mx-auto flex max-w-[1440px] flex-col overflow-hidden rounded-3xl md:h-[calc(100vh-12px)]"
        style={{
          background:
            "radial-gradient(120% 90% at 80% 0%, #f3ebff 0%, #faf8ff 45%, #ffffff 100%)",
        }}
      >
        <Header />

        <div className="mx-auto flex w-full flex-1 flex-col items-start justify-center gap-6 px-5 pb-16 pt-28 md:px-20 md:py-0">
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-lg font-medium text-grey-700 md:text-xl"
          >
            <span>UI/Ux Design</span>
            <span className="size-2 rounded-full bg-brand-500" />
            <span>Dashboard Design</span>
          </motion.div>

          <TextReveal
            as="h1"
            className="max-w-[820px] text-[44px] font-extrabold leading-[110%] text-[#342F3D] md:text-[80px] wide:text-[88px]"
          >
            Job Sea – Local Job Portal
          </TextReveal>

          <motion.a
            href="#"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-2 inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-primary bg-primary px-8 py-4 text-base font-medium leading-[150%] text-white shadow-[0px_10px_30px_-8px_rgba(136,60,250,0.55)] transition-all hover:scale-[1.02] hover:bg-[#7a32e0]"
          >
            Book a Free Consultation
          </motion.a>
        </div>
      </div>
    </section>
  );
}
