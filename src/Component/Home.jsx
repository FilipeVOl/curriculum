import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Divider from './Divider'
import About2 from './About2'

const Home = () => {
  return (
    <div className='h-[100vh]'>
        <Navbar />
        <About />
        <About2 />
        <Divider />
    </div>
  )
}

export default Home