import React, { useEffect, useState } from 'react';
import Block from '../../replicated/block/block';
import './projects.css';
import data from '../../../data/data';


const Projects = () => {
  const [allProjects, setAllProjects ] = useState([]);

  const displayProjects = data => data
        .filter(data => data.tag === "projects")
        .map(project => <Block data={project} key={project._id} />);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const response = await data;
    setAllProjects(response);
  }

  return(
    <div className="projects-body">
      {allProjects && displayProjects(allProjects)}
    </div>
  )
}

export default Projects;