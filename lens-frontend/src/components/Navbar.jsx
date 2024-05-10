"use client";

import React, { useState } from "react";
import Logo from "../../public/nav_logo.webp";
import Image from "next/image";
import { IoMdMoon } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white font-poppins">
      <div className="flex justify-between items-center h-full w-full px-6 sm:px-18 md:px-16">
        <Image
          src={Logo}
          alt="logo"
          width={80}
          height={70}
          className="cursor-pointer"
        />
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <li className="hover:font-semibold ml-10">MakeMyWeb.</li>
            <li className="hover:font-semibold ml-10 text-blue-500">Home</li>
            <li className="hover:font-semibold ml-10">Company</li>
            <li className="hover:font-semibold ml-10">Blogs</li>
            <li className="hover:font-semibold ml-10">
              <IoMdMoon size={25} />
            </li>
          </ul>
        </div>
        <div onClick={handleDrawer} className="sm:hidden cursor-pointer pl-24">
          <MdOutlineMenu size={45} />
        </div>
      </div>

      <div
        className={
          drawerOpen
            ? "fixed right-0 top-24 w-[65%] sm:hidden bg-[black] h-screen p-4 ease-in duration-500"
            : "fixed left-[-100%] top-24 p-10 ease-in-out duration-500"
        }
      >
        <ul className="flex flex-col gap-6 text-xl">
          <li className="text-white hover:font-semibold">MakeMyWeb.</li>
          <li className="text-blue-500 hover:font-semibold">Home</li>
          <li className="text-white hover:font-semibold">Company</li>
          <li className="text-white hover:font-semibold">Blogs</li>
          <li className="text-white hover:font-semibold">
            <IoMdMoon size={25} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
