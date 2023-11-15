import Products from './components/Products'
import Preloader from '@ui/Preloader/Preloader'
import { fetchGetAllProducts } from '@lib/products/fetchProducts'

const WrapperProducts = async () => {
  const { products } = await fetchGetAllProducts()

  if (!products || products.length === 0) return <Preloader />

  return (
    <section className='py-10 flex flex-col gap-5' id='products'>
      <Products products={products} />
    </section>
  )
}

export default WrapperProducts
