import Image from "next/image";
import WordReveal from "./shared/WordReveal";
import AboutText from "./shared/AboutText";

const FULL_TEXT =
  "Denvo Lab is a digital product design agency, who are passionate for digital product design, blending creativity, strategy, data, and technology to craft smart digital experiences.";

function Badge({ logo, w }: { logo: string; w: string }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-xl border border-[#DDC2FF] bg-[#EEE0FF] px-4 py-3">
      <Image src={logo} alt="rating" width={200} height={100} className={`h-6 ${w}`} />
      <span className="text-sm text-ink">5.0</span>
      <Image src="/star4.png" alt="star" width={16} height={16} className="h-4 w-4" />
    </div>
  );
}

export default function About() {
  return (
    <section className="bg-[#f0e3ff] py-14 md:py-[160px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-10 px-5 md:flex-row md:gap-16 md:px-20">
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-brand-500" />
            <WordReveal text="About us" className="text-[28px] leading-[132%] text-grey-900 md:text-[36px]" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Badge logo="/clutch.png" w="w-[52px]" />
            <Badge logo="/google.png" w="w-[74px]" />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <AboutText
            txt={FULL_TEXT}
            className="text-[28px] font-extrabold leading-[120%] md:text-[56px] "
          />
        </div>
      </div>
    </section>
  );
}
