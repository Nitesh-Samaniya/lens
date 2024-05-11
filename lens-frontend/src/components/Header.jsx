"use client"
import Image from 'next/image'
import React from 'react'
import HeaderBgImg from '../../public/header.webp';
import { ThemeContext } from '@/context/ThemeContext';
import Button from './Button';

const Header = () => {
  const {isDark, changeTheme} = React.useContext(ThemeContext)

  return (
      <div className='relative font-sans-serif w-full h-auto mt-24'>
        {
            isDark ? 
            <video
            src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4"
            autoPlay
            loop
            muted
            >Your browser not support this video</video> 
            :
            <Image src={HeaderBgImg} alt="Header Background" style={{ width: '100%', height: '85vh', objectFit: 'cover' }} />
        }
          <div className="absolute left-[20%] top-[20%] md:w-1/2 lg:w-1/2 xl:w-1/3 ">
              <p className="text-black sm:text-6xl text-4xl leading-tight font-medium" style={{color: isDark ? 'white' : 'black'}}>We are at the forefront of AI</p>
              <p className="text-black max-w-md mt-6 text-xl hidden lg:block" style={{color: isDark ? 'white' : 'black'}}>
                  From Conserving Wildlife to Automatically Generating Caricatures– <span className='font-semibold'>We Do It All</span>
              </p>
              <p className='mt-6'>
                    <Button text='Learn More'/>
                  {/* <button className='font-medium bg-black text-white px-10 py-3 rounded-lg hover:bg-white hover:text-black hover:px-12 transition-all duration-300'>Learn More</button> */}
              </p>
          </div>
      </div>
  )
}

export default Header