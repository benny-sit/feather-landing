import { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css'
import HeroBanner from './Components/HeroBanner';
import Info from './Components/Info';
import Info2 from './Components/Info2';
import Join from './Components/Join';
import NavBar from './Components/NavBar';
import Partners from './Components/Partners';
import Stats from './Components/Stats';
import Footer from './Footer';

function App() {


  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', 'wireframe');
  }, []);

  return (
    <ParallaxProvider>
      <div className="flex flex-col items-center">
        <div className=' flex flex-col items-center h-screen w-full'>
          <NavBar/>
          <HeroBanner />
        </div>
        <Info />
        <Info2 />
        <Stats />
        <Partners />
        <Join />
        {/* <div className='h-screen' /> */}
      </div>
      <Footer />
    </ParallaxProvider>
  )
}

export default App
