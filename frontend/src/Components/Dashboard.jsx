import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className='px-5 md:px-10 py-10 lg:py-15'>
        <div className='p-5'>
            <h1 className='font-google-sans font-bold text-2xl lg:text-4xl pb-3'>Discover Young Talent</h1>
            <p className='font-jet-mono font-normal text-neutral-600 text-[15px] md:text-[17px]'>Find promising talents from across rural India. Filter by sport, location, age and more.</p>
        </div>

        <div className='px-5 relative py-3'>
            <input 
                type='text'
                placeholder='Search by name, sport, or location...'
                className='w-fit px-10 py-1.5 bg-white rounded-full shadow-md focus:border-white focus:ring-1 focus:ring-red-500/20 outline-none font-jet-mono text-[12px] border-2 border-neutral-100'/>
                <IoSearchOutline className='absolute left-7.5 top-5.5 text-neutral-800 text-sm font-bold'/>

        </div>

    </div>
  )
}

export default Dashboard