"use client";

import { useEffect, useRef } from "react";

type Props = {
  items: string[];
  direction?: "left" | "right";
  /** pixels per ~60fps frame */
  speed?: number;
  className?: string;
};

export default function DragMarquee({
  items,
  direction = "left",
  speed = 0.4,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const st = useRef({ paused: false, dragging: false, startX: 0, startScroll: 0, pos: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const s = st.current;
    const dir = direction === "right" ? -1 : 1;
    let started = false;
    let last = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const content = el.scrollWidth / 2; // items are rendered twice
      const dt = Math.min(now - last, 64);
      last = now;
      if (content > 0) {
        if (!started) {
          s.pos = dir < 0 ? content : 0;
          el.scrollLeft = s.pos;
          started = true;
        }
        if (!s.paused && !s.dragging) {
          s.pos += dir * speed * (dt / 16.6667);
          if (s.pos >= content) s.pos -= content;
          else if (s.pos < 0) s.pos += content;
          el.scrollLeft = s.pos;
        } else {
          s.pos = el.scrollLeft;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [direction, speed, items.length]);

  const onEnter = () => (st.current.paused = true);
  const onLeave = () => {
    st.current.paused = false;
    st.current.dragging = false;
  };
  const onDown = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const s = st.current;
    s.dragging = true;
    s.startX = e.clientX;
    s.startScroll = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    const s = st.current;
    const el = ref.current;
    if (!s.dragging || !el) return;
    const content = el.scrollWidth / 2;
    let p = s.startScroll - (e.clientX - s.startX);
    if (content > 0) {
      if (p >= content) p -= content;
      else if (p < 0) p += content;
    }
    s.pos = p;
    el.scrollLeft = p;
  };
  const onUp = (e: React.PointerEvent) => {
    st.current.dragging = false;
    try {
      ref.current?.releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <div
      ref={ref}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      className={`flex cursor-grab touch-pan-y select-none items-center overflow-x-auto overflow-y-hidden active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {[...items, ...items].map((f, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={`/trus-brand/${f}`}
          alt=""
          draggable={false}
          className="mx-4 h-16 w-auto shrink-0 opacity-90 [filter:brightness(0)_invert(1)] md:mx-6"
        />
      ))}
    </div>
  );
}
