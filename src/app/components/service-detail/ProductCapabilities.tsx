"use client";

import Image from "next/image";
import { motion } from "motion/react";
import SectionBadge from "./SectionBadge";

const works = [
  {
    title: "Fitmate — UI/UX Design for Smart Fitness App",
    desc: "An innovative fitness app designed to transform the way Australians engage with their fitness routines, blending motivation with a clean, data-driven experience.",
    img: "/project3.png",
    tags: ["Health & Fitness"],
  },
  {
    title: "Plate — Ultimate Restaurant Booking App",
    desc: "Plate is an outstanding restaurant booking app designed to transform how diners find and reserve tables, with personalized recommendations.",
    img: "/project1.png",
    tags: ["On-Demand"],
  },
  {
    title: "ÄikeT: Sustainable Rides, Simple Journeys",
    desc: "ÄikeT is a smart and sustainable e-scooter designed for modern city riders. Our task was to create smooth buy and rent journeys on both mobile and web.",
    img: "/image10.png",
    tags: ["Transportation & Logistics"],
  },
  {
    title: "MTB Mobile App: Banking Made Simple",
    desc: "Mutual Trust Bank's mobile app redesign focused on creating a smooth and intuitive banking experience that builds trust and keeps users in control.",
    img: "/image14.png",
    tags: ["Fintech"],
  },
  {
    title: "Revolutionizing Defi: Affine's Restacking Journey",
    desc: "Affine is a decentralized finance (DeFi) platform where users get innovative financial products, including Affine Restake and Affine Earn.",
    img: "/project4.png",
    tags: ["Fintech"],
  },
  {
    title: "Onethread Project Management Software",
    desc: "The official redesign of Onethread, the project management software that is revolutionizing the way teams plan, track and deliver.",
    img: "/saas.png",
    tags: ["Project Management", "SaaS"],
  },
];

export default function ProductCapabilities() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(50% 40% at 90% 0%, rgba(136,60,250,0.28) 0%, rgba(136,60,250,0) 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="flex flex-col items-center text-center">
          <SectionBadge label="Our Works" className="border-white/20 bg-white/10 text-purple-3" />
          <h2 className="mt-6 text-[32px] font-extrabold leading-[112%] tracking-[-0.02em] text-white md:text-[52px]">
            Our Product Design <span className="text-purple-3">Capabilities!</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-y-14">
          {works.map((w, i) => (
            <motion.article
              key={w.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.06 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={w.img}
                  alt={w.title}
                  width={640}
                  height={420}
                  className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[360px]"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white transition-colors group-hover:text-purple-3 md:text-2xl">
                {w.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/60">{w.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {w.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
