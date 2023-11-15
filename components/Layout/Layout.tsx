'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import Header from '@components/Layout/components/Header/Header'
import Footer from '@components/Layout/components/Footer/Footer'
import { PAGE_SLUGS } from '@constants/pages'

type LayoutState = 'private' | 'public'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [layoutView, setLayoutView] = useState<LayoutState>('public')
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === PAGE_SLUGS.login || pathname === PAGE_SLUGS.register) {
      setLayoutView('private')
    } else setLayoutView('public')
  }, [pathname])

  return layoutView === 'public' ? (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-grow py-3 px-2 sm:px-5 content'>{children}</main>
      <Footer />
    </div>
  ) : (
    <>{children}</>
  )
}

export default Layout
