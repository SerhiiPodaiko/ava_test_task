import { useInView } from 'react-intersection-observer'

export const useLazyLoad = () => {
  const { ref, inView } = useInView({
    threshold: 1
  })

  return {
    ref,
    inView
  }
}
