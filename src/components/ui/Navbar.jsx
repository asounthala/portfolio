import React, { useState, useEffect } from 'react'
import HamburgerMenu from './HamburgerMenu'
import { NavLink } from 'react-router-dom'

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
    <nav className='flex justify-between p-8 px-9 md:max-w-[1000px] mx-auto'>

      <NavLink to="/">
        <img src="src/assets/icons/logo.svg" alt="logo" className='w-12 h-12 md:w-15 md:h-15 '/>
      </NavLink>

      {isMobile ? <HamburgerMenu /> : 
        <div className='font-satoshi-medium text-2xl text-slate-900 '>
          <ul className='flex space-x-2 '>
            <li className='inline-block px-4 py-2 hover:underline'>
              <NavLink to="/" className={({ isActive }) => 
              isActive ? 'opacity-50' : null}>adrian</NavLink>
            </li>
            <li className='inline-block px-4 py-2 hover:underline'>
              <NavLink to="/projects" className={({ isActive }) => isActive ? 'opacity-50' : null}>projects</NavLink>
            </li>
            <li className='inline-block px-4 py-2 hover:underline'>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'opacity-50' : null}>about</NavLink>
            </li>
            <li className='inline-block px-4 py-2 hover:underline'>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>
      }
    </nav>
  )
}

export default Navbar