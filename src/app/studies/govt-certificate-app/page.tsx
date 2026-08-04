import type { Metadata } from "next";
import GovtHero from "../../components/casestudy/govt/GovtHero";
import GovtIntro from "../../components/casestudy/govt/GovtIntro";
import GovtOverview from "../../components/casestudy/govt/GovtOverview";
import GovtBranding from "../../components/casestudy/govt/GovtBranding";
import GovtProcess from "../../components/casestudy/govt/GovtProcess";
import GovtShowcase from "../../components/casestudy/govt/GovtShowcase";
import GovtArtifacts from "../../components/casestudy/govt/GovtArtifacts";
import GovtStyleGuide from "../../components/casestudy/govt/GovtStyleGuide";
import GovtWireframes from "../../components/casestudy/govt/GovtWireframes";
import GovtFinalUI from "../../components/casestudy/govt/GovtFinalUI";
import GovtContact from "../../components/casestudy/govt/GovtContact";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Govt. Certificate Application | Denvo Lab Case Study",
  description:
    "The Prottoyon app redesign simplifies government services with easy navigation, AI-powered features, and real-time tracking for a smoother user experience.",
};

export default function GovtCertificateAppPage() {
  return (
    <main className="bg-white">
      <GovtHero />
      <GovtIntro />
      <GovtOverview />
      <GovtBranding />
      <GovtProcess />
      <GovtShowcase />
      <GovtArtifacts />
      <GovtStyleGuide />
      <GovtWireframes />
      <GovtFinalUI />
      <GovtContact />
      <CTA />
      <Footer />
    </main>
  );
}
