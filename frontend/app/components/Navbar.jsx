'use client'

import React, { useEffect, useState } from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Link from 'next/link'

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
})

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if(!ticking) {
        window.requestAnimationFrame(() => {
          setScroll(window.scrollY > 10);
          ticking = false;
        });

        ticking = true;
      }
      
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  const scrolled = scroll ? 'bg-white/80 backdrop-blur-xs border-b-2 border-neutral-100' : 'bg-white  border-b-2 border-transparent'
  return (
    <div className={`${jakarta.className} top-0 left-0 sticky z-50 hidden md:display py-5 font-semibold md:flex md:justify-between items-center px-20 ${scrolled}`}>
      <h1>Talent Scout</h1>

      <ul className='flex gap-10'>
        <Link href="/" className='hover:text-neutral-500 duration-200'>Home</Link> 
        <Link href="" className='hover:text-neutral-500 duration-200'>About</Link> 
        <Link href="" className='hover:text-neutral-500 duration-200'>Talent</Link> 
      </ul>

      <div className='flex gap-10'>
        <button className='cursor-pointer px-5 py-2'><Link href="/login"> Log in </Link></button>
        <button className='cursor-pointer bg-black text-white rounded-full px-4 py-2 hover:bg-black/85'><Link href="/signin"> Get Started </Link></button>
      </div>
    </div>

  )
}

export default Navbar