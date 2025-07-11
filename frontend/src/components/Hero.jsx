import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className= 'flex flex-col sm:flex-row border border-gray-400'>
      {/*Hero Left side*/}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
      <div className='text-center'>
        <div className='flex items-center gap-2'>
          <p className='w-9 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
        </div>
        <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
        <div className='flex items-center gap-2'>
          <p className='font-semibold text-sm md:text-base'>Shop Now</p>
          <p className='w-9 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>   
      </div>
      </div>
      {/*Hero Right side*/}
      <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
    </div>
  )
}

export default Hero