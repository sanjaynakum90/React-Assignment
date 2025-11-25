import React from 'react'
import Navbar from "./Components/Navbar"
import HeroSlider from './Components/HeroSlider'
import About from './Components/About'
import Vision from "./Components/Vision"
import Gallery from './Components/Gallery'
import Process from './Components/Process'
import Services from "./Components/Services"
import Project from './Components/Project'
import NewsLater from "./Components/NewsLatter"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSlider />
        <About/>
        <Vision/>
        <Gallery/>
        <Process/>
        <Services/>
        <Project/>
        <NewsLater/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App