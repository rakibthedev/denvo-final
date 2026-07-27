"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionBadge from "./SectionBadge";

const industries = [
  { title: "E-CRM Portals", desc: "We design intuitive eCRM portals that boost engagement and strengthen customer loyalty.", img: "/saas.png", tint: "from-[#8b5cf6] to-[#c084fc]" },
  { title: "Portfolio", desc: "Engaging UI/UX solutions built to highlight your portfolio with effortless navigation and style.", img: "/project4.png", tint: "from-[#ec4899] to-[#f472b6]" },
  { title: "On-Demand Services", desc: "Your on-demand platform deserves smooth design that builds confidence and keeps users connected.", img: "/project3.png", tint: "from-[#6366f1] to-[#a78bfa]" },
  { title: "Transportation & Logistics", desc: "Effective UI/UX that boosts efficiency, real-time tracking, and enhances user control in logistics.", img: "/image10.png", tint: "from-[#0ea5e9] to-[#38bdf8]" },
  { title: "SaaS", desc: "Effective SaaS UI/UX solutions that enhance usability, build trust, and drive subscription growth.", img: "/image14.png", tint: "from-[#8b5cf6] to-[#d8b4fe]" },
  { title: "Real Estate", desc: "Innovative UI/UX design for real estate platforms that boosts engagement, trust, and lead conversions.", img: "/project5.png", tint: "from-[#f59e0b] to-[#fbbf24]" },
  { title: "Mental Health", desc: "User-centered appointment and wellness design that feels safe, calm, and genuinely supportive.", img: "/project1.png", tint: "from-[#10b981] to-[#34d399]" },
];

export default function IndustriesExpertise() {
  return (
    <section className="overflow-hidden bg-ink py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionBadge label="Industries" className="border-white/20 bg-white/10 text-purple-3" />
            <h2 className="mt-6 max-w-[720px] text-[32px] font-extrabold leading-[112%] tracking-[-0.02em] text-white md:text-[52px]">
              Our Expertise Across Diverse{" "}
              <span className="text-purple-3">Design Service Industries</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-2xl bg-primary px-7 py-4 text-base font-medium text-white shadow-[0px_10px_30px_-8px_rgba(136,60,250,0.7)] transition-all hover:scale-[1.02] hover:bg-[#7a32e0] md:self-auto"
          >
            See All
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>

      <div className="mt-12 flex md:mt-16 [mask-image:linear-gradient(90deg,transparent,#000_3%,#000_97%,transparent)]">
        <div
          className="flex w-max animate-marquee-left gap-5 md:gap-6"
          style={{ animationDuration: "80s" }}
        >
          {[...industries, ...industries].map((it, i) => (
          <article
            key={`${it.title}-${i}`}
            className={`relative flex h-[440px] w-[300px] shrink-0 flex-col overflow-hidden rounded-3xl bg-gradient-to-br ${it.tint} p-5 md:w-[360px]`}
          >
            {/* watermark */}
            <span className="pointer-events-none absolute -top-2 left-3 select-none text-[64px] font-extrabold uppercase leading-none text-white/25 md:text-[72px]">
              {it.title.split(" ")[0]}
            </span>

            <div className="relative mt-16 flex-1 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm">
              <Image src={it.img} alt={it.title} fill className="object-cover" />
            </div>

            <div className="relative mt-5">
              <h3 className="text-xl font-bold text-white md:text-2xl">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">{it.desc}</p>
            </div>
          </article>
          ))}
        </div>
      </div>
    </section>
  );
}
