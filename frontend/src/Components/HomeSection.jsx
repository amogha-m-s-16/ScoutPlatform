import React from 'react'
import { BsDashLg, BsArrowRight } from "react-icons/bs";

const HomeSection = () => {
  return (
    <div 
      className='relative min-h-[calc(100vh-70px)] w-full flex flex-col justify-center items-start px-6 md:px-14 lg:px-20 bg-cover bg-center bg-no-repeat opacity-70'
      style={{ backgroundImage: "url('/home.png')" }}
    >


      <div className='relative z-10 max-w-2xl flex flex-col items-start'>
      <h1 className='text-5xl md:text-8xl font-bold font-instrument text-white/60 text-left p-5 md:px-13 lg:px-20 md:py-10'>
        Real Talent. <br />
        <span className='text-red-600 italic '>Bigger</span> Dreams.
      </h1>

      <p className='text-[15px] md:text-[18px] w-full max-w-2xl tracking-wide font-google-sans text-white shadow-md text-left p-5 md:px-13 lg:px-20'>
        Connecting young athletes from rural areas with scouts, coaches and academics <BsDashLg className='inline-block'/> for a bright future in sports.
      </p>

      <div className='flex items-center gap-5 md:gap-15 lg:gap-20 p-5 md:px-13 lg:px-20 text-[13px] md:text-[17px] font-google-sans'>
        <button className='flex text-white px-4 py-2 md:px-5  md:py-3 rounded-3xl bg-red-600 cursor-pointer hover:scale-95 hover:shadow-md duration-300 ease-in-out'>
          Explore Talents <BsArrowRight className='hover:rotate-90 duration-300 ml-2 mt-1'/>
        </button>

        <button className='text-[#f9f9f9] border-2 border-[#f9f9f9] px-4 py-2 md:px-5 md:py-3 rounded-3xl hover:-translate-y-1 hover:shadow-md duration-300 cursor-pointer'>
          Learn More
        </button>
        </div>

      </div>

    </div>
  )
}

export default HomeSection