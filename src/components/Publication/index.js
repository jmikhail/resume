import React from 'react';

import "./styles.css"

function Publication(props) {

    return (
        <div className="publication-content">
            <h2 className="publication-title">{props.publication.title} <a className="highlighted-link" href={props.publication.link}>read</a></h2>
            <p className="publication-other-info">{props.publication.source}. {props.publication.location ? `${props.publication.location}, ` : null}<span className="highlight">{props.publication.date ? props.publication.date : null}</span></p>
            <p className={`publication-author`}>
                {props.publication.authors.map((author, index) => {
                    let highlightClass = '';
                    if (author === 'Jan Mikhail') {
                        highlightClass = 'highlight';
                    }
                    return <span key={`publication-author-${index}`} className={`${highlightClass}`}>{`${author}${index < props.publication.authors.length - 1 ? ',  ' : '  '}`}</span>
                })}
            </p>
        </div>

    )
}

export default Publication;