import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import AboutImg from '../../../public/about.png';
import './index.css'

const About = () => {
    return (
        <div class='font-poppins'>
            <div class='mt-20 text-6xl flex flex-col items-center'>
                <div>About Us</div>
                <div style={{
                    width: '165px',
                    height: '8px',
                    borderRadius: '1000px',
                    background: 'var(--gr-4, linear-gradient(54deg, #0091ff 0%, #9cfeff 100%))'
                }}>
                </div>
            </div>

            <div class='m-auto flex mt-20 mb-20 bg-[#e2f2ff] p-20 ease-in duration-300 group responsive-width'>
                <div class='py-10'>
                    <p class='font-medium aboutHeading'>Welcome To LENS</p>
                    <p class='text-gray-500 leading-snug mt-10 aboutPara'>
                        We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.
                    </p>
                    <p class='mt-6 aboutBtn'>
                        <button class='group flex items-center gap-2 border-solid border border-black px-10 py-3 font-semibold rounded-lg hover:bg-black hover:text-white'>
                            Learn More
                            <span class='hidden group-hover:flex items-center'>
                                <FaArrowRight color='white' />
                            </span>
                        </button>
                    </p>
                </div>
                
                <div class='border-solid border-8 border-white group-hover:border-transparent ease-in duration-300'>
                    <Image src={AboutImg} alt='aboutlatest'/>
                </div>
            </div>

        </div>
    )
}

export default About