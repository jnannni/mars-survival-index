import { useState } from "react";

interface Mars_Parameters {
    m_day: number;
    m_temp: number;
    m_pres: number;
    m_wind: number;
    className?: string;
    selectCard?: () => void;       
}

interface Earth_Parametres {
    e_day: number;
    e_temp: number;
    e_pres: number;
    e_wind: number;
}

export default function WeatherCard(props: Mars_Parameters) {
    const [isClicked, setIsClicked] = useState(false);           

    return (
        <div className={`card ${props.className}`} onClick={props.selectCard}>
            <div className="card-body">
                <h5 className="card-title">SOL{props.m_day}</h5>
                <h5 className="card-title"></h5>
                <span></span>            
            </div>
            <div>
                <div className="card-body">
                    <p className="card-text">Temp. {props.m_temp}</p>
                    <p className="card-text">Pres. {props.m_pres}</p>
                    <p className="card-text">Wind Speed {props.m_wind}</p>
                </div>
            </div>
        </div>
    )
}
