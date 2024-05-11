"use client";

import { ThemeContext } from '@/context/ThemeContext';
import React, { useState } from 'react'

const Card = ({number, color, title, text}) => {
    const [isHovered, setIsHovered] = useState(false);
    const {isDark, changeTheme} = React.useContext(ThemeContext)


    function getLightColor(color) {
        switch (color) {
            case 'green':
                return '#ecffec';  
            case 'blue':
                return '#e0f7fa';  
            case 'red':
                return '#ffcccb';  
            case 'orange':
                return '#ffe5cc';  
            default:
                return 'transparent';  
        }
    }

    function getNumberColor(color) {
        switch (color) {
            case 'green':
                return 'rgb(1, 201, 155)';  
            case 'blue':
                return 'rgb(63, 189, 241)';  
            case 'red':
                return 'rgb(255, 96, 95)';  
            case 'orange':
                return 'rgb(255, 159, 49)';  
            default:
                return 'gray-300';  
        }
    }

    const bgColor = getLightColor(color);

    const numColor = getNumberColor(color);
    const putNumCOlor = isHovered ? numColor : '#cccccc';

    const borderColor = isHovered ? color : 'white';
    const backgroundColor = isHovered ? bgColor : 'white';

  return (
      <div 
        className='p-8 group shadow-xl' 
        style={{ border: `1px solid ${borderColor}`, backgroundColor: isDark ? "#1b1c1e" : backgroundColor
    }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
          <div className='flex items-center gap-0'>
              <div className='text-7xl font-bold' style={{color: '#cccccc'}}>
                  <span>0</span>
                  <span style={{color: putNumCOlor}}>{number+1}</span>
              </div>
              <div className='font-bold text-3xl transition-all duration-300 group-hover:translate-x-10 group-hover:text-gray-400' style={{ marginLeft: '-28px', color: numColor }}>
                {title}
              </div>
          </div>
          <div className='mt-6 text-gray-400 text-lg font-bold'>{text}</div>
      </div>
  )
}

export default Card