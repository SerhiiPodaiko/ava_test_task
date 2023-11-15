import { Metadata } from 'next'
import Payment from '@components/Payment/Payment'

export const metadata: Metadata = {
  title: 'Payment | Payment Completed',
  description: 'Payment Completed. Thank You for Your Payment',
  icons: {
    icon: '/favicons/payment.png'
  }
}

const PaymentPage = () => <Payment />
export default PaymentPage
