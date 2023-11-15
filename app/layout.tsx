import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@styles/globals.css'
import Layout from '@components/Layout/Layout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Home | All products',
  description: 'All products',
  icons: {
    icon: '/favicons/home.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Layout>{children}</Layout>
        <ToastContainer />
      </body>
    </html>
  )
}
