import type { Metadata } from "next";
import ServiceHero from "../components/service/ServiceHero";
import ServicesDetailed from "../components/service/ServicesDetailed";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Trial from "../components/Trial";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Services — Denvo Lab",
  description:
    "We design result driven digital solutions — UI/UX design, web & mobile development, low-code solutions, and branding.",
};

export default function ServicePage() {
  return (
    <main className="bg-white">
      <ServiceHero />
      <ServicesDetailed />
      <Stats />
      <Testimonials />
      <CTA />
      <Trial />
      <Footer />
    </main>
  );
}
