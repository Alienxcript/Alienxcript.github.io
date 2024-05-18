
import "./Heroimg3style.css"

import React, { Component } from 'react'

class Heroimg3 extends Component {
  render(){
    return (
      <div className="hero-imgs">
        <div className="head">
          <h1>{this.props.head}</h1>
          <p>{this.props.texts}</p>
        </div>
      </div>
    )
  }
  
}

export default Heroimg3