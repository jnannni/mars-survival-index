import { useState } from "react";
import "./weatherCard.css";

interface MarsParameters {
    m_day: number;
    m_temp: number;
    m_pres: number;
    m_wind: number;
    className?: string;
    selectCard?: () => void;       
}

// a weather card container that displays mars weather from nasa api base
export default function WeatherCard(props: MarsParameters) {
    const [isClicked, setIsClicked] = useState(false);           

    return (
        <div className={`card ${props.className}`} onClick={props.selectCard}>
            <div className="card-body">
                <h4 className="card-title">SOL{props.m_day}</h4>
                <h5 className="card-title"></h5>
                <span></span>            
            </div>
            <div>
                <div className="card-body">
                    <p className="card-text">Temperature <span>{props.m_temp}°C</span></p>
                    <p className="card-text">Pressure <span>{props.m_pres}Pa</span></p>
                    <p className="card-text">Wind Speed <span>{props.m_wind}m/s</span></p>
                </div>
            </div>
        </div>
    )
}
