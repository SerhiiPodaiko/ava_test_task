import axios, { AxiosInstance } from 'axios'

const API: AxiosInstance = axios.create({
  baseURL: `${(process.env.NEXT_BASE_URL || '').replace(/\/$/, '')}`,
  headers: {
    'Content-Type': 'application/json'
    // "Access-Control-Allow-Origin:": "*"
  }
})

export default API
