import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'

import Project from '../routes/Project'
import About from '../routes/About'
import Contact from '../routes/Contact'


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Heroimg></Heroimg>
      <Project></Project>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Home
