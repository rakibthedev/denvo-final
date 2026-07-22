import Image from "next/image";
import WordReveal from "../shared/WordReveal";
import ScrollReveal from "../shared/ScrollReveal";
import TextReveal from "../shared/TextReveal";

const weights = ["Regular", "Medium", "SemiBold", "Bold"];

export default function StyleGuide() {
  return (
    <div className="mx-auto max-w-[1440px] space-y-6 px-6 py-12 md:space-y-20 md:px-[188px] md:py-[100px]">
      <div className="text-center">
        <WordReveal
          text="Style Guide"
          className="mb-6 justify-center text-[36px] font-[500] leading-[120%] text-[#272629] md:text-[56px]"
        />
        <ScrollReveal delay={0.2}>
          <TextReveal
            as="p"
            className="mx-auto max-w-[900px] text-center text-[16px] font-normal leading-[1.2] text-subtext md:text-[20px]"
          >
            Noto Sans Bengali is a clean and friendly sans-serif typeface with soft, rounded edges
            that feel approachable and modern. Its high readability and balanced structure make it
            ideal for a government service app like Prottoyon, ensuring clear communication,
            accessibility, and a comfortable reading experience for users of all ages.
          </TextReveal>
        </ScrollReveal>
      </div>

      {/* Open Source */}
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

      {/* Color */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-12">
        <div>
          <div className="mb-4 h-[198px] rounded-[32px] bg-[#B2F828] md:mb-6 md:h-[298px]" />
          <div className="border-l-[3px] border-[#B2F828] bg-gradient-to-r from-[rgba(178,248,40,0.5)] to-transparent px-4 py-3 text-center text-[24px] font-[600] leading-[120%] text-black md:p-5">
            B2F828
          </div>
        </div>

        <div>
          <div className="mb-4 border-l-[3px] border-[#FF5900] bg-gradient-to-r from-[rgba(255,89,0,0.50)] to-transparent px-4 py-3 text-center text-[24px] font-[600] leading-[120%] text-black md:mb-6 md:p-5">
            FF5900
          </div>
          <div className="h-[198px] rounded-[32px] bg-[#FF5900] md:h-[298px]" />
        </div>

        <div>
          <div className="mb-4 h-[198px] rounded-[32px] bg-[#3CC72C] md:mb-6 md:h-[298px]" />
          <div className="border-l-[3px] border-[#3CC72C] bg-gradient-to-r from-[rgba(60,199,44,0.50)] to-transparent px-4 py-3 text-center text-[24px] font-[600] leading-[120%] text-black md:p-5">
            3CC72C
          </div>
        </div>

        <div>
          <div className="mb-4 border-l-[3px] border-[#FE3333] bg-gradient-to-r from-[rgba(254,51,51,0.50)] to-transparent px-4 py-3 text-center text-[24px] font-[600] leading-[120%] text-black md:mb-6 md:p-5">
            FE3333
          </div>
          <div className="h-[198px] rounded-[32px] bg-[#FE3333] md:h-[298px]" />
        </div>
      </div>
    </div>
  );
}
