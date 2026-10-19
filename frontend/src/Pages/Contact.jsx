import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className='min-h-[55vh] px-5 py-10 lg:py-20 lg:px-20 md:py-15 bg-black justify-end bg-right lg:bg-cover bg-fit bg-no-repeat md:bg-right opacity-84 '
    style={{ background: "url('/contact.png')" }}
    >

        <h1 className='px-5 lg:px-10 text-3xl md:text-4xl lg:text-5xl font-instrument text-white font-semibold tracking-wider'>
            Every Great Athlete <br/>
            needs someone to believe in them.
        </h1>

        <p className='px-5 lg:px-10 py-5 lg:py-7 text-white font-google-sans'>
            Be the reason a player, reach the next level.
        </p>

        <div className='px-5 lg:px-10 '>
            <button className='flex px-5 py-2 bg-red-600 text-white border-2 border-red-600 rounded-full hover:-translate-y-0.5 duration-300 ease-in-out cursor-pointer'>
                Join the Movement <BsArrowUpRight className='ml-2 mt-1.5'/>
            </button>
        </div>

    </div>
  )
}

export default Contact