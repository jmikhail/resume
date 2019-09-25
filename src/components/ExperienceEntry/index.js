import React from 'react';

//libraries
import { Element, Link } from 'react-scroll';

import "./styles.css"


function ExperienceEntry(props) {
  const { experience } = props;

  let offset = getComputedStyle(document.documentElement).getPropertyValue('--navigation-bar-height');
  offset = 0 - parseInt(offset, 10);

  return (

    <Element name={experience.name} className="experience-entry-container">
      <Link className="experience-title" activeClass="active-experience-title" spy={true} smooth={true} to={experience.name} offset={offset - (0.40 * window.innerHeight)}>{experience.title}</Link>
      {experience.subtitle ?
        <h2 className="experience-subtitle">{experience.subtitle}</h2>
        : null
      }
      <h2 className="experience-dates">{experience.dateRange}</h2>
      {experience.companyName ?
        <div className="experience-company-container">
          <img className="experience-company-logo" src={experience.companyLogo} alt="company logo" />
          <div className="experience-company-info">
            <h1 className="experience-company-name">{experience.companyName}</h1>
            <h1 className="experience-company-location">{experience.companyLocation}</h1>
          </div>
        </div>
        : null
      }
      <div className="experience-details">
        {experience.details}
      </div>
    </Element>
  )
}




export default ExperienceEntry;