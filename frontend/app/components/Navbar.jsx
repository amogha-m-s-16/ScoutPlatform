import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Link from 'next/link'

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
})

const Navbar = () => {
  return (
    <div className={`${jakarta.className} hidden lg:display font-semibold lg:flex lg:justify-between items-center px-20 py-7`}>
      <h1>Talent Scout</h1>

      <ul className='flex gap-10'>
        <Link href="" className='hover:text-neutral-500 duration-200'>Home</Link> 
        <Link href="" className='hover:text-neutral-500 duration-200'>About</Link> 
        <Link href="" className='hover:text-neutral-500 duration-200'>Talent</Link> 
      </ul>

      <div className='flex gap-10'>
        <button className='cursor-pointer px-5 py-2'><Link href=""> Log in </Link></button>
        <button className='cursor-pointer bg-black text-white rounded-full px-4 py-2 hover:bg-black/90'><Link href=""> Get Started </Link></button>
      </div>
    </div>

  )
}

export default Navbar