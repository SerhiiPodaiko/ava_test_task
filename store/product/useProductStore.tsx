import { create } from 'zustand'

interface UseProductStore {
  discountStatus: boolean
  discount: number
  clickedCheck: boolean
  setDiscountStatus: (status: boolean) => void
  setDiscount: (value: number) => void
  setClickedCheck: (status: boolean) => void
  applyDiscount: (code: string, price: number, discountPercentage: number) => void
}

export const useProductStore = create<UseProductStore>((set, get) => ({
  discountStatus: false,
  discount: 0,
  clickedCheck: false,
  setDiscountStatus: status => set({ discountStatus: status }),
  setDiscount: value => set({ discount: value }),
  setClickedCheck: status => set({ clickedCheck: status }),
  applyDiscount: (code, price, discountPercentage) => {
    get().setClickedCheck(true)

    if (price >= 100 && code === 'ORDER100') {
      get().setDiscountStatus(true)
      get().setDiscount(price - Math.trunc((price * discountPercentage) / 100))
    } else {
      get().setDiscountStatus(false)
    }

    const timeout = setTimeout(() => {
      get().setClickedCheck(false)
      clearTimeout(timeout)
    }, 2000)
  }
}))
