import React from 'react'
import Navbar from '../ui/navbar'
import { Link } from 'react-router-dom'

const About = () => {
	return (
		<>
			<Navbar />
			<div className='font-satoshi md:max-w-[900px] mx-auto'>
				<h1 className='flex justify-center font-satoshi-black text-6xl'>about me</h1>
				<p className='flex justify center text-center text-lg pt-6 w-3/4 mx-auto text-neutral-600'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<p className='flex justify center text-center text-lg pt-10 w-3/4 mx-auto text-neutral-900'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				
			</div>
		</>
	)
}

export default About