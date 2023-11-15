import API from '../Api'
import { IProduct, IProductsResponse } from './models'

export const fetchGetAllProducts = async (): Promise<IProductsResponse> => {
  try {
    const response = await API.get('/products')
    console.log('fetchProducts', response.data)
    return response.data as IProductsResponse
  } catch (error) {
    console.log('fetchProducts', error)
    throw new Error('Error fetch product')
  }
}

export const fetchGetOneProduct = async (id: any): Promise<Omit<IProduct, 'quantity'>> => {
  try {
    const response = await API.get(`/products/${id}`)
    console.log('fetchGetOneProduct', response.data)
    return response.data as IProduct
  } catch (error) {
    console.log('fetchGetOneProduct', error)
    throw new Error('Error fetch one product')
  }
}