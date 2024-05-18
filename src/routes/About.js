import React from 'react'

import Navbar from '../components/Navbar'

import Heroimg3 from '../components/Heroimg3'
import Aboutcontent from '../components/Aboutcontent'

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Heroimg3 head="About" text="Want to know more?, click on the links before for my social handles"></Heroimg3>
      <Aboutcontent></Aboutcontent>

    </div>
  )
}

export default About
