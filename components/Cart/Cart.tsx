'use client'
import OrderSummary from './components/OrderSummary'
import { useCartStore } from '@store/cart/useCartStore'
import AlertUI from '@ui/Alert/Alert'
import CartList from '@components/Cart/components/CartList'

const Cart = () => {
  const cartStore = useCartStore()

  return (
    <section>
      <h1 className='text-[#1B4B66] text-[34px] leading-[44px] font-bold'>My Cart</h1>
      {cartStore.cartItems.length ? (
        <div className='flex'>
          <div className='w-[70%]'>
            <header className='grid grid-cols-2 leading-[20px] text-[#626262] font-medium'>
              <h3>Product Name</h3>
              <div className='grid grid-cols-3'>
                <h3>Price</h3>
                <h3>Qty</h3>
                <h3>Subtotal</h3>
              </div>
            </header>
            {cartStore.cartItems.map((cartItem, i) => (
              <CartList key={cartItem.id} item={cartItem} />
            ))}
          </div>
          <OrderSummary />
        </div>
      ) : (
        <AlertUI title='Message' className='my-5'>
          The basket is empty
        </AlertUI>
      )}
    </section>
  )
}

export default Cart
