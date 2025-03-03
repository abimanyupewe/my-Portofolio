import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/home/HeroSection'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-black'>
      <Navbar />
      <HeroSection/>
    </div>
  )
}

export default App
