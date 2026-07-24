"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Header from "./Header";
import TextReveal from "./shared/TextReveal";
import FlipServiceItem from "./shared/FlipServiceItem";

const serviceTags = [
  { label: "UI/UX Design", offset: "md:pr-6", image: "/project1.png" },
  { label: "Web Development", offset: "md:pr-12", image: "/project2.png" },
  { label: "Brand Design", offset: "md:pr-0", image: "/project5.png" },
  { label: "Figma", offset: "md:pr-20", image: "/project3.png" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Felix-inspired scroll video expansion (desktop only)
  const videoWidth = useTransform(scrollYProgress, [0, 0.4, 1], ["21vw", "100vw", "100vw"]);
  const videoHeight = useTransform(scrollYProgress, [0, 0.4, 1], ["auto", "auto", "100vh"]);
  const videoRadius = useTransform(scrollYProgress, [0, 0.4], ["32px", "0px"]);
  const videoMarginRight = useTransform(scrollYProgress, [0, 0.4, 1], ["69px", "0px", "0px"]);
  const videoMarginBottom = useTransform(scrollYProgress, [0, 0.4, 1], ["0px", "0px", "0px"]);
  const videoInnerScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  const contentY = useTransform(scrollYProgress, [0, 0.3], ["0px", "-100vh"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const videoPosition = useTransform(scrollYProgress, [0, 0.4], ["static", "fixed"]);
  const videoBottom = useTransform(scrollYProgress, [0, 0.4], ["20px", "0px"]);
  const videoRight = useTransform(scrollYProgress, [0, 0.4], ["0 ", "0"]);

  return (
    <div ref={containerRef} className="relative h-auto md:h-[250vh]">
      <div className="top-0 h-auto overflow-hidden md:sticky md:h-screen">
        <section className="relative h-auto overflow-hidden md:h-screen rounded-t-3xl mx-2 md:mx-4 mt-2 mb-0 md:mb-0 md:mt-4">
          {/* Background video + soft-light gradient overlay */}
          <div className="absolute inset-0 -z-10 overflow-hidden bg-white">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/hero-bg.mp4" type="video/mp4" />
            </video>
            <div
              className="absolute inset-0"
              style={{                
                // background: "url('/hero-video-overlay.png') center center / cover no-repeat",             
                  background: "linear-gradient( #f7f1ffee, #ffffffe5 )",
                // backgroundBlendMode: "normal, soft-light, soft-light",
                // mixBlendMode: "soft-light",
              }}
            />
          </div>

          {/* Header + content both fade/move up together on scroll */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="relative max-w-[1440px] mx-auto h-auto max-md:!transform-none max-md:!opacity-100 md:h-screen"
          >
            <Header />

            <div className="mx-auto flex h-auto w-full flex-col items-start gap-10 px-5 pb-16 pt-28 md:h-screen md:flex-row md:items-center md:gap-10 md:px-20 md:pb-0 md:pt-0 md:translate-y-[60px]">
              {/* Left: heading + CTA */}
              <div className="flex-1">
                <TextReveal
                  as="h1"
                  className="max-w-[700px] text-[44px] font-extrabold leading-[120%] text-[#342F3D] md:text-[96px] wide:text-[96px]"
                >
                  We craft result driven digital solution
                </TextReveal>

                <motion.a
                  href="#"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-primary bg-primary px-8 py-5 text-base font-medium leading-[150%] text-white shadow-[0px_10px_30px_-8px_rgba(136,60,250,0.55)] transition-all hover:scale-[1.02] hover:bg-[#7a32e0] md:mt-10"
                >
                  Book a Free Call
                </motion.a>
              </div>

              {/* Right: floating services (flip on hover) — desktop only */}
              <div className="md:translate-y-[-60px] flex w-full shrink-0 flex-col items-start gap-6 md:w-[420px] md:items-end">
                <div className="hidden flex-col gap-6 md:flex">              
                  {serviceTags.map((tag, i) => (
                    <motion.div
                      key={tag.label}
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.15 * i, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="relative z-0 hover:z-50"
                    >
                      <FlipServiceItem label={tag.label} image={tag.image} className={tag.offset} />
                    </motion.div>
                  ))}
                </div>

                {/* Mobile video (normal flow) */}
                <div className="mt-2 w-full overflow-hidden rounded-2xl shadow-xl md:hidden">
                  <video className="h-[32vh] w-full object-cover" autoPlay muted loop playsInline>
                    <source src="/video-2.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Desktop expanding scroll video */}
        <div className="pointer-events-none md:max-w-full md:w-full absolute bottom-0 md:right-[50%] md:translate-x-[50%] z-40 hidden items-center justify-end md:flex">
          <motion.div
            style={{              
              width: videoWidth,
              height: videoHeight,
              borderRadius: videoRadius,
              marginRight: videoMarginRight,
              marginBottom: videoMarginBottom,
              position: videoPosition,   
               bottom: videoBottom,      
              right: videoRight,
            
            }}
            className="pointer-events-auto relative overflow-hidden shadow-2xl"
          >
            <motion.video
              style={{ scale: videoInnerScale }}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/video-2.mp4" type="video/mp4" />
            </motion.video>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
