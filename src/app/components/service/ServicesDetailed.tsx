"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import WordReveal from "../shared/WordReveal";

const DESC =
  "We create visually stunning, user-friendly designs that enhance engagement and deliver a smooth digital experience.";

const services = [
  {
    title: "UI/UX Design",
    img: "/service2.png",
    subs: ["UI/UX Design", "App Design", "Wireframing & Prototyping", "Website Design", "Dashboard Design", "Product Design"],
  },
  {
    title: "Web Development",
    img: "/service2.png",
    subs: ["Full Stack Development", "E-Commerce Solutions", "Career-Pattern Architecture", "Responsive Mobile-First Design", "SAAS Application Development", "Progressive Web App Design"],
  },
  {
    title: "Mobile App Development",
    img: "/service2.png",
    subs: ["iOS & Android App", "Native & Hybrid Development", "App UI/UX Optimization", "App Store Deployment"],
  },
  {
    title: "Low-Code/No-Code Solutions",
    img: "/service2.png",
    subs: ["Webflow", "Shopify", "WordPress", "WIX", "Framer", "Sales Funnel"],
  },
  {
    title: "Branding & Visual Identity",
    img: "/service2.png",
    subs: ["Graphic & Motion Design", "Logo & Brand Design", "Style Guides & Design Systems", "Packaging & Print Design"],
  },
];

function SubServiceRow({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="group/sub flex items-center justify-between gap-4 border-b border-[#EAE4F2] py-4 transition-colors hover:border-primary"
    >
      <span className="text-base font-medium text-ink transition-all duration-300 group-hover/sub:translate-x-1.5 group-hover/sub:text-primary md:text-lg">
        {label}
      </span>
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full text-grey-700 transition-all duration-300 group-hover/sub:bg-primary group-hover/sub:text-white">
        <ChevronRight className="size-4 transition-transform duration-300 group-hover/sub:translate-x-0.5" />
      </span>
    </a>
  );
}

function ServiceBlock({ title, img, subs, index }: { title: string; img: string; subs: string[]; index: number }) {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-10% 0px" }}
      className={index > 0 ? "mt-14 border-t border-[#EAE4F2] pt-14 md:mt-20 md:pt-20" : ""}
    >
      <div className="overflow-hidden rounded-3xl">
        <Image
          src={img}
          alt={title}
          width={1208}
          height={520}
          className="h-[220px] w-full object-cover md:h-[420px]"
        />
      </div>

      <h3 className="mt-8 text-[28px] font-bold text-ink md:mt-10 md:text-[40px]">{title}</h3>
      <p className="mt-3 max-w-[720px] text-base leading-relaxed text-grey-700 md:text-lg">{DESC}</p>

      <div className="mt-6 grid grid-cols-1 gap-x-16 md:mt-8 md:grid-cols-2">
        {subs.map((s, i) => (
          <SubServiceRow key={`${s}-${i}`} label={s} />
        ))}
      </div>
    </motion.div>
  );
}

export default function ServicesDetailed() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="mb-10 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">/Services</p>
          <WordReveal
            text="The services we offer"
            className="mt-4 text-[32px] font-bold leading-[120%] tracking-[-0.02em] text-ink md:text-[56px]"
          />
        </div>

        {services.map((s, i) => (
          <ServiceBlock key={s.title} {...s} index={i} />
        ))}
      </div>
    </section>
  );
}
