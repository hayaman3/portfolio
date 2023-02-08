import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8wn3nnc',
        'template_dh0pal8',
        form.current,
        'YG_98rb0QwdZEF2UD'
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
    <form ref={form} onSubmit={sendEmail}>
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

