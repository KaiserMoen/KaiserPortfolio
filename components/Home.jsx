'use client'
import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaGithub  } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import '/styles/About.css'
import { motion } from 'framer-motion'
import  deved  from '/public/prof.jpg'
function About(){
    return(
        <div id= 'home_cont' className='min-h-screen'>
            <div className = 'half_one'>
                <div id = 'desc' className='text-center p-10 '>
                    <h2 >Unleashing <br></br>Creative <br></br>Brilliance </h2>
                    <h3 className='text-2xl py-2'>Frontend Dev</h3>
                    <p className='text-2md py-5 leading-8'>Lorem Ipsum</p>
                </div>
                
                <div className = 'text-5xl flex justify-center gap-16 p-2'>
                    <motion.div whileHover={{rotate:360}}><FaFacebook/></motion.div>
                    <motion.div whileHover={{rotate:360}}> <FaGithub/></motion.div>
                    <motion.div whileHover={{rotate:360}}><AiOutlineMail/></motion.div>
                    
                    
                    
                </div>
            </div>
            <div className = 'half_two '>
                <div className='relative mx-auto rounded-full w-80 h-80 overflow-hidden' >
                    <Image src={deved} layout='fill' objectFit='cover'></Image>
                </div>
            </div>
        </div>  
    );
    
};

export default About;