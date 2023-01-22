import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import HeroContainer from './HeroContainer';

export default function HeroBanner() {
    
    const background = {
        translateY: [0, 50],
        opacity: [1, 0.3],
        scale: [1.05, 1, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <div className='absolute inset-0 bg-texture overflow-hidden'/>
        )
      };
    
      const container = {
        // translateY: [0, 30],
        // scale: [1, 1.05, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
          <HeroContainer/>
        ),
      };
    
    
      const gradientOverlay = {
        opacity: [0, 0.5],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-700" />
        ),
      };
    
      return (
        <ParallaxBanner
          layers={[background, container, gradientOverlay]}
          className="grow h-screen box-shadow-gray-sm z-0"
        />
      );
}
