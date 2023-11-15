import { create } from 'zustand'
import { IProduct } from '@lib/products/models'

export interface IProductWithQuantity extends IProduct {
  quantity: number
  discountAmount?: number
}

interface ICartStore {
  cartItems: IProductWithQuantity[]
  addToCart: (product: IProduct, quantity: number) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
  getSubTotal: () => number
  getDiscount: () => number
  getGrandTotal: () => number
  paymentStatus: boolean
  setPaymentStatus: (paymentStatus: boolean) => void
}

export const useCartStore = create<ICartStore>((set, get) => {
  const storedCart = typeof window !== 'undefined' && localStorage?.getItem('cart')
  const initialCartItems: IProductWithQuantity[] = storedCart ? JSON.parse(storedCart) : []

  return {
    cartItems: initialCartItems,

    // Cart
    addToCart: (product, quantity) =>
      set(state => {
        const existingProduct = state.cartItems.find(item => item.id === product.id)

        if (existingProduct) {
          const updatedCart = state.cartItems.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          )
          localStorage.setItem('cart', JSON.stringify(updatedCart))
          return { ...state, cartItems: updatedCart }
        }

        const updatedCart = [...state.cartItems, { ...product, quantity }]
        localStorage.setItem('cart', JSON.stringify(updatedCart))

        return { ...state, cartItems: updatedCart }
      }),
    removeFromCart: (productId: number) =>
      set(() => {
        const updatedCart = get().cartItems.filter(item => item.id !== productId)

        localStorage.setItem('cart', JSON.stringify(updatedCart))

        return { cartItems: updatedCart }
      }),
    clearCart: () =>
      set(() => {
        localStorage.removeItem('cart')
        return { cartItems: [] }
      }),

    // Discount
    getSubTotal: () => {
      return get().cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    },
    getDiscount: () => {
      let discount = 0

      const appliedDiscounts: { [key: string]: boolean } = {} // Object to track applied discounts

      get().cartItems.forEach(item => {
        const itemId = item.id.toString()

        if (!appliedDiscounts[itemId]) {
          // Check for discountAmount
          if (typeof item.discountAmount === 'number') {
            discount += item.discountAmount
          } else if (item.price >= 100) {
            // Apply discount based on discountPercentage
            discount += ((item.discountPercentage || 0) * item.price) / 100
          }

          appliedDiscounts[itemId] = true
        }
      })

      return parseFloat(discount.toFixed(2))
    },
    getGrandTotal: () => {
      const subTotal = get().getSubTotal()
      const discount = get().getDiscount()
      const grandTotal = subTotal - discount
      return parseFloat(grandTotal.toFixed(2))
    },

    // Payment
    paymentStatus: false,
    setPaymentStatus: status => set({ paymentStatus: status })
  }
})
