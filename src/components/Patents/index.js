import React from 'react';
import { Element } from 'react-scroll';

import "./styles.css"

function Patents(props) {


    return (
        
            <Element name='patents'>
                <h2 className="section-title">PATENTS</h2>
                {props.patents.map((patent, index) => {
                    return (
                        <div key={`patents-${index}`} className="patent-content">
                            <h2 className="patent-title">{patent.title} <a className="highlighted-link" href={patent.link}>read</a></h2>
                            <p className="patent-other-info">{patent.source}. {patent.location ? `${patent.location}, ` : null}<span className="highlight">{patent.date ? patent.date : null}</span></p>
                            <p className={`patent-author`}>
                                {patent.authors.map((author, index) => {
                                    let highlightClass = '';
                                    if (author === 'Jan Mikhail') {
                                        highlightClass = 'highlight';
                                    }
                                    return <span key={`patent-author-${index}`} className={`${highlightClass}`}>{`${author}${index < patent.authors.length - 1 ? ',  ' : '  '}`}</span>
                                })}
                            </p>

                        </div>
                    );
                })}
            </Element>
    )
}

export default Patents;