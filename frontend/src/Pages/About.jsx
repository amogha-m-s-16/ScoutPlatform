import React from 'react'
import AboutSection from '../Components/AboutSection';
import { PiCashRegisterLight } from "react-icons/pi";
import { RiTargetFill } from "react-icons/ri";
import { TbConnection } from "react-icons/tb";
import { GrGrow } from "react-icons/gr";

const Info = [
  {
    logo : <PiCashRegisterLight />,
    ind : 1,
    heading : "Register",
    para : "Create your profile as an athlete, scout or academy",
  },

  {
    logo: <RiTargetFill />,
    ind : 2,
    heading : "Get Discovered",
    para : "Your profile reaches verified scouts, coaches and academies.",
  },

  {
    logo : <TbConnection />,
    ind : 3,
    heading : "Connect",
    para : "Build relationships and opportunities.",
  },

  {
    logo : <GrGrow />,
    ind : 4,
    heading : "Grow",
    para : "Take the step towards the goal.",
  }
]

const About = () => {
  return (
    <div className='overflow-x-hidden min-h-screen bg-[#F7F7F5]'>
      <AboutSection />

      <div className='p-5 md:px-13 lg:px-20 md:py-10'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl text-center font-instrument font-semibold tracking-wider py-5'>
          How it 
          <span className='text-red-500 italic'>Works?</span>
        </h1>
        {/*{Info.map((item) => ())}*/}
        <div className='md:flex md:flex-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20'>
        {Info.map((item) => (
          <div className='flex flex-col justify-between max-w-3xl w-full'>
            <div className='flex gap-5 md:gap-7 lg:gap-9 py-5'>
              <span className='p-3 text-[16px] md:text-[18px] lg:text-[20px] text-red-500 border-2 border-black/10 shadow-md rounded-full'>
                {item.logo}
              </span>

              <h1 className='p-3 text-[16px] md:text-[18px] lg:text-[20px] font-instrument italic font-bold tracking-xs'>
                {item.ind}
              </h1>

            </div>

            <h1 className='font-poppins font-semibold'>
              {item.heading}
            </h1>

            <p>
              {item.para}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  
  )
}

export default About