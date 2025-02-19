import "./weatherCard.css";

interface MarsParameters {
    mDay: number;
    mTemp: number;
    mPres: number;
    mWind: number;
    className?: string;
    selectCard?: () => void;       
}

export default function WeatherCard(props: MarsParameters) {           

    return (
        <div className={`card ${props.className}`} onClick={props.selectCard}>
            <div className="card-body">
                <h4 className="card-title">SOL{props.mDay}</h4>
                <h5 className="card-title"></h5>
                <span></span>            
            </div>
            <div>
                <div className="card-body">
                    <p className="card-text">Temperature <span>{props.mTemp}°C</span></p>
                    <p className="card-text">Pressure <span>{props.mPres}Pa</span></p>
                    <p className="card-text">Wind Speed <span>{props.mWind}m/s</span></p>
                </div>
            </div>
        </div>
    )
}
