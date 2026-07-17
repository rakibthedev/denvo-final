"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const flip = { duration: 0.4, ease: [0.6, 0.01, 0.05, 0.95] as [number, number, number, number] };

/** Right-floating hero service (denvo-web flip on hover). Menu label flips to primary on hover.
 *  A preview card (title + image + arrow) pops in 30px to the left, vertically centered on the cursor,
 *  stays reachable, and its title+arrow turn primary only when the card itself is hovered. */
export default function FlipServiceItem({
  label,
  image,
  className = "",
}: {
  label: string;
  image: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const popRef = useRef<HTMLSpanElement>(null);
  const [y, setY] = useState(0);

  return (
    <motion.a
      ref={ref}
      href="#"
      initial="initial"
      whileHover="hover"
      onMouseMove={(e) => {
        // Freeze position while the cursor is over the popup so it stays reachable.
        if (popRef.current?.contains(e.target as Node)) return;
        const r = ref.current?.getBoundingClientRect();
        if (r) setY(e.clientY - r.top);
      }}
      className={`group relative flex cursor-pointer items-center justify-end gap-2 text-[#342F3D] transition-colors duration-150 hover:text-primary ${className}`}
    >
      {/* Preview card + arrow. Wrapper keeps a 30px transparent bridge to the item so the
          cursor can travel onto the card without the popup disappearing. */}
      <span
        ref={popRef}
        className="absolute right-full flex items-center pr-[30px] opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
        style={{ top: y, transform: "translateY(-50%)" }}
      >
        <span className="group/pop flex items-center gap-2">
          <span className="w-[190px] overflow-hidden rounded-2xl border border-brand-100 bg-white p-2 shadow-[0_14px_44px_-12px_rgba(80,40,140,0.4)]">
            <span className="block px-1 pb-2 pt-1 text-sm font-medium text-[#342F3D] transition-colors duration-150 group-hover/pop:text-primary">
              {label}
            </span>
            <Image src={image} alt={label} width={190} height={104} className="h-[104px] w-full rounded-xl object-cover" />
          </span>
          <ArrowRight className="size-5 shrink-0 text-[#342F3D] transition-colors duration-150 group-hover/pop:text-primary" />
        </span>
      </span>

      {/* Bracket-plus icon — always visible, inherits color */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="aspect-square shrink-0">
        <path d="M6 2C5 2 3.5 2.5 3.5 4.5C3.5 6.5 3.5 7.5 3.5 9C3.5 10.5 1 11.5 1 11.5C1 11.5 3.5 12.5 3.5 14C3.5 15.5 3.5 17.5 3.5 19.5C3.5 21.5 5 22 6 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 2C19 2 20.5 2.5 20.5 4.5C20.5 6.5 20.5 7.5 20.5 9C20.5 10.5 23 11.5 23 11.5C23 11.5 20.5 12.5 20.5 14C20.5 15.5 20.5 17.5 20.5 19.5C20.5 21.5 19 22 18 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.02 7.33325L12.0078 16.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.33398 12H16.6673" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Flip label (denvo-web effect) — dark flips out, primary flips in */}
      <span className="relative block h-[1.5em] overflow-hidden" style={{ perspective: "1000px" }}>
        <motion.span
          variants={{ initial: { y: 0, opacity: 1, rotateX: 0 }, hover: { y: "-100%", opacity: 0, rotateX: -90 } }}
          transition={flip}
          className="block whitespace-nowrap md:text-[18px] text-base font-medium leading-[150%] text-[#342F3D]"
        >
          {label}
        </motion.span>
        <motion.span
          variants={{ initial: { y: "100%", opacity: 0, rotateX: 90 }, hover: { y: 0, opacity: 1, rotateX: 0 } }}
          transition={flip}
          className="absolute left-0 top-0 block whitespace-nowrap text-base font-medium leading-[150%] text-primary"
        >
          {label}
        </motion.span>
      </span>
    </motion.a>
  );
}
