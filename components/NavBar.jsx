'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import { render } from 'react-dom'
import { motion } from 'framer-motion'
import '/styles/NavBarStyles.css'


function NavBar(){

const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

    return(
        <div className='nav_cont'>
            <nav className="nav">
                <div className='logo'>
                    <a href="#" className="brand">KAISER</a> 
                    <button>toggle</button>
                </div>
               <ul className='nav_items'>
                 <motion.li className='nav_item' whileHover={{scale:1.2,boxShadow:('0px 0px 10px #69fbfd')}}>Home</motion.li>
                 <motion.li className='nav_item' whileHover={{scale:1.2,boxShadow:('0px 0px 10px #69fbfd')}}>Services</motion.li>
                 <motion.li className='nav_item' whileHover={{scale:1.2,boxShadow:('0px 0px 10px #69fbfd')}}>Experience</motion.li>
                 <motion.li className='nav_item' whileHover={{scale:1.2,boxShadow:('0px 0px 10px #69fbfd')}}>Portfolio</motion.li>
                 <motion.li className='nav_item' whileHover={{scale:1.2,boxShadow:('0px 0px 10px #69fbfd')}}>Recomendations</motion.li>
                 <motion.li id = 'contact'  className='nav_item' whileHover={{scale:1.2}}>Let's Connect</motion.li>
               </ul>
               <span className='ham_button' onClick={toggleMenu}> {isOpen ? <FaTimes/> : <FaBars/>}</span>
            </nav>
            
                <div className={`dropdown_menu ${isOpen ? 'open':''}`}>
                    <ul className='nav_items'>
                        <motion.li whileHover={{scale:1.2,boxShadow:('0px 0px 10px #69fbfd')}} >Home</motion.li>
                        <motion.li whileHover={{scale:1.2,boxShadow:('0px 0px 10px #69fbfd')}} >Services</motion.li>
                        <motion.li whileHover={{scale:1.2,boxShadow:('0px 0px 10px #69fbfd')}}>Experience</motion.li>
                        <motion.li whileHover={{scale:1.2,boxShadow:('0px 0px 10px #69fbfd')}}>Portfolio</motion.li>
                        <motion.li whileHover={{scale:1.2,boxShadow:('0px 0px 10px #69fbfd')}}>Recomendations</motion.li>
                        <span id = 'contact_dropdown'  className='nav_item'>Let's Connect</span>
                    </ul>
                </div>
            
        </div>
    );
}

export default NavBar;