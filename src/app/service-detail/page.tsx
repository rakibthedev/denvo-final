import type { Metadata } from "next";
import DetailHero from "../components/service-detail/DetailHero";
import ImageSlider from "../components/service-detail/ImageSlider";
import IdeaTransformation from "../components/service-detail/IdeaTransformation";
import GrowthStrategy from "../components/service-detail/GrowthStrategy";
import FigmaPreview from "../components/service-detail/FigmaPreview";
import Timeline30Days from "../components/service-detail/Timeline30Days";
import CoreServices from "../components/service-detail/CoreServices";
import IndustriesExpertise from "../components/service-detail/IndustriesExpertise";
import ToolsPlatform from "../components/service-detail/ToolsPlatform";
import SuccessStories from "../components/service-detail/SuccessStories";
import ProductCapabilities from "../components/service-detail/ProductCapabilities";
import FaqSection from "../components/service-detail/FaqSection";
import BrandCTAForm from "../components/service-detail/BrandCTAForm";
import Footer from "../components/Footer";
import Principles from "../components/Principles";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

export const metadata: Metadata = {
  title: "UI/UX Design Services — Denvo Lab",
  description:
    "UI/UX design services for enterprises, startups & scaling brands. We design digital experiences that feel effortless — user flows, design systems and deep research that drive real business growth.",
};

export default function ServiceDetailPage() {
  return (
    <main className="bg-white">
      <DetailHero />
      <ImageSlider />
      <Partners />
      <GrowthStrategy />
      <FigmaPreview />
      <Services />
      <CoreServices />
      <IndustriesExpertise />
      <Testimonials />
      <ProductCapabilities />
      <FaqSection />
      <BrandCTAForm />
      <Footer />
    </main>
  );
}
