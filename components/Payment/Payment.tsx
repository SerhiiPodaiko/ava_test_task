'use client'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

import AlertUI from '@ui/Alert/Alert'
import { useCartStore } from '@store/cart/useCartStore'
import { PAGE_SLUGS } from '@constants/pages'
const Payment = () => {
  const cartStore = useCartStore()

  useEffect(() => {
    cartStore.setPaymentStatus(true)

    return () => cartStore.setPaymentStatus(false)
  }, [cartStore.paymentStatus])

  return cartStore.paymentStatus ? (
    <section className='w-full h-full flex justify-center items-center'>
      <div className='flex flex-col'>
        <h1 className='text-[30px] leading-[48px] text-green-400'>Payment Completed</h1>
        <AlertUI title='Success' className='text-green-400 border border-green-500'>
          <strong>Thank You for Your Payment</strong>
        </AlertUI>
      </div>
    </section>
  ) : (
    redirect(PAGE_SLUGS.home)
  )
}

export default Payment
