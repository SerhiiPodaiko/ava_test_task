'use client'
import { useRef } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import './Slider.css'
import { IProduct } from '@lib/products/models'
import ArrowSlideSvg from '@public/icons/arrows/slide-arrow-left.svg'
import SkeletonUI from '@ui/Skeleton/Skeleton';

const Slider = ({ product }: { product: IProduct }) => {
  const sliderRef = useRef<any>(null)
    const images = Array.isArray(product.images) ? product.images.map(image => ({
        original: image,
        thumbnail: image
    })) : []

  const prevSlide = () => sliderRef?.current?.slideLeft()
  const nextSlide = () => sliderRef?.current?.slideRight()

  return images ? (
      <div className='relative flex-1'>
          <ImageGallery
              ref={sliderRef}
              items={images}
              showNav={false}
              showPlayButton={false}
              showFullscreenButton={false}
          />
          <div className='relative md:mb-5 mb-0 hidden md:flex lg:hidden xl:flex'>
              <ArrowSlideSvg
                  className='absolute md:left-[50px] lg:left-[50px] md:top-[-50px] cursor-pointer'
                  onClick={prevSlide}
              />
              <ArrowSlideSvg
                  className='absolute md:right-[50px] lg:right-[50px] md:top-[-50px] rotate-180 cursor-pointer'
                  onClick={nextSlide}
              />
          </div>
      </div>
  ) : <SkeletonUI />
}
export default Slider
