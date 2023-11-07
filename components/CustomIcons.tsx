import { CustomIcons } from '@/types'
import React from 'react'
import Image from 'next/image'

const CustomIcons = ({title, description, icon, alt}:CustomIcons) => {
  return (
    <div className='flex-col flex p-2 text-Prussian-500 hover:bg-Elred-500 hover:text-white justify-center items-center bg-Periwinkle-300 rounded-xl'>
        <div className='sm:w-[100px] sm:h-[100px] w-[100px] h[100px]'>
        <Image src={icon}  alt={alt} width={100} height={100}/>
        </div>
        
        <p className='pt-2 text-[15px]   font-normal'>{title}</p>
        {/* <p className='pt-2 text-[8px] text-center max-w-[66px]'>{description}</p> */}
    </div>
  )
}

export default CustomIcons