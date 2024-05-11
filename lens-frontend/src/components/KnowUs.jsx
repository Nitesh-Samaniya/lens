import Image from 'next/image'
import React from 'react'
import Map from "../../public/map.webp";

const KnowUs = () => {
  return (
      <div>
          <div className='mt-20 text-3xl flex flex-col items-center'>
              <div>GET TO KNOW US</div>
              <div style={{
                  width: '85px',
                  height: '5px',
                  borderRadius: '1000px',
                  background: 'var(--gr-4, linear-gradient(54deg, #0091ff 0%, #9cfeff 100%))'
              }}>
              </div>
          </div>

          <div className='mt-20 w-[90%] m-auto flex flex-col gap-16 lg:flex-row justify-between items-center'>
            <div className='lg:w-[40%]'>
                <p className='text-4xl lg:text-5xl xl:text-7xl'>Get in touch with us</p>
                <p className='text-xl mt-4 text-gray-500'>Send your enquiry now!</p>
                  <div className='mt-10 flex text-md font-semibold'>
                      <input className='rounded-3xl bg-[#EEEEEE] py-2 px-2 border border-gray' type="email" placeholder='Enter Email Address' />
                      <button className='rounded-3xl bg-[#272e5c] text-white py-2 px-3 ml-[-30px]'>Request Demo</button>
                  </div>
            </div>
            <div>
                <Image src={Map} alt='map'/>
            </div>
          </div>
      </div>
  )
}

export default KnowUs