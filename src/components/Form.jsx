import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/CSS/form.css';
// import location from '../assets/images/location.png';

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const email = e.target[1].value;

    const regEmail =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regEmail.test(email) === false) {
      console.log('error');
      return;
    }

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
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <div className="input-information">
        <input type="text" name="user_name" id="user_name" required />
        <label htmlFor="user_name" className="label">
          Name
        </label>
      </div>
      <div className="input-information">
        <input name="user_email" id="user_email" required />
        <label htmlFor="user_email" className="label">
          Email
        </label>
      </div>
      <div className="input-information">
        <textarea name="message" id="message" required />
        <label htmlFor="message" className="label">
          Message
        </label>
      </div>
      <button type="submit" value="Submit" className="submit-button">
        <span>Send Message</span>
      </button>
    </form>
  );
}

export default Form;

