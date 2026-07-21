"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import WordReveal from "../shared/WordReveal";

const details = [
  { label: "Phone", value: "+880 1724-452861" },
  { label: "E-mail", value: "hello@denvolab.com" },
  { label: "Office", value: "Dhaka, mirpur-10. Bangladesh" },
];

const inputClass =
  "w-full rounded-xl border border-[#E6E0F0] bg-[#f6f4fb] px-4 py-3.5 text-sm text-ink placeholder:text-grey-700/60 outline-none transition-colors focus:border-primary";

export default function ContactForm() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: heading + details */}
          <div>
            <WordReveal
              text="Don't be afraid to say hello with us!"
              className="max-w-[520px] text-[36px] font-bold leading-[110%] tracking-[-0.02em] text-ink md:text-[56px]"
            />
            <div className="mt-10 space-y-8">
              {details.map((d) => (
                <div key={d.label}>
                  <p className="text-xl font-bold text-ink md:text-2xl">{d.label}</p>
                  <p className="mt-2 text-base text-grey-800 md:text-lg">{d.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-8% 0px" }}
            className="rounded-3xl border border-[#EEE6F8] bg-white p-6 shadow-[0_20px_60px_-30px_rgba(80,40,140,0.35)] md:p-9"
          >
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-ink">Full Name*</span>
                  <input className={`mt-2 ${inputClass}`} placeholder="Full Name" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink">Whats App*</span>
                  <input className={`mt-2 ${inputClass}`} placeholder="Ex@Company.Co" />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-ink">What service do you need?*</span>
                  <div className="relative mt-2">
                    <select className={`${inputClass} appearance-none pr-10`} defaultValue="Brand design">
                      <option>Brand design</option>
                      <option>UI/UX Design</option>
                      <option>Web Development</option>
                      <option>Mobile App</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-grey-700" />
                  </div>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink">Select your Budget*</span>
                  <div className="relative mt-2">
                    <select className={`${inputClass} appearance-none pr-10`} defaultValue="50,000-100,000$">
                      <option>50,000-100,000$</option>
                      <option>10,000-50,000$</option>
                      <option>100,000$+</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-grey-700" />
                  </div>
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-ink">Project Details*</span>
                <textarea
                  rows={4}
                  className={`mt-2 resize-none ${inputClass}`}
                  placeholder="Tell us more about your idea"
                />
              </label>

              <button
                type="submit"
                className="mt-1 w-full rounded-xl bg-primary py-4 text-base font-medium text-white transition-all hover:scale-[1.01] hover:bg-[#7a32e0]"
              >
                Send Massage
              </button>

              <p className="text-center text-sm text-ink">
                Prefer to skip the form?{" "}
                <a href="#" className="font-medium text-primary underline">
                  Schedule a call instead.
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
