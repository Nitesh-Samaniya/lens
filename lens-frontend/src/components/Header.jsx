import Image from 'next/image'
import React from 'react'
import HeaderBgImg from '../../public/header.webp';

const Header = () => {
  return (
      <div className='relative font-sans-serif w-full h-auto'>
          <Image src={HeaderBgImg} alt="Header Background" style={{ width: '100%', height: '85vh', objectFit: 'cover' }} />
          <div className="absolute left-[20%] top-[20%] md:w-1/2 lg:w-1/2 xl:w-1/3 ">
              <p className="text-black sm:text-6xl text-4xl leading-tight font-medium">We are at the forefront of AI</p>
              <p className="text-black max-w-md mt-6 text-xl hidden lg:block">
                  From Conserving Wildlife to Automatically Generating Caricatures– <span className='font-semibold'>We Do It All</span>
              </p>
              <p className='mt-6'>
                  <button className='font-medium bg-black text-white px-10 py-3 rounded-lg hover:bg-white hover:text-black hover:px-12 transition-all duration-300'>Learn More</button>
              </p>
          </div>
      </div>
  )
}

export default Header