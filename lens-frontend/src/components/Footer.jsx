import React from 'react'
import Logo from "../../public/nav_logo.webp";
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';


const Footer = () => {
  return (
      <div>
          <div className='mt-20 w-[90%] m-auto flex justify-between text-center'>
              <div>
                  <Image src={Logo} alt='logo' className='inline-block sm:block'/>
                  <p className='mt-5'>Tomorrow's Vision, Today!</p>
                  <div className='w-[50%] sm:w-[100%] m-auto flex justify-between mt-10'>
                      <p><Link href='https://www.facebook.com/solutions.lenscorp?mibextid=2JQ9oc' target='_blank'><FaFacebook size={25} /></Link></p>
                      <p><Link href='https://www.instagram.com/lens_corporation/' target='_blank'><FaInstagram size={25} /></Link></p>
                      <p><Link href='https://www.linkedin.com/company/lens-corporation/' target='_blank'><FaLinkedin size={25} /></Link></p>
                      <p><Link href='https://twitter.com/LensCorporation' target='_blank'><FaXTwitter size={25} /></Link></p>
                  </div>
              </div>

              <div>
                  <p className='font-semibold text-xl'>SITEMAP</p>
                  <ul className='mt-5'>
                      <li className='mb-1 cursor-pointer hover:text-blue-500'>Services</li>
                      <li className='mb-1 cursor-pointer hover:text-blue-500'>MakeMyWeb.</li>
                      <li className='mb-1 cursor-pointer hover:text-blue-500'>Products</li>
                      <li className='mb-1 cursor-pointer hover:text-blue-500'>Blogs</li>
                      <li className='mb-1 cursor-pointer hover:text-blue-500'>Life at LENS.</li>
                  </ul>
              </div>

              <div>
                  <p className='font-semibold text-xl'>CONNECT</p>
                  <ul className='mt-5'>
                      <li className='mb-1 hover:text-blue-500'><Link href='tel:+15179300792"'>+1-517-9300-792</Link></li>
                      <li className='mb-1 hover:text-blue-500'><Link href='tel:+919990736796'>+91-9990-736-796</Link></li>
                      <li className='mb-1 hover:text-blue-500'><Link href='mailto:solutions@lenscorp.ai'>solutions@lenscorp.ai</Link></li>
                  </ul>
              </div>
          </div>

          <div className='mt-10 py-10 bg-[#272e5c]'>
            <div className='w-[95%] m-auto flex text-white justify-between text-center font-semibold sm:font-bold'>
                <div>2023 LENS, Inc. All rights reserved.</div>
                <div className='flex gap-5 sm:gap-10'>
                    <div>Code of conduct</div>
                    <div>Sustainability Goals</div>
                </div>
            </div>
          </div>
      </div>
    
  )
}

export default Footer