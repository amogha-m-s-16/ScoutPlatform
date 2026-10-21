import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUpRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div 
      className='relative min-h-[55vh] px-5 py-10 lg:py-20 lg:px-20 md:py-15 flex flex-col justify-center bg-no-repeat bg-cover bg-[center_top] sm:bg-[60%_center] md:bg-center'
      style={{ backgroundImage: "url('/contact.png')" }}
    >

      <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 pointer-events-none' />

      <div className='relative z-10'>
        <h1 className='px-5 lg:px-10 text-3xl md:text-4xl lg:text-5xl font-instrument text-white font-medium tracking-normal'>
          Every Great Athlete <br/>
          needs someone to believe in them.
        </h1>

        <p className='px-5 lg:px-10 py-5 lg:py-7 text-white/80 font-google-sans'>
          Be the reason a player, reach the next level.
        </p>

        <div className='px-5 lg:px-10'>
          <Link 
            to="/signin"
            className='inline-flex items-center px-5 py-2.5 bg-red-600 text-white border-2 border-red-600 rounded-full hover:bg-red-700 hover:-translate-y-0.5 duration-300 ease-in-out cursor-pointer font-google-sans text-sm'
          >
            <span>Join the Movement</span>
            <BsArrowUpRight className='ml-2 text-sm'/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
