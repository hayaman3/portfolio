import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Kevin</h1>
        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#qualifications" className="footer-link">
              Qualifications
            </a>
          </li>
        </ul>
        <div className="footer-social">
          <a
            href="https://github.com/hayaman3"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-larry-haya-458958198/"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin" />
          </a>

          <a
            href="https://www.facebook.com/kevinlarry.haya/"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-facebook" />
          </a>
        </div>

        <span className="footer-copy">
          &#169; Kevin Larry Haya. All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;

