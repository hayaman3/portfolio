import React from 'react';
import '../assets/CSS/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from './Form';
import Links from './Links';

// import location from '../assets/images/location.png';

function Contact() {
  return (
    <div className="contact">
      <span className="icon">
        <a href="https://www.google.com/maps/place/Baguio,+Benguet/@16.3995547,120.5537558,13z/data=!3m1!4b1!4m6!3m5!1s0x3391a16879def13f:0x8edef534be3a75c0!8m2!3d16.4023332!4d120.5960071!16zL20vMDE1bDFf">
          <FontAwesomeIcon icon="fa-solid fa-location-dot" />
        </a>
      </span>
      <h2 className="text">Contact Me</h2>
      <Form />
      <Links />
    </div>
  );
}

export default Contact;

