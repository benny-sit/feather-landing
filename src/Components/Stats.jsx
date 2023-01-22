import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import statsF1 from '../../public/images/stats/statsF1.png'
import statsF2 from '../../public/images/stats/statsF2.png'

export default function Stats() {
  return (
    <section className='flex flex-col w-full max-w-4xl relative px-2 '>
        {/* Absolute Elements */}
        <Parallax rotate={[-25, 10, 'easeOut']} opacity={[0.3, 0.1]} className='absolute inset-0 -z-10 hidden lg:block'>
            <img src={statsF1} className='object-contain ml-auto h-40 ' alt='feather1'/>
        </Parallax>
        <div className='flex flex-col w-full max-w-4xl mt-24 gap-12 relative '>
        <div className='absolute h-full w-2/5 ml-2 -z-10 rounded-full box-shadow-gray-xs overflow-hidden opacity-70'>
            <div className='bg-texture absolute inset-0 overflow-hidden' />
            <Parallax rotate={[30, -30, 'easeOut']} translateY={[-20,0]} opacity={[1, 0.6]} className='absolute inset-0 overflow-hidden' rootMargin={{left: 0, right: 0, bottom: -500, top: 0}}>
                    <img src={statsF2} className='object-contain h-24 w-24 absolute bottom-8 left-8' alt='feather2'/>
            </Parallax>
        </div>

        {/* Flex Box */}
        <div className='bg-gray-50 p-2 text-lg  w-2/3 border-l-2 text-gray-500 hover:text-gray-800 hover:border-gray-300 transition-all duration-300 hover:bg-gray-100/90 group'>
            <span className='text-3xl font-north text-gray-800 group-hover:text-black'>13M</span>$ investments in total
        </div>
        <div className='bg-gray-50 p-2 text-lg self-end w-1/2 text-end border-r-2 text-gray-600 hover:text-gray-800 hover:border-gray-300 transition-all duration-300 hover:bg-gray-100/90 group'>
            <span className='text-3xl font-north text-gray-800 group-hover:text-black'>1M</span> people trust in <span className='font-north text-gray-900 group-hover:text-black'>FEATHER</span>
        </div>
        <div className='bg-gray-50 px-2 pt-2 pb-1 text-lg self-center w-1/2  text-center border-b-2 text-gray-500 hover:text-gray-800 hover:border-gray-300 transition-all duration-300 hover:bg-gray-100/90 group'>
            <span className='text-3xl font-north text-gray-800 group-hover:text-black'>2M</span>$ Revenue in 2022 Q4
        </div>
        </div>
    </section>
  )
}
