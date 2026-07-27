"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionBadge from "./SectionBadge";

const categories = [
  "All",
  "Design & Prototyping",
  "Research & Optimization",
  "Collaboration & Management",
  "Engineering & AI Stack",
] as const;

type Category = (typeof categories)[number];

const tools: { name: string; file: string; cat: Exclude<Category, "All"> }[] = [
  { name: "Webflow", file: "69de468df7546667627b2004_stack_webflow_color.svg", cat: "Design & Prototyping" },
  { name: "WIX", file: "6a33cec19c5f13066fdf2e9d_stack_wix_color.svg", cat: "Design & Prototyping" },
  { name: "Principle", file: "6a33cedc9b714eadb4e19d20_stack_principal_color.svg", cat: "Design & Prototyping" },
  { name: "Figma", file: "6a3509baf0bb965967764df4_stack_figma_color.svg", cat: "Design & Prototyping" },
  { name: "Storybook", file: "6a3509abe16a19b5fb92ad76_stack_storybook_color.svg", cat: "Design & Prototyping" },
  { name: "zeroheight", file: "6a350992bee39509ab2ecd9a_stack_zeroheight_color.svg", cat: "Design & Prototyping" },
  { name: "LottieFiles", file: "69de46f37a5b605407c46728_stack_lottiefiles_color.svg", cat: "Design & Prototyping" },
  { name: "Hotjar", file: "69de41b1f39038acfd542d5b_stack_hotjar_color.svg", cat: "Research & Optimization" },
  { name: "Typeform", file: "6a350a38b762aa7b9cf3ef21_stack_typeform_color.svg", cat: "Research & Optimization" },
  { name: "Google Analytics", file: "6a350a7ceeb3143ca5d66d5b_stack_googleanalytics_color.svg", cat: "Research & Optimization" },
  { name: "Discord", file: "6a3509e4883c32d5864bbd2a_stack_discord_color.svg", cat: "Collaboration & Management" },
  { name: "Miro", file: "6a350a8d30f3515af981b5e0_stack_miro_color.svg", cat: "Collaboration & Management" },
  { name: "ClickUp", file: "6a350aa99e312a69a76b77a6_stack_clickup_color.svg", cat: "Collaboration & Management" },
  { name: "Zoom", file: "6a350abda49eba40de73d217_stack_zoom_color.svg", cat: "Collaboration & Management" },
  { name: "Slack", file: "6a350ad0fae68a46401feecc_stack_slack_color.svg", cat: "Collaboration & Management" },
  { name: "Notion", file: "6a350ae42a6cdc3d3f917d92_stack_notion_color.svg", cat: "Collaboration & Management" },
  { name: "Trello", file: "6a350af61e150e5cd760a953_stack_trello_color.svg", cat: "Collaboration & Management" },
  { name: "Asana", file: "6a350b0a883c32d5864c99d6_stack_asana_color.svg", cat: "Collaboration & Management" },
  { name: "Jira Software", file: "6a350b20a49eba40de741505_stack_jirasoftware_color.svg", cat: "Collaboration & Management" },
  { name: "Loom", file: "6a350b3730f3515af9823533_stack_loom_color.svg", cat: "Collaboration & Management" },
  { name: "Lovable", file: "6a350b52c863756e12ff2b9a_stack_lovable_color.svg", cat: "Engineering & AI Stack" },
  { name: "Claude", file: "6a350b6abee39509ab304aa5_stack_claude_color.svg", cat: "Engineering & AI Stack" },
  { name: "OpenAI", file: "6a350b7ce22db33d6ec432a8_stack_openai_color.svg", cat: "Engineering & AI Stack" },
  { name: "GitLab", file: "6a350b925f566af2bb11ac2a_stack_gitlab_color.svg", cat: "Engineering & AI Stack" },
  { name: "NovelAI", file: "6a350bbbfae68a4640209daf_stack_novelai_color.svg", cat: "Engineering & AI Stack" },
  { name: "Midjourney", file: "6a350bd430f3515af982a376_stack_midjourney_color.svg", cat: "Engineering & AI Stack" },
  { name: "DALL·E 2", file: "6a350bf14d16334571a8a899_stack_dall_color.svg", cat: "Engineering & AI Stack" },
  { name: "n8n", file: "6a350c09eeb3143ca5d78dac_stack_n8n_color.svg", cat: "Engineering & AI Stack" },
];

export default function ToolsPlatform() {
  const [active, setActive] = useState<Category>("All");
  const visible = active === "All" ? tools : tools.filter((t) => t.cat === active);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="flex flex-col items-center text-center">
          <SectionBadge label="Tools & Platform" />
          <h2 className="mt-6 text-[32px] font-extrabold leading-[112%] tracking-[-0.02em] text-ink md:text-[52px]">
            Tools &amp; Platform <span className="text-primary">We Design In</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                active === c
                  ? "bg-primary text-white shadow-[0px_8px_20px_-8px_rgba(136,60,250,0.7)]"
                  : "border border-brand-100 bg-white text-text hover:border-purple-3"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Logos */}
        <div className="mx-auto mt-12 flex max-w-[1200px] flex-wrap justify-center gap-3">
          <AnimatePresence mode="popLayout">
            {visible.map((t) => (
              <motion.div
                key={t.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex items-center justify-center overflow-hidden rounded-xl border border-brand-100 bg-white shadow-[0px_10px_30px_-24px_rgba(136,60,250,0.6)] transition-colors hover:border-purple-3"
                title={t.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/brand/${t.file}`}
                  alt={t.name}
                  className="h-[47.2px] w-auto object-contain"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
