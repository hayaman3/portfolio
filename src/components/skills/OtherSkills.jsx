import React from 'react';
import './skills.css';

function Other() {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Other Languages</h3>
      <div className="skills-box">
        <div className="skills-data">
          <i className="devicon-c-plain" />
          <div>
            <h3 className="skill-name">C programming</h3>
            <span className="skill-level">Basic</span>
          </div>
        </div>

        <div className="skills-data">
          <i className="devicon-java-plain" />
          <div>
            <h3 className="skill-name">Java</h3>
            <span className="skill-level">Basic</span>
          </div>
        </div>

        <div className="skills-data">
          <i className="devicon-python-plain" />
          <div>
            <h3 className="skill-name">Python</h3>
            <span className="skill-level">Basic</span>
          </div>
        </div>

        <div className="skills-data">
          <i className="devicon-nodejs-plain" />
          <div>
            <h3 className="skill-name">Node.js</h3>
            <span className="skill-level">Basic</span>
          </div>
        </div>

        <div className="skills-data">
          <i className="devicon-php-plain" />
          <div>
            <h3 className="skill-name">PHP</h3>
            <span className="skill-level">Basic</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Other;

