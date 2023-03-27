import React, { useState } from 'react';
import './qualification.css';

function Qualification() {
  const [toggleQualification, setToggle] = useState(true);
  return (
    <section className="qualification section">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My Journey</span>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <button
            type="button"
            className={
              toggleQualification
                ? 'qualification-button button-flex qualification-active'
                : 'qualification-button button-flex'
            }
            onClick={() => setToggle(true)}
          >
            <i className="uil uil-graduation-cap qualification-icon" />
            Education
          </button>

          <button
            type="button"
            className={
              !toggleQualification
                ? 'qualification-button button-flex qualification-active'
                : 'qualification-button button-flex'
            }
            onClick={() => setToggle(false)}
          >
            <i className="uil uil-briefcase-alt qualification-icon" />
            Experience
          </button>
        </div>

        <div className="qualification-sections ">
          <div
            className={
              toggleQualification
                ? 'qualification-content qualification-content-active'
                : 'qualification-content'
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">
                  Web Development
                </h3>
                <span className="qualification-subtitle">
                  <a
                    href="https://github.com/hayaman3"
                    target="_blank"
                    rel="noreferrer"
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

            <div className="qualification-data">
              <div />
              <div>
                <span className="qualification-rounder" />
                <span className="qualification-line" />
              </div>

              <div>
                <h3 className="qualification-title">
                  Web Development
                </h3>
                <span className="qualification-subtitle">
                  <a
                    href="https://www.udemy.com/course/web-development-html5-css3-php-oop-and-mysql-database/"
                    className="qualification-link"
                    target="_blank"
                    rel="noreferrer"
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

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">
                  Introduction to Programming Using Python
                </h3>

                <span className="qualification-subtitle">
                  <a
                    href="https://www.facebook.com/topreviewcenter"
                    className="qualification-link"
                    target="_blank"
                    rel="noreferrer"
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

            <div className="qualification-data">
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
                    rel="noreferrer"
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

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">
                  C Programming Language
                </h3>
                <span className="qualification-subtitle">
                  <a
                    href="https://informatics.edu.ph/"
                    className="qualification-link"
                    target="_blank"
                    rel="noreferrer"
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
          </div>

          <div className="qualification-data">
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
                  rel="noreferrer"
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

          <div
            className={
              !toggleQualification
                ? 'qualification-content qualification-content-active'
                : 'qualification-content'
            }
          >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Title</h3>
                <span className="qualification-subtitle">
                  Subtitle
                </span>
                <div className="qualification-data-icon">
                  <i className="uil uil-data-icon-alt" />
                  YEAR-YEAR
                </div>
              </div>

              <div>
                <span className="qualification-rounder" />
                <span className="qualification-line" />
              </div>
            </div>

            <div className="qualification-data">
              <div />
              <div>
                <span className="qualification-rounder" />
                <span className="qualification-line" />
              </div>
              <div>
                <h3 className="qualification-title">Title</h3>
                <span className="qualification-subtitle">
                  Subtitle
                </span>
                <div className="qualification-data-icon">
                  <i className="uil uil-data-icon-alt" />
                  YEAR-YEAR
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Title</h3>
                <span className="qualification-subtitle">
                  Subtitle
                </span>
                <div className="qualification-data-icon">
                  <i className="uil uil-data-icon-alt" />
                  YEAR-YEAR
                </div>
              </div>

              <div>
                <span className="qualification-rounder" />
                <span className="qualification-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;

