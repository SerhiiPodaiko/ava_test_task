import { Metadata } from 'next'
import Cart from '@components/Cart/Cart'

export const metadata: Metadata = {
  title: 'Cart | Cart products',
  description: 'Cart all products',
  icons: {
    icon: '/favicons/cart.png'
  }
}

const CartPage = () => <Cart />

export default CartPage
