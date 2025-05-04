import React from 'react'
import Navbar from '../ui/navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='font-satoshi md:max-w-[900px] mx-auto'>
      <Navbar />
      <div className='flex flex-col md:flex-row md:justify-between md:mt-35'>
        <div className='flex flex-col justify-center pt-5 px-5'>
          <h2 className='text-3xl md:text-4xl font-playwrite'> hi there!</h2>
          <h1 className='text-5xl md:text-6xl font-satoshi-black'>i'm <span className='text-emerald-700' >Adrian</span>.</h1>
          <p className='text-lg md:text-xl pt-3 md:w-2/3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
        <div className='flex justify-center pt-10 md:pr-15'>
            <img src="src/assets/images/portrait.png" alt="arrow" className='w-64 md:w-[500px]'/>
        </div>
      </div>
      <Link to="/projects" 
        className='text-neutral-600 hover:underline text-lg md:text-xl absolute bottom-7 right-5'>
        &#123; go to projects  &#125; 
      </Link>
    </div>
  )
}

export default Home
