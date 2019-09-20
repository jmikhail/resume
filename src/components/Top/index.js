import React, { useRef, useEffect } from 'react';


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

// import * as THREE from './three.js'
// import BIRDS from './vanta/effects/vanta.birds.js'

library.add(
    faGithub,
    faLinkedinIn,
    faEnvelope
);

function Top(props) {
    let background = useRef(null);
    let effect = useRef(null);

    useEffect(() => {
        effect.current = window.VANTA.NET({
            el: background.current,
            color: 0xffffff,
            backgroundColor: 0x151e3c,
            points: 11.00,
            spacing: 14.00
        })
        return () => {
            if (effect.current) this.effect.current.destroy()
        }
    }, []);

    return (
        <div className="top-container">
            <div className="top-background" ref={r => { background.current = r }} />
            <div className="top-content">
                <img className="top-avatar" src={require("../../assets/images/me.jpg")} alt="my avatar" />
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
        </div>
    )
}

export default Top;