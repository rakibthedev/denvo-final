import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailHero from "../../components/service-detail/DetailHero";
import ImageSlider from "../../components/service-detail/ImageSlider";
import GrowthStrategy from "../../components/service-detail/GrowthStrategy";
import FigmaPreview from "../../components/service-detail/FigmaPreview";
import CoreServices from "../../components/service-detail/CoreServices";
import IndustriesExpertise from "../../components/service-detail/IndustriesExpertise";
import ProductCapabilities from "../../components/service-detail/ProductCapabilities";
import FaqSection from "../../components/service-detail/FaqSection";
import BrandCTAForm from "../../components/service-detail/BrandCTAForm";
import Footer from "../../components/Footer";
import Partners from "../../components/Partners";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import Principles from "../../components/Principles";
import { allServiceSlugs, getServiceDetail } from "../services.data";

export function generateStaticParams() {
  return allServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) return { title: "Services — Denvo Lab" };

  return {
    title: `${detail.label} Services — Denvo Lab`,
    description: detail.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) notFound();

  return (
    <main className="bg-white">
      <DetailHero
        title={detail.title}
        highlight={detail.highlight}
        description={detail.description}
      />
      <ImageSlider />
      <Partners bg="#fff" gradientColor="#fff" />
      <GrowthStrategy />
      <FigmaPreview />
      <Principles />
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
