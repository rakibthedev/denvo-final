import Hero from "./components/Hero";
import Partners from "./components/Partners";
import About from "./components/About";
import ProjectHighlights from "./components/ProjectHighlights";
import ServiceMarquee from "./components/ServiceMarquee";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Principles from "./components/Principles";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Trial from "./components/Trial";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Partners />
      <About />
      <ProjectHighlights />
      <ServiceMarquee />
      <Services />
      <Stats />
      <Pricing />
      <Principles />
      <Testimonials />
      <CTA />
      <Trial />
      <Footer />
    </main>
  );
}
