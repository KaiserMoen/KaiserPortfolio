'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import '../styles/Home.css';
import { motion,useInView,useAnimation } from 'framer-motion';
import  prof  from '/public/prof_edited.jpg';

function Home(){
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
    const textControls = useAnimation();
    const textVariants = {hidden:{opacity: 0, x:-60},visible:{opacity: 1, x:0}}
    const textTransition = {delay: 0.5, duration:0.5}
    useEffect(()=>{
        textControls.start("visible")
    },[isInView]);
    return(
        
        <div ref = {ref} id= 'home_cont'>
            <div className='descriptions'>
                <div className='vert'>
                    | PROGRAM | DESIGN | 
                </div>
                <div>
                    <h1><motion.span 
                    variants={textVariants} initial = 'hidden' animate = {textControls} transition = {textTransition}
                    className='dev_text'>DEVELOPER</motion.span> . DESIGNER<br></br>UX/UI . 
                    <motion.span variants={textVariants} initial = 'hidden' animate = {textControls} transition = {textTransition}
                    className='web_text'>WEBSITE</motion.span><br></br>DEVELOPER .
                    <motion.span variants={textVariants} initial='hidden' animate={textControls} transition = {textTransition} 
                    className='UX_text'>UX/UI DESIGNER</motion.span></h1>
                    {/* <h3>loremipsumloremipsumloremipsumloremipsumloremipsum loremipsumloremipsumloremipsumloremipsumloremipsum</h3> */}
                    <p className='continue_button'>Continue</p>
                </div>
    
                
            </div>

            <motion.div variants = {textVariants} initial='hidden' animate ={textControls} transition={textTransition} className='image_cont_prof'>
                <Image src={prof} className='image'></Image>
            </motion.div>
            
        </div>  
    );
    
};

export default Home;