'use client'

import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Link from 'next/link'
import { IoMdArrowForward } from "react-icons/io";
import Image from 'next/image'
import { motion } from 'framer-motion'
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
})

const Home = () => {
  return (
    <div className={`${jakarta.className} overflow-x-hidden flex flex-col items-center pt-25 px-10 lg:pt-25 lg:px-40`}>
      <h1 className='text-4xl md:text-6xl lg:text-7xl text-center lg:leading-17 font-bold'>
           Where rural talent <br /> gets discovered and <br />  goes further.
      </h1>

      <p className='text-center text-neutral-600 text-[15px] md:text-[17px] pt-7 lg:pt-10 lg:text-[19px]'>
        A platform connecting promising athletes <br /> from rural communities with scouts, coaches and opportunities.
      </p>

      <div className='flex gap-3 pt-7 lg:gap-5 lg:pt-15'>

        <button className='font-medium text-white bg-black rounded-full px-4 py-2 cursor-pointer hover:bg-black/85 duration-200'>
          <Link href="">Explore athletes</Link>
        </button>

        <button className='bg-neutral-200 font-medium px-4 py-2 hover:bg-neutral-300 rounded-full cursor-pointer duration-300'>
          <Link href="" className='flex items-center'>See more <IoMdArrowForward className='ml-1 mt-0.1'/> </Link>
        </button>

      </div>

      <motion.div className='mt-15'>
        <Image
          src="/hero-image.png"
          width={1200}
          height={200} 
          className='p-7'
          alt='hero-img'
        />
      </motion.div>


    </div>
  )
}

export default Home