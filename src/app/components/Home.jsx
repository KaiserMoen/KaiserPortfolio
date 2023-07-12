'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaFacebook, FaGithub  } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import '../styles/About.css';
import { motion,useInView,useAnimation } from 'framer-motion';
import  deved  from '/public/prof.jpg';
function About(){
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    const mainControls = useAnimation();
    const slideControls = useAnimation();
    const profileControls = useAnimation();
    
    useEffect(()=>{
        mainControls.start("visible")
        slideControls.start("visible")
        profileControls.start("visible")
    },[isInView]);
    return(
        <div ref = {ref} id= 'home_cont'>
            <div className = 'half_one'>
                
                    <div id = 'desc'>
                        <motion.h2 variants={{
                            hidden:{opacity: 0 , y: 75},
                            visible:{opacity: 1, y:0}
                        }} initial = 'hidden' animate = {mainControls} transition = {{duration: 0.5,delay:0.25}}>Unleashing <br></br>Creative <br></br>Brilliance </motion.h2>
                        <motion.h3 variants = {{
                            hidden:{opacity:0 , x:-75},
                            visible:{opacity:1 , x:0}
                        }} initial = 'hidden' animate = {slideControls}>Frontend Dev</motion.h3>
                        <p>Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                        Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                        Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                        <div className = 'logo_cont'>
                            <motion.div  whileHover={{rotate:360}}><FaFacebook className='text-blue-900'/></motion.div>
                            <motion.div whileHover={{rotate:360}}> <FaGithub className='text-purple-900'/></motion.div>
                            <motion.div whileHover={{rotate:360}}><AiOutlineMail className='text-red-900'/></motion.div>
                        </div>
                    </div>
                    
                
                
            </div>
            <div className = 'half_two '>
                <motion.div variants={{
                    hidden: {opacity:0, x:-75},
                    visible:{opacity:1 , x:0, rotate: 360}
                }} animate = {profileControls} className='prof_image_cont' >
                    <Image src={deved} layout='fill' objectFit='cover'></Image>
                </motion.div>
            </div>
        </div>  
    );
    
};

export default About;