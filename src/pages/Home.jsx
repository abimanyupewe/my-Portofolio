import React from 'react'
import { CounterSection } from "../components/props/CounterSection";
import HeroSection from '../components/home/HeroSection'
import SkilsSection from '../components/home/SkilsSection';
import Project from '../components/home/Project';

const Home = () => {

  const counters = [
    { end: 20, label: "Total Projects" },
    { end: 3, label: "Years Experience" }
  ];

  return (
    <div>
      <HeroSection />
      <CounterSection counters={counters} />
      <SkilsSection />
      <Project />
    </div>
  )
}

export default Home
