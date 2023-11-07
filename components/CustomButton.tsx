"use client";
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';


function CustomButton({title, containerStyles}: CustomButtonProps) {
    const handleScroll = () => {}
  return (
<button 
disabled={false}
type={"button"}
className='bg-Elred-500 px-20 py-3 text-Prussian-50 rounded-full'

>
    <span className={`flext-1`}>
        {title}
    </span>

</button>
  )
}

export default CustomButton