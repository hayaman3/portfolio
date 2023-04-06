import React, { useEffect, useRef, useState } from 'react';
import './qualification.css';

function Qualification() {
  const visibilityRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  const animationCallback = (entries) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      animationCallback,
      options
    );
    if (visibilityRef.current)
      observer.observe(visibilityRef.current);

    return () => {
      if (visibilityRef.current)
        observer.observe(visibilityRef.current);
    };
  }, [visibilityRef, options]);

  return (
    <section className="qualification section">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My Journey</span>

      <div className="qualification-container container">
        <div
          ref={visibilityRef}
          className={
            isVisible
              ? 'qualification-data show'
              : 'qualification-data hidden'
          }
        >
          <div>
            <h3 className="qualification-title">Web Development</h3>
            <span className="qualification-subtitle">
              <a
                href="https://www.theodinproject.com/"
                className="qualification-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Odin Project
              </a>
            </span>
            <div className="qualification-data-icon">
              <i className="uil uil-data-icon-alt" />
              2022-2023
            </div>
          </div>

          <div>
            <span className="qualification-rounder" />
            <span className="qualification-line" />
          </div>
        </div>

        <div
          ref={visibilityRef}
          className={
            isVisible
              ? 'qualification-data show'
              : 'qualification-data hidden'
          }
        >
          <div />
          <div>
            <span className="qualification-rounder" />
            <span className="qualification-line" />
          </div>

          <div>
            <h3 className="qualification-title">Web Development</h3>
            <span className="qualification-subtitle">
              <a
                href="https://www.udemy.com/course/web-development-html5-css3-php-oop-and-mysql-database/"
                className="qualification-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Course link
              </a>
            </span>
            <div className="qualification-data-icon">
              <i className="uil uil-book-alt" />
              Udemy
            </div>
          </div>
        </div>

        <div
          ref={visibilityRef}
          className={
            isVisible
              ? 'qualification-data show'
              : 'qualification-data hidden'
          }
        >
          <div>
            <h3 className="qualification-title">
              Introduction to Python
            </h3>
            <span className="qualification-subtitle">
              <a
                href="https://www.facebook.com/topreviewcenter"
                className="qualification-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                TOP ECE Review Center
              </a>
            </span>
            <div className="qualification-data-icon">
              <i className="uil uil-map-pin-alt" />
              Baguio City
            </div>
          </div>

          <div>
            <span className="qualification-rounder" />
            <span className="qualification-line" />
          </div>
        </div>

        <div
          ref={visibilityRef}
          className={
            isVisible
              ? 'qualification-data show'
              : 'qualification-data hidden'
          }
        >
          <div />
          <div>
            <span className="qualification-rounder" />
            <span className="qualification-line" />
          </div>
          <div>
            <h3 className="qualification-title">
              Java Programming Language
            </h3>
            <span className="qualification-subtitle">
              <a
                href="https://informatics.edu.ph/"
                className="qualification-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Informatics
              </a>
            </span>
            <div className="qualification-data-icon">
              <i className="uil uil-map-pin-alt" />
              Baguio City
            </div>
          </div>
        </div>

        <div
          ref={visibilityRef}
          className={
            isVisible
              ? 'qualification-data show'
              : 'qualification-data hidden'
          }
        >
          <div>
            <h3 className="qualification-title">
              C Programming Language
            </h3>
            <span className="qualification-subtitle">
              <a
                href="https://informatics.edu.ph/"
                className="qualification-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Informatics
              </a>
            </span>
            <div className="qualification-data-icon">
              <i className="uil uil-map-pin-alt" />
              Baguio City
            </div>
          </div>

          <div>
            <span className="qualification-rounder" />
            <span className="qualification-line" />
          </div>
        </div>

        <div
          ref={visibilityRef}
          className={
            isVisible
              ? 'qualification-data show'
              : 'qualification-data hidden'
          }
        >
          <div />
          <div>
            <span className="qualification-rounder" />
            <span className="qualification-line" />
          </div>
          <div>
            <h3 className="qualification-title">
              Mechanical Engineering
            </h3>
            <span className="qualification-subtitle">
              <a
                href="https://www.slu.edu.ph/"
                className="qualification-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saint Louis University
              </a>
            </span>
            <div className="qualification-data-icon">
              <i className="uil uil-map-pin-alt" />
              Baguio City
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;

