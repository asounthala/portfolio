import React from 'react'
import Navbar from '../ui/navbar'

const Home = () => {
  return (
    <div className='font-satoshi'>
      <Navbar />

      <div className='flex flex-col justify-center pt-5 pl-10'>
        <h2 className='text-4xl font-playwrite'> hi there!</h2>
        <h1 className='text-5xl font-satoshi-black'>i'm <span className='text-emerald-700' >Adrian</span>.</h1>
        <p className='text-lg pt-3 w-2/3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
      </div>
      <div className='flex justify-center pt-15'>
          <img src="src/assets/images/portrait.png" alt="arrow" className='w-64'/>
      </div>

    </div>
  )
}

export default Home
