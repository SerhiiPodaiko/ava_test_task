import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

import { useCartStore } from '@store/cart/useCartStore'
import { useAuthStore } from '@store/auth/useAuthStore'
import { PAGE_SLUGS } from '@constants/pages'

const OrderSummary = () => {
  const router = useRouter()
  const cartStore = useCartStore()
  const authStore = useAuthStore()

  const placeOrder = () => {
    if (authStore.isLoggedIn) {
      cartStore.setPaymentStatus(true)
      cartStore.clearCart()
      router.push(PAGE_SLUGS.payment)
    } else {
      router.push(PAGE_SLUGS.login)
      toast.error('Please log in or register to place an order', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'light'
      })
    }
  }

  return (
    <div className='w-[30%]'>
      <h4 className='text-[#13101E] text-[20px] leading-[26px] font-bold'>Order Summary</h4>
      <div className='mt-5 flex flex-col gap-5'>
        <div className='flex items-center justify-between'>
          <span>Sub Total</span>
          <strong>${cartStore.getSubTotal()}</strong>
        </div>
        <div className='flex items-center justify-between'>
          <span>Discount</span>
          <strong>-${cartStore.getDiscount()}</strong>
        </div>
        <div className='flex items-center justify-between'>
          <span>Delivery Fee</span>
          <strong>-$0.00</strong>
        </div>
        <div className='flex items-center justify-between'>
          <span>Grand Total</span>
          <strong>${cartStore.getGrandTotal()}</strong>
        </div>
      </div>
      <div className='mt-10 flex items-center justify-between gap-5'>
        <button
          onClick={placeOrder}
          className='p-[10px] w-full text-white leading-[20px] font-medium bg-[#1B4B66] rounded'
        >
          Place Order
        </button>
        <button
          onClick={() => router.push(PAGE_SLUGS.home)}
          className='p-[10px] w-full text-[#1B4B66] leading-[20px] font-medium bg-transparent rounded border border-[#1B4B66]'
        >
          Continue Shopping
        </button>
      </div>
    </div>
  )
}

export default OrderSummary
