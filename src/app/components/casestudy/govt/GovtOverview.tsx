"use client";

import Image from "next/image";
import { motion } from "motion/react";
import AboutText from "../../shared/AboutText";
import WordReveal from "../../shared/WordReveal";

export default function GovtOverview() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        {/* Overview */}
        <WordReveal
          text="Overview"
          className="justify-center text-center text-[36px] font-bold leading-[120%] text-ink md:text-[56px]"
        />
        <div className="mx-auto mt-6 max-w-[1064px] text-center">
          <AboutText
            txt="The Prottoyon app redesign simplifies government services with easy navigation, AI-powered features, and real-time tracking for a smoother user experience."
            className="justify-center text-[26px] font-extrabold leading-[130%] md:text-[40px]"
          />
        </div>

        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-[1064px] overflow-hidden rounded-3xl md:mt-16"
        >
          <Image
            src="/govt-certificate-app/overview-splash.png"
            alt="Prottoyon splash screen"
            width={1064}
            height={720}
            className="h-[260px] w-full object-cover md:h-[620px]"
          />
        </motion.div>

        {/* Problem Statement */}
        <div className="mt-16 md:mt-24">
          <WordReveal
            text="Problem Statement"
            className="text-[30px] font-bold leading-[120%] text-ink md:text-[48px]"
          />
          <p className="mt-5 max-w-[1000px] text-base leading-relaxed text-grey-700 md:text-lg">
            <span className="font-semibold text-ink">The Prottoyon app</span> struggles with complex
            navigation, unclear service access, and lack of real-time updates. Users face
            difficulties in registration, application tracking, and payments. A redesign is needed to
            simplify processes and enhance user experience
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 md:gap-8">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-8% 0px" }}
              className="overflow-hidden rounded-3xl bg-[#eef3ff]"
            >
              <Image
                src="/govt-certificate-app/problem-home.png"
                alt="Prottoyon home screen"
                width={636}
                height={420}
                className="h-[240px] w-full object-cover md:h-[320px]"
              />
            </motion.div>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              className="overflow-hidden rounded-3xl bg-[#111]"
            >
              <Image
                src="/govt-certificate-app/problem-reviews.png"
                alt="User reviews of the existing app"
                width={636}
                height={420}
                className="h-[240px] w-full object-cover md:h-[320px]"
              />
            </motion.div>
          </div>
        </div>

        {/* The Solution */}
        <div className="mt-16 max-w-[1100px] md:mt-24">
          <WordReveal
            text="The Solution"
            className="text-[30px] font-bold leading-[120%] text-ink md:text-[48px]"
          />
          <p className="mt-5 text-base leading-relaxed text-grey-700 md:text-lg">
            <span className="font-semibold text-ink">The redesigned Prottoyon app</span> makes
            government services simple and stress-free. A quick OTP login, easy step-by-step forms,
            and real-time application tracking help users complete tasks without confusion. With full
            Bangla support, a mobile-friendly and accessible design, and AI-powered smart search and
            assistance, the app is now faster, clearer, and easier for everyone in Bangladesh to use.
          </p>
        </div>
      </div>
    </section>
  );
}
