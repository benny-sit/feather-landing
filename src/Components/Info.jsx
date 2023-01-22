import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import feather1 from '../../public/images/info/feather1.png'
import feather3 from '../../public/images/info/feather3.png'
import feather2 from '../../public/images/info/feather2.png'

export default function Info() {
  return (
    <section className='max-w-4xl w-full flex flex-col-reverse md:flex-row justify-evenly items-center mt-20 gap-7'>
        <div className="border-gray-200 rounded-xl border-2  p-8 self-stretch basis-1/2 relative w-3/4 mx-auto md:mx-0">
            <div className='absolute inset-0 bg-texture overflow-hidden -translate-x-1'/>
            <Parallax rotate={[-10,7]} translateX={[5,-2]} className='flex justify-end mb-3'>
                <img className='w-1/3 opacity-70' src={feather1} alt="fether1" />
            </Parallax>
            <Parallax rotate={[-8, 11]} translateX={[-4, 2]}  className='flex justify-start mb-7'>
                <img className='w-1/2 opacity-80' src={feather2} alt="fether2" />
            </Parallax>
            <Parallax rotate={[10, -6]} translateX={[3,-1]} className='flex justify-center mb-7'>
            <img className='w-3/4 opacity-90' src={feather3} alt="fether3" />
            </Parallax>
        </div>
        <div className="card basis-1/2 bg-base-200/25 shadow-xl">
            <div className='card-body'>
                <div className='card-title text-2xl md:text-3xl mb-4 text-gray-900'>
                    The Future is <span className='font-north text-black'>FEATHER</span>
                </div>
                <p className='text-lg text-gray-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem soluta facilis, debitis quasi nisi distinctio et totam accusantium nam voluptatibus voluptatem dolore vel asperiores, libero optio consectetur, sapiente aliquam! Sit deserunt recusandae exercitationem ab consequuntur ex doloremque eos tenetur nobis.
                </p>
            </div>
        </div>
    </section>
  )
}
