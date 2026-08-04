"use client";

import Image from "next/image";
import { motion } from "motion/react";
import WordReveal from "../../shared/WordReveal";
import AboutText from "../../shared/AboutText";

const base = "/govt-certificate-app";

type Card = { title: string; body: string; img: string; bg: string };

const topCards: Card[] = [
  {
    title: "Service Access Drivers",
    body: "Easy service discovery, clear application steps, and real-time updates emerged as the most important needs for users.",
    img: `${base}/artifact-blue-arch.png`,
    bg: "bg-[#eef3ff]",
  },
  {
    title: "User Insights",
    body: "Users want faster access to services, simple Bangla instructions, and clear visibility of their application status.",
    img: `${base}/artifact-man.jpg`,
    bg: "bg-[#f4efe6]",
  },
];

const bottomCards: Card[] = [
  {
    title: "Usability Metrics",
    body: "Research showed that simplified forms and real-time tracking significantly reduce user confusion and errors.",
    img: `${base}/artifact-flat-orange.png`,
    bg: "bg-[#f5efe8]",
  },
  {
    title: "Citizen Experience Metrics",
    body: "Most users value transparency, timely notifications, and AI-assisted guidance while applying for government services.",
    img: `${base}/artifact-blue-id.png`,
    bg: "bg-[#eef3ff]",
  },
];

function MetricCard({ card, delay }: { card: Card; delay: number }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      viewport={{ once: true, margin: "-8% 0px" }}
      className="rounded-3xl border border-[#EEE0FF] bg-white p-6 md:p-7"
    >
      <h3 className="text-xl font-bold text-ink md:text-2xl">{card.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-grey-700 md:text-base">{card.body}</p>
      <div className={`mt-6 overflow-hidden rounded-2xl ${card.bg}`}>
        <Image
          src={card.img}
          alt={card.title}
          width={508}
          height={280}
          className="h-[220px] w-full object-cover md:h-[260px]"
        />
      </div>
    </motion.div>
  );
}

export default function GovtArtifacts() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <WordReveal
          text="UX Research & Design Artifacts"
          className="justify-center text-center text-[30px] font-bold leading-[120%] text-ink md:text-[56px]"
        />
        <div className="mx-auto mt-6 max-w-[1000px] text-center">
          <AboutText
            txt="To redesign Prottoyon, we analyzed user behavior and service flow challenges across the app. Our research highlighted issues like complex navigation, unclear service steps, and lack of application transparency. Based on these insights, we created focused design artifacts to ensure clarity, accessibility, and trust for all citizens."
            className="justify-center text-[20px] font-bold leading-[135%] md:text-[30px]"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {topCards.map((c, i) => (
            <MetricCard key={c.title} card={c} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mt-6 overflow-hidden rounded-3xl bg-[#efe9ff] md:mt-8"
        >
          <Image
            src={`${base}/artifact-certificate.png`}
            alt="Digital government certificate preview"
            width={1280}
            height={560}
            className="h-[280px] w-full object-cover md:h-[520px]"
          />
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-2 md:gap-8">
          {bottomCards.map((c, i) => (
            <MetricCard key={c.title} card={c} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
