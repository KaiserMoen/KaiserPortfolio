'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaFacebook, FaGithub  } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import '/styles/About.css';
import { motion,useInView,useAnimation } from 'framer-motion';
import  deved  from '/public/prof.jpg';
import vec1 from '/public/vector1.png';
import vec2 from '/public/vector2.png';
import vec3 from '/public/wave.png';
function About(){
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    const mainControls = useAnimation();
    const slideControls = useAnimation();
    
    useEffect(()=>{
        mainControls.start("visible")
        slideControls.start("visible")
    },[isInView]);
    return(
        <div ref = {ref} id= 'home_cont'>
            <div className = 'half_one'>
                <div id ="half_one_cont">
                    <div id = 'desc' className='text-center p-10 '>
                        <motion.h2 variants={{
                            hidden:{opacity: 0 , y: 75},
                            visible:{opacity: 1, y:0}
                        }} initial = 'hidden' animate = {mainControls} transition = {{duration: 0.5,delay:0.25}}>Unleashing <br></br>Creative <br></br>Brilliance </motion.h2>
                        <motion.h3 variants = {{
                            hidden:{opacity:0 , x:-75},
                            visible:{opacity:1 , x:0}
                        }} initial = 'hidden' animate = {slideControls} className='text-2xl text-white py-2'>Frontend Dev</motion.h3>
                        <p className='text-2md p-10 text-white leading-8'>Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                        Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                        Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                    </div>
                    <div className = 'text-5xl flex justify-center gap-16 p-2'>
                        <motion.div  whileHover={{rotate:360}}><FaFacebook className='text-blue-900'/></motion.div>
                        <motion.div whileHover={{rotate:360}}> <FaGithub className='text-purple-900'/></motion.div>
                        <motion.div whileHover={{rotate:360}}><AiOutlineMail className='text-red-900'/></motion.div>
                    </div>
                </div>
                
            </div>
            <div className = 'half_two '>
                <div className='relative mx-auto rounded-full w-80 h-80 overflow-hidden ' >
                    <Image src={deved} layout='fill' objectFit='cover'></Image>
                </div>
            </div>
        </div>  
    );
    
};

export default About;