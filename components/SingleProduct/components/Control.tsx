import { useRouter } from 'next/navigation'

import { useCartStore } from '@store/cart/useCartStore'
import { PAGE_SLUGS } from '@constants/pages'
import { IProduct } from '@lib/products/models'
import { useFavoritesStore } from '@store/favorites/useFavoritesStore'
import { useProductStore } from '@store/product/useProductStore'
import BagSvg from '@public/icons/cart/bag.svg'
import FavoritesSvg from '@public/icons/favorites.svg'

const Control = ({ product, quantity }: { product: IProduct; quantity: number }) => {
  const router = useRouter()
  const cartStore = useCartStore()
  const productStore = useProductStore()
  const favoritesStore = useFavoritesStore()

  const addToCartProduct = () => {
    cartStore.addToCart(
      { ...product, price: productStore.discountStatus ? productStore.discount : product.price },
      quantity
    )
    router.push(PAGE_SLUGS.cart)
  }

  return (
    <div className='mt-10 flex items-center gap-3'>
      <button
        onClick={addToCartProduct}
        className='w-full py-[8px] px-0 sm:px-[10px] lg:px-[50px] flex items-center justify-center gap-3 bg-[#1B4B66] text-[14px] text-white leading-[24px] font-bold rounded-[8px]'
      >
        <BagSvg />
        <span>Add to bag</span>
      </button>
      <button
        onClick={() => favoritesStore.toggleProductInFavorites(product)}
        className='w-full py-[8px] px-0 sm:px-[10px] lg:px-[50px] flex items-center justify-center gap-3 bg-transparent border border-[#1B4B66] text-[14px] text-[#1B4B66] leading-[24px] font-bold  rounded-[8px]'
      >
        <FavoritesSvg className={favoritesStore.isProductInFavorites(product) ? 'fill-[#1B4B66]' : ''} />
        <span>Add To Wishlist</span>
      </button>
    </div>
  )
}

export default Control
