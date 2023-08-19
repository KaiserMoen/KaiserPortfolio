'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import { render } from 'react-dom'
import { motion } from 'framer-motion'
import '../styles/NavBarStyles.css'
import { MediaQuery } from 'react-responsive';
import Link from 'next/link'

function NavBar(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return(
      <div>
        <div className='nav_cont'>  
            <nav className="nav">
                <div className='logo'>
                    <a href="#" className="brand">KAISER</a> 
                </div>
               <ul className='nav_items'>
                 <Link href ="/dashboard" className='nav_item' >Home</Link>
                 <a href="/dashboard#about_cont" className='nav_item'>About</a>
                 <a href = "/dashboard#projectMainCont"className='nav_item' >Projects</a>
                 <li className='nav_item' >Recomendations</li>
                 <motion.span id = 'contact'  className='nav_item' whileHover={{scale:1.2}}>Let's Connect</motion.span>
               </ul>
               <span className='ham_button' onClick={toggleMenu}> {isOpen ? <FaTimes/> : <FaBars/>}</span>
            </nav>
            
                <div className={`dropdown_menu ${isOpen ? 'open':''}`}>
                    <ul className='nav_items'>
                        <Link href = "/dashboard" className='nav_item'>Home</Link>
                        <a href = "/dashboard#about_cont" className='nav_item'>About</a>
                        <a  href = "/dashboard#projectMainCont"className='nav_item'>Projects</a>
                        <li className='nav_item'>Recomendations</li>
                        <motion.span id = 'contact_dropdown'  className='nav_item' whileHover={{scale:1.2}}>Let's Connect</motion.span>
                    </ul>
                </div>
        </div>
      </div>

    );
}

export default NavBar;