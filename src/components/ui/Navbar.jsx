import React from 'react'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {

  return (
    <nav className='flex justify-between p-8 px-9'>

      <a href="/">
        <img src="src/assets/icons/logo.svg" alt="logo" className='w-10 h-10' />
      </a>

      <HamburgerMenu />

    </nav>
  )
}

export default Navbar