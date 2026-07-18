import type { Metadata } from "next";
import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import MissionVision from "../components/about/MissionVision";
import WhatWeDo from "../components/about/WhatWeDo";
import ServiceMarquee from "../components/ServiceMarquee";
import Principles from "../components/Principles";
import Stats from "../components/Stats";
import Team from "../components/about/Team";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About — Denvo Lab",
  description:
    "We are a results-driven UI/UX design agency focused on building digital products that are not only beautiful—but actually perform.",
};

const aboutPrinciples = [
  { n: "01", title: "Data-driven design decisions", body: "Every choice is backed by research, not guesswork." },
  { n: "02", title: "Clean, modern, scalable UI", body: "Systems built to grow with your product and team." },
  { n: "03", title: "Focus on conversion & usability", body: "We optimize for outcomes, not just aesthetics." },
  { n: "04", title: "Collaborative and transparent", body: "You're in the loop at every stage of the process." },
  { n: "05", title: "Proven across multiple industries", body: "From fintech to healthcare, our work delivers results." },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutIntro />
      <MissionVision />
      <WhatWeDo />
      <ServiceMarquee />
      <Principles eyebrow="/We Are Stick" heading="We stick to our principles" items={aboutPrinciples} />
      <Stats />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
