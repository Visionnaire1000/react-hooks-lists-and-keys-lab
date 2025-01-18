
import React from 'react';

const ProjectItem = ({ name, description, technologies }) => {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="technology">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
