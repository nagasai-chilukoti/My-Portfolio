import React from "react";
import { Outlet } from "react-router-dom";
import { myProjects } from '../constants/index.js'; // Ensure correct import path

function Projects() {
  return (
    <div>
  <h1>Projects</h1>

  <div className="project-wrapper">
    <div className="project-card-container">
      {myProjects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3 className="title">{project.title}</h3>

          <div className="image-container">
            <img src={project.logo} alt={`${project.title} logo`} />
          </div>

          <div className="info">
            <p>{project.subdesc}</p>
          </div>

          <div className="card-footer">
            <div className="languages">
              {project.tags.map(tag => (
                <div className="language" key={tag.id}>
                  <img src={tag.path} alt={tag.name} title={tag.name} />
                </div>
              ))}
            </div>

            <a className="check-live" href={project.href} target="_blank" rel="noopener noreferrer">
              Check Live
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>

  <Outlet />
</div>

  );
}

export default Projects;
