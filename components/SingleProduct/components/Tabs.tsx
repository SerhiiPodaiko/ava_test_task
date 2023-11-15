'use client'
import { useState } from 'react'
import cn from 'classnames'

const tabsTitle = ['Product Description', 'Related Products', 'Ratings and Reviews']

const content = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique.',
  'Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat.',
  'Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.'
]

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <div className='mt-10 flex flex-col'>
      <ul className='mb-7 py-[6px] px-[5px] md:px-[18px] flex items-center justify-center lg:justify-start gap-5 bg-[#F1F1F1] rounded-[12px]'>
        {tabsTitle.map((tab, i) => (
          <li
            key={i}
            className={cn(
              'py-[6px] px-2 sm:px-[18px] text-[#626262] text-[12px] sm:text-[16px] text-center font-medium leading-[14p] sm:leading-[20px] rounded-[8px] cursor-pointer transition ease-linear',
              i === activeTab && 'bg-[#1B4B66] text-white'
            )}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </li>
        ))}
      </ul>

      <div className='pr-0 sm:pr-[100px]'>
        {content.map((tabContent, i) => (
          <p
            key={i}
            className={cn(
              'text-[#626262] font-medium leading-[20px] rounded-[8px] mb-4',
              i === activeTab && 'border-b-amber-500'
            )}
          >
            {tabContent}
          </p>
        ))}
      </div>
    </div>
  )
}

export default TabbedContent
