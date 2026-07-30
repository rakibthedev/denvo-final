"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import SectionBadge from "./SectionBadge";

const faqs = [
  {
    q: "How much do UI/UX design services cost?",
    a: "Pricing depends on scope, complexity and timeline. Most engagements start with a fixed-scope discovery, then move to a monthly retainer or per-project quote. Book a free call and we'll give you a transparent estimate for your product.",
  },
  {
    q: "How long does a UI/UX project take?",
    a: "A focused product design sprint typically runs 30 days from research to developer-ready handoff. Larger platforms are broken into milestones so you see progress every single week.",
  },
  {
    q: "Do you make information architecture in the UX design process?",
    a: "Yes. Information architecture is a core part of our process — we map user flows, sitemaps and content hierarchy before any visual design so the structure is intuitive and scalable.",
  },
  {
    q: "What deliverables will I receive?",
    a: "You get research findings, wireframes, hi-fidelity UI, interactive prototypes, a documented design system, and a clean developer handoff in Figma with tokens and components.",
  },
  {
    q: "Do you work with startups and early-stage products?",
    a: "Absolutely. We help startups turn ideas into investor-ready MVPs, prioritizing the essential flows that validate your product fast without over-building.",
  },
  {
    q: "Do I need user testing in the UX design process?",
    a: "User testing dramatically reduces risk. We test with real users to catch friction early, so you ship an interface that's proven to convert rather than one that only looks good.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(-1);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[900px] px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="mt-6 text-[32px] font-extrabold leading-[112%] tracking-[-0.02em] text-ink md:text-[52px]">
            Your Questions <span className="text-primary">Answered!</span>
          </h2>
        </div>

        <div className="mt-12 md:mt-16">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-[#EAE4F2]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={`text-lg font-semibold transition-colors md:text-xl ${
                      isOpen ? "text-primary" : "text-ink"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-all ${
                      isOpen ? "border-primary bg-primary text-white" : "border-purple-3 text-primary"
                    }`}
                  >
                    <ChevronDown
                      className={`size-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-base leading-relaxed text-subtext">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
