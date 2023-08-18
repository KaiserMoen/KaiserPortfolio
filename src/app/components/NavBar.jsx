'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import { render } from 'react-dom'
import { motion } from 'framer-motion'
import '../styles/NavBarStyles.css'
import { MediaQuery } from 'react-responsive';
import { NavLink, Outlet } from 'react-router-dom';
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
                 <NavLink to="/" className='nav_item' >Home</NavLink>
                 <NavLink to="about" className='nav_item'>About</NavLink>
                 <NavLink to="project"className='nav_item' >Projects</NavLink>
                 <NavLink className='nav_item' >Recomendations</NavLink>
                 <motion.span id = 'contact'  className='nav_item' whileHover={{scale:1.2}}>Let's Connect</motion.span>
               </ul>
               <span className='ham_button' onClick={toggleMenu}> {isOpen ? <FaTimes/> : <FaBars/>}</span>
            </nav>
            
                <div className={`dropdown_menu ${isOpen ? 'open':''}`}>
                    <ul className='nav_items'>
                        <NavLink to="/" className='nav_item'>Home</NavLink>
                        <NavLink to="about" className='nav_item'>About</NavLink>
                        <NavLink to="project" className='nav_item'>Projects</NavLink>
                        <NavLink className='nav_item'>Recomendations</NavLink>
                        <motion.span id = 'contact_dropdown'  className='nav_item' whileHover={{scale:1.2}}>Let's Connect</motion.span>
                    </ul>
                </div>
        </div>
        <main>
          <Outlet/>
        </main>
      </div>

    );
}

export default NavBar;