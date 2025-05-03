import React, { useState, useEffect } from 'react'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className='flex justify-between p-8 px-9'>

      <a href="/">
        <img src="src/assets/icons/logo.svg" alt="logo" className='w-12 h-12 md:w-15 md:h-15 '/>
      </a>

      {isMobile ? <HamburgerMenu /> : 
        <div className='font-satoshi-medium text-2xl text-slate-900 '>
          <ul className='flex space-x-2 '>
            <li className='inline-block px-4 py-2 hover:underline'>
              <a href="/">adrian</a>
            </li>
            <li className='inline-block px-4 py-2 hover:underline'>
              <a href="/about">projects</a>
            </li>
            <li className='inline-block px-4 py-2 hover:underline'>
              <a href="/services">about</a>
            </li>
            <li className='inline-block px-4 py-2 hover:underline'>
              <a href="/contact">contact</a>
            </li>
          </ul>
        </div>
      }
    </nav>
  )
}

export default Navbar