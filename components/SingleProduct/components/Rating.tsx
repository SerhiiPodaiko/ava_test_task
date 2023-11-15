import RatingFullSvg from '@public/icons/rating-full.svg'
import RatingEmptySvg from '@public/icons/rating-empty.svg'
import { IProduct } from '@lib/products/models'

function getRatingStars(rating: number): React.ReactElement[] {
  return Array.from({ length: 5 }, (_, i) =>
    i < Math.floor(rating) ? <RatingFullSvg key={i} /> : <RatingEmptySvg key={i} />
  )
}

const Rating = ({ product }: { product: IProduct }) => {
  const stars = getRatingStars(product?.rating)

  return (
    <div className='flex items-center gap-2 mt-5'>
      <>{stars}</>
      <span className='text-[#B6B6B6] leading-[20px]'>{`(${product?.rating})`} Ratings</span>
    </div>
  )
}

export default Rating
