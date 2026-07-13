import WordReveal from "./shared/WordReveal";
import PrimaryBtn from "./shared/PrimaryBtn";

const steps = [
  { n: "01", text: "Pick a small part of your existing product." },
  { n: "02", text: "See our process in acton and test if you enjoy it." },
  { n: "03", text: "Get 1-2 screens designed for you during the trial period." },
  { n: "04", text: "Decide if you're ready for a subscription." },
];

export default function Trial() {
  return (
    <section className="bg-[#f9f5ff] py-16 md:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="mb-8 flex flex-col items-start md:items-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">Get 3-Days Free Trial</p>
          <WordReveal
            text="Test our design expertise with a free 3-days trial"
            className="mt-4 max-w-[800px] justify-start text-left text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-ink md:justify-center md:text-center md:text-[48px]"
          />
        </div>

        <div className="relative mx-auto mb-8 w-full max-w-5xl">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4 md:gap-y-0">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="relative flex flex-row items-center gap-5 text-left md:flex-col md:gap-0 md:text-center"
              >
                {i < steps.length - 1 && (
                  <>
                    {/* desktop horizontal connector */}
                    <span
                      className={`absolute left-1/2 top-[34px] z-[-1] hidden h-px w-full md:block ${
                        i === 1 ? "border-t-2 border-dashed border-primary" : "bg-[#d4d4d8]"
                      }`}
                    />
                    {/* mobile vertical connector */}
                    <span
                      className={`absolute -bottom-8 left-[33px] top-[68px] z-[-1] w-px md:hidden ${
                        i === 1 ? "border-l-2 border-dashed border-primary" : "bg-[#d4d4d8]"
                      }`}
                    />
                  </>
                )}
                <span className="relative z-10 flex size-[68px] shrink-0 items-center justify-center rounded-2xl border-2 border-primary bg-[#f9f5ff] text-2xl font-bold text-ink md:mb-6">
                  {s.n}
                </span>
                <p className="max-w-[280px] text-sm text-grey-700 md:max-w-[200px] md:text-base">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <PrimaryBtn txt="Contact to sale" arrow />
        </div>
      </div>
    </section>
  );
}
