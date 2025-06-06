import React from 'react'
import Navbar from '../ui/navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='font-satoshi md:max-w-[900px] mx-auto'>
        <div className='flex flex-col md:flex-row md:justify-between md:mt-35'>
          <div className='flex flex-col justify-center pt-5 px-5'>
            <h2 className='text-3xl md:text-4xl font-playwrite'> hi there!</h2>
            <h1 className='text-5xl md:text-6xl font-satoshi-black'>i'm <span className='text-emerald-700' >Adrian</span>.</h1>
            <p className='text-lg md:text-xl pt-6 md:w-3/4 text-neutral-600'>
              I'm a recent Computer Science graduate from the University of Minnesota Twin Cities. 
              I'm a curious and creative developer with a passion for full-stack development and building clean, useful software.
            </p>
          </div>
          <div className='flex justify-center pt-10 md:pr-15'>
            <img src="src/assets/images/portrait.jpg" alt="self portrait" className='w-64 md:w-[1000px] border-zinc-950 border-4' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
