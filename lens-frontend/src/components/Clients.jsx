"use client"
import Image from 'next/image'
import React from 'react'
import c1 from "../../public/c1.webp";
import c1b from "../../public/c1b.webp";
import c2 from "../../public/c2.webp";
import c2b from "../../public/c2b.webp";
import c3 from "../../public/c3.webp";
import c3b from "../../public/c3b.webp";
import c4 from "../../public/c4.webp";
import c4b from "../../public/c4b.webp";
import { ThemeContext } from '@/context/ThemeContext';


const Clients = () => {
  const {isDark, changeTheme} = React.useContext(ThemeContext)

  return (
    <div className='mt-20'>
        <div className='text-center text-2xl'>We Work With Amazing Clients</div>
        <div className='w-[90%] lg:w-[70%] m-auto mt-10 flex flex-col gap-10 sm:flex-row justify-between items-center'>
            <div><Image src={isDark ? c1b : c1} alt='client'/></div>
            <div><Image src={isDark ? c2b : c2} alt='client'/></div>
            <div><Image src={isDark ? c3b : c3} alt='client'/></div>
            <div><Image src={isDark ? c4b : c4} alt='client'/></div>
        </div>

        <div className='mt-10 bg-[#272e5c] py-12 text-center text-white font-normal text-3xl'
        style={{backgroundColor: isDark ? '#1b1c1e' : '#272e5c', color: isDark ? 'white' : 'white'}}
        >
          <div className='mb-10'>By the numbers</div>
          <div className='flex justify-between items-center sm:w-[80%] lg:w-[70%] lg:w-[60%] m-auto'>
            <div>
              <p>15<span className='text-blue-500'>+</span></p>
              <p className='text-lg mt-1 sm:w-[150px]'>Solutions for Global crises</p>
            </div>
            <div className='hidden sm:block w-[3px] h-[100px] bg-white'></div>
            <div>
              <p>10<span className='text-blue-500'>+</span></p>
              <p className='text-lg mt-1 sm:w-[150px]'>University Collaborations</p>
            </div>
            <div className='hidden sm:block w-[3px] h-[100px] bg-white'></div>
            <div>
              <p>25<span className='text-blue-500'>+</span></p>
              <p className='text-lg mt-1 sm:w-[150px]'>Employees Worldwide</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Clients