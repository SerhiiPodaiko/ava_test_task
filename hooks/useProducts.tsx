import { useEffect, useState } from 'react'
import { useGlobalSearchStore } from '@store/globalSearch/useGlobalSearchStore'
import { IProduct } from '@lib/products/models'

export const useProducts = (products: IProduct[]) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const [allProducts, setAllProducts] = useState<IProduct[]>([])

  const globalSearchStore = useGlobalSearchStore()

  const filteredProductList =
    allProducts &&
    allProducts.filter(
      product =>
        product.title.toLowerCase().includes(globalSearchStore.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(globalSearchStore.searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(globalSearchStore.searchQuery.toLowerCase())
    )

  useEffect(() => {
    setAllProducts(products.slice(0, 4))

    if (isLoaded) {
      setAllProducts(products)
    }
  }, [isLoaded])

  return {
    filteredProductList,
    isLoaded,
    setIsLoaded
  }
}
