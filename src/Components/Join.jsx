import React from 'react'
import { Parallax } from 'react-scroll-parallax'

export default function Join() {
  return (
    <div className='flex flex-col items-center pt-20 w-full max-w-4xl overflow-hidden'>
        <div className='text-2xl text-gray-800 text-center'>
            Join <span className='font-north text-gray-900'>FEATHER</span> Today
        </div>
        <div className='py-48 w-full flex justify-center items-center relative group'>
          <Parallax speed={-15} className='absolute'>
          <img src='/join/joinF1.png' alt='feather1' className=' opacity-20 group-hover:opacity-30 transition-all duration-300'/>

          </Parallax>
          <button className='btn font-north relative text-gray-600 hover:text-black shadow-2xl hover:shadow-xl transition-all duration-500'>Join Now</button>
        </div>
    </div>
  )
}
