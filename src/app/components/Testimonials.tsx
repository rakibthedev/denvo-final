import Image from "next/image";
import WordReveal from "./shared/WordReveal";

const base = {
  name: "Brunomalkes",
  role: "CEO, Dotvizion",
  quote:
    "Amazing work, Denvolab did exactly what I am looking for. The team collaboration is fantastic an d very time friendly. I love there creativity and quick turn around.",
  source: "Fiverr",
};

const cards = Array.from({ length: 6 });

function Card() {
  return (
    <div className="flex w-[300px] shrink-0 flex-col rounded-3xl bg-[#EEE0FF] p-6 md:w-[380px] md:p-8">
      <div className="flex items-center gap-3 border-b border-[#DDC2FF] pb-6">
        <Image src="/profile.png" alt={base.name} width={48} height={48} className="size-12 rounded-full object-cover" />
        <div>
          <p className="text-base md:text-[24px] font-bold text-[#342F3D]">{base.name}</p>
          <p className="text-sm md:text-[16px] text-[#9481AA]">{base.role}</p>
        </div>
      </div>
      <Image src="/quote.svg" alt="" width={56} height={56} className="mt-6 h-10 w-10" />
      <p className="mt-2 text-base font-bold leading-[140%] text-[#342F3D] md:text-[24px]">{base.quote}</p>
      <div className="mt-6 flex gap-1 border-t border-[#DDC2FF] pt-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Image key={i} src="/star6.svg" alt="" width={20} height={20} className="size-5" />
        ))}
      </div>
      <p className="mt-4 text-lg font-semibold text-ink">{base.source}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-[#f9f5ff] py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-primary">/Testimonial</p>
        <WordReveal
          text="Clients Share there thoughts regarding our services"
          className="mx-auto mt-4 max-w-[860px] justify-center text-center text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-ink md:text-[48px]"
        />
      </div>

      <div className="mt-10 flex w-max animate-marquee-left gap-4 md:mt-14 md:gap-6 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        {[...cards, ...cards].map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </section>
  );
}
