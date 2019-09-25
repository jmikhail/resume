import React from 'react';

//libraries
import { Element, Link } from 'react-scroll';

//components
import ExperienceEntry from '../../components/ExperienceEntry';

import "./styles.css"

function Experience(props) {
  let offset = getComputedStyle(document.documentElement).getPropertyValue('--navigation-bar-height');
  offset = 0 - parseInt(offset, 10);

  return (
    <Element name={props.name} className="experience-container section max-width">
      <div className="experience-timeline">
        <h1 className="section-title">{props.title}</h1>
        <div className="experience-timeline-content">
          {props.list.map((experience, index) => {
            const timelineContent = props.showTitlesOnTimeline ? experience.title : experience.dateRange;
            return <Link key={`timeline-${props.name}-${index}`} className="experience-link" activeClass="active-experience-link" spy={true} smooth={true} to={experience.name} offset={offset - (0.40 * window.innerHeight)}>{timelineContent}</Link>
          })}
        </div>
      </div>

      <div className="experience-content">
        <h1 className="section-title only-small">{props.title}</h1>
        {/* <div className="filler-before"/> */}
        {props.list.map((experience, index) => {
          return (
            <ExperienceEntry key={`timeline-${props.name}-${index}`} experience={experience} />
          )
        })}
        {/* <div className="filler-after"/> */}
      </div>
    </Element>
  )
}





export default Experience;