'use client'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import { PAGE_SLUGS } from '@constants/pages'
import { useFavoritesStore } from '@store/favorites/useFavoritesStore'
import { IProduct } from '@lib/products/models'
import SkeletonUI from '@ui/Skeleton/Skeleton'
import FavoritesSvg from '@public/icons/favorites.svg'

const Product = ({ product }: { product: IProduct }) => {
  const favoritesStore = useFavoritesStore()
  const isProductInFavorites = favoritesStore.isProductInFavorites(product)

  return (
    <Link
      href={{ pathname: `${PAGE_SLUGS.product}/${product.id}`, query: { category: product.category, id: product.id } }}
      className='flex flex-col gap-3'
    >
      <div className='w-full sm:h-[286px] h-[200px]'>
        {product.thumbnail ? (
          <Image
            src={product.thumbnail}
            width={286}
            height={286}
            className='w-full sm:h-[286px] h-[200px] rounded-[8px] hover:scale-[1.01] transition ease-in'
            alt={product.title}
          />
        ) : (
          <SkeletonUI className='w-full h-full' />
        )}
      </div>
      <div className='relative flex flex-col gap-3 leading-[20px]'>
        <h3 className='font-medium text-[#171520]'>{product.title}</h3>
        <p className='font-normal text-[14px] text-[#626262]'>{product.category}</p>
        <strong className='font-medium text-[#171520]'>${product.price}</strong>
        <div onClick={(e: React.MouseEvent) => e.preventDefault()}>
          <FavoritesSvg
            className={cn('absolute top-0 right-[2px] cursor-pointer', isProductInFavorites && 'fill-[#171520]')}
            onClick={() => favoritesStore.toggleProductInFavorites(product)}
          />
        </div>
      </div>
    </Link>
  )
}

export default Product
