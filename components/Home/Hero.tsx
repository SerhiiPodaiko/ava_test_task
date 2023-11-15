'use client'
import Image from 'next/image'

import AnchorLinkUI from '@ui/AnchorLink/AnchorLink'
import HeroImage from '@public/images/hero.png'
import ArrowSvg from '@public/icons/arrows/arrow-right.svg'

const Hero = () => {
  return (
    <section className='h-[400px] flex items-center justify-end relative'>
      <Image src={HeroImage} className='top-0 h-[400px] absolute w-full' alt='Hero' />
      <div className='pt-[10px] pb-[60px] pl-[40px] md:pr-[200px] relative z-10 bg-[#DEDEDE] text-[#1B4B66] rounded-l-[24px] sm:pr-0'>
        <h1 className='lg:text-[60px] md:text-[48px] text-[28px] md:leading-[64px] leading-[42px] lg:leading-[84px] font-black'>
          Carry your Funk
        </h1>
        <p className='pr-10 mt-[10px] max-w-[500px] w-full lg:text-[28px] lg:leading-[38px] md:text-[18px] md:leading-[28px] font-medium'>
          Trendy handbags collection for your party animal
        </p>
        <AnchorLinkUI
          href='#products'
          className='self-start max-w-[180px] w-full mt-[40px] py-[10px] flex justify-center items-center gap-[8px] font-medium
          leading-[20px] text-white bg-[#1B4B66] border rounded-[8px] hover:translate-y-[3px] transition ease-in hover:cursor-pointer'
        >
          <ArrowSvg />
          <span>See more</span>
        </AnchorLinkUI>
      </div>
    </section>
  )
}

export default Hero
