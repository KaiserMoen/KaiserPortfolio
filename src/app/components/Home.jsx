'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import '../styles/Home.css';
import { motion,useInView,useAnimation } from 'framer-motion';
import  prof  from '/public/Prof_design.png';
function Home(){
    
    return(
        <div id= 'home_cont'>
            <div className='descriptions'>
                <h1>LOREMIPSUMLORE<br></br>MIPSUMLOREMIPSU<br></br>MLOREMIPSUM</h1>
                <h3>loremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum</h3>
                <p>Continue</p>
            </div>
            <div className='image_cont_prof'>
                <Image src={prof}></Image>
            </div>
            
        </div>  
    );
    
};

export default Home;