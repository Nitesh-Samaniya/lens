"use client"
import Image from 'next/image'
import React from 'react'
import MeetCom from '../../../public/meetcom.webp';
import './index.css';
import { ThemeContext } from '@/context/ThemeContext';

const Meet = () => {
  const {isDark, changeTheme} = React.useContext(ThemeContext)

  return (
    <div className='flex justify-between items-center bg-[#272e5c] mt-20 mb-20 pt-16 pb-16 meetBox' 
    style={{
      clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)',
      backgroundColor: isDark ? '#1b1c1e' : '#272e5c', color: isDark ? 'white' : 'black'
    }}>
        <div className='ml-10'>
            <Image src={MeetCom} alt='compImg'/>
        </div>
        <div className='text-center text-white'>
            <p className='text-3xl font-bold'>Meet <span className="text-blue-500 animated-text-gradient">Tru-AI</span></p>
            <p className='text-1xl mt-5'>Design. Create. Deploy.</p>
            <p className='text-1xl font-bold mt-3'>___ <span className="text-blue-500 animated-text-gradient">the Future of AI | Power to EDIT</span></p>
            <p className='font-semibold mt-2'>Based On Your Website & Traffic Trends, Tru-AI Optimises Your Website</p>
            <button className='mt-4 font-medium border border-2 border-slate-400 text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black hover:px-12 transition-all duration-300'>
              Learn More
            </button>
        </div>
        <div>
          <video 
            src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4"
            autoPlay
            loop
            muted
            className="w-full max-w-lg videoBox"
          >
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  )
}

export default Meet