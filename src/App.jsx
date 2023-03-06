import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';

import './assets/CSS/app.css';

function App() {
  return (
    <>
      {/* <div>HERE</div> */}
      {/* <GithubActivity /> */}
      {/* <Contact /> */}
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;

