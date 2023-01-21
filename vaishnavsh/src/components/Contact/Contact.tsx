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
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact