"use client";

import { motion } from "motion/react";
import {
  Compass,
  LayoutGrid,
  MousePointerClick,
  PenTool,
  Lightbulb,
  RefreshCw,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = { title: string; body: string; Icon: LucideIcon };

const services: Service[] = [
  {
    title: "UI UX Consulting",
    body: "Our consultants map user flows, evaluate interaction design patterns, and provide actionable wireframe-level guidance. We bridge business goals with intuitive digital experiences that users enjoy navigating.",
    Icon: Compass,
  },
  {
    title: "Digital Product Design",
    body: "No matter if it's early wireframes or polished prototypes, we manage everything. We provide responsive UI/UX design services for digital products with scalable design systems.",
    Icon: LayoutGrid,
  },
  {
    title: "Usability Testing",
    body: "We test your product with real users, track behavior, identify friction in user flows, and turn findings into design improvements that boost conversion rate optimization significantly.",
    Icon: MousePointerClick,
  },
  {
    title: "MVP Design",
    body: "We transform your core concept into an investor-ready prototype. We prioritize essential user flows and lean information architecture so your MVP launches fast and validates smartly.",
    Icon: PenTool,
  },
  {
    title: "UX/UI Audit",
    body: "Our structured UX audit services evaluate your interface against WCAG standards, interaction design principles, and usability benchmarks. Our action plan measurably improves retention & conversion.",
    Icon: Lightbulb,
  },
  {
    title: "UI/UX Redesign",
    body: "An outdated interface can cost you customers. We rebuild your product with modern design systems, refreshed information architecture, and responsive UI/UX design — all without losing what your users already trust.",
    Icon: RefreshCw,
  },
];

export default function CoreServices() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 md:py-24">
      {/* subtle brand glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(136,60,250,0.25) 0%, rgba(136,60,250,0) 60%), radial-gradient(50% 50% at 10% 100%, rgba(179,119,255,0.18) 0%, rgba(179,119,255,0) 60%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <h2 className="mx-auto max-w-[820px] text-center text-[32px] font-extrabold leading-[112%] tracking-[-0.02em] text-white md:text-[52px]">
          Our Core <span className="text-purple-3">UI/UX Design</span> Services
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {services.map(({ title, body, Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.06 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-primary/60 hover:bg-white/[0.06] md:p-9"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-purple-3 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-7 text-2xl font-bold text-white">{title}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/60">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
