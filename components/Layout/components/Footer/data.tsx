import FacebookSvg from '@public/icons/social/facebook.svg'
import InstagramSvg from '@public/icons/social/instagram.svg'
import TwitterSvg from '@public/icons/social/twitter.svg'
import YouTubeSvg from '@public/icons/social/you-tube.svg'

export const links = [
  {
    title: 'Shop by Category',
    children: ['Skincare', 'Personal Care', 'Handbags', 'Apparels', 'Watches', 'Eye Wear', 'Jewellery']
  },
  {
    title: 'About',
    children: ['Contact Us', 'About Us', 'Careers', 'Press']
  },
  {
    title: 'Policy',
    children: ['Return Policy', 'Terms of Use', 'Sitemap', 'Security', 'Privacy', 'EPR Compliance']
  }
]

export const socialIcons = [
  { path: 'https://www.facebook.com/', icon: <FacebookSvg /> },
  { path: 'https://www.instagram.com/', icon: <InstagramSvg /> },
  { path: 'https://twitter.com/', icon: <TwitterSvg /> },
  { path: 'https://www.youtube.com/', icon: <YouTubeSvg /> }
]
