import Image from 'next/image'
import React from 'react'
import c1 from "../../public/c1.webp";
import c2 from "../../public/c2.webp";
import c3 from "../../public/c3.webp";
import c4 from "../../public/c4.webp";


const Clients = () => {
  return (
    <div className='mt-20'>
        <div className='text-center text-2xl'>We Work With Amazing Clients</div>
        <div className='w-[90%] m-auto mt-10 flex flex-col gap-10 sm:flex-row justify-between items-center'>
            <div><Image src={c1} alt='client'/></div>
            <div><Image src={c2} alt='client'/></div>
            <div><Image src={c3} alt='client'/></div>
            <div><Image src={c4} alt='client'/></div>
        </div>
    </div>
  )
}

export default Clients