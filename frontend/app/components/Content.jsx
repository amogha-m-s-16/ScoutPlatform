import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
})

const Content = () => {
  return (
    <div className={`${jakarta.className} flex flex-col justify-center overflow-x-hidden px-10 py-20 lg:px-50 lg:py-40 `}>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
            Talent is everywhere. <br /> Discovery shouldn't be a barrier.
        </h1>

        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold pt-10 text-neutral-400 max-w-[850px]'>
            Every village has an athlete. Countless dreams waiting to be noticed,  yet somehow never reaching the right scouts.
        </h1>
    </div>
  )
}

export default Content