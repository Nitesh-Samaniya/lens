"use client"
import Clients from '@/components/Clients'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import KnowUs from '@/components/KnowUs'
import Meet from '@/components/Meet/Meet'
import Navbar from '@/components/Navbar'
import About from '@/components/about/About'
import Blogs from '@/components/blogs/Blogs'
import Service from '@/components/service/Service'
import Vision from '@/components/vision/Vision'
import Why from '@/components/why/Why'
import { ThemeContext } from '@/context/ThemeContext'
import React from 'react'

const HomePage = () => {
  const {isDark, changeTheme} = React.useContext(ThemeContext)

  return (
    <div style={{backgroundColor: isDark ? 'black' : 'white', color: isDark ? 'white' : 'black'}}>
        <Navbar />
        <Header />
        <About />
        <Service />
        <Meet />
        <Why />
        <Vision />
        <Blogs />
        <Clients />
        <KnowUs />
        <Footer />
    </div>
  )
}

export default HomePage