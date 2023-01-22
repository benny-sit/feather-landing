import React from 'react'

import brave from '../../public/images/partners/brave.svg'
import circle from '../../public/images/partners/circle.svg'
import discord from '../../public/images/partners/discord.svg'
import google from '../../public/images/partners/google.svg'
import jump from '../../public/images/partners/jump.svg'
import lollapalooza from '../../public/images/partners/lollapalooza.svg'
import magiceden from '../../public/images/partners/magiceden.svg'
import meta from '../../public/images/partners/meta.svg'
import stepn from '../../public/images/partners/stepn.svg'
import stripe from '../../public/images/partners/stripe.svg'

import partnersF1 from '../../public/images/partners/partnersF1.png'
import partnersF2 from '../../public/images/partners/partnersF2.png'


const imgs = [
    brave,
    circle,
    discord,
    google,
    jump,
    lollapalooza,
    magiceden,
    meta,
    stepn,
    stripe,
]

export default function Partners() {
  return (
    <div className='mt-24 bg-gray-50 w-full relative'>
        <img src={partnersF1} className='absolute hidden md:block white-filter top-10 right-10 h-48'/>
        <img src={partnersF2} className='absolute hidden md:block white-filter bottom-10 left-10 h-52' />
        <div className='max-w-4xl w-full mx-auto py-10'>
            <div className='text-center text-2xl mb-20 font-north text-gray-700 hover:text-black transition-colors duration-300'>
                Our Partners
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-16 mb-10 mx-4 md:mx-0'>
                {
                    imgs.map(imgPath => (
                        <img src={imgPath} className='brightness-75 hover:brightness-50'/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
