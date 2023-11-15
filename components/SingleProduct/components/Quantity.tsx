'use client'
import PlusSvg from '@public/icons/plus.svg'
import MinusSvg from '@public/icons/minus.svg'
import { IProduct } from '@lib/products/models'
import { useCartStore } from '@store/cart/useCartStore'

interface QuantityProps {
  product: IProduct
  quantity: number
  setQuantity: (value: number) => void
}

const Quantity = ({ product, quantity, setQuantity }: QuantityProps) => {
  const stock = product?.stock || 1
  const cartStore = useCartStore()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const parsedValue = parseInt(value, 10)

    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= stock) {
      setQuantity(parsedValue)
    }
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= stock) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className='pt-8 flex items-center gap-5'>
      <h3 className='text-[#13101E] text-[20px] leading-[26px] font-bold'>Quantity:</h3>
      <div className='max-w-[90px] w-full py-[5px] flex items-center justify-between border border-[#1B4B66] rounded'>
        <button onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity === 1}>
          <MinusSvg />
        </button>
        <input
          type='text'
          className='text-center max-w-[40px] w-full text-[#171520]'
          value={quantity}
          onChange={handleInputChange}
        />
        <button onClick={() => handleQuantityChange(quantity + 1)} disabled={quantity === stock}>
          <PlusSvg />
        </button>
      </div>
    </div>
  )
}

export default Quantity
