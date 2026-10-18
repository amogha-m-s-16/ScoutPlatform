import React from 'react'
import { BsDashLg } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const HomeSection = () => {
  return (
    <div className='h-full p-10 md:p-10 flex flex-col justify-around items-start'>
      <h1 className='text-5xl md:text-8xl font-bold font-instrument text-black text-left p-5 md:px-20 md:py-10'>
        Real Talent. <br />
        <span className='text-red-500 italic '>Bigger</span> Dreams.
      </h1>

      <p className='text-[15px] md:text-[18px] w-full max-w-2xl tracking-wide font-google-sans text-black text-left p-5 md:px-20'>
        Connecting young athletes from rural areas with scouts, coaches and academics <BsDashLg className='inline-block'/> for a bright future in sports.
      </p>

      <div className='flex items-center gap-10 md:gap-20 p-5 md:px-20 text-[15px] md:text-[17px] font-google-sans'>
        <button className='flex text-white px-4 py-2 md:px-5  md:py-3 rounded-3xl bg-red-500 cursor-pointer hover:shadow-md duration-300 ease-in-out'>
          Explore Talents <BsArrowRight className='hover:translate-x-1 duration-300 ml-2 mt-1'/>
        </button>

        <button className='text-black border-2 border-[#f9f9f9] px-4 py-2 md:px-5 md:py-3 rounded-3xl hover:-translate-y-1 hover:shadow-md duration-300 cursor-pointer'>
          Learn More
        </button>
      </div>

    </div>
  )
}

export default HomeSection