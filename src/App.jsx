/* eslint-disable no-unused-vars */
import React from 'react';
import Links from './components/Links';
import GithubActivity from './components/GithubActivity';
import Contact from './components/Contact';
import location from './assets/images/location.png';

function App() {
  return (
    <div className="App">
      <div>HERE</div>
      <Links />
      <GithubActivity />
      {/* <img src={location} alt="Logo" />; */}
      <Contact />
    </div>
  );
}

export default App;

