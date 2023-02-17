import React, { useRef, useState } from 'react';
import './Contact.scss'
import emailjs from '@emailjs/browser';
import Heading from '../Heading/Heading';

const Contact = () => {
  const [name,setName] = useState('')
  const [mail,setMail] = useState('')
  const [text,setText] = useState('')
  const form = useRef<any>(null);

  const sendEmail = (e:React.SyntheticEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_cg4vkyf', 'template_m6kxgu8', form.current, '7OJ48YVY6Esued1vN')
      .then((result) => {
          console.log(result.text);
          alert("Mail Sent Successfully");
          setName('')
          setMail('')
          setText('')
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong, mail not sent, Ill fix it");
      });

  };
  return (
    <div className='container' id='contact'>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <Heading header='Lets Connect' info='Drop me a message, would love to talk to you'></Heading>
        <label>Tell me about yourself!</label>
        <input type="text" name="user_name" placeholder="Your Name" className='contact-box' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" name="user_email" placeholder="Your Email" className='contact-box' value={mail} onChange={(e)=>setMail(e.target.value)}/>
        <label>Drop your message here</label>
        <textarea name="message" placeholder="Your Message" className='contact-text-box' value={text} onChange={(e)=>setText(e.target.value)}/>
        <input type="submit" value="Send" className='default-button'/>
      </form>
    </div>
  )
}

export default Contact