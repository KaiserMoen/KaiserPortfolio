'use client'
import React, { useEffect, useRef ,useState} from 'react';
import Image from 'next/image';
import { motion,useInView,useAnimation, delay } from 'framer-motion';
import '../styles/Project.css';
import inas from '/public/inashomepage.png';
import plantaea from '/public/PlantaeaMain.png';
import topicMod from '/public/topicModeling.png';
import grade from '/public/grade.webp';
import  Link  from 'next/link';
function Projects(){
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true});
    const imageControls = useAnimation();
    const [projectName, sProjectName] = useState("");
    useEffect(() =>{
        if(isInView){
            imageControls.start("visible");
        }

    },[isInView,imageControls])
    return(
        
        <div id = "projectMainCont">
        
        <div className='projectName'>

            <h1>CHECK OUT MY PROJECTS</h1>
            <div>
                <p>I've been actively involved in a diverse range of projects spanning web development, machine learning, and mobile app development, showcasing my proficiency in a variety of programming languages and technologies. </p>
            </div>
        </div>
        <motion.div ref = {ref}
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
                    <Link className='projLink' href="/dashboard/ProjectInfo/InasTransientProj" value = "inaProj">Learn More</Link>
                </div>
                <div className = "imageProj">
                    <Image src={inas} alt="" className='inasImage'></Image>
                </div>
            </div>
            <div className='projectCont left'>
                <div className = "imageProj">
                    <Image src={plantaea} alt="" className='inasImage'></Image>
                </div>
                <div className="content">
                    <small>MOBILE APPLICATION/ MACHINE LEARNING</small>
                    <h1>Plantaea: Mobile Application for Philippine Ethnobotany</h1>
                    <p>A mobile application integrating Image processing, GIS, and Gamification
                    </p>
                    <Link className='projLink' href="/dashboard/ProjectInfo/Plantaea" value = "plantaea">Learn More</Link>
                </div>
            </div>
            <div className='projectCont left'>
                <div className = "imageProj">
                    <div>
                        <Image src={grade} alt="" className='inasImage'></Image>
                    </div>
                        
                </div>
                <div className="content">
                    <small>Machine Learning</small>
                    <h1>Predicting College Students Optimal Course Load to Achieve Higher Academic Grades</h1>
                    <p>Machine Learning Algorithm to help students
                    </p>
                    <Link className='projLink' href="/dashboard/ProjectInfo/GradePred" value = "plantaea">Learn More</Link>
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
                    <Link className='projLink' href="/dashboard/ProjectInfo/TopicCast" value = "plantaea">Learn More</Link>
                </div>
                <div className = "imageProj">
                    <div>
                        <Image src={topicMod} alt="" className='inasImage'></Image>
                    </div>
                     
                </div>
            </div>
            
        </motion.div>
        </div>
    )
}

export default Projects;