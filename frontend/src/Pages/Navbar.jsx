import React from 'react'
import { CgMenuLeft } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='hidden lg:display fixed top-0 left-0 p-10 md:h-[100vh] md:w-[300px] justify-center items-center bg-black md:flex flex-col text-white font-poppins font-medium'>
      <button className='display lg:hidden '>
        <CgMenuLeft className='text-[20px]'/>
      </button>

      <img src="" alt="" className='w-[20px] h-[20px]'/>

      <ul className='text-[18px] mt-10'>
        <li className='py-5 px-5'><a href="/">Home</a></li>
        <li className='py-5 px-5'><a href="/">hhhhh</a></li>
        <li className='py-5 px-5'><a href="/">aa</a></li>
      </ul>

      <button className='text-[18px] py-3 px-7 border-2 border-[#5a5b5c] rounded-full mt-10 cursor-pointer hover:bg-white hover:text-black hover:border-black duration-500 ease-in'>
        Sign In
      </button>
    </div>
  )
}

export default Navbar