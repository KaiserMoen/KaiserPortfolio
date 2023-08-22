"use client"

import {useRef} from "react"
import { motion,useInView,useAnimation, delay } from 'framer-motion';
import { FaFacebook, FaGithub, FaGraduationCap ,FaLinkedin  } from 'react-icons/fa';
import "../styles/Contact.css"
import emailjs from '@emailjs/browser';


export default function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_262kqq9', 'template_vpni8vy', form.current, 'hNJOvOfgdfiB-s8yu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return(
        <section className ="contactMainCont" id = "contactMainCont"> 
            <h1>GET IN TOUCH</h1>
            <div className = "contactInfoMainCont">
                <div className="infoContainer">
                    <h1>CONTACT INFORMATION</h1>
                    <div className="infoDetailsCont">
                        <div>
                            <h3>PHONE: +639-6161-05571</h3>
                        </div>
                        <div>
                            <h3>Email: nnhelg@gmail.com</h3>
                        </div>
                        <div className = 'logo_cont'>
                            <motion.a href = "https://www.facebook.com/Aikneom/"  target="_blank" rel="noopener noreferrer" whileHover={{rotate:360}}><FaFacebook size={50} className='text-blue-900'/></motion.a>
                            <motion.a href = "https://github.com/KaiserMoen"  target="_blank" rel="noopener noreferrer"  whileHover={{rotate:360}}> <FaGithub  size={50} className='text-purple-900'/></motion.a>
                            <motion.a href = "https://www.linkedin.com/in/nhelg-kaiser-moen-napeek-517ba0281/" target="_blank" rel="noopener noreferrer" whileHover={{rotate:360}}><FaLinkedin size={50} className='text-cyan-600'/></motion.a>
                        </div>
                    </div>
                </div>
                <div className="contactContainer">
                    <h1>Send Me an Email!</h1>
                    <form ref={form} onSubmit={sendEmail}  >
                        <input type="text" placeholder="Full Name" name = "user_name" required />
                        <input type="text" placeholder="Email" name = "user_email" required />
                        <input type="text" placeholder="Subject" name = "subject" required />
                        <textarea name="message"   cols="30" rows="10"></textarea>
                        <button type ="submit">Send Message</button>
                    </form>
                </div>
            </div>
            
        </section>
    )
}