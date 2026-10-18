import React from 'react'

const AboutSection = () => {
  return (
    <div className='flex justify-between px-5 py-10 md:px-20 md:py-15'>
        <div className='border-r-2 border-black/10 px-5 md:px-15'>
            <h1 className='flex flex-col justify-center font-instrument italic text-red-500 font-bold tracking-xs text-4xl md:text-7xl'>
                500+
            </h1>

            <p className='font-google-sans text-center py-3 text-[14px] md:text-[18px]'>
                Young Athletes
            </p>
        </div>

        <div className='border-r-2 border-black/10 px-5 md:px-15'>
            <h1 className='flex flex-col justify-center font-instrument italic text-red-500 font-bold tracking-xs text-4xl md:text-7xl'>
                50+
            </h1>

            <p className='font-google-sans text-center py-3 text-[14px] md:text-[18px]'>
                Scouts & Coaches
            </p>
        </div>

        <div className='border-r-2 border-black/10 px-5 md:px-15'>
            <h1 className='flex flex-col justify-center font-instrument italic text-red-500 font-bold tracking-xs text-4xl md:text-7xl'>
                20+
            </h1>

            <p className='font-google-sans text-center py-3 text-[14px] md:text-[18px]'>
                Academies
            </p>
        </div>

        <div className='px-5 md:px-15'>
            <h1 className='flex flex-col font-instrument italic text-red-500 font-bold tracking-xs text-4xl md:text-7xl'>
                15+
            </h1>

            <p className='font-google-sans text-center py-3 text-[14px] md:text-[18px]'>
                Districts Covered
            </p>
        </div>        
    </div>
  )
}

export default AboutSection