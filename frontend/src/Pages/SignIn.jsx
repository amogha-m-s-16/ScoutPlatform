import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiUser, FiMail, FiPhone, FiLock, FiCheck, FiEye, FiEyeOff } from 'react-icons/fi'
import { PiPersonThin } from 'react-icons/pi'
import { LiaCampgroundSolid } from 'react-icons/lia'

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(true)
  const [role, setRole] = useState('athlete')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='min-h-[175vh] lg:min-h-screen bg-[#F7F7F5] flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10'>
      
      <div className='max-w-7xl w-full mx-auto flex items-center justify-between pb-6'>
        <Link 
          to='/' 
          className='group inline-flex items-center gap-2 text-neutral-600 hover:text-black transition-colors font-jet-mono  py-1.5 px-3 rounded-full bg-white border-2 border-black/5 shadow-md hover:bg-black/5'
        >
          <FiArrowLeft className='group-hover:-translate-x-1 transition-transform duration-200' />
          <span className='text-[12px] lg:text-[14px]'>Back to Home</span>
        </Link>

      </div>

      <div className='max-w-7xl w-full mx-auto flex-1 flex flex-col lg:flex-row items-stretch gap-6 md:gap-8 rounded-3xl overflow-hidden'>

        <div 
          className='relative lg:w-5/12 min-h-[380px] sm:min-h-[440px] lg:min-h-[640px] rounded-3xl overflow-hidden bg-cover bg-center border border-black/10 shadow-lg flex flex-col justify-end p-6 sm:p-8 md:p-10 text-white'
          style={{ backgroundImage: "url('/signin.png')" }}
        >

          <div className='absolute inset-0 bg-gradient-to-t to-black/20 pointer-events-none' />

          <div className='max-w-md'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl text-white font-instrument font-normal tracking-normal'>
              Your Talent. <br />
              <span className='font-instrument italic font-semibold text-orange-500'>Our  <span className='text-white'>Platform. </span> </span><br />
              A Brighter Future.
            </h1>

            <p className='mt-4 text-xs sm:text-sm text-neutral-300 font-google-sans leading-relaxed'>
              Connecting undiscovered grassroots athletes directly to verified coaches, scouts, and trials.
            </p>

          </div>
        </div>

        <div className='lg:w-7/12 bg-white border border-black/10 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-sm flex flex-col justify-center'>
          
          <div className='max-w-xl w-full mx-auto'>

            <div className='text-center mb-6'>
              <h2 className='font-instrument text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight'>
                {isSignUp ? 'Create Your Account' : 'Welcome Back'}
              </h2>
              <p className='font-google-sans text-sm sm:text-base text-neutral-500 mt-2'>
                {isSignUp 
                  ? 'Join as an athlete, scout, or local coach to get started.'
                  : 'Enter your credentials to access your scouting dashboard.'
                }
              </p>
            </div>

            {isSignUp && (
              <div className='grid grid-cols-2 gap-3 mb-6 p-1.5 bg-[#F7F7F5] rounded-2xl border border-black/5'>
                <button
                  type='button'
                  onClick={() => setRole('athlete')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-poppins text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    role === 'athlete'
                      ? 'bg-white text-black shadow-xs border border-black/10'
                      : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  <PiPersonThin className='text-xl' />
                  <span>Athlete</span>
                </button>

                <button
                  type='button'
                  onClick={() => setRole('scout')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-poppins text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    role === 'scout'
                      ? 'bg-white text-black shadow-xs border border-black/10'
                      : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  <LiaCampgroundSolid className='text-xl' />
                  <span>Scout / Coach</span>
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-4'>
              {isSignUp && (
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label 
                      htmlFor='firstName' 
                      className='block text-[11px] font-jet-mono uppercase tracking-wider text-neutral-600 mb-1.5'
                    >
                      First Name
                    </label>
                    <div className='relative'>
                      <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        className='w-full border border-neutral-300 focus:border-red-600 focus:ring-2 focus:ring-red-500/20 rounded-xl px-4 py-2.5 pl-10 text-sm font-jet-mono bg-white outline-none transition-all'
                        placeholder='Albert'
                        required
                      />
                      <FiUser className='absolute left-3.5 top-3 text-neutral-400 text-sm' />
                    </div>
                  </div>

                  <div>
                    <label 
                      htmlFor='lastName' 
                      className='block text-[11px] font-jet-mono uppercase tracking-wider text-neutral-600 mb-1.5'
                    >
                      Last Name
                    </label>
                    <div className='relative'>
                      <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        className='w-full border border-neutral-300 focus:border-red-600 focus:ring-2 focus:ring-red-500/20 rounded-xl px-4 py-2.5 pl-10 text-sm font-jet-mono bg-white outline-none transition-all'
                        placeholder='Einstein'
                        required
                      />
                      <FiUser className='absolute left-3.5 top-3 text-neutral-400 text-sm' />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label 
                  htmlFor='email' 
                  className='block text-[11px] font-jet-mono uppercase tracking-wider text-neutral-600 mb-1.5'
                >
                  Email Address
                </label>
                <div className='relative'>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full border border-neutral-300 focus:border-red-600 focus:ring-2 focus:ring-red-500/20 rounded-xl px-4 py-2.5 pl-10 text-sm font-jet-mono bg-white outline-none transition-all'
                    placeholder='example@domain.com'
                    required
                  />
                  <FiMail className='absolute left-3.5 top-3 text-neutral-400 text-sm' />
                </div>
              </div>
              
              {isSignUp && (
                <div>
                  <label 
                    htmlFor='phone' 
                    className='block text-[11px] font-jet-mono uppercase tracking-wider text-neutral-600 mb-1.5'
                  >
                    Phone Number
                  </label>
                  <div className='relative'>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      className='w-full border border-neutral-300 focus:border-red-600 focus:ring-2 focus:ring-red-500/20 rounded-xl px-4 py-2.5 pl-10 text-sm font-jet-mono bg-white outline-none transition-all'
                      placeholder='+91 98765 43210'
                      required
                    />
                    <FiPhone className='absolute left-3.5 top-3 text-neutral-400 text-sm' />
                  </div>
                </div>
              )}

              <div className={isSignUp ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : 'space-y-4'}>
                <div>
                  <label 
                    htmlFor='password' 
                    className='block text-[11px] font-jet-mono uppercase tracking-wider text-neutral-600 mb-1.5'
                  >
                    Password
                  </label>
                  <div className='relative'>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id='password'
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      className='w-full border border-neutral-300 focus:border-red-600 focus:ring-2 focus:ring-red-500/20 rounded-xl px-4 py-2.5 pl-10 pr-10 text-sm font-jet-mono bg-white outline-none transition-all'
                      placeholder='••••••••'
                      required
                    />
                    <FiLock className='absolute left-3.5 top-3 text-neutral-400 text-sm' />
                    <button
                      type='button'
                      onClick={() => setShowPassword(prev => !prev)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      className='absolute right-3.5 top-3 text-neutral-400 hover:text-neutral-700 transition cursor-pointer'
                    >
                      {showPassword ? <FiEyeOff className='text-sm' /> : <FiEye className='text-sm' />}
                    </button>
                  </div>
                </div>

                {isSignUp && (
                  <div>
                    <label 
                      htmlFor='confirmPassword' 
                      className='block text-[11px] font-jet-mono uppercase tracking-wider text-neutral-600 mb-1.5'
                    >
                      Confirm Password
                    </label>

                    <div className='relative'>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id='confirmPassword'
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className='w-full border border-neutral-300 focus:border-red-600 focus:ring-2 focus:ring-red-500/20 rounded-xl px-4 py-2.5 pl-10 pr-10 text-sm font-jet-mono bg-white outline-none transition-all'
                        placeholder='••••••••'
                        required
                      />
                      <FiLock className='absolute left-3.5 top-3 text-neutral-400 text-sm' />
                      <button
                        type='button'
                        
                        aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                        className='absolute right-3.5 top-3 text-neutral-400 hover:text-neutral-700 transition cursor-pointer'
                      >
                        
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <button
                type='submit'
                className='w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-google-sans font-medium text-sm sm:text-base py-3 px-6 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2'
              >
                <span>{isSignUp ? `Create ${role === 'athlete' ? 'Athlete' : 'Scout'} Account` : 'Sign In'}</span>
              </button>
            </form>
            
            <div className='text-center mt-6 pt-4 border-t border-neutral-100'>
              <p className='font-google-sans text-xs sm:text-sm text-neutral-500'>
                {isSignUp ? 'Already registered on TalentHub?' : "Don't have a profile yet?"}{' '}
                <button
                  type='button'
                  onClick={() => setIsSignUp(prev => !prev)}
                  className='text-red-600 font-semibold hover:underline cursor-pointer ml-1'
                >
                  {isSignUp ? 'Sign In here' : 'Create an Account'}
                </button>
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default SignIn

