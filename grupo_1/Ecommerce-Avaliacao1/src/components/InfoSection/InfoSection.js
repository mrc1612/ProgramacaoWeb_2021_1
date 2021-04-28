import React from 'react';

import './InfoSection.scss';

function InfoSection(props) {
    return (
        <section className={props.darkTheme ? "info-content dark" : "info-content"}>
            <h1>
                {props.title}
                <span className={props.darkTheme ? "underline dark" : "underline"}></span>
            </h1>
            <h3 className={props.subtitle !== undefined ? "info-content-subtitle" : "info-content-subtitle none"}>{props.subtitle}</h3>
            <ul className={props.slide ? "info-content-data" : props.side === "left" ? "info-content-data left" : "info-content-data right"}>
                {props.data.map(data => 
                    <li>
                        {data}
                    </li>
                )}
            </ul>
        </section>
    )
}

export default InfoSection
