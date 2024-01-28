import React from 'react';
import '../components/css_files/Projects.css';

const Projects = () => {

  return (
    <div className="projects">
      <div className="full-width-card">
        <div className="card-text">
          <h1 className="card-header">Title</h1>
          <p className="card-paragraph">Description</p>
          <a className="btn" href="#"><button>Visit Project</button></a>
        </div>
        <div className="card-image"></div>
      </div>
    </div>
  );
}

export default Projects;
