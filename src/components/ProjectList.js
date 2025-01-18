
import React from 'react';
import ProjectItem from './ProjectItem'; // Importing ProjectItem

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectItem
          key={project.id} // Using project id as key
          name={project.name}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default ProjectList;
