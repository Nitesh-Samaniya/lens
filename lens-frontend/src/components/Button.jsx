"use client"

import { ThemeContext } from '@/context/ThemeContext'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Button = ({text}) => {
  const {isDark, changeTheme} = React.useContext(ThemeContext)

  return (
    <>
    {
        isDark ?
        <button className='bg-[white] text-black group flex items-center gap-2 border-solid border border-black px-10 py-3 font-semibold rounded-lg'>
              {text}
              <span className='hidden group-hover:flex items-center'>
                  <FaArrowRight color='black' />
              </span>
          </button>
          :
          <button className='group flex items-center gap-2 border-solid border border-black px-10 py-3 font-semibold rounded-lg hover:bg-black hover:text-white'>
              {text}
              <span className='hidden group-hover:flex items-center'>
                  <FaArrowRight color='white' />
              </span>
          </button>
    }
    </>
          
  )
}

export default Button