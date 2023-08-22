'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import { motion } from 'framer-motion'
import '../styles/NavBarStyles.css'
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
                 <motion.a href="/dashboard#contactMainCont" id = 'contact'  className='nav_item' whileHover={{scale:1.2}}>Let's Connect</motion.a>
               </ul>
               <span className='ham_button' onClick={toggleMenu}> {isOpen ? <FaTimes/> : <FaBars/>}</span>
            </nav>
            
                <div className={`dropdown_menu ${isOpen ? 'open':''}`}>
                    <ul className='nav_items'>
                        <Link href = "/dashboard" className='nav_item'>Home</Link>
                        <a href = "/dashboard#about_cont" className='nav_item'>About</a>
                        <a  href = "/dashboard#projectMainCont"className='nav_item'>Projects</a>
                        <motion.a href="/dashboard#contactMainCont" id = 'contact_dropdown'  className='nav_item' whileHover={{scale:1.2}}>Let's Connect</motion.a>
                    </ul>
                </div>
        </div>
      </div>

    );
}

export default NavBar;