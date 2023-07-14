'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import '../styles/Home.css';
import { motion,useInView,useAnimation } from 'framer-motion';
import  prof  from '/public/prof_edited.jpg';
function Home(){
    
    return(
        <div id= 'home_cont'>
            <div className='descriptions'>
                <div className='vert'>
                    PROGRAM | DESIGN | 
                </div>
                <div>
                    <h1><span className='dev_text'>DEVELOPER</span> . DESIGNER<br></br>UX/UI . <span className='web_text'>WEBSITE</span><br></br>DEVELOPER . <span className='UX_text'>UX/UI DESIGNER</span></h1>
                    {/* <h3>loremipsumloremipsumloremipsumloremipsumloremipsum loremipsumloremipsumloremipsumloremipsumloremipsum</h3> */}
                    <p>Continue</p>
                </div>
    
                
            </div>

            <div className='image_cont_prof'>
                <Image src={prof} className='image'></Image>
            </div>
            
        </div>  
    );
    
};

export default Home;