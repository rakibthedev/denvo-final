import Image from "next/image";
import WordReveal from "../../shared/WordReveal";
import TextReveal from "../../shared/TextReveal";
import AboutText from "../../shared/AboutText";

const base = "/govt-certificate-app";
const images = {
  image1: `${base}/brand-green.png`,
  image2: `${base}/brand-home-icon.png`,
  image3: `${base}/brand-home-black.png`,
  image4: `${base}/brand-orange.png`,
  image5: `${base}/overview-splash.png`,
  image6: `${base}/showcase-blue.png`,
};

const quote =
  "Certificates at your fingertips — Prottoyon brings government services closer to every citizen.";

export default function GovtBranding() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-12 md:p-20">
      <WordReveal
        text="Visual Identity"
        className="justify-center text-center text-[36px] font-bold leading-[120%] text-ink md:text-[56px]"
      />
      <div className="mx-auto mt-6 max-w-[1000px] text-center">
        <AboutText
          txt="Crafting a clean and professional look that makes government services feel easy, reliable, and trustworthy for every citizen in the community."
          className="justify-center text-[24px] font-bold leading-[130%] md:text-[36px]"
        />
      </div>

      {/* Large Screen */}
      <div className="mt-12 hidden auto-rows-[300px] grid-cols-4 gap-5 md:grid">
        <div className="row-span-2 overflow-hidden rounded-[20px]">
          <Image src={images.image1} alt="img" width={400} height={455} className="h-full w-full object-cover" />
        </div>

        <div className="col-span-2 flex overflow-hidden rounded-[20px] bg-[linear-gradient(90deg,#E7FDBC_0%,rgba(255,255,255,0)_100%)] pl-5">
          <div className="w-1/2 py-5">
            <Image src="/jobsea/quote.png" alt="quote" width={88} height={88} className="h-[66px] w-[66px]" />
            <TextReveal className="mt-2 text-[28px] font-[600] leading-[120%] text-black" as="h3">
              {quote}
            </TextReveal>
          </div>
          <div className="w-1/2">
            <Image src={images.image2} alt="img" width={294} height={330} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="row-span-2 overflow-hidden rounded-[20px]">
          <Image src={images.image3} alt="img" width={400} height={455} className="h-full w-full object-cover" />
        </div>

        <div className="col-span-2 row-span-2 overflow-hidden rounded-[20px]">
          <Image src={images.image4} alt="img" width={640} height={620} className="h-full w-full object-cover" />
        </div>

        <div className="overflow-hidden rounded-[20px]">
          <Image src={images.image5} alt="img" width={400} height={300} className="h-full w-full object-cover" />
        </div>

        <div className="overflow-hidden rounded-[20px]">
          <Image src={images.image6} alt="img" width={400} height={300} className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Mobile Screen */}
      <div className="mt-6 grid auto-rows-[50px] grid-cols-2 gap-3 md:hidden">
        <div className="col-span-2 row-span-3 flex overflow-hidden rounded-[20px] bg-[linear-gradient(90deg,#E7FDBC_0%,rgba(255,255,255,0)_100%)] pl-3">
          <div className="w-1/2 py-5">
            <Image src="/jobsea/quote.png" alt="quote" width={88} height={88} className="h-[50px] w-[50px]" />
            <TextReveal className="mt-2 text-[16px] font-[600] leading-[120%] text-black" as="h3">
              {quote}
            </TextReveal>
          </div>
          <div className="w-1/2">
            <Image src={images.image2} alt="img" width={294} height={330} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="col-span-2 row-span-6 overflow-hidden rounded-[20px]">
          <Image src={images.image4} alt="img" width={400} height={455} className="h-full w-full object-cover" />
        </div>

        <div className="row-span-4 overflow-hidden rounded-[20px]">
          <Image src={images.image3} alt="img" width={400} height={455} className="h-full w-full object-cover" />
        </div>

        <div className="row-span-4 overflow-hidden rounded-[20px]">
          <Image src={images.image1} alt="img" width={400} height={455} className="h-full w-full object-cover" />
        </div>

        <div className="col-span-2 row-span-4 overflow-hidden rounded-[20px]">
          <Image src={images.image5} alt="img" width={400} height={455} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}
