import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', icon: 'fa fa-javascript' },
    { name: 'React', icon: 'fa fa-react' },
    { name: 'HTML & CSS', icon: 'fa fa-code' },
  ];

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      {skills.map((skill) => (
        <div key={skill.name} className="skill">
          <i className={skill.icon}></i>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
