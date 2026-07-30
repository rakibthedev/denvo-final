"use client";

import Image from "next/image";

const shots = [
  "/project1.png",
  "/project3.png",
  "/saas.png",
  "/project5.png",
  "/image10.png",
  "/project2.png",
  "/image14.png",
  "/project4.png",
  "/cs3-4.png",
  "/project6.png",
];

export default function ImageSlider() {
  return (
    <div>
        <div className="py-6 relative">
        
        {/* Left Fade Overlay */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-12 bg-gradient-to-r from-white to-transparent md:w-24" />

        {/* Infinite image slider */}
        <div className="relative z-10 overflow-hidden pb-6 md:pb-8">
            <div
              className="flex w-max animate-marquee-left"
              style={{ animationDuration: "70s" }}
            >
            {[...shots, ...shots].map((s, i) => (
                <div
                  key={i}
                  className="w-[25vw] shrink-0 px-2.5 md:px-3.5"
                >
                <div className="overflow-hidden rounded-[18px]">
                    <Image
                      src={s}
                      alt=""
                      width={720}
                      height={460}
                      // Changed from fixed heights to 'w-full h-auto'
                      className="w-full h-[35vh] object-cover" 
                    />
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Right Fade Overlay */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-12 bg-gradient-to-l from-white to-transparent md:w-24" />
        
        </div>
    </div>
  );
}