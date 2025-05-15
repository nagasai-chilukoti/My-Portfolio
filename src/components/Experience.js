import React from 'react'
import { workExperiences } from '../constants/index.js'; // Ensure correct import path

const Experience = () => {
  return (
    <div className="experience-section">
    <br/>
      <h1>Experience</h1>

      <div className="experience-cards-container">
        {workExperiences.map((experience) => (
         <div className="experience-card" key={experience.id}>
  {/* Experience Icon */}
  <div className="experience-icon">
    <img src={experience.icon} alt={experience.name} />
  </div>

  {/* Experience Details */}
  <div className="experience-details">
    <div className="experience-header">
      <h3 className="experience-title">{experience.pos}</h3>
      
     <h5> <p className="experience-duration">{experience.duration}</p></h5>
    </div>
    <h5><p className="experience-pos">{experience.name}</p>
</h5>
    <div className="experience-description">
      {experience.title}
    </div>
  </div>
</div>

        ))}
      </div>
    </div>
  );
}

export default Experience;
