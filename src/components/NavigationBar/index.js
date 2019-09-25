import React from 'react';

//libraries
import { Link } from 'react-scroll';

//images
import CloseButton from '../../assets/images/icon_close.png';

import "./styles.css"


function NavigationBar(props) {
    let [sideVisibility, setSideVisibility] = React.useState("hidden");

    let offset = getComputedStyle(document.documentElement).getPropertyValue('--navigation-bar-height');
    offset = 0 - parseInt(offset, 10);

    return (
        <div className="container">
            <div className="navigation-bar max-width">
                <div className="small-navigation-bar-toggle-container" onClick={() => {
                    if (sideVisibility === 'hidden') {
                        setSideVisibility('visible');
                    } else {
                        setSideVisibility('hidden');
                    }
                }}>
                    <img className="small-navigation-bar-toggle" src={require("../../assets/images/icon_menu_toggle.png")} alt="side drawer toggle" />
                </div>
                <div className="navigation-bar-links">
                    <Link
                        className="navigation-bar-link"
                        activeClass="active-navigation-bar-link"
                        spy={true} smooth={true}
                        to="skills"
                        offset={offset}
                    >
                        Skills
                    </Link>
                    <Link
                        className="navigation-bar-link"
                        activeClass="active-navigation-bar-link"
                        spy={true} smooth={true}
                        to="projects"
                        offset={offset}
                    >
                        Projects
                    </Link>
                    <Link
                        className="navigation-bar-link"
                        activeClass="active-navigation-bar-link"
                        spy={true} smooth={true}
                        to="experience"
                        offset={offset}
                    >
                        Work Experience
                    </Link>
                    <Link
                        className="navigation-bar-link"
                        activeClass="active-navigation-bar-link"
                        spy={true} smooth={true}
                        to="education"
                        offset={offset}
                    >
                        Education
                    </Link>
                    <Link
                        className="navigation-bar-link"
                        activeClass="active-navigation-bar-link"
                        spy={true} smooth={true}
                        to="other"
                        offset={offset}
                    >
                        Other
                    </Link>
                </div>
            </div>

            <div className={`small-navigation-bar-drawer small-navigation-bar-drawer-${sideVisibility}`}>
                <img
                    src={CloseButton}
                    alt="close menu"
                    className="small-navigation-bar-drawer-close"
                    onClick={() => { setSideVisibility('hidden') }}
                />
                <div className="small-navigation-bar-links">
                    <h1 className="small-navigation-bar-drawer-title">My Portfolio</h1>
                    <Link
                        className="small-navigation-bar-link"
                        activeClass="active-small-navigation-bar-link"
                        spy={true} smooth={true}
                        to="skills"
                        offset={offset}
                        onClick={() => { setSideVisibility('hidden') }}
                    >
                        Skills
                    </Link>
                    <Link
                        className="small-navigation-bar-link"
                        activeClass="active-small-navigation-bar-link"
                        spy={true} smooth={true}
                        to="projects"
                        offset={offset}
                        onClick={() => { setSideVisibility('hidden') }}
                    >
                        Projects
                    </Link>
                    <Link
                        className="small-navigation-bar-link"
                        activeClass="active-small-navigation-bar-link"
                        spy={true} smooth={true}
                        to="experience"
                        offset={offset}
                        onClick={() => { setSideVisibility('hidden') }}
                    >
                        Work Experience
                    </Link>
                    <Link
                        className="small-navigation-bar-link"
                        activeClass="active-small-navigation-bar-link"
                        spy={true} smooth={true}
                        to="education"
                        offset={offset}
                        onClick={() => { setSideVisibility('hidden') }}
                    >
                        Education
                    </Link>
                    <Link
                        className="small-navigation-bar-link"
                        activeClass="active-small-navigation-bar-link"
                        spy={true} smooth={true}
                        to="other"
                        offset={offset}
                        onClick={() => { setSideVisibility('hidden') }}
                    >
                        Other
                    </Link>
                </div>
            </div>
        </div>
    )
}



export default NavigationBar;