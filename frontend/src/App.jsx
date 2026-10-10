import { useState } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Pages/Navbar'

function App() {

  return (
    <>
      <Navbar />
      
      <main>
        <Home />
        <About />
      </main>

    </>
  )
}

export default App
