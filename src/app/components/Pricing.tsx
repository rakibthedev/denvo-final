import Image from "next/image";
import WordReveal from "./shared/WordReveal";
import PrimaryBtn from "./shared/PrimaryBtn";

const included = Array.from({ length: 5 }, () => "40 hours of dedicated design support");

const plans = [
  { name: "Starter", blurb: "Perfect for small projects or testing the waters", price: "$500", unit: "/Project", popular: false },
  { name: "Accelerate", blurb: "Perfect for small projects or testing the waters", price: "$2600", unit: "/month", popular: true },
  { name: "Scale", blurb: "Perfect for small projects or testing the waters", price: "$10,000", unit: "/month", popular: false },
];

export default function Pricing() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-primary">
          /Choose Pricing Plans
        </p>
        <WordReveal
          text="Secure a full-fledge ream at a fixed monthly rate"
          className="mx-auto mt-4 max-w-[720px] justify-center text-center text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-ink md:text-[48px]"
        />

        <div className="mt-10 grid grid-cols-1 items-stretch gap-4 md:mt-14 md:grid-cols-3">
          {plans.map((plan) => {
            const hot = plan.popular;
            return (
              <div key={plan.name} className="flex p-2">
                <div
                  className={`relative flex w-full flex-col overflow-hidden rounded-3xl p-6 md:p-8 ${
                    hot
                      ? "z-10 bg-primary text-white shadow-[0px_12px_60px_rgba(162,89,255,0.5)] md:scale-[1.02]"
                      : "border border-brand-100 bg-white text-ink"
                  }`}
                >
                  {hot && (
                    <img
                      src="/popular-glow.svg"
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 w-full select-none"
                    />
                  )}

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      {hot && (
                        <span className="flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-[#52525B]">
                          <span>🚀</span> Most Popular
                        </span>
                      )}
                    </div>
                    <p className={`mt-2 text-sm ${hot ? "text-white/80" : "text-grey-700"}`}>{plan.blurb}</p>

                    <div className="mt-8 flex items-end gap-1">
                      <span className="text-[36px] font-bold leading-none md:text-[52px]">{plan.price}</span>
                      <span className={`pb-1 text-lg ${hot ? "text-white/80" : "text-grey-700"}`}>{plan.unit}</span>
                    </div>
                    <p className={`mt-2 text-sm ${hot ? "text-white/80" : "text-grey-700"}`}>Cancel any time</p>

                    <button
                      type="button"
                      className={`mt-6 flex w-full items-center justify-center gap-1 rounded-2xl py-4 text-base font-medium transition-all duration-300 hover:scale-[1.02] ${
                        hot ? "bg-[#F6EEFF] text-primary hover:bg-white" : "bg-primary text-white hover:bg-[#7a32e0]"
                      }`}
                    >
                      Book a free call
                      <Image src={hot ? "/Arrow2.png" : "/Arrow.png"} alt="" width={18} height={18} className="h-[18px] w-[18px]" />
                    </button>

                    <p className="mt-8 text-sm font-semibold">What&apos;s Included:</p>
                    <ul className="mt-4 space-y-3">
                      {included.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Image src={hot ? "/badge2.png" : "/badge1.png"} alt="" width={24} height={24} className="size-6 shrink-0" />
                          <span className={hot ? "text-white/90" : "text-grey-700"}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise banner */}
        <div className="mt-6 flex flex-col items-start gap-6 rounded-3xl bg-[#f7f4fc] p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-[620px]">
            <h3 className="text-[28px] font-bold text-ink md:text-[32px]">Enterprise</h3>
            <p className="mt-3 text-base text-grey-700 md:text-2xl">Custom plans for scale & security</p>
            <p className="mt-1 text-base text-[#b6b4b8] md:text-2xl">
              For growing companies who need power, control and white glove support.
            </p>
          </div>
          <PrimaryBtn txt="Contact to sale" arrow />
        </div>
      </div>
    </section>
  );
}