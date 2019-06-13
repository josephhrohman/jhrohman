import React from 'react';
import Hero from '/Users/master/websites/jhrohman/src/images/workshop.png';
import code1 from '/Users/master/websites/jhrohman/src/images/toolBeltCode1.png';
import './about.css';

const About = () => {
  return(
    <div className="about-body">
      <div className="about-hero">
        <p className="about-hero-text">
          Joseph Rohman <br/>
          Front-End Software Engineer <br/>
          Swiss Army Knife
          </p>
        <img src={Hero} alt="About Me Picture" className="about-hero-img"/>
      </div>

      <div className="about-panel">
        <div className="about-main-left">
          <p className="about-panel-title">Front End Software Engineer</p>
          <p className="about-panel-content">Example of my work</p>
        </div>
        <div className="about-panel-right">
          <img src={code1} alt="About Me Picture" className="about-project-1"/>
        </div>
      </div>

      <div className="about-panel">
        <div className="about-panel-left">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis est ab, obcaecati vitae voluptates libero inventore omnis distinctio nulla aperiam voluptatibus alias similique, cupiditate aliquid laudantium dolorem vel necessitatibus. Molestias.</p>
        </div>
        <div className="about-panel-right">
          <img src="#" alt="About Me Picture"/>
        </div>
      </div>

      <div className="about-panel">
        <div className="about-panel-left">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis est ab, obcaecati vitae voluptates libero inventore omnis distinctio nulla aperiam voluptatibus alias similique, cupiditate aliquid laudantium dolorem vel necessitatibus. Molestias.</p>
        </div>
        <div className="about-panel-right">
          <img src="#" alt="About Me Picture"/>
        </div>
      </div>

    </div>
  )
}

export default About;