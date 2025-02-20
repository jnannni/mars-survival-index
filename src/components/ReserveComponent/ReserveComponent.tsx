import "./reserve.css"

interface Default_Values {
    header: string,
    counter: number,
    onIncrease?: () => void,
    onDecrease?: () => void,   
}

export default function ReserveComponent(props: Default_Values) { 
    // check the element name to assign it the unit (liters for oxygen and water, celsius for temp)
    const reserveUnit = props.header === "oxygen" || props.header === "water" ? "L" : "°C";

    return (
        <div className="reserve-container">
            <div className="reserve-info">
                <h5 className="reserve-header">{props.header}</h5>
                <span className="reserve-value">{props.counter.toFixed(1)}{reserveUnit}</span>
            </div>            
            <div className="buttons-container">
                <button className="btn" onClick={props.onIncrease}><span className="material-symbols-outlined inc-icon">add</span></button>
                <button className="btn" onClick={props.onDecrease}><span className="material-symbols-outlined dcr-icon">remove</span></button>
            </div>            
        </div>
    )
}