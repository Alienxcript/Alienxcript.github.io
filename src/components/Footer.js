import { FaHome, FaInstagram, FaBehance, FaMailBulk, FaPhone, FaTwitter, } from "react-icons/fa"
import "./Footerstyle.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-c">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }}></FaHome>
                    <p>123 Center of New Benin Road.</p>
                    <p>Nigeria</p>
                </div>
                <div className="phone">
                  <h4>
                  <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }}></FaPhone>
                  +234-806-656-5555
                  </h4>
                </div>
                <div className="email">
                  <h4>
                  <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}></FaMailBulk>
                  Novalightsilver@gmail.com
                  </h4>
                </div>
            </div>
            <div className="right">
              <h4>About the Artist</h4>
              <p>This is me Nova is a digital illustrator based in West Africa who enjoys drawing mecha, 
                futuristic, sci-fi, cyberpunk, and environmental concepts. 
                I have been creating various pieces and honing their craft to become a 
                well-established artist in their field.
              </p>
              <div className="social">
                <a href="https://www.instagram.com/novachrome_x377"><FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }}></FaInstagram></a>
                <a href="https://x.com/Novachrome_x377"><FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }}></FaTwitter></a>
                <a href="https://www.behance.net/NovaLightsilver"><FaBehance size={30} style={{ color: "#fff", marginRight: "1rem" }}></FaBehance></a>
                
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default Footer