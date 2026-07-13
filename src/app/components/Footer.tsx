import { ArrowRight } from "lucide-react";
import Logo from "./shared/Logo";

const columns = [
  { title: "Services", links: ["UI UX Design", "Web Design", "Product Design", "SaaS Design", "Branding", "UX Audit"] },
  { title: "Services", links: ["UI UX Design", "Web Design", "Product Design", "SaaS Design", "Branding", "UX Audit"] },
  { title: "Expert Domain", links: ["Finance Industry", "Healthcare & Fitness Industry", "Edtech Industry", "E-Commerce Industry"] },
  { title: "Contact", links: ["Behance", "Dribbble", "Awwwards"] },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#3d3d3d] pt-14 text-white md:pt-16">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-[360px]">
            <Logo dark className="w-[120px]" />
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              Denvo Lab is a global UI/UX design agency, enhancing brand value through intuitive,
              impactful designs for web, mobile, and SaaS platforms.
            </p>
            <button
              type="button"
              className="mt-8 flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-[#7a32e0]"
            >
              Company Deck
              <ArrowRight className="size-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-10 md:flex md:gap-16">
            {columns.map((col, i) => (
              <div key={i}>
                <p className="text-base font-semibold text-white">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-8 md:mt-16 md:flex-row md:items-end">
          <div>
            <p className="text-lg font-semibold text-white">Contact</p>
            <div className="mt-3 flex gap-6 text-sm text-white/70">
              {["Instagram", "Facebook", "LinkedIn", "Twitter"].map((s) => (
                <a key={s} href="#" className="transition-colors hover:text-white">{s}</a>
              ))}
            </div>
          </div>
          <div className="md:text-right">
            <p className="text-lg text-white/80">Let&apos;s work together</p>
            <a href="#" className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-brand-500">
              Call Denvo Lab
              <span className="flex size-6 items-center justify-center rounded-full border border-brand-500">
                <ArrowRight className="size-3" />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 py-6">
          <p className="text-center text-sm text-white/50">denvo lab LLC © 2025</p>
        </div>
      </div>

      <div className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-6 translate-y-4 text-center text-[90px] font-extrabold leading-none tracking-tight text-white/10 blur-[2px] md:-mb-16 md:text-[220px]">
          DENVO
        </p>
      </div>
    </footer>
  );
}
