import React from 'react'
import { CgMenuLeft } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='sticky top-0 left-0 z-50'>

      <div className='hidden font-jet-mono text-black md:flex md:justify-between md:items-center px-4 py-5 md:px-6 py-3 border-b-2 border-[#f5f5f5]'>
        <img src="" alt="" />

        <ul className='flex gap-x-5'>
          <li className='p-2 text-[16px]'><a href=""></a>Home</li>
          <li className='p-2 text-[16px]'><a href=""></a>Talents</li>
          <li className='p-2 text-[16px]'><a href=""></a>Opportunities</li>
        </ul>

        
        <button className='bg-[#f5f5f5] px-4 py-2 rounded-full hover:translate-y-1 transition duration-300'>
          Sign In 
        </button>
      </div>

      <div className='flex justify-between items-center px-6 py-4 md:hidden text-black border-b-2 border-[#f5f5f5]'>
        <img src="" alt="" />


        <CgMenuLeft className='text-3xl' />

      </div>
      
    </div>
  )
}

export default Navbar