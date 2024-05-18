
import "./Heroimg4style.css"

import React, { Component } from 'react'

class Heroimg4 extends Component {
  render(){
    return (
      <div className="hero-imgss">
        <div className="heads">
          <h1>{this.props.head}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
  
}

export default Heroimg4