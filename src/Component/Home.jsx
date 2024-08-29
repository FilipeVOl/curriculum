import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Divider from './Divider'
import About2 from './About2'
import Services from './Services'
import Projects from './Projects'
import Divider2 from './Divider2'
import Contact from './Contact'

const Home = () => {
  return (
    <div className='h-[100vh]'>
        <Navbar />
        <About />
        <About2 />
        <Divider />
        <Services />
        <Projects />
        <Divider2 />
        <Contact />
    </div>
  )
}

export default Home