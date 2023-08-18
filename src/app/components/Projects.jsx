import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion,useInView,useAnimation, delay } from 'framer-motion';
import '../styles/Project.css';
import inas from '/public/inashomepage.png';
function Projects(){

    return(
        <div className='project'>
            <div className='projectCont'>
                <div className="content">
                    <small>Lorem Impus</small>
                    <h1>Ina's Transient House Website</h1>
                    <p>Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem Ipusm
                    Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem Ipusm
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

            <div className='projectCont'>
                <div className="content">
                    <small>Lorem Impus</small>
                    <h1>Ina's Transient House Website</h1>
                    <p>Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem Ipusm
                    Lorem Ipusm Lorem Ipusm Lorem Ipusm Lorem Ipusm
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
        </div>
    )
}

export default Projects;