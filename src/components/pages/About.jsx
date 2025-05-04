import React from 'react'
import Navbar from '../ui/navbar'
import { Link } from 'react-router-dom'

const About = () => {
	return (
		<>
			<Navbar />
			<div className='font-satoshi md:max-w-[900px] mx-auto'>
				<h1 className='flex justify-center font-satoshi-black text-6xl'>about</h1>
			</div>
		</>
	)
}

export default About