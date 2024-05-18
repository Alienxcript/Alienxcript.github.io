import { Link } from "react-router-dom"
import "./Aboutcontentstyle.css"
import heat from "../assets/ro-mob.jpg"
import mob from "../assets/heatblast.jpg"

import React from 'react'

const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a digital illustrator based in West Africa who enjoys drawing mecha, futuristic, sci-fi, cyberpunk, and environmental concepts.</p>
        <Link to="/Contact"><button className="btn">Contact
        </button></Link>
        
      </div>

      <div className="right">
        <div className="img-con">
            <div className="img-stack top">
                <img  src={mob} className="img" alt="true" id="blast"></img>
            </div>

            <div className="img-stack bottom">
                <img  src={heat} className="img" alt="true"></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutcontent
