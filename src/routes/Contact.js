import Navbar from '../components/Navbar'
import Heroimg4 from '../components/Heroimg4'
import React, { useRef } from 'react';
import Forms from '../components/Forms'


const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Heroimg4 head="Contact" text="Hi there, Let's have a chat"></Heroimg4>
      <Forms></Forms>
      
    </div>
  )
}

export default Contact
