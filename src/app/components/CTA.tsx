import Image from "next/image";
import WordReveal from "./shared/WordReveal";

export default function CTA() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="relative overflow-hidden rounded-[32px] bg-[#faf7ff] px-6 py-10 md:px-16 md:py-14">
          {/* subtle grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(#eee0ff 1px, transparent 1px), linear-gradient(90deg, #eee0ff 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(120% 100% at 30% 50%, #000 30%, transparent 75%)",
            }}
          />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-10">
            <div className="max-w-[620px]">
              <WordReveal
                as="h2"
                text="Unleash Your Team's Creativity With Denvo Lab"
                className="text-[34px] font-bold leading-[1.12] tracking-[-0.02em] text-ink md:text-[52px]"
              />
              <p className="mt-5 max-w-[520px] text-base leading-relaxed text-grey-700 md:text-lg">
                With Bricks, you get a library of pre-built components to visualize insights, manage
                timelines, track projects, and create powerful charts with ease.
              </p>
              <button
                type="button"
                className="mt-8 rounded-2xl bg-primary px-7 py-4 text-base font-medium text-white transition-all hover:scale-[1.02] hover:bg-[#7a32e0]"
              >
                Let&apos;s Design Your Idea
              </button>
            </div>

            <div className="w-full shrink-0 md:ml-auto md:w-auto">
              <Image
                src="/cta-dashboard.png"
                alt="Dashboard preview"
                width={467}
                height={313}
                className="h-auto w-full md:w-[467px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
