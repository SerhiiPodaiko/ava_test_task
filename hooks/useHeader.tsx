import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { useMediaQueries } from '@hooks/ui/useMediaQueries'
import { useFavoritesStore } from '@store/favorites/useFavoritesStore'
import { useCartStore } from '@store/cart/useCartStore'
import { useAuthStore } from '@store/auth/useAuthStore'
import { PAGE_SLUGS } from '@constants/pages'
import CartFullSvg from '@public/icons/cart/cart-full.svg'
import CartEmptySvg from '@public/icons/cart/cart-empty.svg'
import MenuSvg from '@public/icons/menu.svg'
import CloseMenuSvg from '@public/icons/close-menu.svg'
import UserSvg from '@public/icons/user.svg'
import ExitSvg from '@public/icons/exit.svg'

export const useHeader = () => {
  const [modalFavorites, setModalFavorites] = useState<boolean>(false)
  const [menuStatus, setMenuStatus] = useState<boolean>(false)
  const router = useRouter()
  const favoritesStore = useFavoritesStore()
  const cartStore = useCartStore()
  const authStore = useAuthStore()
  const { isMobile } = useMediaQueries(0, 766)

  const clickMenu = () => {
    setMenuStatus(prev => !prev)
    if (!isMobile) {
      setMenuStatus(false)
    }
  }

  const logOut = () => {
    authStore.logOut()
    router.push(PAGE_SLUGS.login)
  }

  const userIconView = (
    <div className='cursor-pointer'>
      {authStore.isLoggedIn ? <ExitSvg onClick={logOut} /> : <UserSvg onClick={() => router.push(PAGE_SLUGS.login)} />}
    </div>
  )

  const menuIconView = (
    <div
      onClick={clickMenu}
      style={{ zIndex: 100, display: isMobile ? 'flex' : 'none', overflow: isMobile ? 'hidden' : 'visible' }}
    >
      {menuStatus ? <CloseMenuSvg /> : <MenuSvg />}
    </div>
  )

  const cartIconView = cartStore.cartItems.length ? (
    <CartFullSvg onClick={() => router.push(PAGE_SLUGS.cart)} className='cursor-pointer' />
  ) : (
    <CartEmptySvg onClick={() => router.push(PAGE_SLUGS.cart)} className='cursor-pointer' />
  )

  return {
    favoritesStore,
    cartIconView,
    modalFavorites,
    setModalFavorites,
    menuIconView,
    menuStatus,
    userIconView
  }
}
