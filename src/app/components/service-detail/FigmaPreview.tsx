"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import SectionBadge from "./SectionBadge";

const tags = [
  { name: "Tim David", color: "#3ecf8e", top: "58%", left: "-4%" },
  { name: "Emelia Carre", color: "#ff5c8a", top: "6%", right: "-2%" },
  { name: "Andy Watson", color: "#b377ff", bottom: "4%", right: "8%" },
];

export default function FigmaPreview() {
  return (
    <section className="bg-white px-2 py-8 md:px-4 md:py-12">
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[32px] bg-ink">
        {/* Brand glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 120% at 78% 30%, rgba(136,60,250,0.5) 0%, rgba(136,60,250,0) 55%), radial-gradient(70% 90% at 12% 90%, rgba(179,119,255,0.35) 0%, rgba(179,119,255,0) 60%)",
          }}
        />
        <div className="relative grid grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2 md:gap-8 md:px-16 md:py-20">
          <div>
            <SectionBadge label="Figma Preview" className="border-white/20 bg-white/10 text-purple-3" />
            <h2 className="mt-6 text-[34px] font-extrabold leading-[112%] tracking-[-0.02em] text-white md:text-[52px]">
              See Our Works in
              <br />
              <span className="text-purple-3">Figma</span>
            </h2>
            <p className="mt-5 max-w-[400px] text-base leading-relaxed text-white/70 md:text-lg">
              Dive into our collection of projects that showcase creativity, precision, and purpose.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-4 text-base font-medium text-white shadow-[0px_10px_30px_-8px_rgba(136,60,250,0.7)] transition-all hover:scale-[1.02] hover:bg-[#7a32e0]"
            >
              See Figma File
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl"
            >
              <Image
                src="/cta-dashboard.png"
                alt="Figma dashboard preview"
                width={620}
                height={420}
                className="h-auto w-full object-cover"
              />
            </motion.div>
            {tags.map((t) => (
              <span
                key={t.name}
                className="absolute flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold text-white shadow-lg"
                style={{
                  backgroundColor: t.color,
                  top: t.top,
                  left: t.left,
                  right: t.right,
                  bottom: t.bottom,
                }}
              >
                <span className="size-2 rounded-full bg-white/90" />
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
