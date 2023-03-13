import React from 'react';
import './skills.css';

function Other() {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Other Languages</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i className="devicon-c-plain" />
            <div className="skills-tech">
              <h3 className="skills-name">C</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>

          <div className="skills-data">
            <i className="devicon-java-plain" />
            <div className="skills-tech">
              <h3 className="skills-name">Java</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>

          <div className="skills-data">
            <i className="devicon-python-plain" />
            <div className="skills-tech">
              <h3 className="skills-name">Python</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills-group">
          <div className="skills-data">
            <i className="devicon-nodejs-plain" />
            <div className="skills-tech">
              <h3 className="skills-name">Node.js</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>

          <div className="skills-data">
            <i className="devicon-php-plain" />
            <div className="skills-tech">
              <h3 className="skills-name">PHP</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>

          <div className="skills-data">
            <i className="devicon-cplusplus-plain" />
            <div className="skills-tech">
              <h3 className="skills-name">C++</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Other;

