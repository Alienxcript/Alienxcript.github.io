import "./Heroimgstyle.css";
import roglight from "../assets/roglight.jpg"
import React from 'react'
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={roglight} alt="roglight"></img>
      </div>
      <div className="content">
        <p>
            Hi,I'M AN ARTIST
        </p>
        <h1>NOVA LIGHTSILVER</h1>
        <div>
            <Link to="/Project" className="btn">Project </Link>
            <Link to="/Contact" className="btn btn-light">Contact </Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
