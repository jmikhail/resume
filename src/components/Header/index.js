import React from 'react';
import { Link } from 'react-scroll';

import "./styles.css"

function Header(props) {



    let offset = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
    offset = 0-parseInt(offset, 10);

    return (
        <div className="header" id="header">
            <Link
                className="header-link"
                activeClass="active-header-link"
                spy={true} smooth={true} 
                to="skills"
                offset={offset}
            >
                Skills
            </Link>
            <Link
                className="header-link"
                activeClass="active-header-link"
                spy={true} smooth={true} 
                to="experience"
                offset={offset}
            >
                Work Experience
            </Link>
            <Link
                className="header-link"
                activeClass="active-header-link"
                spy={true} smooth={true} 
                to="education"
                offset={offset}
            >
                Education
            </Link>
            <Link
                className="header-link"
                activeClass="active-header-link"
                spy={true} smooth={true} 
                to="other"
                offset={offset}
            >
                Other
            </Link>
            <Link
                className="header-link"
                activeClass="active-header-link"
                spy={true} smooth={true} 
                to="contact"
                offset={offset}
            >
                Contact
            </Link>
        </div>
    )
}



export default Header;