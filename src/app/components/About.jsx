'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaFacebook, FaGithub, FaGraduationCap  } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import '../styles/About.css';
import { motion,useInView,useAnimation } from 'framer-motion';
import  deved  from '/public/prof.jpg';
import Stats from './Stats.jsx'
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
        <div ref = {ref} id= 'about_cont'>
            <div className = 'half_one'>
                    <div id = 'desc'>
                        <section className='desc-first-half'>
                            <motion.h2 variants={{
                                hidden:{opacity: 0 , y: 75},
                                visible:{opacity: 1, y:0}
                            }} initial = 'hidden' animate = {mainControls} transition = {{duration: 0.5,delay:0.25}}>About Me</motion.h2>
                            <div className='intro'>
                                <h1>Hi I am Kaiser</h1>
                                <p>I am a passionate and driven individual specializing in
                                     UX/UI design/ frontend and data analysis.</p>
                            </div>
                            <div className='expertise'>
                                <motion.h3 variants = {{
                                        hidden:{opacity:0 , x:-75},
                                        visible:{opacity:1 , x:0}
                                    }} initial = 'hidden' animate = {slideControls}>UX/UI design</motion.h3>
                                <motion.h3 variants = {{
                                    hidden:{opacity:0 , x:-75},
                                    visible:{opacity:1 , x:0}
                                }} initial = 'hidden' animate = {slideControls}>Frontend Dev</motion.h3>
                                <motion.h3 variants = {{
                                    hidden:{opacity:0 , x:-75},
                                    visible:{opacity:1 , x:0}
                                }} initial = 'hidden' animate = {slideControls}>Data Analyst</motion.h3>
                            </div>
                            
                            <div className = 'logo_cont'>
                                <motion.div  whileHover={{rotate:360}}><FaFacebook className='text-blue-900'/></motion.div>
                                <motion.div whileHover={{rotate:360}}> <FaGithub className='text-purple-900'/></motion.div>
                                <motion.div whileHover={{rotate:360}}><AiOutlineMail className='text-red-900'/></motion.div>
                            </div>
                        </section>
                        <section className='desc-second-half'>    
                            <div>

                            </div>
                            <div>
                                
                            </div>
                            <div>
                                
                            </div>
                        </section>    
                    </div>
            </div>
            <div className='half_two'>
                {/* <Stats></Stats> */}
            </div>
        </div>  
    );
};

export default About;