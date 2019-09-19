import React from 'react';


import "./styles.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faGithub,
    faLinkedinIn,
    faEnvelope
);

function Top(props) {

    return (
        <div className="top-container">
            <img className="top-avatar" src={require("../../assets/images/me.jpg")}  alt="my avatar"/>
            <h1 className="top-title">Jan Mikhail</h1>
            <h1 className="top-subtitle">I'm a full stack developer. Take a look!</h1>
            <h1 className="top-attr">*This portfolio is a work in progress*</h1>
            <div className="top-links">
                <a className="top-link" href="https://github.com/jmikhail">
                    <FontAwesomeIcon className="top-link-img" icon={['fab', 'github']} size="2x" />
                </a>
                <a className="top-link" href="http://linkedin.com/in/jan-mikhail">
                    <FontAwesomeIcon className="top-link-img" icon={['fab', 'linkedin-in']} size="2x" />
                </a>
                <a className="top-link" href="mailto:jpmikhail@gmail.com">
                    <FontAwesomeIcon className="top-link-img" icon={['fas', 'envelope']} size="2x" />
                </a>
            </div>
        </div>
    )
}

export default Top;