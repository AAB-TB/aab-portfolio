import React from 'react'
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import Icon from '../../assets/aabtb.ico'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="footerlogo-icon">
      <img src={Icon} className='aabtb_icon' alt="icon" />
      <a href="#" className="footer_logo">AAB</a>
      </div>

     
     <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonial">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
     </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com"><FaFacebookSquare /></a>
        <a href="https://www.twitter.com"><BsTwitterX /></a>
        <a href="https://www.instagram.com"><FaInstagram /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy;AAB-TB. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer