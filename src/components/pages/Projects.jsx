import React from 'react'
import Navbar from '../ui/navbar'

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className='font-satoshi md:max-w-[900px] mx-auto'>
          <h1 className='flex justify-center font-satoshi-black text-6xl'>projects</h1>
          <p className='flex justify center text-center text-lg pt-6 w-3/4 mx-auto text-neutral-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
    </>
  )
}

export default Projects