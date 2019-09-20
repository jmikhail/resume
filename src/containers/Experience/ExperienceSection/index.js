import React from 'react';

//libraries
import { Element, Link } from 'react-scroll';

import "./styles.css"


function ExperienceSection(props) {
  const { experience } = props;

  let offset = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
  offset = 0 - parseInt(offset, 10);


  return (
    <Element name={experience.name} className="experience-section-container" style={{ backgroundColor: experience.backgroundColor }}>
      <Link className="experience-title" activeClass="active-experience-title" spy={true} smooth={true} to={experience.name} offset={offset - (0.30 * window.innerHeight)}>{experience.title}</Link>
      {experience.subtitle ? 
        <h2 className="experience-subtitle">{experience.subtitle}</h2>
        :
        null
      }
      <h2 className="experience-dates">{experience.dateRange}</h2>
      <div className="experience-company-container">
        <img className="experience-company-logo" src={experience.companyLogo} alt="company logo"/>
        <div className="experience-company-info">
        <h1 className="experience-company-name">{experience.companyName}</h1>
        <h1 className="experience-company-location">{experience.companyLocation}</h1>
        </div>
      </div>
      {experience.details}
    </Element>
  )
}




export default ExperienceSection;