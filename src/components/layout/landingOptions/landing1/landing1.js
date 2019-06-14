import React, { useState, useEffect } from 'react';
import Block from '../../../replicated/block/block'
import './landing1.css';
import Hero from '/Users/master/websites/jhrohman/src/images/jrLogoInv.png';
import data from '../../../../data/data';

const Landing1 = () => {
  const [topProjects, setTopProjects ] = useState([]);

  const displayProjects = data => data
        .filter(data => data.tag === "projects")
        .map(project => <Block data={project} key={project._id} />);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const response = await data;
    setTopProjects(response);
  }

  return(
    <div className="landing1-body">
      <div className="landing1-hero">
        <img src={ Hero } alt="#" className="landing1-hero-img"/>
        <div className="landing1-hero-text">
          <p className="landing1-hero-title">Joseph Rohman</p>
          <p className="landing1-hero-content">Front-End Software Engineer</p>
          <p className="landing1-hero-content">Swiss Army Knife</p>
        </div>
      </div>

      <div className="landing1-panel">
        <div className="landing1-main-left">
          <p className="landing1-panel-title">Front End Software Engineer</p>
        </div>
        <div className="landing1-panel-right">
          {topProjects && displayProjects(topProjects)}
        </div>
      </div>
    </div>
  )
}

export default Landing1;