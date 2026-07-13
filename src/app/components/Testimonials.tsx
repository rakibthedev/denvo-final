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
    <div className="flex w-[300px] shrink-0 flex-col rounded-3xl bg-[#eee0ff] p-6 md:w-[380px] md:p-8">
      <div className="flex items-center gap-3 border-b border-white/60 pb-5">
        <Image src="/profile.png" alt={base.name} width={48} height={48} className="size-12 rounded-full object-cover" />
        <div>
          <p className="text-base font-semibold text-ink md:text-lg">{base.name}</p>
          <p className="text-sm text-grey-700">{base.role}</p>
        </div>
      </div>
      <Image src="/quote.png" alt="" width={44} height={44} className="mt-5 h-10 w-10" />
      <p className="mt-2 text-base leading-relaxed text-ink md:text-lg">{base.quote}</p>
      <div className="mt-6 flex gap-1 border-t border-white/60 pt-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Image key={i} src="/star4.png" alt="" width={20} height={20} className="size-5" />
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
