import Image from "next/image";
import Marquee from "react-fast-marquee";

const keywords = ["Web Development", "SaaS Product", "Mobile App Design", "eCommerce", "Brand Design"];

function Tag({ text, color, star }: { text: string; color: string; star: string }) {
  return (
    <div className="mx-4 flex items-center gap-3 md:mx-8">
      <Image src={star} alt="star" width={24} height={24} className="h-6 w-6" />
      <span className="whitespace-nowrap text-[24px] font-medium md:text-[28px]" style={{ color }}>
        {text}
      </span>
    </div>
  );
}

export default function ServiceMarquee() {
  return (
    <section className="bg-white py-8 md:py-12">
      <Marquee>
        <div className="flex pb-4 md:pb-6">
          {keywords.map((t, i) => (
            <Tag key={i} text={t} color="#272629" star="/star2.png" />
          ))}
        </div>
      </Marquee>
      <Marquee direction="right">
        <div className="flex">
          {keywords.map((t, i) => (
            <Tag key={i} text={t} color="#b377ff" star="/star3.png" />
          ))}
        </div>
      </Marquee>
    </section>
  );
}
