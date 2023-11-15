'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PAGE_SLUGS } from '@constants/pages'

const Banner = () => {
  const pathname = usePathname()

  return pathname === PAGE_SLUGS.home ? (
    <section className='h-[80px] sm:h-[50px] relative mb-7'>
      <div className='px-4 sm:px-10 absolute top-0 bottom-0 left-[-20px] right-[-20px] flex justify-center items-center bg-[#F0F0F0]'>
        <strong className='text-center text-[12px] sm:text-[14px] text-[#171520] leading-[18px] font-normal sm:font-medium'>
          We are currently experiencing local customs clearance delays. For the latest updates, please check your order
          status&nbsp;
          <Link href={PAGE_SLUGS.cart} className='text-[14px] text-[#1B4B66] leading-[18px] font-medium underline'>
            here
          </Link>
        </strong>
      </div>
    </section>
  ) : null
}

export default Banner
