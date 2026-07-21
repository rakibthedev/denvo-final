import type { Metadata } from "next";
import Header from "../components/Header";
import ProjectHighlights from "../components/ProjectHighlights";
import Footer from "../components/Footer";
import TextReveal from "../components/shared/TextReveal";

export const metadata: Metadata = {
  title: "Case Studies — Denvo Lab",
  description:
    "Explore our case studies — deep dives into the products we've designed and the results they drive.",
};

export default function StudiesPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white md:pt-3">
        <div
          className="relative mx-auto max-w-[1440px] overflow-hidden rounded-3xl"
          style={{
            background:
              "radial-gradient(120% 90% at 80% 0%, #f3ebff 0%, #faf8ff 45%, #ffffff 100%)",
          }}
        >
          <Header />
          <div className="mx-auto w-full px-5 pb-16 pt-28 md:px-20 md:pb-24 md:pt-28">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">/Studies</p>
            <TextReveal
              as="h1"
              className="mt-4 max-w-[820px] text-[44px] font-extrabold leading-[110%] text-[#342F3D] md:text-[72px]"
            >
              Selected case studies
            </TextReveal>
            <p className="mt-5 max-w-[560px] text-base text-subtext md:text-lg">
              Deep dives into the products we&apos;ve designed and the results they drive.
            </p>
          </div>
        </div>
      </section>

      <ProjectHighlights />
      <Footer />
    </main>
  );
}
