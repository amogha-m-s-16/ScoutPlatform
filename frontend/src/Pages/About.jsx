import React from 'react'
import PlayerCards from '../Components/PlayerCards';
import { GiFire } from "react-icons/gi";

const About = () => {
  return (
    <div className='min-h-screen items-center justify-center'>

      <div className='flex flex-col items-center justify-center gap-4 md:gap-8 px-10 md:px-20'>
        <span className='bg-[#f0f0f0] flex items-center gap-1 text-[#404346] font-libre border-2 border-black/30 rounded-full tracking-xs font-medium text-[12px] md:text-[16px] text-center px-2 mt-20 py-2 md:px-5 md:py-2'>
          <GiFire className='text-orange-500 text-[20px] md:text-[22px]'/> Discover the next generation of excellence
        </span>
      </div>

      <div>
        <h1 className='text-[#5a5b5c] font-instrument text-5xl md:text-7xl  text-center py-10 md:py-10'>
          Raw Talent,
          <span className='text-black font-instrument italic px-1'>Verified Potential</span>
        </h1>
      </div>

      <PlayerCards />
    </div>
  )
}

export default About