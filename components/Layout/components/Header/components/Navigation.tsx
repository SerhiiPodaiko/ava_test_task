import { usePathname } from 'next/navigation'
import Link from 'next/link'
import cn from 'classnames'

import { useMediaQueries } from '@hooks/ui/useMediaQueries'
import { PAGE_SLUGS } from '@constants/pages'

const links = [
  { title: 'Handbags', path: PAGE_SLUGS.handbags },
  { title: 'Watches', path: PAGE_SLUGS.watches },
  { title: 'Skincare', path: PAGE_SLUGS.skincare },
  { title: 'Jewellery', path: PAGE_SLUGS.jewellery },
  { title: 'Apparels', path: PAGE_SLUGS.apparels }
]

const Navigation = () => {
  const pathname = usePathname()
  const { isTablet } = useMediaQueries(767, 1200)

  return (
    <nav
      className={cn('relative flex flex-col sm:flex-row sm:justify-center sm:items-center gap-5', isTablet && 'my-4')}
    >
      {links.map(link => (
        <Link
          key={link.title}
          href={link.path}
          className={cn(
            'relative leading-[18px] font-medium text-white sm:text-[#1B4B66] w-fit block after:block after:content-[""] after:absolute after:h-[2px] after:bg-[#171520] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center',
            pathname === link.path ? 'after:scale-x-100' : 'after:scale-x-0'
          )}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
