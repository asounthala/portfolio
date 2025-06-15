import React from 'react'
import Navbar from '../ui/navbar'
import ProjectCard from '../ui/ProjectCard'

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className='font-satoshi md:max-w-[900px] mx-auto'>
        <h1 className='flex justify-center font-satoshi-black text-6xl'>projects</h1>
        <p className='flex justify-center text-center text-lg pt-6 w-3/4 mx-auto text-neutral-600'>
          Check out some cool projects I've worked on!
        </p>
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 gap-8 p-10'>
          <ProjectCard 
            name="Project One"
            description="This is a description of project one. It showcases the features and functionalities of the project."
            image="src/assets/images/dog.jpg"
            link="https://www.youtube.com/watch?v=hJresi7z_YM?&autoplay=1"
          />
        </div>
      </div>
    </>
  )
}

export default Projects