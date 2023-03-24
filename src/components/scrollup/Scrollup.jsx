import React from 'react';
import './scrollup.css';

function Scrollup() {
  window.addEventListener('scroll', () => {
    const scrollUp = document.querySelector('.scrollup');
    if (window.scrollY >= 560) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  });
  return (
    <a href="#home" className="scrollup">
      <i className="uil uil-arrow-up scrollup-icon" />
    </a>
  );
}

export default Scrollup;

