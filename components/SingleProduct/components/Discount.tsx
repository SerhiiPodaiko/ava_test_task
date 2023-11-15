'use client'
import { useState } from 'react'
import { useCopyToClipboard } from '@hooks/ui/useCopyToClipboard'

const Discount = ({ discountPercentage, price }: { discountPercentage: number; price: number }) => {
  const [message, setMessage] = useState<boolean>(false)
  const [_, copy] = useCopyToClipboard()

  const copyCode = (code: string) => {
    copy(code)
    setMessage(true)

    const timeout = setTimeout(() => {
      setMessage(false)
      clearTimeout(timeout)
    }, 2000)
  }

  return price && price >= 100 ? (
    <div className='mt-[50px] w-full sm:w-[60%] py-[15px] px-[16px] flex flex-col md:flex-row md:items-center justify-between gap-1 border border-[#1B4B66] rounded-[8px]'>
      <div className='flex flex-col gap-2'>
        <strong className='text-[#171520] leading-[19px] font-medium'>
          Get up to {discountPercentage}% Off on order value above $100
        </strong>
        <span className='text-[#1B4B66] text-[14px] leading-[14px] font-medium'>Terms & Conditions</span>
      </div>
      <div className='relative flex flex-col items-center gap-[8px] py-[14px] px-[13px] bg-[#F1F1F1] rounded'>
        <span className='text-[#626262] text-[14px] leading-[14px] font-medium'>Use Code</span>
        <strong
          title='Copy code'
          className='text-[#171520] text-[16px] leading-[18px] font-medium cursor-pointer'
          onClick={() => copyCode('ORDER100')}
        >
          ORDER100
        </strong>
        {message && (
          <p className='absolute bottom-[70px] text-[14px] p-[5px] rounded bg-[#1B4B66] text-white'>Copied</p>
        )}
      </div>
    </div>
  ) : null
}

export default Discount
