import { useState } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Pages/Navbar'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
      <Navbar />
      
      <main>
        <Home />
        <About />
        <Contact />
      </main>

    </>
  )
}

export default App
