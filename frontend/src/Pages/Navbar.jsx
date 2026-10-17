import React, { useState, useEffect } from 'react'
import { CgMenuLeft } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div className='sticky top-0 left-0 z-50'>

      
      <div className={`hidden font-jet-mono text-black md:flex md:justify-between md:items-center px-6 py-3 transition-all duration-300 ${navClass}`}>
        <img src="" alt="" />

        <ul className='flex gap-x-5'>
          <li className='p-2 text-[16px] text-[#5a5b5c] hover:text-black duration-300 ease-in'><a href="">Home</a></li>
          <li className='p-2 text-[16px] text-[#5a5b5c] hover:text-black duration-300 ease-in'><a href="">Talents</a></li>
          <li className='p-2 text-[16px] text-[#5a5b5c] hover:text-black duration-300 ease-in'><a href="">Opportunities</a></li>
        </ul>

        <button className='bg-[#d93636] text-white px-4 py-2 rounded-full hover:-translate-y-1 hover:shadow-md transition duration-300 cursor-pointer'>
          Sign In
        </button>
      </div>

      
      <div className={`flex justify-between items-center px-6 py-4 md:hidden text-black transition-all duration-300 ${navClass}`}>
        <img src="" alt="" />

        <button onClick={() => setMenuOpen(prev => !prev)} aria-label="Toggle menu" className='text-3xl transition-transform duration-300'>
          <span className={`block transition-all duration-300 ${menuOpen ? 'rotate-90 opacity-0 absolute' : 'rotate-0 opacity-100'}`}>
            <CgMenuLeft />
          </span>
          <span className={`block transition-all duration-300 ${menuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0 absolute'}`}>
            <IoClose />
          </span>
        </button>
      </div>

      
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'} ${scrolled ? 'bg-white/60 backdrop-blur-md' : 'bg-white'}`}>
        
        <ul className='flex flex-col font-jet-mono text-black px-6 py-4 gap-y-1 border-t border-[#f0f0f0]'>
          <li className='py-3 px-2 text-[16px] text-[#5a5b5c] hover:text-black border-b border-[#f0f0f0] transition-colors duration-200'>
            <a href="">Home</a>
          </li>

          <li className='py-3 px-2 text-[16px] text-[#5a5b5c] hover:text-black border-b border-[#f0f0f0] transition-colors duration-200'>
            <a href="">Talents</a>
          </li>

          <li className='py-3 px-2 text-[16px] text-[#5a5b5c] hover:text-black border-b border-[#f0f0f0] transition-colors duration-200'>
            <a href="">Opportunities</a>
          </li>

          <li className='pt-4'>
            <button className='w-full bg-[#d93636] text-white px-4 py-2 rounded-full hover:shadow-md transition duration-300'>
              Sign In
            </button>
          </li>
        </ul>

      </div>

    </div>
  )
}

export default Navbar