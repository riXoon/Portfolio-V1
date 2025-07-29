import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/MyProjects/Projects'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import THMBadge from './components/Badge/THMBadge'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <THMBadge />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App