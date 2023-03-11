import React from 'react';
import './skills.css';

function Frontend() {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Frontend Developer</h3>
      <div className="skills-box">
        <div className="skills-data">
          <i className="devicon-html5-plain" />
          <div>
            <h3 className="skill-name">HTML</h3>
          </div>
        </div>

        <div className="skills-data">
          <i className="devicon-css3-plain" />
          <div>
            <h3 className="skill-name">CSS</h3>
          </div>
        </div>

        <div className="skills-data">
          <i className="devicon-javascript-plain" />
          <div>
            <h3 className="skill-name">JavaScript</h3>
          </div>
        </div>

        <div className="skills-data">
          <i className="devicon-git-plain" />
          <div>
            <h3 className="skill-name">Git</h3>
          </div>
        </div>

        <div className="skills-data">
          <i className="devicon-react-original" />
          <div>
            <h3 className="skill-name">React</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;

