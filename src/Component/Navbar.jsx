import React from 'react'
import Curriculum from '../assets/curriculum.svg'

const Navbar = () => {
  return (
    <div className='min-h-16 w-[100vw] md:full overflow-scroll md:overflow-hidden bg-purpley grid grid-cols-6 md:grid-cols-[1fr_3fr] items-center px-2 md:px-12'>
            <img src={Curriculum} alt="curriculum" className="w-12 h-12 col-start-1 hidden md:block" />
            <div className="flex flex-row gap-8 justify-between md:justify-around">
            <h1 className="text-white space-x-2 col-start-2">Home</h1>
            <h1 className="text-white space-x-2 col-start-2 text-nowrap">About me</h1>
            <h1 className="text-white space-x-2 col-start-2">Services</h1>
            <h1 className="text-white space-x-2 col-start-2">Projects</h1>
            <h1 className="text-white space-x-2 col-start-2">Testimonials</h1>
            <h1 className="text-white space-x-2 col-start-2">Contact</h1>
            </div>
    </div>
  )
}

export default Navbar