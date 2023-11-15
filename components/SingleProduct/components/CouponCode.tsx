import { useState } from 'react'
import { useProductStore } from '@store/product/useProductStore'

interface CouponCodeProps {
  price: number
  discountPercentage: number
}

const CouponCode = ({ price, discountPercentage }: CouponCodeProps) => {
  const [discountCode, setDiscountCode] = useState<string>('')
  const productStore = useProductStore()

  return (
    <form className='relative' onSubmit={e => e.preventDefault()}>
      <input
        type='text'
        value={discountCode}
        onChange={e => setDiscountCode(e.target.value)}
        className='w-full pl-[10px] py-[15px] pr-[80px] text-[#626262] leading-[20px] font-medium bg-[#F1F1F1] rounded'
        placeholder='Apply Valid Pincode'
      />
      <button
        onClick={() => productStore.applyDiscount(discountCode, price, discountPercentage)}
        className='absolute right-[15px] top-0 bottom-0 text-[14px] text-[#1B4B66] leading-[16px] font-bold bg-transparent'
      >
        CHECK
      </button>
    </form>
  )
}

export default CouponCode
