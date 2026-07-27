"use client";

import Image from "next/image";
import { motion } from "motion/react";
import SectionBadge from "./SectionBadge";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  viewport: { once: true, margin: "-8% 0px" },
};

const card = "overflow-hidden rounded-3xl border border-[#ececec]";

export default function IdeaTransformation() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="flex flex-col items-center text-center">
          <SectionBadge label="Idea Transformation" />
          <h2 className="mt-6 text-[32px] font-extrabold leading-[112%] tracking-[-0.02em] text-[#272629] md:text-[54px]">
            Your Ideas, Our Expertise,
            <br className="hidden md:block" />{" "}
            <span className="text-primary">Impactful Results</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:h-[500px] md:grid-cols-4 md:grid-rows-2">
          {/* 60+ Creative Minds */}
          <motion.div {...fadeUp} className={`${card} bg-white p-6 md:p-7`}>
            <Image
              src="/idea-trans/creative-minds.avif"
              alt=""
              width={227}
              height={70}
              className="h-[60px] w-auto"
            />
            <h3 className="mt-8 text-2xl font-bold text-[#272629] md:text-[26px]">60+ Creative Minds</h3>
            <p className="mt-2 text-base text-[#6b6b6b]">United minds turn ideas into stories.</p>
          </motion.div>

          {/* Guardian testimonial — tall */}
          <motion.div {...fadeUp} className={`${card} relative min-h-[340px] md:row-span-2`}>
            <Image
              src="/idea-trans/testimonial.avif"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover object-top"
            />
            <div className="relative flex h-full flex-col p-6 md:p-7">
              <Image
                src="/idea-trans/guardian-logo.avif"
                alt="Guardian Estate Company"
                width={305}
                height={61}
                className="h-[26px] w-auto"
              />
              <p className="mt-4 max-w-[260px] text-base leading-relaxed text-[#272629]">
                Denvo Lab were great, flexible and communicative. Excellent designs and quick
                turnaround!
              </p>
              <div className="mt-auto">
                <p className="text-lg font-bold text-white">Jenna Carvalho</p>
                <p className="text-sm text-white/80">Principal @ Guardian Estate Company</p>
              </div>
            </div>
          </motion.div>

          {/* 4.9 / 5 */}
          <motion.div
            {...fadeUp}
            className={`${card} p-6 md:p-7`}
            style={{ background: "linear-gradient(135deg,#e9f0dc 0%,#f6f8f1 55%)" }}
          >
            <Image src="/idea-trans/star.avif" alt="" width={82} height={82} className="size-[54px]" />
            <p className="mt-6 text-[44px] font-extrabold leading-none text-[#272629] md:text-[52px]">
              4.9/5
            </p>
            <p className="mt-3 text-base text-[#6b6b6b]">We ensure excellence for customer satisfaction.</p>
          </motion.div>

          {/* Global Presence */}
          <motion.div {...fadeUp} className={`${card} relative bg-white`}>
            <Image
              src="/idea-trans/global-map.avif"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-contain object-bottom"
            />
            <div className="relative p-6 md:p-7">
              <h3 className="text-xl font-bold text-[#272629]">Global Presence</h3>
              <p className="mt-1 text-sm text-[#6b6b6b]">Offices That Span the Map.</p>
            </div>
          </motion.div>

          {/* Design system pills */}
          <motion.div
            {...fadeUp}
            className={`${card} flex items-center justify-center bg-white p-6 md:p-7`}
          >
            <Image
              src="/idea-trans/design-system.avif"
              alt=""
              width={468}
              height={307}
              className="h-auto w-full max-w-[260px]"
            />
          </motion.div>

          {/* 150+ Global Clients — wide */}
          <motion.div
            {...fadeUp}
            className={`${card} relative min-h-[160px] md:col-span-2`}
            style={{ background: "linear-gradient(135deg,#fbf4dd,#fdfaf0)" }}
          >
            <Image
              src="/idea-trans/clients-people.avif"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 620px"
              className="hidden object-cover object-right md:block"
            />
            <Image
              src="/idea-trans/clients-people-mb.avif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-right md:hidden"
            />
            <div className="relative flex h-full flex-col justify-end p-6 md:p-7">
              <h3 className="text-2xl font-bold text-[#272629] md:text-[28px]">150+ Global Clients</h3>
              <p className="mt-2 text-base text-[#6b6b6b]">Worldwide Trust. Proven Results.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
