import React from 'react'
import { useState, useEffect } from 'react'

const ProjectCard = ({ name, description, image, link }) => {
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
    <div 
      className='relative md:bg-gray-300 w-80 md:w-200 h-80 bg-cover bg-center cursor-pointer'
      style={{ backgroundImage: image ? `url(${image})` : undefined}}
      onClick={() => {
        if (link) {
          window.open(link, '_blank')
        }
      }}
    >
      {image && (
      <div className="absolute inset-0 bg-black opacity-40" />
      )}
      <div className='relative z-10 h-full'>
        <h1 className='text-4xl font-satoshi-medium pt-7 pl-7 text-white'>
          {name || 'Project Name'}
        </h1>
        <p className='absolute bottom-10 text-xl font-satoshi-light pt-5 pl-7 pr-7 text-white'>
          {description || 'This is a brief description of the project. It highlights the main features and functionalities.'}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard