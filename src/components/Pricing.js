import { Link } from "react-router-dom";
import "./Pricingstyle.css";



import React from 'react'

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-c">
        <div className="card">
          <h3>- Landscape -</h3>
          <span className="bar"></span>
          <p className="Btc">$ 75</p>
          <p>- 3 days -</p>
          <p>- Featured -</p>
          <Link to="/Contact" className="btn">PURCHASE NOW</Link>
        </div>

        <div className="card">
          <h3>- Character Design -</h3>
          <span className="bar"></span>
          <p className="Btc">$ 100</p>
          <p>- 3 days -</p>
          <p>- Featured -</p>
          <Link to="/Contact" className="btn">PURCHASE NOW</Link>
        </div>

        <div className="card">
          <h3>- Banner -</h3>
          <span className="bar"></span>
          <p className="Btc">$ 150</p>
          <p>- 3 days -</p>
          <p>- Featured -</p>
          <Link to="/Contact" className="btn">PURCHASE NOW</Link>
        </div>
      </div>
    </div>
  )
}

export default Pricing
