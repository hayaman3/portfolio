import React from 'react';
import './skills.css';

function Frontend() {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Frontend Developement</h3>
      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <i className="devicon-html5-plain" />
            <div>
              <h3 className="skills-name">HTML</h3>
            </div>
          </div>

          <div className="skills-data">
            <i className="devicon-css3-plain" />
            <div>
              <h3 className="skills-name">CSS</h3>
            </div>
          </div>

          <div className="skills-data">
            <i className="devicon-javascript-plain" />
            <div>
              <h3 className="skills-name">JavaScript</h3>
            </div>
          </div>
        </div>
        <div className="skills-group">
          <div className="skills-data">
            <i className="devicon-git-plain" />
            <div>
              <h3 className="skills-name">Git</h3>
            </div>
          </div>

          <div className="skills-data">
            <i className="devicon-react-original" />
            <div>
              <h3 className="skills-name">React</h3>
            </div>
          </div>

          <div className="skills-data">
            <i className="devicon-webpack-plain" />

            <div>
              <h3 className="skills-name">Webpack</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;

