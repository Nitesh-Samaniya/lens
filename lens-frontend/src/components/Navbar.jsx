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
    <nav class="w-full h-24 shadow-xl bg-white font-poppins">
      <div class="flex justify-between items-center h-full w-full px-6 sm:px-18 md:px-16">
        <Image
          src={Logo}
          alt="logo"
          width={80}
          height={70}
          class="cursor-pointer"
        />
        <div class="hidden sm:flex">
          <ul class="hidden sm:flex">
            <li class="hover:font-semibold ml-10">MakeMyWeb.</li>
            <li class="hover:font-semibold ml-10 text-blue-500">Home</li>
            <li class="hover:font-semibold ml-10">Company</li>
            <li class="hover:font-semibold ml-10">Blogs</li>
            <li class="hover:font-semibold ml-10">
              <IoMdMoon size={25} />
            </li>
          </ul>
        </div>
        <div onClick={handleDrawer} class="sm:hidden cursor-pointer pl-24">
          <MdOutlineMenu size={45} />
        </div>
      </div>

      <div
        class={
          drawerOpen
            ? "fixed z-50 right-0 top-24 w-[65%] sm:hidden bg-[black] h-screen p-4 ease-in duration-500"
            : "fixed z-50 left-[-100%] top-24 p-10 ease-in-out duration-500"
        }
      >
        <ul class="flex flex-col gap-6 text-xl">
          <li class="text-white hover:font-semibold">MakeMyWeb.</li>
          <li class="text-blue-500 hover:font-semibold">Home</li>
          <li class="text-white hover:font-semibold">Company</li>
          <li class="text-white hover:font-semibold">Blogs</li>
          <li class="text-white hover:font-semibold">
            <IoMdMoon size={25} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
