"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import WordReveal from "./shared/WordReveal";

const flags = [
  "bd", "flag-2", "flag-3", "flag-4", "flag-5",
  "flag-6", "flag-7", "flag-8", "flag-9", "flag-10",
];

function LogoRow() {
  return (
    <div className="flex items-center gap-9">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="flex items-center gap-9">
          <Image src="/visa.png" alt="partner" width={144} height={48} className="h-[22px] w-[68px] md:h-12 md:w-[144px]" />
          <Image src="/ckc.png" alt="partner" width={103} height={48} className="h-[22px] w-[48px] md:h-12 md:w-[103px]" />
        </span>
      ))}
    </div>
  );
}

export default function Partners() {
  return (
    <section className="bg-[#f0e3ff] py-8 md:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-20">
        <WordReveal
          text="We partner with 10+ countries"
          className="justify-center px-4 text-center text-[20px] md:text-[36px] font-normal uppercase leading-[132%] tracking-[0.08em] text-[#3D3D3D] md:text-[36px]"
        />
        <div className="mt-4 flex items-center justify-center gap-2 md:gap-4">
          {flags.map((f) => (
            <Image key={f} src={`/${f}.png`} alt="flag" width={24} height={16} className="h-4 w-6" />
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-12">
        <Marquee gradient gradientColor="#F0E3FF" gradientWidth={200}>
          <LogoRow />
        </Marquee>
      </div>
      <div className="mt-2 md:mt-10">
        <Marquee direction="right" gradient gradientColor="#F0E3FF" gradientWidth={200}>
          <LogoRow />
        </Marquee>
      </div>
    </section>
  );
}
