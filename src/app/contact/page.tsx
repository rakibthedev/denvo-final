import type { Metadata } from "next";
import ContactHero from "../components/contact/ContactHero";
import Efficiency from "../components/contact/Efficiency";
import CentralHubs from "../components/contact/CentralHubs";
import Offices from "../components/contact/Offices";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact — Denvo Lab",
  description:
    "Let's work on what you care about. Tell us about your idea and our team will get back to you.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <ContactHero />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
