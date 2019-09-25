import React from 'react';

import "./styles.css"

function Patent(props) {

    return (
        <div className="patent-content">
                            <h2 className="patent-title">{props.patent.title} <a className="highlighted-link" href={props.patent.link}>read</a></h2>
                            <p className="patent-other-info">{props.patent.source}. {props.patent.location ? `${props.patent.location}, ` : null}<span className="highlight">{props.patent.date ? props.patent.date : null}</span></p>
                            <p className={`patent-author`}>
                                {props.patent.authors.map((author, index) => {
                                    let highlightClass = '';
                                    if (author === 'Jan Mikhail') {
                                        highlightClass = 'highlight';
                                    }
                                    return <span key={`patent-author-${index}`} className={`${highlightClass}`}>{`${author}${index < props.patent.authors.length - 1 ? ',  ' : '  '}`}</span>
                                })}
                            </p>

                        </div>
    )
}

export default Patent;