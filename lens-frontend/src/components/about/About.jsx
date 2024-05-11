"use client"
import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import AboutImg from '../../../public/about.png';
import './index.css'
import { ThemeContext } from '@/context/ThemeContext';
import Button from '../Button';

const About = () => {
  const {isDark, changeTheme} = React.useContext(ThemeContext)

    return (
        <div className='font-poppins'>
            <div className='mt-20 text-6xl flex flex-col items-center'>
                <div>About Us</div>
                <div style={{
                    width: '165px',
                    height: '8px',
                    borderRadius: '1000px',
                    background: 'var(--gr-4, linear-gradient(54deg, #0091ff 0%, #9cfeff 100%))'
                }}>
                </div>
            </div>

            <div 
                className='m-auto flex mt-20 mb-20 bg-[#e2f2ff] p-20 ease-in duration-300 group responsive-width'
                style={{backgroundColor: isDark ? '#1b1c1e' : '#e2f2ff', color: isDark ? 'white' : 'black'}}
            >
                <div className='py-10'>
                    <p className='font-medium aboutHeading'>Welcome To LENS</p>
                    <p className='text-gray-500 leading-snug mt-10 aboutPara'>
                        We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.
                    </p>
                    <p className='mt-6 aboutBtn'>
                        <Button text={'Learn More'}/>
                        {/* <button 
                            className='group flex items-center gap-2 border-solid border border-black px-10 py-3 font-semibold rounded-lg hover:bg-black hover:text-white'
                        >
                            Learn More
                            <span className='hidden group-hover:flex items-center'>
                                <FaArrowRight color='white' />
                            </span>
                        </button> */}
                    </p>
                </div>
                
                <div className='border-solid border-8 border-white group-hover:border-transparent ease-in duration-300'>
                    <Image src={AboutImg} alt='aboutlatest'/>
                </div>
            </div>

        </div>
    )
}

export default About