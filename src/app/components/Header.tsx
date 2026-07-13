"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "./shared/Logo";
import MenuLink from "./shared/MenuLink";
import AnimatedBorderButton from "./shared/AnimatedBorderButton";

const navLinks = ["Services", "About", "Studies"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex w-full items-center justify-between px-5 py-5 md:px-20 md:py-6">
        <a href="#" className="z-50 flex shrink-0 cursor-pointer items-center" aria-label="Denvo Lab">
          <Logo />
        </a>

        {/* Desktop nav box (denvo-desktop style) */}
        <nav className="hidden items-center gap-1 rounded-2xl border border-brand-100 bg-white/60 p-1.5 shadow-[0px_4px_29px_0px_rgba(197,197,197,0.1)] backdrop-blur-sm lg:flex">
          {navLinks.map((link) => (
            <MenuLink key={link} label={link} />
          ))}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-[22px] lg:flex">
          <AnimatedBorderButton label="Become a Client" />
          <a
            href="#"
            className="flex cursor-pointer items-center justify-center rounded-2xl border border-primary bg-primary px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#7a32e0]"
          >
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="z-50 cursor-pointer p-2 text-primary lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>

        {/* Mobile overlay */}
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md transition-transform duration-500 ease-in-out lg:hidden ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="mb-12 flex flex-col items-center gap-6">
            {["Home", ...navLinks].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="cursor-pointer text-[32px] font-bold text-[#17062E]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex w-full max-w-md flex-col gap-5 px-10">
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border-[1.5px] border-primary px-5 py-4 text-lg font-medium text-primary"
            >
              <Plus className="size-5" /> Become a Client
            </a>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-2xl bg-primary py-4 text-center text-lg font-semibold text-white shadow-md"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
