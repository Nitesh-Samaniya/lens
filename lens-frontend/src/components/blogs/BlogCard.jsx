"use client"
import { ThemeContext } from '@/context/ThemeContext';
import React, { useState } from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BlogCard = ({date, title, text, color}) => {
    const [isHovered, setIsHovered] = useState(false);
    const {isDark, changeTheme} = React.useContext(ThemeContext)

    function getLightColor(color) {
        switch (color) {
            case 'yellow':
                return '#fffde7';  
            case 'blue':
                return '#e0f7fa';  
            case 'orange':
                return '#ffe5cc';  
            default:
                return 'transparent';  
        }
    }

    function getTheme(color){
        switch (color) {
            case 'yellow':
                return '#FFF9D0';  
            case 'blue':
                return '#CAF4FF';  
            case 'orange':
                return '#F8C794';  
            default:
                return 'transparent';  
        }
    }

    const bgColor = getLightColor(color);
    const backgroundColor = isHovered ? bgColor : 'white';

    const bgTheme = getTheme(color);

  return (
    <div
        className='p-5 group shadow-xl'  
        style={{backgroundColor: isDark ? "#1b1c1e" : backgroundColor}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        {
            !isHovered &&
            <div className='text-xl text-gray-500'>{date}</div>
        }
        <div className='text-2xl mt-5'>{title}</div>
        <div className='mt-5 p-4 lg:p-8 rounded-2xl text-gray-500' style={{backgroundColor: bgTheme}}>{text}</div>
        {
            isHovered &&
            <div className='mt-5 flex items-center text-red-500 text-lg font-semibold'>Read More <span><MdKeyboardDoubleArrowRight/></span></div>
        }
    </div>
  )
}

export default BlogCard