import AlertUI from '@ui/Alert/Alert'
import { fetchGetOneProduct } from '@lib/products/fetchProducts'
import SingleProduct from '@components/SingleProduct/SingleProduct'

export async function generateMetadata() {
  return {
    title: 'Product Details',
    description: 'One Product. Product Details',
    icons: {
      icon: '/favicons/product.png'
    }
  }
}

const ProductPage = async ({ searchParams: { id } }: { searchParams: { id: number } }) => {
  const product = await fetchGetOneProduct(id)

  console.log('ProductPage', product)

  if (!product)
    return (
      <AlertUI title='Message' className='bg-red-400 text-white'>
        There is no information about this product!
      </AlertUI>
    )

  return <SingleProduct product={product} />
}

export default ProductPage
