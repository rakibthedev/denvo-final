import AboutText from "../shared/AboutText";

const FULL_TEXT =
  "We are a team of designers, thinkers, and problem-solvers passionate about crafting meaningful digital experiences. Our approach goes beyond visuals—we focus on how users think, behave, and interact. Every design decision we make is backed by logic, research, and business goals.";

export default function AboutIntro() {
  return (
    <section className="bg-white py-16 md:py-[140px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-20">
        <div className="md:ml-[14%] md:max-w-[1000px]">
          <AboutText
            txt={FULL_TEXT}
            className="text-[26px] font-extrabold leading-[128%] md:text-[44px]"
          />
        </div>
      </div>
    </section>
  );
}
