import "./Workcardstyle.css"
import React from 'react'
import { NavLink } from "react-router-dom"


const Workcard = (props) => {
  return (
    <div className="project-card">
            <img src= {props.imgsrc} alt="imagee"></img>
            <h2 className="project-t">
                {props.title}
            </h2>
            <div className="project-d">
                <p>{props.text}</p>
                <div className="project-btn">
                    <NavLink to="url.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
            </div>
        </div>
  )
}

export default Workcard
