import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import info2f from '../../public/images/info2/info2f.png'
import info2s from '../../public/images/info2/info2s.png'

export default function Info2() {
  return (
    <section className=' mt-20 bg-gray-50 w-full'>
        <div className='max-w-4xl w-full mx-auto py-10 flex flex-col md:flex-row justify-evenly items-center gap-7'>
            <div className="basis-1/2 card border-l-4 border-gray-200" >
              <div className='card-body'>
                <div className='card-title text-2xl text-gray-900 mb-8'>
                  <span className='font-north text-black'>FEATHER</span> For You
                </div>
                <p className='text-md'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit libero porro suscipit repellendus voluptatibus laudantium maxime quidem accusamus minima ipsa. Harum ipsam ea eius accusamus in blanditiis enim commodi repellat mollitia nisi odit unde sed asperiores ab earum, inventore quibusdam iusto obcaecati reiciendis. Porro fuga quibusdam aliquam rem accusamus omnis?
                </p>
              </div>
            </div>
            <div className='basis-1/2 relative overflow-hidden md:mx-0 mx-auto w-1/2'>
              <Parallax rotate={[-5, 3]} rootMargin={{ top: 0, right: 0, bottom: -500, left: 0 }}>
                  <img src={info2f} className='opacity-90'/>
              </Parallax>
              <Parallax opacity={[0.2, 0.8]}  translateY={[20, -5]} rootMargin={{ top: 0, right: 0, bottom: -500, left: 0 }}>
                  <img src={info2s}/>
              </Parallax>
            </div>
        </div>
    </section>
  )
}
