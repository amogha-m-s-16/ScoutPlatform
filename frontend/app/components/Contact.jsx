import React from 'react'
import Link from 'next/link'
import { IoMdArrowForward } from "react-icons/io";
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
})

const Contact = () => {
  return (
    <div className={`${jakarta.className}  overflow-x-hidden min-h-[55vh] flex flex-col justify-center items-center py-10 lg:py-40 px-10 lg:px-40`}>
        <h1 className='text-2xl md:text-4xl text-center font-bold'>
            Discover hidden talent. <br />
            Create future champions.
        </h1> 

        <p className='text-center text-neutral-400 text-[12px] md:text-[14px] lg:text-[15px] max-w-3xl pt-5 md:pt-7'>
            Rural Scout connects promising athletes from rural communities with scouts, coaches, and opportunities <br /> giving every talented player a chance to be seen, recognized, and take their game further.
        </p>

        <div className='flex gap-3 pt-7 lg:gap-5 lg:pt-15'>
            <Link href="" className='font-medium text-white text-[14px] md:text-[16px] bg-black rounded-full px-4 py-2 cursor-pointer hover:bg-black/85 duration-200'>
                Explore athletes
            </Link>
                       
            <Link href="" className='flex items-center text-[14px] md:text-[16px] bg-neutral-200 font-medium px-4 py-2 hover:bg-neutral-300 rounded-full cursor-pointer duration-300'>
                See more <IoMdArrowForward className='ml-1 mt-0.1'/> 
            </Link>

        </div>
    </div>
  )
}

export default Contact