import Image from "next/image";
import WordReveal from "../../shared/WordReveal";
import ScrollReveal from "../../shared/ScrollReveal";
import TextReveal from "../../shared/TextReveal";
import AboutText from "../../shared/AboutText";

const weights = ["Regular", "Medium", "SemiBold", "Bold"];

const colors = [
  { hex: "#4582FD", rgb: [69, 130, 253], tints: ["#6d9bfd", "#a7c2fe", "#d9e4ff"] },
  { hex: "#FCA504", rgb: [252, 165, 4], tints: ["#fdbb3c", "#fed588", "#fef0d3"] },
  { hex: "#1E603C", rgb: [30, 96, 60], tints: ["#4f8567", "#8fb3a0", "#e6efe9"] },
  { hex: "#E80A0A", rgb: [232, 10, 10], tints: ["#ef4a4a", "#f59292", "#fbdada"] },
];

export default function GovtStyleGuide() {
  return (
    <div className="mx-auto max-w-[1440px] space-y-10 px-6 py-12 md:space-y-20 md:px-[188px] md:py-[100px]">
      <div className="text-center">
        <WordReveal
          text="Style Guide"
          className="mb-6 justify-center text-[36px] font-[500] leading-[120%] text-[#272629] md:text-[56px]"
        />
        <ScrollReveal delay={0.2}>
          <AboutText
            txt="Noto Sans Bengali is a clean and friendly sans-serif typeface with soft, rounded edges that feel approachable and modern. Its high readability and balanced structure make it ideal for a government service app like Prottoyon, ensuring clear communication, accessibility, and a comfortable reading experience for users of all ages."
            className="mx-auto max-w-[900px] justify-center text-center text-[16px] font-normal leading-[1.3] text-subtext md:text-[26px]"
          />
        </ScrollReveal>
      </div>

      {/* Typeface Section (Exactly as provided) */}
      <div className="flex gap-4 md:gap-15">
        <div className="w-1/3 border-r border-blue-200 py-5">
          <Image src="/jobsea/A.png" alt="A" width={616} height={616} className="h-[200px] w-full md:h-[616px]" />
        </div>

        <div className="w-2/3">
          <TextReveal className="mb-2 text-[16px] font-[600] leading-[131%] text-[#171717] md:mb-4 md:text-[44px]" as="h1">
            Open Source
          </TextReveal>

          <TextReveal className="mb-2 text-[8px] font-[500] leading-[120%] text-[#3B3B40] md:mb-4 md:text-[24px]" as="p">
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
          </TextReveal>

          <TextReveal className="mb-2 text-[8px] font-[500] leading-[120%] text-[#3B3B40] md:mb-8 md:text-[24px]" as="p">
            a b c d e f g h i j k l m n o p q r s t u v w x y z
          </TextReveal>

          <div className="mb-3 grid grid-cols-4 gap-[6px] md:mb-12 md:gap-4">
            {weights.map((w) => (
              <span
                key={w}
                className="rounded-bl-full rounded-tr-full bg-[#E8F0FF] px-[10px] py-1 text-[6px] font-[400] leading-[120%] text-[#4582FD] md:px-8 md:py-3 md:text-[14px]"
              >
                {w}
              </span>
            ))}
          </div>

          <div className="flex h-[140px] justify-end rounded-[24px] bg-[#E8F0FF] md:h-[432px]">
            <Image src="/jobsea/visual2.png" alt="visual2" width={413} height={432} className="h-full w-[133px] md:w-[413px]" />
          </div>
        </div>
      </div>

      {/* Color Section */}
      <div className="grid grid-cols-2 gap-6 pt-10 md:grid-cols-4 md:gap-8 md:pt-16">
        {colors.map((c) => (
          <div key={c.hex} className="flex flex-col">
            {/* Main Color Block */}
            <div
              className="relative z-40 flex h-[240px] flex-col justify-between rounded-[32px] p-6 shadow-sm md:h-[340px] md:p-8"
              style={{ backgroundColor: c.hex }}
            >
              <p className="text-[16px] font-medium text-white md:text-[20px]">
                {c.hex}
              </p>
              <div className="space-y-1.5 text-[14px] font-medium text-white md:text-[16px]">
                <p>B {c.rgb[0]}</p>
                <p>B {c.rgb[1]}</p>
                <p>B {c.rgb[2]}</p>
              </div>
            </div>

            {/* Stacked Tint Blocks */}
            {c.tints.map((t, i) => (
              <div
                key={t}
                className="relative w-full rounded-b-[32px]"
                style={{
                  backgroundColor: t,
                  height: "80px",
                  marginTop: "-44px",
                  zIndex: 30 - i * 10,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}