import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyHero from "../../components/casestudy/CaseStudyHero";
import ProjectIntro from "../../components/casestudy/ProjectIntro";
import Overview from "../../components/casestudy/Overview";
import Branding from "../../components/casestudy/Branding";
import Showcase from "../../components/casestudy/Showcase";
import Process from "../../components/casestudy/Process";
import StyleGuide from "../../components/casestudy/StyleGuide";
import Wireframes from "../../components/casestudy/Wireframes";
import FinalUI from "../../components/casestudy/FinalUI";
import ContactForm from "../../components/casestudy/ContactForm";
import Footer from "../../components/Footer";
import { allStudySlugs, getStudy } from "../studies.data";

// "govt-certificate-app" has its own static route folder, so it is excluded
// here to avoid a duplicate-path conflict with the dynamic segment.
export function generateStaticParams() {
  return allStudySlugs()
    .filter((slug) => slug !== "govt-certificate-app")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getStudy(slug);
  if (!study) return { title: "Case Studies — Denvo Lab" };

  return {
    title: `${study.title} | Denvo Lab Case Study`,
    description: study.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getStudy(slug);
  if (!study) notFound();

  return (
    <main className="bg-white">
      <CaseStudyHero title={study.title} tags={study.tag} />
      <ProjectIntro />
      <Overview />
      <Branding />
      <Showcase />
      <Process />
      <StyleGuide />
      <Wireframes />
      <FinalUI />
      <ContactForm />
      <Footer />
    </main>
  );
}
