"use client"
import {useRef} from "react"
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
        <section>
            <div className="contactContainer">
                <h2>
                    Contact Me
                </h2>
                <form ref={form} onSubmit={sendEmail}  >
                    <input type="text" placeholder="Full Name" name = "user_name" required />
                    <input type="text" placeholder="Email" name = "user_email" required />
                    <input type="text" placeholder="Subject" name = "subject" required />
                    <textarea name="message"   cols="30" rows="10"></textarea>
                    <button type ="submit">Send Message</button>
                </form>
            </div>
        </section>
    )
}