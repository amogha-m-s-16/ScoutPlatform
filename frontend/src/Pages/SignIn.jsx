import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiUser, FiLock } from 'react-icons/fi'
import { LiaCampgroundSolid } from "react-icons/lia";
import { PiPersonThin } from "react-icons/pi";

const SignIn = () => {
  return (
    <div className='min-h-screen bg-[#F7F7F5] md:py-15 md:px-10'>
      
      
        <Link to = '/'>
          <div className='flex p-3 text-[#5a5b5c] cursor-pointer'>
            <FiArrowLeft className='mt-0.5 mr-2'/> <span className='font-jet-mono text-[14px] '>Back to Home</span>
          </div>
        </Link>
      

      <div className='flex'>
        <div className='flex flex-col gap-10 justify-end max-w-11/30 w-full bg-cover min-h-[80vh] border-2 border-black/10 shadow-md rounded-xl' style ={{background: "url('./signin.png')"}}>
        
          <h1 className='text-6xl text-[#f9f9f9] font-instrument font-bold tracking-wider p-7'>
            Your Talent <br />
            Our Platform <br />
            A Brigther Future
          </h1>
        </div>

        <div className='max-w-2/3 w-full text-center items-center'>
          <h1 className='font-google-sans text-4xl md:text-5xl font-medium'>
            Create Your Account
          </h1>

          <p className='font-poppins py-5 text-[14px] lg:text-[17px] text-[#5a5b5c]'>
            Join as an athlete, scout or coach.
          </p>

          <div className='p-5 flex gap-10 justify-center font-jet-mono text-[16px]'>
            <button className='flex px-5 py-2 border-2 border-black/30 rounded-full cursor-pointer'>
              <PiPersonThin className='mt-1 mr-2'/> Athlete
            </button>

            <button className='flex px-5 py-2 border-2 border-black/30 rounded-full cursor-pointer'>
              <LiaCampgroundSolid className='mr-2 mt-1'/> Scout/Coach
            </button>
          </div>

          <div>
            <form>
            </form>          

          </div>

        </div>
      </div>
      
    </div>
  )
}

export default SignIn