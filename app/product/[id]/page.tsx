import AlertUI from '@ui/Alert/Alert'
import { fetchGetOneProduct } from '@lib/products/fetchProducts'
import SingleProduct from '@components/SingleProduct/SingleProduct'

type ProductMetadata = { searchParams: { id: number } }


export async function generateMetadata({ searchParams: { id } }: ProductMetadata ) {
  return {
    title: `Product ${id} `,
    description: 'One Product',
    icons: {
      icon: '/favicons/product.png'
    }
  }
}

const ProductPage = async ({ searchParams: { id } }: { searchParams: { id: number } }) => {
  const product = await fetchGetOneProduct(id)

  if (!product)
    return (
      <AlertUI title='Message' className='bg-red-400 text-white'>
        There is no information about this product!
      </AlertUI>
    )

  return <SingleProduct product={product} />
}

export default ProductPage
