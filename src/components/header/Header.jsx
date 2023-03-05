/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './header.css';

function Header() {
  // toggle menu
  const [toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">
          &lt; kevin / &gt;
        </a>
        <div className={toggle ? 'nav-menu show-menu' : 'nav-menu'}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                <i className="uil uil-estate nav-icon" />
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">
                <i className="uil uil-user nav-icon" />
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#skills" className="nav-link">
                <i className="uil uil-file-alt nav-icon" />
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                <i className="uil uil-scenery nav-icon" />
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <i className="uil uil-message nav-icon" />
                Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav-close"
            onClick={() => showMenu(!toggle)}
          />
        </div>
        <div className="nav-toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps" />
        </div>
      </nav>
    </header>
  );
}

export default Header;

