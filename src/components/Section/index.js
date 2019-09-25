import React from 'react';
import { Element } from 'react-scroll';

import "./styles.css"

function Section(props) {

    const paddingClass = props.noPadding ? "" : "with-padding";

    return (
        <Element name={props.name} className="section-container max-width">
            <div className={`section-wrapper ${paddingClass}`}>
                {props.hideTitle ? null :
                    <h2 className="section-title">{props.title}</h2>
                }
                {props.children}
            </div>
        </Element>
    )
}

export default Section;