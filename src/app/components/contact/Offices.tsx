"use client";

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import WordReveal from "../shared/WordReveal";

const offices = [
  { country: "Bangladesh (H.Q)", email: "hello@denvolab.agency", phone: "+880 17*****485", address: "Crescent Plaza, 77/KA, Banani,\nDhaka, Bangladesh." },
  { country: "USA Office", email: "usa@denvolab.agency", phone: "+1 234 *****67", address: "Silicon Valley Tech Hub,\nCalifornia, USA." },
  { country: "Indonesia Office", email: "indo@denvolab.agency", phone: "+62 812 *****90", address: "Bali Creative Studios,\nDenpasar, Indonesia." },
];

const rows = (o: (typeof offices)[number]) => [
  { icon: Mail, label: "Email Us", value: o.email, href: `mailto:${o.email}` },
  { icon: Phone, label: "Call Us", value: o.phone, href: `tel:${o.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Visit Us", value: o.address, href: null },
];

export default function Offices() {
  return (
    <section className="bg-[#faf9fc] px-6 py-20 md:px-12 lg:px-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 flex flex-col gap-10 md:mb-24 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              / Stay Connected
            </p>
            <WordReveal
              text="Big or small, your idea deserves attention. Let's discuss."
              className="text-3xl font-bold leading-tight tracking-[-0.02em] text-ink md:text-5xl lg:text-6xl"
            />
          </div>
          <a
            href="#"
            className="group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-primary px-10 py-5 font-bold text-white shadow-[0px_10px_30px_-8px_rgba(136,60,250,0.55)] transition-all hover:-translate-y-1 hover:bg-[#7a32e0] active:scale-95"
          >
            Book a call
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:gap-16 lg:grid-cols-4">
          {offices.map((office) => (
            <div key={office.country} className="group space-y-8">
              <h3 className="border-b border-brand-100 pb-4 text-2xl font-bold text-ink transition-colors group-hover:text-primary">
                {office.country}
              </h3>
              <div className="space-y-6">
                {rows(office).map((r) => (
                  <div key={r.label} className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-1">
                      <r.icon className="size-5 text-primary" />
                    </div>
                    <div className="pt-1">
                      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-400">{r.label}</p>
                      {r.href ? (
                        <a href={r.href} className="text-lg font-medium text-ink transition hover:text-primary">
                          {r.value}
                        </a>
                      ) : (
                        <p className="whitespace-pre-line text-lg font-medium leading-relaxed text-ink">{r.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Inquiry card */}
          <div className="flex flex-col justify-center space-y-8 rounded-[32px] bg-ink p-8 shadow-2xl">
            <div>
              <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-white">
                <span className="size-2 rounded-full bg-primary" />
                Inquiry
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Business</p>
                  <a href="mailto:hi@denvolab.agency" className="truncate text-lg font-bold text-white transition hover:text-brand-500">
                    hi@denvolab.agency
                  </a>
                </div>
                <div className="flex flex-col gap-1 pt-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Partnership</p>
                  <a href="mailto:partners@denvo.web" className="truncate text-lg font-bold text-white transition hover:text-brand-500">
                    partners@denvo.web
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
