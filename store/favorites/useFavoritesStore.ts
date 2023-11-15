import { create } from 'zustand'
import { IProduct } from '@lib/products/models'

interface UseFavoritesStore {
  favoritesList: IProduct[]
  addProductToFavorites: (product: IProduct) => void
  removeProductFromFavorites: (productId: number) => void
  isProductInFavorites: (product: IProduct) => boolean
  toggleProductInFavorites: (product: IProduct) => void
  removeAllProductsFromFavorites: () => void
}

const storedFavorites = localStorage.getItem('favorites') || ''
const initialFavoritesList = storedFavorites ? JSON.parse(storedFavorites) : []

export const useFavoritesStore = create<UseFavoritesStore>((set, get) => ({
  favoritesList: initialFavoritesList,
  addProductToFavorites: (product: IProduct) => {
    if (!isProduct(product)) {
      throw new Error('Продукт повинен бути об`єктом типу IProduct')
    }

    set(state => {
      const newFavoritesList = [...state.favoritesList, product]
      localStorage.setItem('favorites', JSON.stringify(newFavoritesList))
      return { favoritesList: newFavoritesList }
    })
  },
  removeProductFromFavorites: (productId: number) => {
    set(state => {
      const newFavoritesList = state.favoritesList.filter(item => item.id !== productId)
      localStorage.setItem('favorites', JSON.stringify(newFavoritesList))
      return { favoritesList: newFavoritesList }
    })
  },
  isProductInFavorites: (product: IProduct) => !!get().favoritesList.find(item => item.id === product.id),
  toggleProductInFavorites: (product: IProduct) => {
    if (get().isProductInFavorites(product)) {
      get().removeProductFromFavorites(product.id)
    } else {
      get().addProductToFavorites(product)
    }
  },
  removeAllProductsFromFavorites: () => {
    localStorage.removeItem('favorites')
    set({ favoritesList: [] })
  }
}))

function isProduct(product: any): product is IProduct {
  return product && typeof product === 'object' && 'id' in product
}
