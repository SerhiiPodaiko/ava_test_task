import Banner from '@components/Home/Banner'
import Hero from '@components/Home/Hero'
import WrapperProducts from '@components/Home/Products/WrapperProducts'

const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <Banner />
      <Hero />
      <WrapperProducts />
    </div>
  )
}

export default HomePage
