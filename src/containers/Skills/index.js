import React from 'react';
import { Element } from 'react-scroll';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

import "./styles.css"


const MyTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.87)',
      color: 'rgba(255, 255, 255, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 15,
      textAlign: 'center'
    },
  }))(Tooltip);

function Skills(props) {


    let skills = [
        {
            category: "Languages",
            class: "languages",
            skills_list: [
                { name: "Java", info: "6+ years" },
                { name: "Objective-C", info: "6+ years" },
                { name: "C", info: "4 years" },
                { name: "C++", info: "4 years" },
                { name: "JavaScript", info: "2+ years" },
                { name: "HTML", info: "2+ years" },
                { name: "CSS", info: "2+ years" },
                { name: "Ruby", info: "2+ years" },
                { name: "Python", info: "1 year" },
                { name: "SQL", info: "beginner" },
            ]
        },
        {
            category: "Frameworks/Libraries",
            class: "frameworks",
            skills_list: [
                { name: "CocoaTouch", info: "6 years" },
                { name: "ReactJS", info: "2+ years" },
                { name: "Redux", info: "2+ years" },
                { name: "React Native", info: "2+ years, currently have 4 apps on iOS and Android app stores" },
                { name: "Rails", info: "2+ years" },
            ]
        },
        {
            category: "Operating Systems",
            class: 'operating-systems',
            skills_list: [
                { name: "MacOS" },
                { name: "Ubuntu" },
            ]
        },
        {
            category: "Tools/IDEs",
            class: "tools",
            skills_list: [
                { name: "XCode" },
                { name: "Android Studio" },
                { name: "Eclipse" },
                { name: "Visual Studio Code" },
            ]
        },
        {
            category: "Other",
            class: "other",
            skills_list: [
                { name: "Stripe Payments", info: "Implemented recurring subscription payments" },
            ]
        },
        {
            category: "Concepts",
            class: "concepts",
            skills_list: [
                { name: "OO design" },
                { name: "OSI network model" },
                { name: "Test driven development" },
                { name: "Agile development" },
                { name: "Git" },
            ]
        },

    ]


    return (
        <Element name='skills' className="skills-container section max-width">
            <h1 className="section-title">SKILLS</h1>

            <div className="skills-categories-list">
                {skills.map(skillCategory => {
                    return (
                        <div className="skills-category-container">
                            <div className="skills-category-title-container">
                                <h1 className="skills-category-title">{skillCategory.category}</h1>
                            </div>
                            <div className="skills-list">
                                {skillCategory.skills_list.map(skill => {
                                    return (
                                        <MyTooltip title={skill.info ? skill.info : ""}>
                                            <h1 className={`skill ${skillCategory.class.toLowerCase()}`}>{skill.name}</h1>
                                        </MyTooltip>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

        </Element>
    )
}

export default Skills;