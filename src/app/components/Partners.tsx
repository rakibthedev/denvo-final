"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import WordReveal from "./shared/WordReveal";


export default function Partners() {
   return (
        <div className='bg-[#F0E3FF] w-full'>
            <div className='max-w-[1440px] mx-auto px-4 md:px-20 py-8 md:py-20'>
                <WordReveal
                    text="We partner with 10+ countries"
                    className='text-[20px] md:text-[36px] font-[400] text-[#3D3D3D] leading-[132%] text-center uppercase font-Grotesk px-4 justify-center'
                />

                {/* Flags */}
                <div className='flex justify-center items-center gap-2 md:gap-4 mt-4 px-4'>
                    <Image src={'/bd.png'} alt='bd' width={100} height={100} className='w-6 h-4' />
                    <Image src={'/flag-2.png'} alt='bd' width={100} height={100} className='w-6 h-4' />
                    <Image src={'/flag-3.png'} alt='bd' width={100} height={100} className='w-6 h-4' />
                    <Image src={'/flag-4.png'} alt='bd' width={100} height={100} className='w-6 h-4' />
                    <Image src={'/flag-5.png'} alt='bd' width={100} height={100} className='w-6 h-4' />
                    <Image src={'/flag-6.png'} alt='bd' width={100} height={100} className='w-6 h-4' />
                    <Image src={'/flag-7.png'} alt='bd' width={100} height={100} className='w-6 h-4' />
                    <Image src={'/flag-8.png'} alt='bd' width={100} height={100} className='w-6 h-4' />
                    <Image src={'/flag-9.png'} alt='bd' width={100} height={100} className='w-6 h-4' />
                    <Image src={'/flag-10.png'} alt='bd' width={100} height={100} className='w-6 h-4' />
                </div>

                {/* Right to Left */}
                <div className='mt-10'>
                    <Marquee gradient={true} gradientColor='#F0E3FF' gradientWidth={300}>
                        <div className='flex items-center gap-9'>
                            <Image src={'/visa.png'} alt='bd' width={100} height={100}
                                className='w-[68px] md:w-[144px] h-[22px] md:h-12' />
                            <Image src={'/ckc.png'} alt='bd' width={100} height={100}
                                className='w-[48px] md:w-[103px] h-[22px] md:h-12' />
                            <Image src={'/visa.png'} alt='bd' width={100} height={100}
                                className='w-[68px] md:w-[144px] h-[22px] md:h-12' />
                            <Image src={'/ckc.png'} alt='bd' width={100} height={100}
                                className='w-[48px] md:w-[103px] h-[22px] md:h-12' />
                            <Image src={'/visa.png'} alt='bd' width={100} height={100}
                                className='w-[68px] md:w-[144px] h-[22px] md:h-12' />
                            <Image src={'/ckc.png'} alt='bd' width={100} height={100}
                                className='w-[48px] md:w-[103px] h-[22px] md:h-12' />
                            <Image src={'/visa.png'} alt='bd' width={100} height={100}
                                className='w-[68px] md:w-[144px] h-[22px] md:h-12' />
                            <Image src={'/ckc.png'} alt='bd' width={100} height={100}
                                className='w-[48px] md:w-[103px] h-[22px] md:h-12' />
                            <Image src={'/visa.png'} alt='bd' width={100} height={100}
                                className='w-[68px] md:w-[144px] h-[22px] md:h-12' />
                            <Image src={'/ckc.png'} alt='bd' width={100} height={100}
                                className='w-[48px] md:w-[103px] h-[22px] md:h-12' />
                        </div>
                    </Marquee>
                </div>

                {/* Left to Right */}
                <div className='mt-2 md:mt-10'>
                    <Marquee direction='right' gradient={true} gradientColor='#F0E3FF' gradientWidth={300}>
                        <div className='flex items-center gap-9'>
                            <Image src={'/visa.png'} alt='bd' width={100} height={100}
                                className='w-[68px] md:w-[144px] h-[22px] md:h-12' />
                            <Image src={'/ckc.png'} alt='bd' width={100} height={100}
                                className='w-[48px] md:w-[103px] h-[22px] md:h-12' />
                            <Image src={'/visa.png'} alt='bd' width={100} height={100}
                                className='w-[68px] md:w-[144px] h-[22px] md:h-12' />
                            <Image src={'/ckc.png'} alt='bd' width={100} height={100}
                                className='w-[48px] md:w-[103px] h-[22px] md:h-12' />
                            <Image src={'/visa.png'} alt='bd' width={100} height={100}
                                className='w-[68px] md:w-[144px] h-[22px] md:h-12' />
                            <Image src={'/ckc.png'} alt='bd' width={100} height={100}
                                className='w-[48px] md:w-[103px] h-[22px] md:h-12' />
                            <Image src={'/visa.png'} alt='bd' width={100} height={100}
                                className='w-[68px] md:w-[144px] h-[22px] md:h-12' />
                            <Image src={'/ckc.png'} alt='bd' width={100} height={100}
                                className='w-[48px] md:w-[103px] h-[22px] md:h-12' />
                            <Image src={'/visa.png'} alt='bd' width={100} height={100}
                                className='w-[68px] md:w-[144px] h-[22px] md:h-12' />
                            <Image src={'/ckc.png'} alt='bd' width={100} height={100}
                                className='w-[48px] md:w-[103px] h-[22px] md:h-12' />
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
}
