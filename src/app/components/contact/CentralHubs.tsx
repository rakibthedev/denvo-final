"use client";

import { MapPin } from "lucide-react";
import WordReveal from "../shared/WordReveal";

const pins = [
  { label: "Bangladesh", pos: "top-[45%] left-[35%] md:top-[48%] md:left-[38%]" },
  { label: "Indonesia", pos: "top-[60%] left-[65%] md:top-[58%] md:left-[68%]" },
];

const mapSvg =
  "url(\"data:image/svg+xml,%3Csvg width='1400' height='800' viewBox='0 0 1400 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dot' x='0' y='0' width='16' height='16' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='2' cy='2' r='1.8' fill='%23A259FF'/%3E%3C/pattern%3E%3C/defs%3E%3Cg fill='url(%23dot)'%3E%3Cpath d='M300 300 Q450 150 700 200 Q950 220 1100 300 Q1200 400 1150 500 Q1000 650 800 600 Q600 650 400 550 Q250 450 300 300'/%3E%3Cpath d='M750 320 Q850 280 950 300 Q1050 340 1050 420 Q1000 500 900 520 Q800 500 750 480 Z'/%3E%3Cpath d='M200 400 L350 420 L400 500 L300 520 Z'/%3E%3Cpath d='M1100 450 L1200 470 L1250 520 L1150 540 Z'/%3E%3C/g%3E%3C/svg%3E\")";

export default function CentralHubs() {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center md:mb-24 lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary md:mb-6">
            / Our space
          </p>
          <WordReveal
            text="Our central hubs are in Bangladesh and Indonesia."
            className="justify-center text-[32px] font-bold leading-tight tracking-[-0.02em] text-ink md:text-[56px] lg:justify-start"
          />
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-[40px] border border-brand-100 bg-gradient-to-b from-purple-1 to-white md:aspect-auto md:h-[600px]">
          <div
            className="absolute inset-0 opacity-40 md:opacity-50"
            style={{ backgroundImage: mapSvg, backgroundSize: "100% 100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
          />
          {pins.map((pin) => (
            <div key={pin.label} className={`group absolute -translate-x-1/2 -translate-y-1/2 ${pin.pos}`}>
              <div className="relative">
                <div className="absolute inset-0 size-20 animate-pulse rounded-full bg-primary/20 blur-2xl transition-all group-hover:bg-primary/40 md:size-32" />
                <div className="relative flex size-12 items-center justify-center rounded-2xl border-2 border-white bg-primary text-white shadow-2xl transition-transform group-hover:scale-110 md:size-16">
                  <MapPin className="size-6 md:size-8" />
                </div>
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-ink px-4 py-2 text-xs font-bold text-white shadow-xl transition-all md:text-sm md:opacity-0 md:group-hover:opacity-100">
                  {pin.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
