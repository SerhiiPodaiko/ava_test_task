import { links, socialIcons } from './data'
import LocationSvg from '@public/icons/location.svg'

const Footer = () => {
  return (
    <footer className='py-10 px-5 md:pt-10 md:pb-[100px] md:px-[50px] flex lg:justify-between lg:flex-row flex-col bg-[#1B4B66]'>
      <div className='md:grid md:grid-cols-3 grid grid-cols-2 md:gap-10'>
        {links.map(category => (
          <div key={category.title} className='flex flex-col gap-2'>
            <h3 className='mt-3 sm:mt-0 font-medium leading-[22px] text-white'>{category.title}</h3>
            <div className='flex flex-col gap-3'>
              {category.children.map(link => (
                <a
                  key={link}
                  href={`#${link}`}
                  className='font-medium leading-[22px] text-[#B6B6B6] hover:text-white transition ease-in'
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col mt-10 lg:mt-0'>
        <div className='flex items-center gap-3'>
          {socialIcons.map(icon => (
            <a
              key={icon.path}
              href={icon.path}
              target='_blank'
              className='flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#639599] hover:scale-[1.1]'
            >
              {icon.icon}
            </a>
          ))}
        </div>
        <p className='mt-5 lg:mt-10 flex items-center gap-3 text-[14px] text-white leading-[18px] font-medium'>
          <LocationSvg /> United States
        </p>
        <p className='mt-2 text-[14px] text-[#B6B6B6] leading-[18px] font-medium'>
          © 2021 | Cora Leviene All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
