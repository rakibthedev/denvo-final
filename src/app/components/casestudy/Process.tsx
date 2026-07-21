"use client";

import { motion } from "motion/react";
import WordReveal from "../shared/WordReveal";

const steps = [
  {
    step: "Step 1",
    badge: "bg-[#efe4ff] text-primary",
    title: "Discovery & Research",
    body: "We have successfully delivered over 450+ digital products for startups and Fortune 500 companies.",
    items: ["User research.", "Market analysis.", "Competitor benchmarking.", "Stakeholder interviews.", "User personas."],
  },
  {
    step: "Step 2",
    badge: "bg-[#eefcd6] text-[#4d7c0f]",
    title: "Wireframing & Prototyping",
    body: "Building the structural blueprint and interactive flows of your product.",
    items: ["User journey mapping.", "Interactive prototypes.", "Usability testing.", "Feedback integration."],
  },
  {
    step: "Step 3",
    badge: "bg-[#e0edff] text-[#2563eb]",
    title: "Visual Design",
    body: "Applying colors, typography, and branding to create a stunning look and feel.",
    items: ["Brand integration.", "Typography and color selection.", "High-fidelity mockups.", "Design system creation.", "Visual consistency."],
  },
  {
    step: "Step 4",
    badge: "bg-[#fff3c4] text-[#b45309]",
    title: "Evaluate & Handoff",
    body: "Rigorous usability testing followed by a seamless developer handoff.",
    items: ["Usability testing.", "A/B testing.", "User feedback loops.", "Iterative design improvements.", "Final design validation."],
  },
];

export default function Process() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <WordReveal
          text="Process"
          className="justify-center text-center text-[36px] font-bold leading-[120%] text-ink md:text-[56px]"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              className="rounded-3xl border border-[#EEE0FF] bg-[#faf7ff] p-6 md:p-7"
            >
              <span className={`inline-flex rounded-lg px-3 py-1.5 text-sm font-medium ${s.badge}`}>
                {s.step}
              </span>
              <h3 className="mt-6 text-xl font-bold leading-tight text-ink md:text-2xl">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-grey-700">{s.body}</p>
              <ul className="mt-6 space-y-3 border-t border-[#EAE4F2] pt-6">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-grey-800">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ink" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
