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
                  The Odin Project
                </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt" />
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
                  Introduction to Programming Using Python
                </h3>
                <span className="qualification-subtitle">
                  TOP ECE Review Center
                </span>
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt" />
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
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt" />
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
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt" />
                  YEAR-YEAR
                </div>
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
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt" />
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
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt" />
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
                <div className="qualification-calendar">
                  <i className="uil uil-calendar-alt" />
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

