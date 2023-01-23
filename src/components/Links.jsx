import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Links() {
  return (
    <nav className="nav-links">
      <ul>
        <li>
          <a href="/" className="website-link" id="github-link">
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
        </li>
        <li>
          <a href="/" className="website-link" id="linkedin-link">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="/" className="">
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </a>
        </li>
        <li>
          <a href="/" className="website-link" id="TOP-link">
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Links;

