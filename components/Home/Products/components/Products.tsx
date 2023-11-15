'use client'
import { motion } from 'framer-motion'
import cn from 'classnames'

import { IProduct } from '@lib/products/models'
import Product from './Product'
import AlertUI from '@ui/Alert/Alert'
import { useProducts } from '@hooks/useProducts'
import LoadMoreProducts from '@components/Home/Products/components/LoadMoreProducts'

const Products = ({ products }: { products: IProduct[] }) => {
  const { filteredProductList, isLoaded, setIsLoaded } = useProducts(products)

  if (!filteredProductList.length)
    return (
      <AlertUI title='Message' className='bg-blue-400 text-white'>
        The list is empty!
      </AlertUI>
    )

  return (
    <>
      <header className={cn('flex items-center justify-between')}>
        <h2 className='text-[34px] leading-[44px] font-bold text-[#13101E]'>New Arrivals</h2>
        {!isLoaded && <LoadMoreProducts setIsLoaded={setIsLoaded} />}
      </header>
      <motion.div layout className={cn('grid xl:grid-cols-4 gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1')}>
        {filteredProductList?.map((product: IProduct) => <Product key={product.id} product={product} />)}
      </motion.div>
    </>
  )
}

export default Products
