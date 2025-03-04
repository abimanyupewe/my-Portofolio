import React from 'react'
import { CounterSection } from "../components/porps/CounterSection";
import HeroSection from '../components/home/HeroSection'
import SkilsSection from '../components/home/SkilsSection';

const Home = () => {

  const counters = [
    { end: 20, label: "Total Projects" },
    { end: 3, label: "Years Experience" }
  ];

  return (
    <div>
      <HeroSection/>
      <CounterSection counters={counters}/>
      <SkilsSection/>
    </div>
  )
}

export default Home
