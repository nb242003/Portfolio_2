import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tech from './components/Tech'
import Exp from './components/Exp'
import Contact from './components/Contact'
import Projects from './components/Projects'
const App = () => {
  return (
    <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
  <div className="absolute top-0 left-0 w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-10"></div>
  <div className="container mx-auto px-8">
    <Navbar />
    <Hero />
    <About />
    <Tech />
    <Exp />
    <Projects />
    <Contact />
  </div>
</div>

  )
}

export default App