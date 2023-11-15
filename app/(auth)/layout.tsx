import type { Metadata } from 'next'
import Link from 'next/link'

import { PAGE_SLUGS } from '@constants/pages'
import ArrowSvg from '@public/icons/arrows/arrow-right.svg'

export const metadata: Metadata = {
  title: `Auth | Login/Register`,
  description: 'Authorization or registration',
  icons: {
    icon: '/favicons/auth.png'
  }
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='min-h-screen flex justify-center items-center relative px-5'>
      <Link
        href={PAGE_SLUGS.home}
        className='py-1 px-3 flex items-center gap-1 bg-[#1B4B66] absolute top-5 left-5 text-[14px] text-white rounded hover:scale-[0.99]'
      >
        <ArrowSvg className='rotate-180' />
        <span>Back to Home</span>
      </Link>
      {children}
    </section>
  )
}
