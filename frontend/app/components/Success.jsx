import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { IoMdArrowDown } from 'react-icons/io'

const jakarta = Plus_Jakarta_Sans({ 
    subsets: ['latin'] 
})

const success =[
    {
        id: 1,
        title: "How Rural Scout helps talented athletes get noticed beyond their local communities"
    },

    {
        id: 2,
        title: "How scouts discover promising players without geographical limitations"
    },

    {
        id: 3,
        title: "How Rural Scout is making sports opportunities accessible to every aspiring athlete"
    }

]
const Success = () => {
  return (
    <div className={`${jakarta.className} bg-[#f7f7f7] flex flex-col justify-center items-center py-20 px-10 lg:px-50`}>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center py-5 lg:py-10'>
            Trusted by those who discover and develop tomorrow's athletes.
        </h1>

        <p className='flex items-center text-center bg-neutral-200 hover:bg-neutral-300 rounded-full px-4 py-2 duration-200 cursor-pointer   '>
            Explore Stories <IoMdArrowDown className='inline ml-1' />
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-10 py-10 lg:py-10 hover:cursor-pointer'>
                {success.map((item) => (
                    <div key={item.id} className='flex flex-col justify-end rounded-4xl bg-white h-70 md:h-85 lg:h-100'>
                        <img src="" />
                        <p className='text-xl lg:text-2xl font-semibold py-5 lg:py-10 px-7 transition-transform hover:-translate-y-10'>
                            {item.title}
                        </p>
                    </div>
                ))}
        </div>

    </div>
  )
}

export default Success