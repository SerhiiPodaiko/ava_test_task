'use client'
import Link from 'next/link'
import cn from 'classnames'

import { useMediaQueries } from '@hooks/ui/useMediaQueries'
import { PAGE_SLUGS } from '@constants/pages'
import { useHeader } from '@hooks/useHeader'
import Modal from '@ui/Modal/Modal'
import Navigation from '@components/Layout/components/Header/components/Navigation'
import GlobalSearch from '@components/Layout/components/Header/components/GlobalSearch'
import Favorites from '@components/Home/Favorites'
import LogoSvg from '@public/icons/logo.svg'
import FavoritesSvg from '@public/icons/favorites.svg'

const   Header = () => {
  const { menuIconView, modalFavorites, cartIconView, userIconView, setModalFavorites, favoritesStore, menuStatus } =
    useHeader()
  const { isTablet } = useMediaQueries(767, 1200)
  const { isMobile } = useMediaQueries(0, 766)

  return (
    <>
      <header className={cn('h-[90px] px-2 sm:px-5 bg-white', isTablet && 'flex flex-col')}>
        <div className='flex justify-between items-center h-full'>
          <div className='flex items-center gap-7'>
            <Link href={PAGE_SLUGS.home}>
              <LogoSvg />
            </Link>
            {!isMobile && !isTablet && <Navigation />}
          </div>
          <div className='flex items-center gap-5'>
            {!isMobile && <GlobalSearch />}
            <div className='flex items-center gap-5'>
              <FavoritesSvg
                className={cn('cursor-pointer', favoritesStore.favoritesList.length && 'fill-[#1B4B66]')}
                onClick={() => setModalFavorites(true)}
              />
              {userIconView}
              {cartIconView}
              {menuIconView}
            </div>
          </div>
        </div>
        {isTablet ? <Navigation /> : null}
        <nav
          className={cn(
            'fixed left-0 top-0 right-0 bottom-0 text-white z-20 bg-[#1B4B66]',
            menuStatus && isMobile ? 'flex' : 'hidden'
          )}
        >
          <div className='w-full h-full flex flex-col gap-5 justify-center items-center'>
            <Navigation />
            <GlobalSearch />
          </div>
        </nav>
      </header>
      <Modal onClose={() => setModalFavorites(false)} modal={modalFavorites} title='Favorites'>
        <Favorites setModalFavorites={setModalFavorites} />
      </Modal>
    </>
  )
}

export default Header
