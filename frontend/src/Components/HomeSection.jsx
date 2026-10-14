import React from 'react'

const HomeSection = () => {
  return (
    <div className=''>
      
      <h1 className='text-[#5a5b5c] font-instrument text-5xl md:text-6xl lg:text-8xl text-center py-10 md:py-15'>
        Welcome to <span className='text-black'>TalentHub</span>
      </h1>

      <h2 className='text-[#404346] font-instrument italic tracking-md font-medium text-[20px] md:text-[22px] text-center px-10 md:px-20'>
        Every Local Player Deserves a 
        <span className='text-black font-instrument italic tracking-md px-1 font-semibold tracking-normal text-[22px]'> Spotlight!</span>
      </h2>

      <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8 py-5 md:py-10 px-10 md:px-20'>
        <div className='bg-[#EAE8E4] p-6 rounded-lg shadow-md border-zinc-200 w-full md:w-1/3 hover:scale-101 transition duration-300 cursor-pointer'>
          <h2 className='text-[18px] md:text-[20px] font-poppins mb-4 font-medium capitalize text-[#171717]'>Grassroots Spotlight</h2>
          <p className='text-gray-700 font-google-sans text-[15px] md:text-[18px] text-[#474540]'>Showcase match clips, stats, and raw talent directly to verified scouts and academies who value potential over privilege</p>
        </div>

        <div className='bg-[#EAE8E4] p-6 rounded-lg shadow-md border-zinc-200 w-full md:w-1/3 hover:scale-101 transition duration-300 cursor-pointer'>
          <h2 className='text-[18px] md:text-[20px] font-poppins mb-4 font-medium capitalize text-[#171717]'>Open Trials & Trials Hub</h2>
          <p className='text-gray-700 font-google-sans text-[15px] md:text-[18px] text-[#474540]'>Discover community-organized tryouts, local tournaments, and open club trials happening right in your district</p>
        </div>

        <div className='bg-[#EAE8E4] p-6 rounded-lg shadow-md border-zinc-200 w-full md:w-1/3 hover:scale-101 transition duration-300 cursor-pointer'>
          <h2 className='text-[18px] md:text-[20px] font-poppins mb-4 font-medium capitalize text-[#171717]'>Peer & Coach Backing</h2>
          <p className='text-gray-700 font-google-sans text-[15px] md:text-[18px] text-[#474540]'>Get vouching and endorsements from local coaches, teammates, and fans to build an authentic, verifiable reputation</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-5 md:py-10 px-10 md:px-20'>
        <button className='bg-[#171717] text-white font-mono px-6 py-3 rounded-full hover:-translate-y-1 hover:shadow-md transition duration-300 cursor-pointer'>
          Discover Local Athletes
        </button>

        <button className='bg-[#171717] text-white font-mono px-6 py-3 rounded-full hover:-translate-y-1 hover:shadow-md transition duration-300 cursor-pointer'>
          Find Open Trials 
        </button> 
      </div>

    </div>
  )
}

export default HomeSection