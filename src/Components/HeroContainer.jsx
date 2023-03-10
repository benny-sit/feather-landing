import React from 'react'
import { useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import HeroText from './HeroText'

import feather from '../../public/images/feather.png'

function getImageUrl(name) {
  return new URL(`./dir/${name}.png`, import.meta.url).href
}




export default function HeroContainer() {
    

  return (
    <div className=' max-w-4xl w-full backdrop-blur-xs mx-auto h-full relative'>
        <Parallax scale={[1.1, 0.6]} translateX={[-50, 0]} speed={10} rotate={[-10, 20]}  className='absolute right-0 top-0 lg:top-20  max-h-full'>
            <img className='object-fit max-h-full' src={feather} alt="feather 1" />
        </Parallax>
        <HeroText />
    </div>
  )
}
