import type { CSSProperties } from "react";
import DragMarquee from "./DragMarquee";

const rowOne = [
  "a_liberatelabs.svg", "a_edvive.svg", "a_leklub.svg", "a_lendiview.svg", "a_likely.svg",
  "a_memorybox.svg", "a_onethread.svg", "a_rabfy.svg", "a_ontik.svg", "a_ostad.svg",
  "a_oter.svg", "a_sift.svg", "a_skillophy.svg", "a_tempo.svg", "a_triply.svg",
  "a_ways.svg", "a_y-combinator.svg", "a_yenex.svg", "a_zantrik.svg", "a_addisoft.svg",
  "a_banglashikhi.svg", "a_relaxy.svg", "a_backpack.svg", "a_goldman-sachs.svg", "a_clarity.svg",
  "a_esdiac.svg", "a_learndojo.svg", "a_vocai.svg", "a_plentypay.svg", "a_aike.svg",
  "a_fraus.svg", "a_coinpulse.svg", "a_wefi.svg", "a_fms.svg", "a_salesgo.svg",
  "a_externalit.svg", "a_sitewise.svg", "a_homerun.svg", "a_viber.svg", "a_pf.svg",
  "a_pepsi.svg", "a_goodgenes.svg",
];

const rowTwo = [
  "b_cre-guard.svg", "b_medease.svg", "b_3asafeer.svg", "b_akijship.svg", "b_akij.svg",
  "b_alpine.svg", "b_bizphix.svg", "b_buttercup.svg", "b_carbobon.svg", "b_carnesia.svg",
  "b_compaies.svg", "b_cpg.svg", "b_dlicio.svg", "b_docuseal.svg", "b_farasha.svg",
  "b_fitmate.svg", "b_gainsty.svg", "b_grow.svg", "b_heyluna.svg", "b_ipdc.svg",
  "b_khanit.svg", "b_klasio.svg", "b_affine.svg", "b_telenor.svg", "b_axiata.svg",
  "b_guardian.svg", "b_crantech.svg",
];

const FADE_MASK =
  "linear-gradient(to right, transparent 0, #000 min(270px,25%), #000 calc(100% - min(270px,25%)), transparent 100%)";
const FADE: CSSProperties = { WebkitMaskImage: FADE_MASK, maskImage: FADE_MASK };

export default function TrustStrip() {
  return (
    <div className="relative z-10 px-5 pb-24 pt-10 md:pb-28 md:pt-14">
      <div className="mx-auto max-w-[1140px]">
        {/* Eyebrow + title */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-white/60 px-4 py-1.5 text-sm font-medium text-white">
            Brand Trust
          </span>
          <h2 className="mt-5 text-[34px] leading-[112%] tracking-[-0.02em] text-white md:text-[54px]">
            <span className="font-normal">Trusted by </span>
            <span className="font-bold">Leading Brands</span>
          </h2>
        </div>

        {/* Sliders — edges fade into the background (mask), 270px on desktop, scales down on mobile */}
        <div className="mt-12 md:mt-14" style={FADE}>
          <DragMarquee items={rowOne} direction="left" speed={0.4} />
          <div className="mt-3 md:mt-4">
            <DragMarquee items={rowTwo} direction="right" speed={0.4} />
          </div>
        </div>
      </div>
    </div>
  );
}
