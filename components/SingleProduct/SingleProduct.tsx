'use client'
import { useState } from 'react'
import cn from 'classnames'

import Slider from './components/Slider/Slider'
import Rating from './components/Rating'
import DeliveryDetails from './components/DeliveryDetails'
import Quantity from './components/Quantity'
import Discount from './components/Discount'
import TabbedContent from './components/Tabs'
import Control from './components/Control'
import { useProductStore } from '@store/product/useProductStore'
import { IProduct } from '@lib/products/models'
import ArrowSvg from '@public/icons/arrows/products-arrow-right.svg'

const SingleProduct = ({ product }: { product: IProduct }) => {
  const [quantity, setQuantity] = useState(1)
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false)
  const productStore = useProductStore()

  return (
    <section className='py-10 gap-5 flex flex-col'>
      <div className='flex flex-col lg:flex-row gap-5 '>
        {/*<Slider product={product} />*/}
        <div className='flex flex-col flex-1'>
          <h3 className='text-[34px] text-[#13101E] leading-[44px] font-bold'>{product.title}</h3>
          <p
            className={cn(
              'flex items-center gap-2 text-[17px] text-[#626262] leading-[26px] font-bold',
              showFullDescription && 'flex-col-reverse gap-0'
            )}
          >
            {showFullDescription ? product.description : `${product.description.slice(0, 30)}...`}
            <ArrowSvg
              className={cn(
                'stroke-[#626262] cursor-pointer',
                showFullDescription ? '-rotate-90 self-start' : 'rotate-90'
              )}
              onClick={() => setShowFullDescription(prev => !prev)}
            />
          </p>
          <Rating product={product} />
          <div className='mt-7 pb-7 flex items-center gap-3 border-b border-b-[#F1F1F1]'>
            <h4 className='text-[40px] text-[#171520] leading-[50px] font-black'>
              ${productStore?.discountStatus ? productStore.discount : product.price}
            </h4>
            {productStore?.discountStatus && (
              <span className='text-[34px] text-[#B6B6B6] leading-[26px] font-bold line-through'>${product.price}</span>
            )}
            {productStore?.discountStatus && (
              <strong className='text-[20px] text-[#FF404B] leading-[26px] font-bold'>
                {product.discountPercentage}%OFF
              </strong>
            )}
          </div>
          <DeliveryDetails discountPercentage={product.discountPercentage} price={product.price} />
          <Quantity product={product} quantity={quantity} setQuantity={setQuantity} />
          <Discount price={product.price} discountPercentage={product.discountPercentage} />
          <Control product={product} quantity={quantity} />
        </div>
      </div>
      <TabbedContent />
    </section>
  )
}

export default SingleProduct
