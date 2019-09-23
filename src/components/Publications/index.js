import React from 'react';
import { Element } from 'react-scroll';

import "./styles.css"

function Publications(props) {


    return (
            <Element name='publications'>
                <h2 className="section-title">PUBLICATIONS</h2>

                {props.publications.map((publication, index) => {
                    return (
                        <div key={`publications-${index}`} className="publication-content">
                            <h2 className="publication-title">{publication.title} <a className="highlighted-link" href={publication.link}>read</a></h2>
                            <p className="publication-other-info">{publication.source}. {publication.location ? `${publication.location}, ` : null}<span className="highlight">{publication.date ? publication.date : null}</span></p>
                            <p className={`publication-author`}>
                                {publication.authors.map((author, index) => {
                                    let highlightClass = '';
                                    if (author === 'Jan Mikhail') {
                                        highlightClass = 'highlight';
                                    }
                                    return <span key={`publication-author-${index}`} className={`${highlightClass}`}>{`${author}${index < publication.authors.length - 1 ? ',  ' : '  '}`}</span>
                                })}
                            </p>
                        </div>
                    );
                })}
            </Element>
    )
}

export default Publications;