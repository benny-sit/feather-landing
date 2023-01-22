import React, { useState } from 'react'
import { Parallax } from 'react-scroll-parallax';
import { useTyped } from '../assets/hooks/useTyped'

const typingText = [
    'Light',
    'Fast',
    'Thin'
]


export default function HeroText() {
    const {
        textTyped,
        phase,
        resume,
        selectedTypedText
      } = useTyped(typingText);
  return (
    <Parallax speed={-5} scale={[1, 1.2]} translateX={[0,20]} className='absolute top-12 lg:top-auto lg:bottom-16 left-24 flex flex-col gap-4' id="hero-text">
        <div className='text-4xl font-north'>
            FEATHER
        </div>
        <div className='text-xl ml-3' onClick={resume}>
            is <span className={`${phase !== "Deleting" && 'end-cursor'} ${phase === 'Pausing' && 'blinking'}`}>{textTyped}</span> 
        </div>
    </Parallax>
  )
}
