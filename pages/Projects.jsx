'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion,useInView,useAnimation, delay } from 'framer-motion';
import '../styles/Project.css';
import inas from '/public/inashomepage.png';
import { Link } from 'react-router-dom';
function Projects(){
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
    const imageControls = useAnimation();

    useEffect(() =>{
        if(isInView){
            imageControls.start("visible");
        }
    },[isInView,imageControls])
    return(
        <motion.div id = "projectMainCont"ref = {ref}
        variants = {{
                    hidden:{opacity:0 , x:-75},
                    visible:{opacity:1 , x:0}
                    }} initial='hidden' animate = {imageControls} transition={{ duration: 0.5, delay: 0.2 }} className='project'>
            <div className='projectCont'>
                <div className="content">
                    <small>WEB PROJECT</small>
                    <h1>Ina's Transient House Website</h1>
                    <p>A simple website for a Homestay business in Baguio
                    </p>
                    {/* <Link href="/inas-transient">Visit Website</Link> */}
                </div>
                <div className = "imageProj">
                    <div>
                        <Image src={inas} className='inasImage'></Image>
                    </div>
                     
                </div>
            </div>
            <div className='projectCont left'>
                <div className = "imageProj">
                    <div>
                        <Image src={inas} className='inasImage'></Image>
                    </div>
                        
                </div>
                <div className="content">
                    <small>MOBILE APPLICATION/ MACHINE LEARNING</small>
                    <h1>Plantaea: Mobile Application for Philippine Ethnobotany</h1>
                    <p>A mobile application integrating Image processing, GIS, and Gamification
                    </p>
                </div>
            </div>

            <div className='projectCont'>
                <div className="content">
                    <small>NATURAL LANGUAGE PROCESSING</small>
                    <h1>Topic Modeling for decision making
                    insights
                    </h1>
                    <p>A simple NLP model used for decision making insights in Baguio
                    </p>
                </div>
                <div className = "imageProj">
                    <div>
                        <Image src={inas} className='inasImage'></Image>
                    </div>
                     
                </div>
            </div>
            <div className='projectCont left'>
                <div className = "imageProj">
                    <div>
                        <Image src={inas} className='inasImage'></Image>
                    </div>
                        
                </div>
                <div className="content">
                    <small>Lorem Impus</small>
                    <h1>Ina's Transient House Website</h1>
                    <p>Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem Ipusm
                    Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem Ipusm
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects;