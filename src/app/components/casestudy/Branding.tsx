import Image from "next/image";
import WordReveal from "../shared/WordReveal";
import TextReveal from "../shared/TextReveal";

const images = {
  image1: "visual1",
  image2: "visual2",
  image3: "visual3",
  image4: "visual4",
  image5: "visual5",
  image6: "visual6",
};

export default function Branding() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-12 md:p-20">
      <WordReveal
        text="Branding"
        className="justify-center text-center text-[36px] font-bold leading-[120%] text-ink md:text-[56px]"
      />

      {/* Large Screen */}
      <div className="mt-12 hidden auto-rows-[300px] grid-cols-4 gap-5 md:grid">
        {/* 1 */}
        <div className="row-span-2">
          <Image src={`/jobsea/${images.image1}.png`} alt="img" width={400} height={455} className="h-full w-full" />
        </div>

        {/* 2 */}
        <div className="col-span-2 flex rounded-[20px] bg-[linear-gradient(90deg,#E7FDBC_0%,rgba(255,255,255,0)_100%)] pl-5">
          <div className="w-1/2 py-5">
            <Image src="/jobsea/quote.png" alt="img" width={88} height={88} className="h-[66px] w-[66px]" />
            <TextReveal className="mt-2 text-[28px] font-[600] leading-[120%] text-black" as="h3">
              Navigate your career like a sea — JobSea keeps on you job opportunity
            </TextReveal>
          </div>
          <div className="w-1/2">
            <Image src={`/jobsea/${images.image2}.png`} alt="img" width={294} height={330} className="h-full w-[294px]" />
          </div>
        </div>

        {/* 3 */}
        <div className="row-span-2">
          <Image src={`/jobsea/${images.image3}.png`} alt="img" width={400} height={455} className="h-full w-full" />
        </div>

        {/* 4 */}
        <div className="col-span-2 row-span-2">
          <Image src={`/jobsea/${images.image4}.png`} alt="img" width={400} height={455} className="h-full w-full" />
        </div>

        {/* 5 */}
        <div>
          <Image src={`/jobsea/${images.image5}.png`} alt="img" width={400} height={455} className="h-full w-full" />
        </div>

        {/* 6 */}
        <div>
          <Image src={`/jobsea/${images.image6}.png`} alt="img" width={400} height={455} className="h-full w-full" />
        </div>
      </div>

      {/* Mobile Screen */}
      <div className="mt-6 grid auto-rows-[50px] grid-cols-2 gap-3 md:hidden md:gap-5">
        {/* 1 */}
        <div className="col-span-2 row-span-3 flex rounded-[20px] bg-[linear-gradient(90deg,#E7FDBC_0%,rgba(255,255,255,0)_100%)] pl-3 md:pl-5">
          <div className="w-1/2 py-5">
            <Image src="/jobsea/quote.png" alt="img" width={88} height={88} className="h-[50px] w-[50px] md:h-[66px] md:w-[66px]" />
            <TextReveal className="mt-2 text-[16px] font-[600] leading-[120%] text-black md:text-[28px]" as="h3">
              Navigate your career like a sea — JobSea keeps on you job opportunity
            </TextReveal>
          </div>
          <div className="w-1/2">
            <Image src={`/jobsea/${images.image2}.png`} alt="img" width={294} height={330} className="h-full w-[169px] md:w-[294px]" />
          </div>
        </div>

        {/* 2 */}
        <div className="col-span-2 row-span-6">
          <Image src={`/jobsea/${images.image4}.png`} alt="img" width={400} height={455} className="h-full w-full" />
        </div>

        {/* 3 */}
        <div className="row-span-4">
          <Image src={`/jobsea/${images.image3}.png`} alt="img" width={400} height={455} className="h-full w-full" />
        </div>

        {/* 4 */}
        <div className="row-span-4">
          <Image src={`/jobsea/${images.image1}.png`} alt="img" width={400} height={455} className="h-full w-full" />
        </div>

        {/* 5 */}
        <div className="col-span-2 row-span-4">
          <Image src={`/jobsea/${images.image5}.png`} alt="img" width={400} height={455} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
