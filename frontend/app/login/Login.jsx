import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
})

const Login = () => {
  return (
    <div className={`${jakarta.className} md:flex min-h-screen max-w-full`}>
      <div className='md:max-w-1/2 w-full bg-black min-h-full flex flex-col justify-center items-center py-10 px-10 lg:px-40'>
          <h1 className='text-white text-3xl font-semibold pb-15'>Welcome Back</h1>

          <Link href="" className='flex flex-row justify-center items-center font-bold border-2 border-neutral-700 rounded-full w-full px-4 py-3 hover:bg-neutral-800 ease-in-out duration-200'>
            <FcGoogle className='mr-2.5 text-[22px]'/> <span className='text-white text-center inline'> Continue with Google</span>
          </Link>

          <p className='py-7 text-neutral-600'>or</p>

          <div className='flex flex-col justify-center items-center gap-5 w-full'>
            <input type="text" className='text-neutral-400 bg-[hsl(0_0%_100%/8%)] focus:ring-2 focus:ring-white/85 outline-none w-full rounded-2xl py-3 px-5' placeholder='Enter email address'/>

            <Link href="" className='w-full bg-white font-semibold text-center px-5 py-2 rounded-full'>Continue</Link>
          </div>

          <p className='text-neutral-400 py-5 text-[12px] text-center'>By continuing, you agree to Our 
            <Link href="/terms" className='underline'> Terms of Service </Link> and <Link href="/privacy" className='underline'>Privacy Policy.</Link>
          </p>

      </div>

      <div>

      </div>
    </div>
  )
}

export default Login