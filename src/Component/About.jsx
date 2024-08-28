import React from 'react'
import Photo from '../assets/profi.jpg'
import GitSvg from '../assets/github.svg'
import LinkedinSvg from '../assets/linkedin.svg'
import InstaSvg from '../assets/instagram.svg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex flex-col gap-14 md:gap-30 lg:gap-72 md:flex-row lg:mx-72 mx-[10%] my-12 md:my-32'>
        <div className='w-auto'>
        <h1 className='font-bold'>Hi</h1>
        <h1 className="text-xl font-bold">I am</h1>
        <h1 className="text-3xl font-bold text-nowrap">Filipe Gideão Rodrigues</h1>
        <div className='flex flex-col'>
        <h1 className="text-5xl font-bold text-purpley">Front-End</h1>
        <h1 className="text-5xl font-bold md:pl-16 text-purpley">Developer</h1>
        </div>
        </div>
        
        <div className='flex flex-col items-center gap-8 min-w-[40%]'>
        <img src={Photo} alt="profile" className="w-96 h-96 shadow-lg shadow-purpley rounded-full" />
        <div className='flex flex-row gap-4'>
        <Link to="https://github.com/FilipeVOl">
        <img src={GitSvg} alt="github" className="w-10 h-10" />
        </Link>
        <Link to="https://www.linkedin.com/in/filipegideao/">
        <img src={LinkedinSvg} alt="linkedin" className="w-10 h-10" />
        </Link>
        <Link to="https://www.instagram.com/_feryuu/">
        <img src={InstaSvg} alt="instagram" className="w-10 h-10" />
        </Link>
        </div>
        </div>

    </div>
  )
}

export default About