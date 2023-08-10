'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaFacebook, FaGithub, FaGraduationCap  } from 'react-icons/fa';
import { AiOutlineMail,AiOutlineBarChart ,AiOutlineDesktop  } from 'react-icons/ai';
import { FiPenTool } from 'react-icons/fi';
import '../styles/About.css';
import { motion,useInView,useAnimation } from 'framer-motion';
import  deved  from '/public/prof.jpg';
import robot from '/public/robot_.png';
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
                                <h1>Hi, I am <span className='name'> KAISER</span></h1>
                                <p>A passionate computer science graduate with a drive to integrate technology into everyday life, making it more convenient and accessible for everyone. 
                            My journey in the world of technology has been fueled by the belief that innovation can significantly enhance the way we live.</p>

                                <h1>Passion and Motivation</h1>
                                <p>My motivation lies in the endless possibilities that arise when technology meets human needs. 
                                    I'm enthusiastic about creating solutions that simplify tasks, streamline processes, and foster better connections between individuals.</p>
                                <div className = 'logo_cont'>
                                    <motion.div  whileHover={{rotate:360}}><FaFacebook size={50} className='text-blue-900'/></motion.div>
                                    <motion.div whileHover={{rotate:360}}> <FaGithub  size={50} className='text-purple-900'/></motion.div>
                                    <motion.div whileHover={{rotate:360}}><AiOutlineMail size={50} className='text-red-900'/></motion.div>
                                </div>
                            </div>
                            
                        </section> 
                        <section className='expertise'>
                                <motion.h3 variants = {{
                                        hidden:{opacity:0 , x:-75},
                                        visible:{opacity:1 , x:0}
                                    }} initial = 'hidden' animate = {slideControls}>
                                        <FiPenTool size = {30}/>
                                        UX/UI design</motion.h3>
                                <motion.h3 variants = {{
                                    hidden:{opacity:0 , x:-75},
                                    visible:{opacity:1 , x:0}
                                }} initial = 'hidden' animate = {slideControls}>
                                    <AiOutlineBarChart size={30}/>
                                    Frontend Dev</motion.h3>
                                <motion.h3 variants = {{
                                    hidden:{opacity:0 , x:-75},
                                    visible:{opacity:1 , x:0}
                                }} initial = 'hidden' animate = {slideControls}>
                                    <AiOutlineDesktop size={30}/>
                                    Data Analyst</motion.h3>
                        </section>  
                    </div>
            </div>
            <div className='half_two'>
                <div>

                </div>
                <div className='robot'>
                    <Image src={robot} className='robot-image'></Image>
                </div>
                
            </div>
        </div>  
    );
};

export default About;