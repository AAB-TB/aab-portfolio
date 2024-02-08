import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


  const Contact = () => {
    const form = useRef();
    const [showThankYou, setShowThankYou] = useState(false);
    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
    setLoading(true);
      emailjs
        .sendForm('service_vn7zq5k', 'template_eugn7hd', form.current, {
          publicKey: 'QRuO92WYopC3pvDc4',
        })
        .then(
          () => {
            form.current.reset();
            setShowThankYou(true);
            setShowError(false);
            // Automatically hide the success message after 2 seconds
            setTimeout(() => {
              setShowThankYou(false);
            }, 1000);
          },
          (error) => {
            console.log('FAILED...', error.text);
            setShowThankYou(false);
            setShowError(true);
            // Automatically hide the error message after 2 seconds
            setTimeout(() => {
              setShowError(false);
            }, 1000);
          },
        );
    };
    
    
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h1>Contact Me</h1>
      <div className="container contact_container">
        <div className="contact_options">

          <article className="contact_option">
          <MdOutlineEmail className='contact_option_icon' />
            <h4>Email</h4>
            <h5>alvinalamgirberglund@gmail.com</h5>
            <a href="mailto:alvinalamgirberglund@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact_option">
          <IoLogoLinkedin className='contact_option_icon' />
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/alamgir-kabir-a758261b0/" target="_blank">Connect With Me</a>
          </article>

          <article className="contact_option">
          <FaSquareWhatsapp className='contact_option_icon'/>
            <h4>WhatsApp</h4>
            <h5>+46729408068</h5>
            <a href="https://api.whatsapp.com/send?phone=+46729408068" target="_blank">Text Me</a>
          </article>

        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" rows="10" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
              Send Message
          </button>

            {showThankYou && (
              <div className="success_message">
                Thank you for your message!
              </div>
            )}

            {showError && (
              <div className="error_message">
                Something went wrong. Please try again.
              </div>

            )}
           
        </form>

         

      </div>
    </section>
  )
}

export default Contact