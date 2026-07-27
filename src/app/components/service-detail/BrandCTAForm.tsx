"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SectionBadge from "./SectionBadge";

const perks = [
  "Expect a response from us within 24 hours",
  "We're happy to sign an NDA upon request",
  "Get access to a team of dedicated product specialists",
];

const budgets = ["Less than $5K", "$5K – $10K", "$10K – $20K", "$20K – $50K", "More than $50K"];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/40 outline-none transition-colors focus:border-primary";

export default function BrandCTAForm() {
  const [budget, setBudget] = useState<string | null>(null);

  return (
    <section className="bg-white px-2 py-10 md:px-4 md:py-16">
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[32px] bg-ink">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 90% at 100% 0%, rgba(136,60,250,0.35) 0%, rgba(136,60,250,0) 55%), radial-gradient(60% 80% at 0% 100%, rgba(179,119,255,0.25) 0%, rgba(179,119,255,0) 55%)",
          }}
        />
        <div className="relative grid grid-cols-1 gap-12 px-6 py-12 md:grid-cols-2 md:gap-16 md:px-16 md:py-16">
          {/* Left */}
          <div>
            <SectionBadge
              label="Claim a $799 Consultation, on Us!"
              className="border-[#a1a1aa] bg-transparent text-[#a1a1aa]"
            />
            <h2 className="mt-6 text-[34px] font-extrabold leading-[110%] tracking-[-0.02em] text-white md:text-[48px]">
              Enhance Your Brand Potential <span className="text-purple-3">At No Cost!</span>
            </h2>

            <ul className="mt-8 space-y-4">
              {perks.map((p) => (
                <li key={p} className="flex items-start gap-3 text-white/80">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-base">{p}</span>
                </li>
              ))}
            </ul>

            {/* Big portrait — like screenshot */}
            <div className="mt-10">
              <div className="w-fit max-w-full overflow-hidden rounded-3xl bg-purple-3">
                <Image
                  src="/razzak.jpg"
                  alt="Abdur Razzak Rahat"
                  width={360}
                  height={480}
                  className="h-[220px] w-auto object-cover"
                />
              </div>
              <p className="mt-5 text-2xl font-bold text-white">Abdur Razzak Rahat</p>
              <p className="text-base text-white/60">COO &amp; Co-founder</p>

              <a
                href="tel:+17165036335"
                className="mt-5 flex items-center gap-2.5 text-lg text-white transition-colors hover:text-purple-3"
              >
                <FaWhatsapp className="size-5 text-white" />
                +1 (716) 503-6335
              </a>
              <a
                href="/contact"
                className="mt-3 inline-flex w-fit items-center gap-1.5 text-base font-bold text-primary transition-colors hover:text-purple-3"
              >
                Book a Call Directly
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
            <div>
              <label className="mb-2 block text-base font-semibold text-white">Full Name</label>
              <input type="text" placeholder="John Doe" className={inputClass} />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-base font-semibold text-white">Your Email</label>
                <input type="email" placeholder="yourmail@gmail.com" className={inputClass} />
              </div>
              <div>
                <label className="mb-2 block text-base font-semibold text-white">Whatsapp Number</label>
                <input type="tel" placeholder="123 456 7890" className={inputClass} />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-base font-semibold text-white">Project Budget</label>
              <div className="flex flex-wrap gap-3">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                      budget === b
                        ? "bg-primary text-white"
                        : "border border-white/10 bg-white/5 text-white/70 hover:border-primary"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-base font-semibold text-white">Project Details</label>
              <textarea
                rows={4}
                placeholder="I want to redesign my website.."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-medium text-white shadow-[0px_10px_30px_-8px_rgba(136,60,250,0.7)] transition-all hover:scale-[1.02] hover:bg-[#7a32e0]"
            >
              Let&apos;s Connect
              <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>

      {/* marquee banner */}
      <div className="relative mx-auto mt-6 w-full max-w-[1440px] overflow-hidden rounded-full border border-brand-100 bg-white py-4 shadow-[0px_20px_50px_-28px_rgba(136,60,250,0.55)] md:py-5">
        {/* scrolling text */}
        <div
          className="flex w-max animate-marquee-left whitespace-nowrap will-change-transform"
          style={{ animationDuration: "30s" }}
        >
          {[0, 1, 2, 3, 4, 5].map((k) => (
            <p
              key={k}
              className="shrink-0 pr-2 text-base font-semibold text-ink md:text-lg"
            >
              Why risk it with the{" "}
              <span className="font-serif text-[1.08em] font-normal italic">wrong partner</span>? Get
              100% value and guarantee. Don&apos;t miss out - Secure your{" "}
              <span className="font-serif text-[1.08em] font-normal italic">brand&apos;s future</span>{" "}
              today.
            </p>
          ))}
        </div>

        {/* left / right shade — light tint of our primary colour */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-[#9a70e4] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-[#9a70e4] to-transparent" />

        {/* avatars cluster */}
        <div className="absolute inset-y-0 left-5 flex items-center">
          <Image
            src="/cta-avatars.avif"
            alt=""
            width={360}
            height={80}
            className="h-9 w-auto md:h-11"
          />
        </div>
      </div>
    </section>
  );
}
