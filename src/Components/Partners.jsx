import React from 'react'

const imgs = [
    'brave',
    'circle',
    'discord',
    'google',
    'jump',
    'lollapalooza',
    'magiceden',
    'meta',
    'stepn',
    'stripe',
]

export default function Partners() {
  return (
    <div className='mt-24 bg-gray-50 w-full relative'>
        <img src='/partners/partnersF1.png' className='absolute hidden md:block white-filter top-10 right-10 h-48'/>
        <img src='/partners/partnersF2.png' className='absolute hidden md:block white-filter bottom-10 left-10 h-52' />
        <div className='max-w-4xl w-full mx-auto py-10'>
            <div className='text-center text-2xl mb-20 font-north text-gray-700 hover:text-black transition-colors duration-300'>
                Our Partners
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-16 mb-10 mx-4 md:mx-0'>
                {
                    imgs.map(imgPath => (
                        <img src={`/partners/${imgPath}.svg`} className='brightness-75 hover:brightness-50'/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
