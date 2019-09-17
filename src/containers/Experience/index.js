import React from 'react';

import ExperienceSection from './ExperienceSection';
import { Element, Link } from 'react-scroll';

import "./styles.css"

function Experience(props) {



  let offset = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
  offset = 0 - parseInt(offset, 10);

  return (
    <Element name={props.name} className="experience-container section">

      <div className="experience-content">
        <h1 className="section-title">{props.title}</h1>
        {props.list.map((experience) => {
          return (
            <ExperienceSection experience={experience} />
          )
        })}
      </div>
      <div className="experience-timeline">
      <div className="experience-timeline-content">
        {props.list.map((experience) => {
          return <Link className="experience-link" activeClass="active-experience-link" spy={true} smooth={true} to={experience.name} offset={offset - (0.30 * window.innerHeight)}>{experience.dateRange}</Link>
        })}
        </div>
      </div>
    </Element>
  )
}





export default Experience;