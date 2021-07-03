import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';

import './InfoSection.scss';

function InfoSection(props) {
    const [theme, setTheme] = useState("");

    useEffect(() => {
        if(Cookies.get('custom')) {  
            setTheme("custom");
        } else {
            setTheme("dark");
        }
        return () => {
        }
    }, [])
    

    return (
        <section className={`info-content ${theme}`}>
            <h1>
                {props.title}
                <span className={`underline ${theme}`}></span>
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
