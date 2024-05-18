import React from 'react'

import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Pricing from '../components/Pricing'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Heroimg2 heading="Projects" texts="These are some of My most recent works"></Heroimg2>
      <Pricing></Pricing>
      <Work></Work>
    </div>
  )
}

export default Project
