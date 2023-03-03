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
              <a href="later">
                <i className="uil uil-estate nav__icon">Home</i>
              </a>
            </li>

            <li className="nav-item">
              <a href="#home">
                <i className="uil uil-file nav__icon" />
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#about">
                <i className="uil uil-file-alt nav__icon" />
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a href="#portfolio">
                <i className="uil uil-scenery nav__icon" />
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact">
                <i className="uil uil-message nav__icon" />
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

