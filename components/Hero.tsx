"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'


function Hero() {
  const handleScroll = () => {}

  return (
    <div className='bg-slate-400 flex flex-col '>
    <div className='flex flex-row pt-12 padding-x'>
      <h1>
        BookerPlanner
      </h1>
      <p>
        Your Time, Our Design.
        Simplify, Schedule, Soar.
      </p>
      <CustomButton
        title="Get Started"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
      />
    </div>
    <div className='bg-white w-[200px] h-[400px]'>
      {/* Place the image here, and you can adjust its alignment as needed */}
      <Image src="/hero.png" alt='hero' fill className='bg-black object-contain'/>
    </div>
  </div>
  
  )
}

export default Hero