import React from 'react';
import './projects.css';
import weatherShort from './images/weather-short.png';

function Projects() {
  return (
    <section className="portfolio section" id="projects">
      <h2 className="section-title">Portfolio</h2>
      <div>
        <div className="portfolio-card">
          <img
            src={weatherShort}
            alt="Weather-short"
            className="portfolio-image-short"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;

