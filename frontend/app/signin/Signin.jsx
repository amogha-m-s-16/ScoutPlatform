import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
})

const Signin = () => {
  return (
    <div className={`${jakarta.className} md:flex min-h-screen max-w-full`}>
      <div className='md:max-w-1/2 w-full bg-black min-h-full flex flex-col justify-center p-10'>

        <h1 className='text-white text-center font-semibold text-3xl'>Create your free account</h1>
        <p className='text-neutral-600 text-center text-[16px]'>
          Create your free account to search or get an opportunity to unlock your potential. 
        </p>

      </div>

      <div className='md:max-w-1/2 w-full'>

      </div>
    </div>
  )
}

export default Signin