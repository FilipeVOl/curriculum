import React from 'react'
import Photo from '../assets/profi.jpg'
import GitSvg from '../assets/github.svg'
import LinkedinSvg from '../assets/linkedin.svg'
import InstaSvg from '../assets/instagram.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id="about" className='flex flex-col items-center justify-center gap-14 md:gap-30 lg:gap-72 md:flex-row lg:mx-72 mx-[10%] my-12 md:my-32'>
        <div className='w-auto flex items-center md:block flex-col'>
        <h1 className='font-bold text-lg md:text-xl'>Hi</h1>
        <h1 className="md:text-2xl text-xl font-bold">I am</h1>
        <h1 className="md:text-4xl text-2xl font-bold text-nowrap">Filipe Gideão Rodrigues</h1>
        <div className='flex flex-col items-center md:items-start'>
        <h1 className="md:text-6xl text-3xl font-bold text-purpley">Front-End</h1>
        <h1 className="text-7xl font-bold md:pl-16 text-purpley">Developer</h1>
        </div>
        </div>
        
        <div className='flex flex-col items-center gap-8 min-w-[40%]'>
        <motion.div
          className="rounded-full"
          initial={{ boxShadow: "0 0 20px rgba(68, 51, 244, 0.75)" }}
          animate={{ boxShadow: ["0 0 20px rgba(68, 51, 244, 0.75)", "0 0 100px rgba(68, 51, 244, 0.75)", "0 0 20px rgba(68, 51, 244, 0.75)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={Photo} alt="Profile" className="object-cover rounded-full w-96 h-96" />
        </motion.div>
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