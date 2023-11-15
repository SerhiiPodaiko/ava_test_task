import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import SkeletonUI from '@ui/Skeleton/Skeleton'
import { IProductWithQuantity, useCartStore } from '@store/cart/useCartStore'
import { useFavoritesStore } from '@store/favorites/useFavoritesStore'
import { PAGE_SLUGS } from '@constants/pages'

const CartList = ({ item }: { item: IProductWithQuantity }) => {
  const cartStore = useCartStore()
  const favoritesStore = useFavoritesStore()

  return (
    <div className='grid grid-cols-2 mb-10' key={item.id}>
      <div className='flex gap-2'>
        {item.thumbnail ? (
          <Link
            href={{
              pathname: `${PAGE_SLUGS.product}/${item.id}`,
              query: { category: item.category, id: item.id }
            }}
          >
            <Image src={item.thumbnail} width={75} height={80} className='rounded-[8px]' alt={item.title} />
          </Link>
        ) : (
          <SkeletonUI className='' />
        )}
        <div className='flex flex-col gap-2 leading-[20px]'>
          <h4 className='text-[#171520] font-medium'>{item.title}</h4>
          <span className='text-[#626262]'>{item.category}</span>
          <span className='text-[#626262]'>Qty- {item.quantity}</span>
        </div>
      </div>
      <div className='flex flex-col gap-7'>
        <div className='grid grid-cols-3 text-[14px] leading-[20px] text-[#171520]'>
          <span>${item.price}</span>
          <span>{item.stock}</span>
          <span>{item.price < 100 ? '-' : item.discountPercentage}</span>
        </div>
        <div className='flex items-center gap-3'>
          <button
            onClick={() => favoritesStore.toggleProductInFavorites(item)}
            className={cn(
              'py-[8px] px-[10px] bg-transparent text-[14px] leading-[24px] underline font-bold',
              favoritesStore.isProductInFavorites(item) ? 'text-green-500' : 'text-[#1B4B66]'
            )}
          >
            Move to Wishlist
          </button>
          <button
            onClick={() => cartStore.removeFromCart(item.id)}
            className='py-[8px] px-[50px] bg-transparent text-[14px] text-[#B00020] leading-[24px] underline font-bold'
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartList
