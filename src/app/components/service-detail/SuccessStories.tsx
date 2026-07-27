"use client";

import { useEffect, useRef, useState } from "react";
import SectionBadge from "./SectionBadge";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  video: string;
  thumb: string;
  logo: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Emran Hasan",
    role: "CEO & Co Founder @ Klasio",
    quote:
      "Thanks to Denvo Lab for building a world-class website that captured our vision and helped us land customers from day one. They went beyond design, researching trends and bringing great ideas, all while staying responsive and on time. Highly recommended!",
    video: "/testimonials/emran.mp4",
    thumb: "/testimonials/emran.avif",
    logo: "/trus-brand/b_klasio.svg",
  },
  {
    name: "Austin",
    role: "CEO @ Clarity LLC",
    quote:
      "I've worked with Denvo Lab on three websites, and they've been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth. They quickly act on feedback and deliver exactly what I need. For me, they're a 10/10 partner for all things design and development.",
    video: "/testimonials/austin.mp4",
    thumb: "/testimonials/austin.avif",
    logo: "/trus-brand/a_clarity.svg",
  },
  {
    name: "Anika",
    role: "Founder @ Coinpulse",
    quote:
      "Denvo Lab is a professional, reliable partner for end-to-end product builds. From clean, modern designs to seamless development, they exceeded my expectations. I couldn't be happier with the collaboration!",
    video: "/testimonials/anika.mp4",
    thumb: "/testimonials/anika.avif",
    logo: "/trus-brand/a_coinpulse.svg",
  },
  {
    name: "Armen Avagyan",
    role: "CEO & Co Founder @ Fraus",
    quote:
      "Working with Denvo Lab was a great experience. They translated our business goals into clean, aesthetic designs with total transparency. The process was fast and stress-free, even in the complex cybersecurity space. They are a patient, committed, and highly recommended design partner.",
    video: "/testimonials/armen.mp4",
    thumb: "/testimonials/armen.avif",
    logo: "/trus-brand/a_fraus.svg",
  },
  {
    name: "Victor Okon",
    role: "COO & Co-founder @ Dlicio",
    quote:
      "Big shoutout to the Denvo Lab team. They brought our vision to life both visually and strategically. They nailed the balance between clean design and real business results, and their transparency and responsiveness made everything smooth. The unlimited revisions gave us real peace of mind.",
    video: "/testimonials/victor.mp4",
    thumb: "/testimonials/victor.avif",
    logo: "/trus-brand/b_dlicio.svg",
  },
  {
    name: "Neil Saidi",
    role: "Founder @ LeKlub",
    quote:
      "Had an amazing experience with Denvo Lab. Their talented team understood my vision and turned it into stunning visuals, with their impressive attention to detail. I highly recommend their high-quality design services.",
    video: "/testimonials/neil.mp4",
    thumb: "/testimonials/neil.avif",
    logo: "/trus-brand/a_leklub.svg",
  },
];

function QuoteIcon() {
  return (
    <svg viewBox="0 0 44 40" fill="none" className="h-8 w-9 md:h-10 md:w-11">
      <path
        d="M15.5252 0L18.333 7.47968C15.36 8.45528 13.0477 10.1897 11.3961 12.6829C9.63431 15.0678 8.75343 17.9404 8.75343 21.3008H18.1678V40H-0.000326157V21.626C-0.000326157 15.8808 1.26594 11.3279 3.79847 7.96748C6.331 4.49865 10.2399 1.84282 15.5252 0Z"
        fill="#1c1b1f"
      />
      <path
        d="M40.5252 0L43.333 7.47968C40.36 8.45528 38.0477 10.1897 36.3961 12.6829C34.6343 15.0678 33.7534 17.9404 33.7534 21.3008H43.1678V40H24.9997V21.626C24.9997 15.8808 26.2659 11.3279 28.7985 7.96748C31.331 4.49865 35.2399 1.84282 40.5252 0Z"
        fill="#1c1b1f"
      />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="size-16 md:size-20">
      <rect width="80" height="80" rx="40" fill="white" fillOpacity="0.12" />
      <path
        d="M54.667 37.6913C56.4448 38.7177 56.4448 41.2837 54.667 42.3101L34.667 53.8571C32.8892 54.8835 30.667 53.6005 30.667 51.5477L30.667 28.4536C30.667 26.4008 32.8892 25.1178 34.667 26.1442L54.667 37.6913Z"
        fill="white"
      />
    </svg>
  );
}

function VideoSide({ t }: { t: Testimonial }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => !e.isIntersecting && v.pause()),
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const onEnter = () => {
    const v = ref.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };
  const onLeave = () => ref.current?.pause();

  return (
    <div
      className="group relative min-h-[340px] overflow-hidden bg-[#b7a5e8] md:min-h-[520px]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="metadata"
        poster={t.thumb}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={t.video} type="video/mp4" />
      </video>

      <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 group-hover:opacity-0">
        <PlayGlyph />
      </span>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-6">
        <p className="text-lg font-bold text-white md:text-xl">{t.name}</p>
        <p className="text-sm text-white/80">{t.role}</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={t.logo}
          alt=""
          className="mt-3 h-5 w-auto opacity-90 [filter:brightness(0)_invert(1)]"
        />
      </div>
    </div>
  );
}

const N = testimonials.length;
const LOOP = [...testimonials, ...testimonials, ...testimonials]; // 3 copies for a seamless loop
const GAP = 24;

export default function SuccessStories() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [vw, setVw] = useState(0);
  const [index, setIndex] = useState(N); // start in the middle copy
  const indexRef = useRef(index);
  indexRef.current = index;
  const [noTrans, setNoTrans] = useState(false);
  const [paused, setPaused] = useState(false);

  // drag state
  const drag = useRef({ active: false, startX: 0, moved: false });
  const [dragging, setDragging] = useState(false);
  const [dragDelta, setDragDelta] = useState(0);

  // measure viewport width
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => setVw(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cw = vw || 1200;
  const CARD = cw < 720 ? Math.max(cw - 48, 240) : Math.min(720, Math.round(cw * 0.58));
  const step = CARD + GAP;
  const tx = cw / 2 - CARD / 2 - index * step + dragDelta;

  // auto-advance (step → pause → step); paused on hover or while dragging
  useEffect(() => {
    if (paused || dragging) return;
    const id = setInterval(() => {
      setNoTrans(false);
      setIndex((i) => i + 1);
    }, 4000);
    return () => clearInterval(id);
  }, [paused, dragging]);

  // re-enable the transition on the frame after a no-transition normalization jump
  useEffect(() => {
    if (!noTrans) return;
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setNoTrans(false)));
    return () => cancelAnimationFrame(raf);
  }, [noTrans]);

  // normalize back into the middle copy after each animated move (seamless loop)
  const onTransEnd = () => {
    const i = indexRef.current;
    if (i >= 2 * N) {
      setNoTrans(true);
      setIndex(i - N);
    } else if (i < N) {
      setNoTrans(true);
      setIndex(i + N);
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { active: true, startX: e.clientX, moved: false };
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const d = e.clientX - drag.current.startX;
    if (Math.abs(d) > 4) drag.current.moved = true;
    setDragDelta(d);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    setDragging(false);
    const d = dragDelta;
    setDragDelta(0);
    const steps = Math.round(-d / step);
    if (steps !== 0) {
      setNoTrans(false);
      setIndex((i) => i + steps);
    }
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const noAnim = dragging || noTrans;

  return (
    <section className="overflow-hidden bg-[#f9f5ff] py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="flex flex-col items-center text-center">
          <SectionBadge label="Success Stories" />
          <h2 className="mt-6 text-[32px] font-extrabold leading-[112%] tracking-[-0.02em] text-ink md:text-[52px]">
            Success Stories <span className="text-primary">That Inspire Us</span>
          </h2>
        </div>
      </div>

      <div
        ref={viewportRef}
        className="mt-12 overflow-hidden md:mt-16"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          setPaused(false);
          if (drag.current.active) {
            drag.current.active = false;
            setDragging(false);
            setDragDelta(0);
          }
        }}
      >
        <div
          className="flex cursor-grab touch-pan-y select-none active:cursor-grabbing"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(${tx}px)`,
            transition: noAnim ? "none" : "transform 700ms cubic-bezier(0.16,1,0.3,1)",
          }}
          onTransitionEnd={onTransEnd}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {LOOP.map((t, i) => (
            <div key={i} className="shrink-0" style={{ width: `${CARD}px` }}>
              <article className="grid overflow-hidden rounded-[28px] border border-[#ececec] bg-white shadow-[0px_30px_70px_-45px_rgba(0,0,0,0.4)] md:h-[560px] md:grid-cols-2">
                {/* Left — quote */}
                <div className="flex flex-col p-8 md:p-9">
                  <QuoteIcon />
                  <p className="mt-6 text-base leading-relaxed text-[#5b5b5b] md:text-[17px] md:leading-relaxed">
                    {t.quote}
                  </p>
                </div>
                {/* Right — video */}
                <VideoSide t={t} />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
