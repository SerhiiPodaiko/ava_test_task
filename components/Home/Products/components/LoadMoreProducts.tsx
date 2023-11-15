import ArrowRightSvg from '@public/icons/arrows/products-arrow-right.svg'

const LoadMoreProducts = ({ setIsLoaded }: { setIsLoaded: (value: boolean) => void }) => {
  return (
    <button
      onClick={() => setIsLoaded(true)}
      className='flex items-center gap-3 text-[#1B4B66] font-bold leading-[24px] text-[14px]'
    >
      <span>View All</span>
      <ArrowRightSvg />
    </button>
  )
}

export default LoadMoreProducts
