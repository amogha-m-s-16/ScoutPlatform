import React from 'react'
import HomeSection from '../Components/HomeSection'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='md:flex overflow-x-hidden min-h-[100vh]'>
      <Navbar />
      <HomeSection />
    </div>
  )
}

export default Home