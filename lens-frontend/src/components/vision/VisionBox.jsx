"use client"
import React from 'react'
import { HiMiniUserGroup } from "react-icons/hi2";
import { SiLoop } from "react-icons/si";
import { FaBalanceScale } from "react-icons/fa";
import { ThemeContext } from '@/context/ThemeContext';

const VisionBox = () => {
    const {isDark, changeTheme} = React.useContext(ThemeContext)

  return (
    <div className='mt-10'>
        <div className='flex justify-between w-[100%] h-[300px]'>
            <div className='w-[44%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                <div className='text-left text:2xl xl:text-3xl mb-8 font-semibold'>Diversity & Fairness</div>
                <div className='text-gray-500 text-left font-poppins text-md xl:text-lg'>
                    When training our AI models, we consider ethical and social implications of algorithm-based decision making. Our solutions use high-quality and fairly-represented data sets to eliminate human cognitive biases.
                </div>
            </div>
            <div className='w-[8%]'>
                <div className="flex justify-center items-center h-[12%] w-12 m-auto rounded-full shadow-2xl">
                    <span><HiMiniUserGroup size={25}/></span>
                </div>
                <div style={{border: `0.5px dotted ${isDark? 'white': 'black'}`,width: '1px', height: '84%', margin:'auto'}}></div>
            </div>
            <div className='w-[44%]'></div>
        </div>

        <div className='flex justify-between w-[100%] h-[300px]'>
            <div className='w-[44%]'></div>
            
            <div className='w-[8%]'>
                <div className="flex justify-center items-center h-[12%] w-12 m-auto rounded-full shadow-2xl">
                    <span><SiLoop size={25}/></span>
                </div>
                <div style={{border: `0.5px dotted ${isDark? 'white': 'black'}`,width: '1px', height: '84%', margin:'auto'}}></div>
            </div>
            
            <div className='w-[44%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                <div className='text-left text:2xl xl:text-3xl mb-8 font-semibold'>Regulatory Compliance</div>
                <div className='text-gray-500 text-left font-poppins text-md xl:text-lg'>
                    Working with clients globally, LENS acknowledges applicable data privacy regulations, such as the GDPR, HIPAA and others, in all our solutions handling sensitive data. 
                </div>
            </div>
        </div>

        <div className='flex justify-between w-[100%] h-[320px]'>
            <div className='w-[44%] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                <div className='text-left text:2xl xl:text-3xl mb-8 font-semibold'>Code of Ethics</div>
                <div className='text-gray-500 text-left font-poppins text-md xl:text-lg'>
                    LENS believes in a just, non-violent world of equality and fairness. We prize democratic values, civil liberties and open and informed debate. When used to further these values, algorithm-based decision-making models can continue to make the world a safer, better place for everyone.                </div>
            </div>
            <div className='w-[8%]'>
                <div className="flex justify-center items-center h-[12%] w-12 m-auto rounded-full shadow-2xl">
                    <span><FaBalanceScale size={25} /></span>
                </div>
                <div style={{border: `0.5px dotted ${isDark? 'white': 'black'}`,width: '1px', height: '86%', margin:'auto'}}></div>
            </div>
            <div className='w-[44%]'></div>
        </div>
    </div>
  )
}

export default VisionBox