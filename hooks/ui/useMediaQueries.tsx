import { useMediaQuery } from 'react-responsive'

export const useMediaQueries = (minWidth: number, maxWidth: number) => {
  return {
    isDesktop: useMediaQuery({ minWidth: minWidth, maxWidth: maxWidth }),
    isTablet: useMediaQuery({ minWidth: minWidth, maxWidth: maxWidth }),
    isMobile: useMediaQuery({ minWidth: minWidth, maxWidth: maxWidth })
  }
}
