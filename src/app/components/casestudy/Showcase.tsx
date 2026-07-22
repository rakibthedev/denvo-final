"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Showcase() {
  return (
    <section className="bg-white pb-6 md:pb-10">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl"
        >
          <Image
            src="/jobsea/image1.png"
            alt="Job Sea product showcase"
            width={1280}
            height={698}
            className="h-[260px] w-full object-cover md:h-[620px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
