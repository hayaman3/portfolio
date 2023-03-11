import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Other from './OtherSkills';

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Level</span>

      <div className="skills-container container grid">
        <Frontend />
        <Other />
      </div>
    </section>
  );
}

export default Skills;

