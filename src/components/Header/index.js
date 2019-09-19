import React from 'react';
import { Link } from 'react-scroll';

import "./styles.css"

import CloseButton from '../../assets/images/icon_close.png';


function Header(props) {

    let [sideVisibility, setSideVisibility] = React.useState("hidden");

    let offset = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
    offset = 0 - parseInt(offset, 10);

    return (
        <div className="container">
            <div className="header max-width">
                <div className="small-header-toggle-container" onClick={() => {
                    if (sideVisibility === 'hidden') {
                        setSideVisibility('visible');
                    } else {
                        setSideVisibility('hidden');
                    }
                }}>
                    <img className="small-header-toggle" src={require("../../assets/images/icon_menu_toggle.png")} />
                </div>
                {/* <h2 className="small-header-title">Jan Mikhail</h2> */}
                <div className="header-links">
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
                </div>
            </div>

            <div className={`small-header-drawer small-header-drawer-${sideVisibility}`}>
                <img
                    src={CloseButton}
                    alt="close menu"
                    className="small-header-drawer-close"
                    onClick={() => {
                        setSideVisibility('hidden');
                    }}
                />
                <div className="small-header-links">
                    <h1 className="small-header-drawer-title">My Portfolio</h1>
                    <Link
                        className="header-link small-header-link"
                        activeClass="active-header-link"
                        spy={true} smooth={true}
                        to="skills"
                        offset={offset}
                    >
                        Skills
                    </Link>
                    <Link
                        className="header-link small-header-link"
                        activeClass="active-header-link"
                        spy={true} smooth={true}
                        to="experience"
                        offset={offset}
                    >
                        Work Experience
                    </Link>
                    <Link
                        className="header-link small-header-link"
                        activeClass="active-header-link"
                        spy={true} smooth={true}
                        to="education"
                        offset={offset}
                    >
                        Education
                    </Link>
                    <Link
                        className="header-link small-header-link"
                        activeClass="active-header-link"
                        spy={true} smooth={true}
                        to="other"
                        offset={offset}
                    >
                        Other
                    </Link>
                </div>
            </div>

        </div>
    )
}



export default Header;