import React from 'react';
import './assets/CSS/app.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Activity from './components/activity/Activity';
import Portfolio from './components/portfolio/Porfolio';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Qualification />
        <Contact />
        <Activity />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;

