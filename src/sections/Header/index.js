import React, { useRef, useEffect } from 'react';

//libraries
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import "./styles.css";


library.add(
    faGithub,
    faLinkedinIn,
    faEnvelope
);

function Header(props) {
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
        <div className="header-container">
            <div className="header-background" ref={r => { background.current = r }} />
            <div className="header-content">
                <img className="header-avatar" src={require("../../assets/images/me.jpg")} alt="my avatar" />
                <h1 className="header-title">Jan Mikhail</h1>
                <h1 className="header-subtitle">I'm a full stack developer. Take a look!</h1>
                <h1 className="header-attr">*This portfolio is a work in progress*</h1>
                <div className="header-links">
                    <a className="header-link" href="https://github.com/jmikhail">
                        <FontAwesomeIcon className="header-link-img" icon={['fab', 'github']} size="2x" />
                    </a>
                    <a className="header-link" href="http://linkedin.com/in/jan-mikhail">
                        <FontAwesomeIcon className="header-link-img" icon={['fab', 'linkedin-in']} size="2x" />
                    </a>
                    <a className="header-link" href="mailto:jpmikhail@gmail.com">
                        <FontAwesomeIcon className="header-link-img" icon={['fas', 'envelope']} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;