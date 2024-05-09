"use client"

import React, { useState } from 'react'
import Logo from '../../public/nav_logo.webp';
import Image from 'next/image';
import { IoMdMoon } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawer = ()=>{
    setDrawerOpen(!drawerOpen)
  }

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2xl: px-16">
            <Image 
              src={Logo}
              alt='logo'
              width={80}
              height={70}
              className='cursor-pointer'
            />
            <div className='hidden sm:flex'>
              <ul className='hidden sm:flex'>
                <li className='ml-10 hover: border-b text-xl'>MakeMyWeb.</li>
                <li className='ml-10 hover: border-b text-xl'>Home</li>
                <li className='ml-10 hover: border-b text-xl'>Company</li>
                <li className='ml-10 hover: border-b text-xl'>Blogs</li>
                <li className='ml-10 hover: border-b text-xl'><IoMdMoon size={25}/></li>
              </ul>
            </div>
            <div onClick={handleDrawer} className='sm:hidden cursor-pointer pl-24'>
              <MdOutlineMenu size={25}/>
            </div>
        </div>
        <div className={
          drawerOpen ?
          "fixed right-0 top-24 w-[65%] sm:hidden bg-[#ecf0f3] h-screen p-10 ease-in duration-500"
          :
          "fixed left-[-100%] top-24 p-10 ease-in duration-500"
        }>

        </div>
    </nav>
  )
}

export default Navbar;