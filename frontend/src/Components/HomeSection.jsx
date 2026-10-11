import React from 'react'

const HomeSection = () => {
  return (
    <div className=''>
      
      <h1 className='text-[#5a5b5c] font-serif text-5xl md:text-6xl lg:text-8xl text-center py-15 md:py-20'>
        Welcome to <span className='text-black'>TalentHub</span>
      </h1>


      <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8 py-5 md:py-10 px-10 md:px-20'>
        <div className='bg-[#ebe7e7] p-6 rounded-lg shadow-md w-full md:w-1/3 hover:scale-101 transition duration-300 cursor-pointer'>
          <h2 className='text-[18px] md:text-[20px] font-poppins mb-4 font-medium capitalize'>Discover Talents</h2>
          <p className='text-gray-700 font-google-sans text-[15px] md:text-[18px]'>Explore a wide range of talented individuals across various fields and industries.</p>
        </div>

        <div className='bg-[#ebe7e7] p-6 rounded-lg shadow-md w-full md:w-1/3 hover:scale-101 transition duration-300 cursor-pointer'>
          <h2 className='text-[18px] md:text-[20px] font-poppins mb-4 font-medium capitalize'>Connect Opportunities</h2>
          <p className='text-gray-700 font-google-sans text-[15px] md:text-[18px]'>Find and connect with opportunities that match your skills and interests.</p>
        </div>

        <div className='bg-[#ebe7e7] p-6 rounded-lg shadow-md w-full md:w-1/3 hover:scale-101 transition duration-300 cursor-pointer'>
          <h2 className='text-[18px] md:text-[20px] font-poppins mb-4 font-medium capitalize'>Grow Your Network</h2>
          <p className='text-gray-700 font-google-sans text-[15px] md:text-[18px]'>Expand your professional network and collaborate with like-minded individuals.</p>
        </div>
      </div>

    </div>
  )
}

export default HomeSection