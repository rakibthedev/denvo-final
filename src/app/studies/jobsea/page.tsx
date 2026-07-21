import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Job Sea — Local Job Portal | Denvo Lab Case Study",
  description:
    "A hyper-local recruitment platform designed to help job seekers find employment within their immediate community and empower local businesses to find the right staff quickly.",
};

export default function JobSeaCaseStudy() {
  return (
    <main className="bg-white">
      <CaseStudyHero />
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
