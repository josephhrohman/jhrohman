import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '/Users/master/websites/jhrohman/src/images/jrLogoInv.png';
import './landing2.css';

const Landing2 = () => {

  return(
    <div className="landing-body">
      <img src={ Hero } alt="landing Picture" className="landing-hero-img"/>
      <div className="landing-hero-text">
        <Link to="/projects" className="landing-link">Projects</Link>
        <Link to="/design" className="landing-link">Design</Link>
        <Link to="/about" className="landing-link">About</Link>
        <Link to="/contact" className="landing-link">Contact</Link>
      </div>
    </div>
  )
}

export default Landing2;