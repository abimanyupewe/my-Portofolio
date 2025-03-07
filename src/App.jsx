import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Contact from './pages/Contact'

const App = () => {
  // Fungsi untuk handle smooth scroll
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className=' bg-gray-50'>
      <Navbar handleScroll={handleScroll}/>
      <Routes>
        <Route path="/" element={<Home handleScroll={handleScroll} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App