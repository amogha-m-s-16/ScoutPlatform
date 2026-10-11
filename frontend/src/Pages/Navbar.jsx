import React, { useState, useEffect } from 'react'
import { CgMenuLeft } from "react-icons/cg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = scrolled
    ? 'bg-white/60 backdrop-blur-md border-b border-white/30 shadow-sm'
    : 'bg-white border-b-2 border-[#f5f5f5]';

  return (
    <div className='sticky top-0 left-0 z-50 transition-all duration-300'>

      
      <div className={`hidden font-jet-mono text-black md:flex md:justify-between md:items-center px-6 py-3 transition-all duration-300 ${navClass}`}>
        <img src="" alt="" />

        <ul className='flex gap-x-5'>
          <li className='p-2 text-[16px] text-[#5a5b5c] hover:text-white duration-300 ease-in'><a href="">Home</a></li>
          <li className='p-2 text-[16px] text-[#5a5b5c] hover:text-white duration-300 ease-in'><a href="">Talents</a></li>
          <li className='p-2 text-[16px] text-[#5a5b5c] hover:text-white duration-300 ease-in'><a href="">Opportunities</a></li>
        </ul>

        <button className='bg-[#f5f5f5] px-4 py-2 rounded-full hover:translate-y-1 transition duration-300'>
          Sign In
        </button>
      </div>

      
      <div className={`flex justify-between items-center px-6 py-4 md:hidden text-black transition-all duration-300 ${navClass}`}>
        <img src="" alt="" />
        <CgMenuLeft className='text-3xl' />
      </div>

    </div>
  )
}

export default Navbar