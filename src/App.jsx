import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './MyProjects/Projects'
import Testimonial from './components/Testimonial/Testimonial'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Testimonial />
    </>
  )
}

export default App