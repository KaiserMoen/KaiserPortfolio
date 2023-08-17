'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaFacebook, FaGithub, FaGraduationCap  } from 'react-icons/fa';
import { AiOutlineMail,AiOutlineBarChart ,AiOutlineDesktop  } from 'react-icons/ai';
import { FiPenTool } from 'react-icons/fi';
import '../styles/About.css';
import { motion,useInView,useAnimation, delay } from 'framer-motion';
import  deved  from '/public/prof.jpg';
import robot from '/public/robot_.png';
function About(){
    const ref = useRef(null);
    const refEx = useRef(null);
    const isInViewAbout = useInView(ref, {once:true});
    const isInViewExpertise = useInView(refEx, {once:true})
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    const profileControls = useAnimation();

    
    useEffect(()=>{
        if (isInViewAbout) {
            mainControls.start("visible");
        }
        if(isInViewExpertise){
            setProgressPercent();
            slideControls.start("visible");
        }
    },[isInViewAbout,isInViewExpertise, mainControls, slideControls]);

    function getAngle(percent){
        return  (percent / 100) * 360;
    }
    function setProgressPercent(){
        const progressValueContainer = document.querySelectorAll('.skill-info');
        progressValueContainer.forEach(container => {
            const circle = container.querySelector('.circular-progress');
            const valueContainer = container.querySelector('.progress-value')
            const percent = valueContainer.getAttribute('value');
            const angle = getAngle(percent);
            circle.style.background = `conic-gradient(#7d2ae8 ${angle}deg, #ededed 0deg)`;
            valueContainer.innerText = `${percent}%`
          });
    }
    return(
        <div  id= 'about_cont'>
            <div className = 'half_one'>
                    <div id = 'desc'>
                        <section className='desc-first-half'>
                            <div>
                            <motion.h2  ref = {ref} variants={{
                                hidden:{opacity: 0 , y: 75},
                                visible:{opacity: 1, y:0}
                            }} initial = 'hidden' animate = {mainControls}>About Me</motion.h2>
                            <div className = 'logo_cont'>
                                    <motion.div  whileHover={{rotate:360}}><FaFacebook size={50} className='text-blue-900'/></motion.div>
                                    <motion.div whileHover={{rotate:360}}> <FaGithub  size={50} className='text-purple-900'/></motion.div>
                                    <motion.div whileHover={{rotate:360}}><AiOutlineMail size={50} className='text-red-900'/></motion.div>
                                </div>
                            </div>
                           

                            <div className='intro'>
                                <h1>Hi, I am <span className='name'> KAISER</span></h1>
                                <p>A passionate computer science graduate with a drive to integrate technology into everyday life, making it more convenient and accessible for everyone. 
                            My journey in the world of technology has been fueled by the belief that innovation can significantly enhance the way we live.</p>

                                <h1>Passion and Motivation</h1>
                                <p>My motivation lies in the endless possibilities that arise when technology meets human needs. 
                                    I'm enthusiastic about creating solutions that simplify tasks, streamline processes, and foster better connections between individuals.</p>
                                
                            </div>
                            
                        </section> 
                        
                        <section ref = {refEx} className='expertise'>
                                <motion.h3  variants = {{
                                        hidden:{opacity:0 , x:-75},
                                        visible:{opacity:1 , x:0}
                                    }} initial = 'hidden' animate = {slideControls} transition={{ duration: 0.5, delay: 0.2 }}>
                                        <FiPenTool size = {30}/>
                                        UX/UI design</motion.h3>
                                <motion.h3 variants = {{
                                    hidden:{opacity:0 , x:-75},
                                    visible:{opacity:1 , x:0}
                                }} initial = 'hidden' animate = {slideControls} transition={{ duration: 0.5, delay: 0.2 }}>
                                    <AiOutlineBarChart size={30}/>
                                    Frontend Dev</motion.h3>
                                <motion.h3 variants = {{
                                    hidden:{opacity:0 , x:-75},
                                    visible:{opacity:1 , x:0}
                                }} initial = 'hidden' animate = {slideControls} transition={{ duration: 0.5, delay: 0.2 }}>
                                    <AiOutlineDesktop size={30}/>
                                    Data Analyst</motion.h3>
                        </section>  
                    </div>
            </div>
            <div className='half_two'>
                <div className='skills'>
                    <h1>SKILLS</h1>
                </div>
                <div className='skill-desc'>
                    <div id= 'personal-skill'>
                        
                        <div>
                            <h3><b>SKILLFUL IN MATHEMATICS</b></h3>
                            <p>My forte lies in swiftly comprehending intricate mathematical algorithms, 
                                showcasing my adeptness at tackling complex problem-solving tasks with ease and efficiency. 
                                </p>
                        </div>
                        <div>
                            <h3><b>TEAM PLAYER</b></h3>
                            <p> excel in engaging a diverse range of individuals, confidently 
                                leading within my expertise, while maintaining deep respect for 
                                every role and actively valuing a wide array of input.</p>
                        </div>
                        <div>
                            <h3><b>FAST AND DILIGENT LEARNER</b></h3>
                            <p>I consistently prioritize dedicated time for learning, adeptly striking a harmonious
                                 balance between mastering familiar subjects and embracing the challenges of unfamiliar territories.</p>
                        </div>
                        
                    </div>
                    <div className="skill-info">
                        <div className='circular-progress'>
                                <span className='progress-value' value = '90'> </span>
                        </div>
                        <h4>Java</h4>
                    </div>
                    <div className="skill-info">
                        <div className='circular-progress'>
                                <span className='progress-value' value = '70'> </span>
                        </div>
                        <h4>C++</h4>
                    </div>
                    <div className="skill-info">
                        <div className='circular-progress'>
                                <span className='progress-value' value = '92'> </span>
                        </div>
                        <h4>Python</h4>
                    </div>
                    <div className="skill-info">
                        <div className='circular-progress'>
                                <span className='progress-value' value = '90'> </span>
                        </div>
                        <h4>HTML & CSS </h4>
                    </div>
                    <div className="skill-info">
                        <div className='circular-progress'>
                                <span className='progress-value' value = '90'> </span>
                        </div>
                        <h4>JavaScript & React </h4>
                    </div>
                    <div className="skill-info">
                        <div className='circular-progress'>
                                <span className='progress-value' value = '85'> </span>
                        </div>
                        <h4>SQL</h4>
                    </div>
                </div>
                
            </div>
        </div>  
    );
};

export default About;