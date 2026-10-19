import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { CgMenuLeft } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

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
    ? 'bg-white/80 backdrop-blur-md border-b border-black/10 shadow-sm'
    : 'bg-white/40 backdrop-blur-xs border-b-2 border-[#f5f5f5]';

  const linkClass = ({ isActive }) =>
    `p-2 text-[16px] duration-300 ease-in transition-colors ${
      isActive ? 'text-black font-semibold' : 'text-[#5a5b5c] hover:text-black'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `py-3 px-2 text-[16px] border-b border-[#f0f0f0] transition-colors duration-200 block ${
      isActive ? 'text-black font-semibold' : 'text-[#5a5b5c] hover:text-black'
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className='sticky top-0 left-0 z-50'>

      {/* Desktop Navbar */}
      <div className={`hidden font-poppins text-black md:flex md:justify-between md:items-center px-6 py-3 transition-all duration-300 ${navClass}`}>
        <Link to="/" className=''>
          
        </Link>

        <ul className='flex gap-x-5'>
          <li>
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/talents" className={linkClass}>
              Talents
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </li>
        </ul>

        <Link
          to="/login"
          className='flex items-center bg-red-600 text-white px-5 py-2 rounded-full hover:-translate-y-0.5 hover:shadow-md transition duration-300 cursor-pointer font-google-sans text-sm'
        >
          <span>Sign In</span>
          <FiUser className='ml-2 text-base' />
        </Link>
      </div>

      
      <div className={`flex justify-between items-center px-6 py-4 md:hidden text-black transition-all duration-300 ${navClass}`}>
        <Link to="/" onClick={closeMenu} className=''>
          
        </Link>

        <button 
          onClick={() => setMenuOpen(prev => !prev)} 
          aria-label="Toggle menu" 
          className='text-3xl transition-transform duration-300 cursor-pointer'
        >
          <span className={`block transition-all duration-300 ${menuOpen ? 'rotate-90 opacity-0 absolute' : 'rotate-0 opacity-100'}`}>
            <CgMenuLeft />
          </span>
          <span className={`block transition-all duration-300 ${menuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0 absolute'}`}>
            <IoClose />
          </span>
        </button>
      </div>

      
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} ${scrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-white'}`}>
        <ul className='flex flex-col font-poppins text-black px-6 py-4 gap-y-1 border-t border-[#f0f0f0]'>
          <li>
            <NavLink to="/" end onClick={closeMenu} className={mobileLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/talents" onClick={closeMenu} className={mobileLinkClass}>
              Talents
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu} className={mobileLinkClass}>
              About
            </NavLink>
          </li>

          <li className='pt-4'>
            <Link
              to="/login"
              onClick={closeMenu}
              className='flex items-center justify-center w-full bg-red-600 text-white px-4 py-2.5 rounded-full hover:shadow-md transition duration-300 font-google-sans text-sm'
            >
              <span>Sign In</span>
              <FiUser className='ml-2 text-base' />
            </Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar