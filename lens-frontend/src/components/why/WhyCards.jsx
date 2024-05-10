"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const WhyCards = ({color, title, image, text}) => {
    const [isHovered, setIsHovered] = useState(false);

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

    const bgColor = getLightColor(color);
    const borderColor = isHovered ? color : 'white';
    const backgroundColor = isHovered ? bgColor : 'white';

  return (
    <div
        className='p-5 group shadow-xl rounded-3xl' 
        style={{ border: `1px solid ${borderColor}`, backgroundColor}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <p className='text-2xl font-bold'>{title}</p>
        <p style={{display: 'inline-block', textAlign: 'center'}}>
            <Image className='mt-10 mb-10' src={image} alt='image'/>
        </p>
        <p className='text-md text-gray-500 font-poppins font-medium'>{text}</p>
    </div>
  )
}

export default WhyCards