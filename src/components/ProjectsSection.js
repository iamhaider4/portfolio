import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your project.',
    image: 'project1.png',
    link: 'https://your-project-link',
  },
  // Add more projects here
];

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};

export default ProjectsSection;
