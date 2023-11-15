'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { PAGE_SLUGS } from '@constants/pages'

interface Breadcrumb {
  href: string
  name: string
}

const Breadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([])

  const pathname = usePathname()
  const pathSegments = pathname?.split('/').filter(Boolean) || []

  useEffect(() => {
    // Логіка для визначення категорії
    let category: string | null = null
    if (pathSegments.length > 1) {
      category = pathSegments[1]
    }

    // Логіка для створення хлібних крихт
    const newBreadcrumbs: Breadcrumb[] = [
      {
        href: '/',
        name: 'Home'
      }
    ]

    if (category) {
      newBreadcrumbs.push({
        href: `/${category}`,
        name: category
      })
    }

    setBreadcrumbs(newBreadcrumbs)
  }, [pathname, pathSegments])

  return pathname.includes(PAGE_SLUGS.home) ? null : (
    <section className='flex items-center gap-3'>
      {breadcrumbs.map((breadcrumb, index) => (
        <li key={index}>
          <Link href={breadcrumb.href}>{breadcrumb.name}</Link>
        </li>
      ))}
    </section>
  )
}

export default Breadcrumbs
