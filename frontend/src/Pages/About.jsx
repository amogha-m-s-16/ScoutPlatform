import React from 'react'
import AboutSection from '../Components/AboutSection';
import { PiCashRegisterLight } from "react-icons/pi";
import { RiTargetFill } from "react-icons/ri";
import { TbConnection } from "react-icons/tb";
import { GrGrow } from "react-icons/gr";
import { motion } from "framer-motion";

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
    <div className='min-h-screen overflow-x-hidden bg-[#F7F7F5]'>
      <AboutSection />
      <div >
      <motion.div
        className='bg-black border-t-2 p-5 md:px-13 lg:px-20 md:py-10'
      >
        <h1 className='text-white text-3xl md:text-4xl lg:text-5xl text-center font-instrument font-normal tracking-tight py-5'>
          How it 
          <span className='text-red-600 italic'>  Works?</span>
        </h1>
        <p className='text-white/70 font-google-sans px-3 py-3 md:py-5 text-center md:text-[17px]'>
          A simple process to help talent get noticed.
        </p>
        
        <div className='md:flex md:flex-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 px-10 py-5'>
        {Info.map((item) => (
          <div key={item.ind} className='flex flex-col justify-between max-w-3xl md:max-w-4xl w-full bg-white cursor-pointer border-2 border-black/10 rounded-2xl shadow-white/30 shadow-md px-5 py-3'>
            <div className='flex py-5'>
              <span className='p-3 text-[16px] md:text-[18px] lg:text-[20px] text-red-500 border-2 border-black/10 rounded-4xl'>
                {item.logo}
              </span>

              <h1 className='p-3 text-[16px] md:text-[18px] lg:text-[20px] font-instrument italic font-bold tracking-xs'>
                {item.ind}
              </h1>

            </div>

            <h1 className='text-red-600 py-3 font-jet-mono font-bold'>
              {item.heading}
            </h1>

            <p className='py-3 font-google-sans '>
              {item.para}
            </p>
          </div>

        ))}

        </div>

      </motion.div>
      </div>
    </div>
  
  )
}

export default About