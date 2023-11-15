'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import NotFoundImage from '@public/images/404.png'
import { PAGE_SLUGS } from '@constants/pages'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    const redirect = setTimeout(() => router.push(PAGE_SLUGS.home), 2000)

    return () => clearTimeout(redirect)
  }, [router])

  return (
    <section className='w-full p-5 flex flex-col'>
      <Image src={NotFoundImage} width={500} height={400} className='flex self-center' alt='Not found | 404' />
      <Link
        href={PAGE_SLUGS.home}
        className='flex self-center p-2 bg-[#1B4B66] font-medium rounded text-white hover:translate-y-[2px] transition ease-in'
      >
        Back to Home
      </Link>
    </section>
  )
}

export default NotFound
