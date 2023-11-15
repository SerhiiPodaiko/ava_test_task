import Link from 'next/link'
import Image from 'next/image'

import { useFavoritesStore } from '@store/favorites/useFavoritesStore'
import { PAGE_SLUGS } from '@constants/pages'
import SkeletonUI from '@ui/Skeleton/Skeleton'
import AlertUI from '@ui/Alert/Alert'

const Favorites = ({ setModalFavorites }: { setModalFavorites: (modal: boolean) => void }) => {
  const favoritesStore = useFavoritesStore()

  const openToProductDetails = () => setModalFavorites(false)

  if (!favoritesStore.favoritesList || favoritesStore.favoritesList.length === 0) {
    return (
      <AlertUI title='Message' className='bg-[#1B4B66] text-white'>
        The list is empty!
      </AlertUI>
    )
  }

  return (
    <div className='flex flex-col gap-5'>
      {favoritesStore.favoritesList.map(product => (
        <Link
          key={product.id}
          href={{
            pathname: `${PAGE_SLUGS.product}/${product.id}`,
            query: { category: product.category, id: product.id }
          }}
          onClick={openToProductDetails}
          className='flex flex-col gap-3 border-b border-b-[#626262]'
        >
          <div className='w-full h-[150px]'>
            {product.thumbnail ? (
              <Image
                src={product.thumbnail}
                width={150}
                height={150}
                className='w-full h-[150px] rounded-[8px] hover:scale-[1.01] transition ease-in'
                alt={product.title}
              />
            ) : (
              <SkeletonUI className='w-full h-full' />
            )}
          </div>
          <div className='relative flex flex-col gap-1 leading-[20px]'>
            <h3 className='font-medium text-[#171520]'>{product.title}</h3>
            <p className='font-normal text-[14px] text-[#626262]'>{product.category}</p>
            <strong className='font-medium text-[#171520]'>${product.price}</strong>
          </div>
        </Link>
      ))}
      <footer className='pt-3' onClick={favoritesStore.removeAllProductsFromFavorites}>
        <button className='py-[10px] px-[20px] rounded bg-[#1B4B66] text-white'>Clear all</button>
      </footer>
    </div>
  )
}

export default Favorites
