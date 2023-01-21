import React, { useRef } from 'react';
import './Contact.scss'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<any>(null);

  const sendEmail = (e:React.SyntheticEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_cg4vkyf', 'template_m6kxgu8', form.current, '7OJ48YVY6Esued1vN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='container'>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h1>Lets <span>Connect</span></h1>
        <label>Tell me about yourself!</label>
        <input type="text" name="user_name" placeholder="Your Name" className='contact-box'/>
        <input type="email" name="user_email" placeholder="Your Email" className='contact-box'/>
        <label>Drop your message here</label>
        <textarea name="message" placeholder="Your Message" className='contact-text-box'/>
        <input type="submit" value="Send" className='default-button'/>
      </form>
    </div>
  )
}

export default Contact