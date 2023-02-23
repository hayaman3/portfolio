import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/CSS/contact.css';
// import location from '../assets/images/location.png';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EmailJS_Service,
        process.env.REACT_APP_EmailJS_Template,
        form.current,
        process.env.REACT_APP_EmailJS_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact">
      <label htmlFor="user_name">Name</label>
      <input type="text" name="user_name" id="user_name" />
      <label htmlFor="user_email">Email</label>
      <input type="email" name="user_email" id="user_email" />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Contact;

