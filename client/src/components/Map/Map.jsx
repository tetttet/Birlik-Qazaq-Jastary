import React, { useState } from 'react';
import styles from './Map.module.css';

const Map = () => {
    const [info, setInfo] = useState(null);

    const cityInfo = {
        "TR34": "Istanbul — Turkey's largest city, a vibrant hub of culture, history, and commerce, located on both Europe and Asia.",
    };

    const hideCityInfo = () => {
        setInfo(null);
    };

    const showCityInfo = (event, city) => {
        const position = {
            top: event.target.getBoundingClientRect().bottom + 10, // Position the box below the city
            left: event.target.getBoundingClientRect().left + event.target.getBoundingClientRect().width / 2
        };
        setInfo({
            cityName: city,
            cityDescription: cityInfo[city],
            position
        });
    };

    return (
        <div className={styles.mapContainer}>
            <div id="turkey-map">
                <svg baseprofile="tiny" fill="#6f9c76" height="422" stroke="#ffffff" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width=".5" version="1.2" viewbox="0 0 1000 422" width="1000"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="features">
                        <path
                            d="M163.8 57.8l0.1 0 2.2-3 1.4 1.3 7.2 4.6 10.3 4.4 14.6 7 4.7 1.1 0.2 0.1 0.1 0.1 0.2 0.2 0.3 0 0.3-0.1 0.3-0.6 0.4-0.1 1.1 0.1 1.2 0.5 0.7 0.7-0.4 1.6-0.7 1.1-0.8 1.1-0.8 0.5-0.6 0.2 0.2 0.4 0.4 0.5 0.2 0.5 0.3 0.4 0.1 0.1 0.3 0.2-0.1 0.4-0.2 0.3-0.1 0-0.2 1.2-0.3 1.2-0.5 0.9-0.5 0.8-0.4 0.3-0.8 0.3-0.4 0.3-0.4 0.6-0.1 0.3 0.1 0.3 0 0.2 0.2 0.3-0.1 0.3-0.2 0.4-0.2 0-1.1-0.1-0.4-0.3-0.2-0.1-0.3 0.2-0.4 0.6-0.2 0.1-0.5 0.1-0.9 0.6-1.9 0.4-0.4 0.2-0.3 0.2-0.2 0.3-0.3 0.2-0.5 0.1-1.2 0-0.6-0.2-0.2-0.4-0.5-0.5-1.2 0-5.7 0.7-1.4-0.6 0.4-2-0.6-0.6-0.3-0.2-0.4-0.1 0.3-1.4-0.5-1.3-1-0.8-1.1-0.3 0.2 0.9 1.1 1 0.3 1.1 0 0.6-0.1 0.9-0.3 0.9-0.6 0.6-1.3-0.2-2.5-2.5-1.2-0.7-1.6-0.3-3.3-1.2-1.6-0.2-1.6 0-0.4-0.2-0.5-0.6-0.4-0.1-1.8 0.4-0.9 0-0.3-0.2-0.5-3.5-0.7-4.8 0.7-3.8 1.4-5.2-0.5-4.2-1.3-4.5z"
                            id="TR34" name="Istanbul"
                            onMouseOver={(event) => showCityInfo(event, "TR34")}
                            onMouseOut={hideCityInfo}
                        />
                    </g>
                </svg>
                {info && (
                    <div className={styles.infoBox} style={{ top: info.position.top, left: info.position.left }}>
                        <strong>{info.cityName}</strong>
                        <p>{info.cityDescription}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Map;
