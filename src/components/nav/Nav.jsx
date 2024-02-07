import React from 'react'
import './Nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GiBlackBook } from "react-icons/gi";
import { RiServiceFill } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><IoHomeOutline /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><GiBlackBook /></a>
      <a href="#service" onClick={()=> setActiveNav('#service')}className={activeNav === '#service' ? 'active' : ''}><RiServiceFill /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  );
};



export default Nav