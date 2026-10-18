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
    <div className='min-h-screen bg-[#F7F7F5]'>
      <AboutSection />

      <div className=''>
{/*{Info.map((item) => ())}*/}
      </div>
    </div>
  
  )
}

export default About