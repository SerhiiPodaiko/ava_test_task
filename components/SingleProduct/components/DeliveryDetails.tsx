'use client'
import cn from 'classnames'

import AlertUI from '@ui/Alert/Alert'
import { useProductStore } from '@store/product/useProductStore'
import CouponCode from '@components/SingleProduct/components/CouponCode'

const DeliveryDetails = ({ price, discountPercentage }: { price: number; discountPercentage: number }) => {
  const productStore = useProductStore()

  return price && price >= 100 ? (
    <div className='pt-8'>
      <div className='flex flex-col md:tems-center md:flex-row'>
        <div className='flex flex-col w-full md:w-[30%] gap-2'>
          <h3 className='text-[20px] text-[#171520] leading-[26px] font-bold'>Delivery Details</h3>
          <p className='text-[#626262] leading-[20px] font-medium'>Check estimated delivery date/pickup option.</p>
        </div>
        <div className='relative w-full md:w-[70%]'>
          <CouponCode price={price} discountPercentage={discountPercentage} />
        </div>
      </div>
      {productStore.clickedCheck && (
        <AlertUI
          title={'Message'}
          className={cn(
            'p-[10px] max-w-[200px] justify-end text-white',
            productStore.discountStatus ? 'bg-green-400' : 'bg-red-500'
          )}
        >
          <span className='italic'>{productStore.discountStatus ? 'Success' : 'Invalid code'}</span>
        </AlertUI>
      )}
    </div>
  ) : null
}

export default DeliveryDetails
