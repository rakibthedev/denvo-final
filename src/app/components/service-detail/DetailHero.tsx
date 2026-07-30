"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import Header from "../Header";
import TextReveal from "../shared/TextReveal";
import ImageSlider from "./ImageSlider";

export default function DetailHero() {
  return (
    // Added min-h-screen, flex, and flex-col to force full viewport height
    <section className="relative flex flex-col overflow-hidden bg-white px-2 pt-2 md:px-4 md:pt-4">
      <div 
        className="relative mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-t-3xl"
        style={{ background: "linear-gradient(#f7f1ff, #ffffff)" }}
      >
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
          <Header />
          
          {/* Added flex-1 and justify-center to vertically center the inner content block */}
          <div className="mx-auto flex flex-1 flex-col items-center justify-center px-4 pt-25 pb-12 text-center md:pt-40 md:pb-20">
            <div className="flex flex-col items-center gap-6">
              <TextReveal
                as="h1"
                className="max-w-[900px] justify-center text-[40px] font-extrabold leading-[108%] tracking-[-0.02em] text-ink md:text-[68px] wide:text-[76px]"
              >
                UI/UX Design Services for
              </TextReveal>
              <h2 className="-mt-2 max-w-[900px] text-[40px] font-extrabold leading-[108%] tracking-[-0.02em] text-primary md:-mt-4 md:text-[68px] wide:text-[76px]">
                Enterprises, Startups &amp; Scaling Brands
              </h2>

              <motion.p
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="max-w-[620px] text-base leading-relaxed text-subtext md:text-lg"
              >
                We design digital experiences that feel effortless, combining user flows, design
                systems, and deep user research to drive real business growth.
              </motion.p>

              <motion.a
                href="/contact"
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-primary bg-primary px-8 py-5 text-base font-medium text-white shadow-[0px_10px_30px_-8px_rgba(136,60,250,0.55)] transition-all hover:scale-[1.02] hover:bg-[#7a32e0]"
              >
                <MessageCircle className="size-5" />
                Book a Call
              </motion.a>
            </div>        
          </div>
        </div>    
      </div>      
    </section>
  );
}